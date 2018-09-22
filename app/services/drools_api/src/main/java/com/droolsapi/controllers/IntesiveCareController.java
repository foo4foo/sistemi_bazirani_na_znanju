package com.droolsapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.droolsapi.services.IntesiveCareService;

@RestController
public class IntesiveCareController {
	
	@Autowired
	private IntesiveCareService intesiveCareService;
	
	@RequestMapping(value = "/check_patient_stats", method = RequestMethod.POST)
	public String index(@RequestBody String payload) {
		return intesiveCareService.checkPatientStats(payload);
	}
}
