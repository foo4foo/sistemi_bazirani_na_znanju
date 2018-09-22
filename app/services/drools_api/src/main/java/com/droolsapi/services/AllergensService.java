package com.droolsapi.services;

import java.util.HashSet;
import java.util.Set;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.droolsapi.models.AllergenSessionDTO;
import com.droolsapi.models.Medicine;
import com.google.gson.Gson;

@Service
public class AllergensService {
	private final KieContainer kieContainer;

	@Autowired
	private Gson gson;

	@Autowired
	public AllergensService(KieContainer kieContainer) {
		this.kieContainer = kieContainer;
	}
	
	public String matchAllergens(String payload) {
		AllergenSessionDTO allergenSessionDTO = new AllergenSessionDTO();
		allergenSessionDTO = (AllergenSessionDTO) gson.fromJson(payload, allergenSessionDTO.getClass());
		
		KieSession kieSession = kieContainer.newKieSession("allergensSession");
		
		Set<String> allergenMedicines = new HashSet<>();

		kieSession.insert(allergenMedicines);
		
		for (Medicine medicine : allergenSessionDTO.medicines) {
			kieSession.insert(medicine);
			
			allergenSessionDTO.allergens.forEach(allergen -> {
				kieSession.insert(allergen);
				kieSession.fireAllRules();
			});
		}
		
		kieSession.dispose();
		
		return gson.toJson(allergenMedicines);
	}
}
