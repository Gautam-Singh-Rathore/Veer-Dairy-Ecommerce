package com.veer_dairy.Backend.repository;

import com.veer_dairy.Backend.entity.Admin;
import com.veer_dairy.Backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<Admin , Long> {

    Optional<Admin> findByUser(UserEntity user);
}
