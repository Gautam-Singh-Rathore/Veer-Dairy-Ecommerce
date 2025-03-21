package com.veer_dairy.Backend.controller;

import com.veer_dairy.Backend.dto.OrderRequestDTO;
import com.veer_dairy.Backend.entity.Order;
import com.veer_dairy.Backend.entity.Status;
import com.veer_dairy.Backend.repository.OrderRepo;
import com.veer_dairy.Backend.service.OrderService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderRepo orderRepo;

    @PostMapping("/place-new")
    public ResponseEntity<?> placeOrder(@RequestBody OrderRequestDTO requestDTO){
        try {
            orderService.placeNewOrder(requestDTO);
            return ResponseEntity.ok("Order placed");
        }catch (Exception e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Order not placed :"+e.getMessage());
        }

    }

    @GetMapping("/customer/get/{id}")
    public ResponseEntity<?> getOrdersByCustomerId(@PathVariable Long id){
        try {
            var data = orderService.findOrdersById(id);
            return ResponseEntity.ok(data);
        }catch (Exception e){
            System.out.println("Error : "+ e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error finding the orders");
        }
    }

    @GetMapping("/all/pending")
    public ResponseEntity<?> allPendingOrders(){
        try {
            var data = orderService.findAllPendingOrders();
            return ResponseEntity.ok(data);
        }catch (Exception e){
            System.out.println("Error : "+ e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error finding the orders");
        }
    }

    @GetMapping("/all/other")
    public ResponseEntity<?> allNonPendingOrders(){
        try {
            var data = orderService.findAllOrders();
            return ResponseEntity.ok(data);
        }catch (Exception e){
            System.out.println("Error : "+ e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error finding the orders");
        }
    }

    @GetMapping("/accept/{orderId}")
    @Transactional
    public ResponseEntity<String> acceptOrder(@PathVariable Long orderId) {
        Order order = orderRepo.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("Order not available"));

        order.setStatus(Status.ACCEPTED);
        orderRepo.save(order);

        return ResponseEntity.ok("Order accepted successfully.");
    }

}
