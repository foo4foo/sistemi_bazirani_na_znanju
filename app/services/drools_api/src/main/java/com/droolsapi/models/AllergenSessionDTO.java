package com.droolsapi.models;

import java.util.List;
import java.util.ArrayList;

public class AllergenSessionDTO {
	public List<Medicine> medicines;
	public List<String> allergens;
	
	public AllergenSessionDTO() {
		this.medicines = new ArrayList<>();
		this.allergens = new ArrayList<>();
	}
}
