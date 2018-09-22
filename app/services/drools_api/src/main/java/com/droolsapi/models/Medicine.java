package com.droolsapi.models;

import java.util.ArrayList;
import java.util.List;

public class Medicine {
	public String name;
	public List<String> ingredients;
	
	public Medicine() {
		this.ingredients = new ArrayList<>();
	}

	@Override
	public String toString() {
		return "Medicine [name=" + name + ", ingredients=" + ingredients + "]";
	}
}
