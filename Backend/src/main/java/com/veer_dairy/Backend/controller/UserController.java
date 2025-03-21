package com.veer_dairy.Backend.controller;

import com.veer_dairy.Backend.dto.LoginRequest;
import com.veer_dairy.Backend.dto.LoginResponse;
import com.veer_dairy.Backend.dto.SignupRequest;
import com.veer_dairy.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request){
        try {
            boolean result = userService.signup(request);
            if (result==true){
                return ResponseEntity.status(HttpStatus.CREATED).body("User registered");
            }else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not registered");
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong..."+e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        try {
            LoginResponse response = userService.login(request);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }
}
