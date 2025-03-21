package com.veer_dairy.Backend.repository;

import com.veer_dairy.Backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<Category , Long> {

    Optional<Category> findByName(String name);
}
