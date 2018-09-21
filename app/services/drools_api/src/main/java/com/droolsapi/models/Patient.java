package com.droolsapi.models;

public class Patient {
	public Long id;
	public String firstName;
	public String lastName;

	@Override
	public String toString() {
		return "Patient [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}
}
