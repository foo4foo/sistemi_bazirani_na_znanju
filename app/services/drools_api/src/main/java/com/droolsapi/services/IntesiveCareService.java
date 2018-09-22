package com.droolsapi.services;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.droolsapi.models.MonitoringResult;
import com.droolsapi.models.PatientStats;
import com.google.gson.Gson;

@Service
public class IntesiveCareService {
	private final KieContainer kieContainer;
	
	@Autowired
	private Gson gson;
	
	@Autowired
	public IntesiveCareService(KieContainer kieContainer) {
		this.kieContainer = kieContainer;
	}
	
	public String checkPatientStats(String payload) {
		PatientStats patientStats = new PatientStats();
		
		patientStats = (PatientStats) gson.fromJson(payload, patientStats.getClass());
		
		KieSession kieSession = kieContainer.newKieSession("intesiveCareSession");
		
		MonitoringResult monitoringResult = new MonitoringResult();
		
		kieSession.setGlobal("monitoringResult", monitoringResult);
		
		kieSession.insert(patientStats);
		kieSession.insert(monitoringResult);
		kieSession.fireAllRules();
		
		kieSession.dispose();
		
		return gson.toJson(monitoringResult);
	}
}
