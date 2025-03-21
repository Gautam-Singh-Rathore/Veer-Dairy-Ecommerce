package com.veer_dairy.Backend.service;

import com.veer_dairy.Backend.dto.LoginRequest;
import com.veer_dairy.Backend.dto.LoginResponse;
import com.veer_dairy.Backend.dto.SignupRequest;
import com.veer_dairy.Backend.entity.Admin;
import com.veer_dairy.Backend.entity.Customer;
import com.veer_dairy.Backend.entity.Role;
import com.veer_dairy.Backend.entity.UserEntity;
import com.veer_dairy.Backend.repository.AdminRepo;
import com.veer_dairy.Backend.repository.CustomerRepo;
import com.veer_dairy.Backend.repository.UserRepo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private AdminRepo adminRepo;

    public boolean signup(SignupRequest request){
        try {
            UserEntity newUser = new UserEntity(request.getEmail(), request.getPassword(), request.getRole());
            UserEntity savedUser = userRepo.save(newUser);
            if(savedUser.getRole().equals(Role.CUSTOMER)){// Register a new customer
                Customer newCustomer = new Customer(request.getFirstName() , request.getLastName() , request.getPhone(), request.getAddress(), savedUser);
                Customer savedCustomer = customerRepo.save(newCustomer);
                return true;
            }else{ // Register a new admin
                Admin newAdmin = new Admin(request.getFirstName(), request.getLastName(), request.getPhone(),savedUser , request.getAddress());
                Admin savedAdmin = adminRepo.save(newAdmin);
                return true;
            }
        }catch (DataIntegrityViolationException e){
            throw new RuntimeException("Error registering the user");
        }
    }

    public LoginResponse login(LoginRequest request) {

            UserEntity existingUser = userRepo.findByEmail(request.getEmail())
                    .orElseThrow(()-> new RuntimeException("User does not exist"));
            if(existingUser.getPassword().equals(request.getPassword())){ // Credentials are correct
                LoginResponse response ;
                if (existingUser.getRole()==Role.CUSTOMER){ // Customer role
                    Customer existingCustomer = customerRepo.findByUser(existingUser)
                            .orElseThrow(()-> new RuntimeException("Customer does not exist"));
                    response = new LoginResponse(existingCustomer.getId(), existingUser.getEmail(), existingUser.getRole() , existingCustomer.getFirstName(), existingCustomer.getLastName(), existingCustomer.getAddress() , existingCustomer.getPhone());
                }else{ // Admin role
                    Admin existingAdmin = adminRepo.findByUser(existingUser)
                            .orElseThrow(()-> new RuntimeException("Admin not found"));
                    response = new LoginResponse(existingAdmin.getId(), existingUser.getEmail(), existingUser.getRole() , existingAdmin.getFirstName(), existingAdmin.getLastName(), existingAdmin.getAddress() , existingAdmin.getPhone());
                }
                return response;
            }else{ // Credentials are not correct
                throw new RuntimeException("Wrong Password");
            }
    }
}
