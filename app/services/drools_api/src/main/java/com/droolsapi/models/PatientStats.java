package com.droolsapi.models;

public class PatientStats {
	public IntesiveCareStats stats;
	public Patient patient;
	
	public PatientStats() {
		this.stats = new IntesiveCareStats();
		this.patient = new Patient();
	}

	@Override
	public String toString() {
		return "PatientStats [intesiveCareStats=" + stats + ", patient=" + patient + "]";
	}

	public IntesiveCareStats getStats() {
		return stats;
	}

	public void setStats(IntesiveCareStats stats) {
		this.stats = stats;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
}
