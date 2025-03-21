package com.veer_dairy.Backend.repository;

import com.veer_dairy.Backend.entity.Customer;
import com.veer_dairy.Backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepo extends JpaRepository<Customer , Long> {

    Optional<Customer> findByUser(UserEntity user);
}
