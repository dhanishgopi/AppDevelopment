package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.NpoDetails;
import com.repository.NpoDetailsRepository;


@Service
public class NpoDetailsService {

	@Autowired
	private NpoDetailsRepository userRegisterRepository;
	public List<NpoDetails> getUserRegister(){
		return userRegisterRepository.findAll();
	}
	public Optional<NpoDetails> getUserRegisterbyId(int id)
	{
		return userRegisterRepository.findById((long) id);
	}
	public void postUserRegister(NpoDetails ure) {
		userRegisterRepository.save(ure);
	}
	public NpoDetails putUserRegister(NpoDetails ure) {
		return userRegisterRepository.save(ure);
	}
	public void deleteUserRegister(int id) {
		userRegisterRepository.deleteById((long) id);
	}
}