package com.droolsapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.droolsapi.services.AllergensService;

@RestController
public class AllergensController {
	
	@Autowired
	private AllergensService allergensService;

	@RequestMapping(value = "/match_allergens", method = RequestMethod.POST)
	public String index(@RequestBody String payload) {
		return allergensService.matchAllergens(payload);
	}
}
