package com.droolsapi.models;

import java.util.ArrayList;

public class DiagnosisRaw {
	public ArrayList<String> symptoms;
	public ArrayList<IllnessMatch> illnesses;
	
	public DiagnosisRaw(ArrayList<String> symptoms) {
		this.symptoms = new ArrayList<>();
		this.illnesses = new ArrayList<>();
		this.fillSymptoms(symptoms);
	}
	
	public void addIllness(String illnessName, double symptomWeight) {
		IllnessMatch illness = illnesses.stream().filter(e -> e.illness.name.equals(illnessName)).findFirst().orElse(null);
		
		if (illness == null) {
			IllnessMatch illnessMatch = new IllnessMatch(new Illness(illnessName));
			illnessMatch.addSymptomWeight(symptomWeight);
			this.illnesses.add(illnessMatch);
		} else {
			illness.addSymptomWeight(symptomWeight);
		}
	}
	
	private void fillSymptoms(ArrayList<String> symptoms) {
		symptoms.forEach(symptomName -> this.symptoms.add(symptomName));
	}
}
