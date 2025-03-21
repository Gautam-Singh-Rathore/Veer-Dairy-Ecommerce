package com.veer_dairy.Backend.repository;

import com.veer_dairy.Backend.entity.Customer;
import com.veer_dairy.Backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepo extends JpaRepository<Order , Long> {

    Optional<List<Order>> findByCustomer(Customer customer);
}
