package com.veer_dairy.Backend.repository;

import com.veer_dairy.Backend.entity.Admin;
import com.veer_dairy.Backend.entity.Category;
import com.veer_dairy.Backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Product , Long> {
    Optional<List<Product>> findByCategory(Category category);

    Optional<List<Product>> findByAdmin(Admin admin);
}
