package com.droolsapi.models;

public class IllnessMatch {
	public Illness illness;
	public double match;
	
	public IllnessMatch(Illness illness) {
		this.illness = illness;
		this.match = 0.0;
	}
	
	public void addSymptomWeight(double symptomWeight) {
		this.match += symptomWeight;
	}
}
