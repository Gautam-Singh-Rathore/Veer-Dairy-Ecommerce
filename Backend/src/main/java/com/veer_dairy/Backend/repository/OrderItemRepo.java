package com.veer_dairy.Backend.repository;

import com.veer_dairy.Backend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepo extends JpaRepository<OrderItem , Long> {
}
