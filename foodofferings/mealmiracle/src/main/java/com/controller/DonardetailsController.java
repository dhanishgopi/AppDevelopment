package com.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Donardetails;
import com.service.DonardetailsService;

@CrossOrigin
@RequestMapping("/Donardetails")
@RestController
public class DonardetailsController {
	@Autowired
	private DonardetailsService userRegisterService;
	@GetMapping("/getDonardetails")
	public List<Donardetails> getUserRegister(){
		return userRegisterService.getUserRegister();
	}
	
	@PostMapping("/postDonardetails")
	public void postUserRegister(@RequestBody Donardetails ure) {
		userRegisterService.postUserRegister(ure);
	}
}
	


