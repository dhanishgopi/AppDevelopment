package com.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Donardetails;
import com.repository.DonardetailsRepository;


@Service
public class DonardetailsService {

	@Autowired
	private DonardetailsRepository donarRegisterRepository;
	public List<Donardetails> getUserRegister(){
		return donarRegisterRepository.findAll();
	}
	public Optional<Donardetails> getUserRegisterbyId(int id)
	{
		return donarRegisterRepository.findById((long) id);
	}
	public void postUserRegister(Donardetails ure) {
		donarRegisterRepository.save(ure);
	}
	public Donardetails putUserRegister(Donardetails ure) {
		return donarRegisterRepository.save(ure);
	}
	public void deleteUserRegister(int id) {
		donarRegisterRepository.deleteById((long) id);
	}
}