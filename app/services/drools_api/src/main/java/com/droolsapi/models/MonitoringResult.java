package com.droolsapi.models;

public class MonitoringResult {
	public boolean oxygenProblems;
	public boolean rapidHeartRate;
	public boolean dialysisNeeded;
	
	public MonitoringResult() {
		this.oxygenProblems = false;
		this.rapidHeartRate = false;
		this.dialysisNeeded = false;
	}
}
