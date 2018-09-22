package com.droolsapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.droolsapi.services.IllnessesService;

@RestController
public class IllnessesController {
	
	@Autowired
	private IllnessesService illnessesService;

	@RequestMapping(value = "/match_illnesses", method = RequestMethod.POST)
	public String index(@RequestBody String payload) {
		return illnessesService.matchIllnesses(payload);
	}

}
