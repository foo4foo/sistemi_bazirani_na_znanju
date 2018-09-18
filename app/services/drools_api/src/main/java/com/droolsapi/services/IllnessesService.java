package com.droolsapi.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.droolsapi.models.DiagnosisRaw;
import com.google.gson.Gson;

@Service
public class IllnessesService {

	private final KieContainer kieContainer;

	@Autowired
	private Gson gson;

	@Autowired
	public IllnessesService(KieContainer kieContainer) {
		this.kieContainer = kieContainer;
	}

	@SuppressWarnings("unchecked")
	public String matchIllnesses(String req) {
		Map<String, ArrayList<String>> symptomsMap = new HashMap<>();
		
		symptomsMap = (Map<String, ArrayList<String>>) gson.fromJson(req, symptomsMap.getClass());

		KieSession kieSession = kieContainer.newKieSession("illnessesSession");
		
		DiagnosisRaw diagnosisRaw = new DiagnosisRaw(symptomsMap.get("symptoms"));
		
		kieSession.insert(diagnosisRaw);
		kieSession.fireAllRules();
		kieSession.dispose();
		
		return gson.toJson(diagnosisRaw.illnesses);
	}
}
