package com.veer_dairy.Backend.service;

import com.veer_dairy.Backend.dto.OrderItemDto;
import com.veer_dairy.Backend.dto.OrderItemResponseDTO;
import com.veer_dairy.Backend.dto.OrderRequestDTO;
import com.veer_dairy.Backend.dto.OrderResponseDTO;
import com.veer_dairy.Backend.entity.*;
import com.veer_dairy.Backend.repository.CustomerRepo;
import com.veer_dairy.Backend.repository.OrderItemRepo;
import com.veer_dairy.Backend.repository.OrderRepo;
import com.veer_dairy.Backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private OrderItemRepo orderItemRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ProductRepo productRepo;

    public void placeNewOrder(OrderRequestDTO requestDTO){
        Customer customer = customerRepo.findById(requestDTO.getCustomerId())
                .orElseThrow(()-> new RuntimeException("Customer not found"));

        Order newOrder = new Order(LocalDateTime.now() , requestDTO.getAddress(), requestDTO.getMobile(), Status.PENDING , customer , requestDTO.getTotal());

        Order addedOrder = orderRepo.save(newOrder);
        for(OrderItemDto item : requestDTO.getItems()){
            Product product = productRepo.findById(item.getProductId())
                    .orElseThrow(()-> new RuntimeException("Product not found"));
            OrderItem newItem = new OrderItem(addedOrder , product , item.getQuantity(), product.getPrice());

            orderItemRepo.save(newItem);
        }

        return;
    }

    public List<OrderResponseDTO> findOrdersById(Long id){
        Customer customer = customerRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Customer not found"));
        List<Order> list = orderRepo.findByCustomer(customer)
                .orElseThrow(()-> new RuntimeException("Orders not found"));
        List<OrderResponseDTO> response = new ArrayList<>();
        for (Order order : list){
            OrderResponseDTO newOrder = new OrderResponseDTO(order.getId(), order.getOrderDate() , order.getTotalPrice() , order.getDeliveryAddress() , order.getCustomerMobile() , order.getStatus() , order.getCustomer().getId());
            newOrder.setItems(new ArrayList<>());
            for(OrderItem item : order.getItems()){
                OrderItemResponseDTO newItem = new OrderItemResponseDTO(item.getProduct().getId(), item.getProduct().getName() , item.getQuantity(), item.getPriceAtPurchase());
                newOrder.getItems().add(newItem);
            }
            response.add(newOrder);
        }

        return response;
    }

    // Get all pending orders
    public List<OrderResponseDTO> findAllPendingOrders(){
        List<Order> list = orderRepo.findAll();
        List<OrderResponseDTO> response = new ArrayList<>();
        for (Order order : list){
            if(order.getStatus()==Status.PENDING){
                OrderResponseDTO newOrder = new OrderResponseDTO(order.getId(), order.getOrderDate() , order.getTotalPrice() , order.getDeliveryAddress() , order.getCustomerMobile() , order.getStatus() , order.getCustomer().getId());
                newOrder.setItems(new ArrayList<>());
                for(OrderItem item : order.getItems()){
                    OrderItemResponseDTO newItem = new OrderItemResponseDTO(item.getProduct().getId(), item.getProduct().getName() , item.getQuantity(), item.getPriceAtPurchase());
                    newOrder.getItems().add(newItem);
                }
                response.add(newOrder);
            }

        }

        return response;
    }

    // Get all other orders
    public List<OrderResponseDTO> findAllOrders(){
        List<Order> list = orderRepo.findAll();
        List<OrderResponseDTO> response = new ArrayList<>();
        for (Order order : list){
            if(order.getStatus()!=Status.PENDING){
                OrderResponseDTO newOrder = new OrderResponseDTO(order.getId(), order.getOrderDate() , order.getTotalPrice() , order.getDeliveryAddress() , order.getCustomerMobile() , order.getStatus() , order.getCustomer().getId());
                newOrder.setItems(new ArrayList<>());
                for(OrderItem item : order.getItems()){
                    OrderItemResponseDTO newItem = new OrderItemResponseDTO(item.getProduct().getId(), item.getProduct().getName() , item.getQuantity(), item.getPriceAtPurchase());
                    newOrder.getItems().add(newItem);
                }
                response.add(newOrder);
            }

        }

        return response;
    }

}
