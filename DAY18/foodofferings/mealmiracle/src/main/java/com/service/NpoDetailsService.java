package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.NpoDetails;
import com.repository.NpoDetailsRepository;


@Service
public class NpoDetailsService {

    @Autowired
    private NpoDetailsRepository registrationRepository;

    public NpoDetails saveRegistration(NpoDetails registration) {
        return registrationRepository.save(registration);
    }
}
