package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.NpoDetails;
import com.service.NpoDetailsService;


@RequestMapping("/npodetails")
@RestController
public class NpoDetailsController {
	@Autowired
	private NpoDetailsService userRegisterService;
	@GetMapping("/getnpodetails")
	public List<NpoDetails> getUserRegister(){
		return userRegisterService.getUserRegister();
	}
	
	@PostMapping("/postnpodetails")
	public void postUserRegister(@RequestBody NpoDetails ure) {
		userRegisterService.postUserRegister(ure);
	}
	
	

}
