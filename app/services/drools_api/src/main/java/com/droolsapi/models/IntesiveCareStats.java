package com.droolsapi.models;

import java.util.ArrayList;

public class IntesiveCareStats {
	public float oxygenLevel;
	public int heartBeats;
	public float urinAmount;
	public ArrayList<String> illnesses;
	
	public IntesiveCareStats() {
		this.illnesses = new ArrayList<>();
	}

	@Override
	public String toString() {
		return "IntesiveCareStats [oxygenLevel=" + oxygenLevel + ", heartBeats=" + heartBeats + ", urinAmount="
				+ urinAmount + ", illnesses=" + illnesses + "]";
	}

	public float getOxygenLevel() {
		return oxygenLevel;
	}

	public void setOxygenLevel(float oxygenLevel) {
		this.oxygenLevel = oxygenLevel;
	}

	public int getHeartBeats() {
		return heartBeats;
	}

	public void setHeartBeats(int heartBeats) {
		this.heartBeats = heartBeats;
	}

	public float getUrinAmount() {
		return urinAmount;
	}

	public void setUrinAmount(float urinAmount) {
		this.urinAmount = urinAmount;
	}

	public ArrayList<String> getIllnesses() {
		return illnesses;
	}

	public void setIllnesses(ArrayList<String> illnesses) {
		this.illnesses = illnesses;
	}
}
