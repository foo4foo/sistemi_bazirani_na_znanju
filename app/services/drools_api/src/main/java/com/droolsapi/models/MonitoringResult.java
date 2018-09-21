package com.droolsapi.models;

public class MonitoringResult {
	public boolean oxygenProblems;
	public boolean rapidHeartBeat;
	public boolean dialysisNeeded;
	
	public MonitoringResult() {
		this.oxygenProblems = false;
		this.rapidHeartBeat = false;
		this.dialysisNeeded = false;
	}
}
