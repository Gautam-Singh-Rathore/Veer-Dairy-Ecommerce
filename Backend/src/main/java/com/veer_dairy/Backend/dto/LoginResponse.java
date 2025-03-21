package com.veer_dairy.Backend.dto;

import com.veer_dairy.Backend.entity.Role;


public class LoginResponse {

    private Long uid;
    private String email;
    private Role role;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;

    // Constructors
    public LoginResponse() {
    }

    public LoginResponse(Long uid, String email, Role role, String firstName, String lastName, String address , String phone) {
        this.uid = uid;
        this.email = email;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }

    // Getters and Setters


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
