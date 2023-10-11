package com.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.NpoDetails;
import com.service.NpoDetailsService;

@CrossOrigin(origins = "http://localhost:3000")@RestController
@RequestMapping("/api/registration")
public class NpoDetailsController {

    @Autowired
    private NpoDetailsService registrationService;

    @PostMapping("/register")
    public NpoDetails register(@RequestBody NpoDetails registration) {
        return registrationService.saveRegistration(registration);
    }
}
