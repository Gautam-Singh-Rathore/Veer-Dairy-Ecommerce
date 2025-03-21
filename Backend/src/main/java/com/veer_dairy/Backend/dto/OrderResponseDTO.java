package com.veer_dairy.Backend.dto;

import com.veer_dairy.Backend.entity.OrderItem;
import com.veer_dairy.Backend.entity.Status;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class OrderResponseDTO {

    private Long id;
    private LocalDateTime orderDate;
    private Double totalPrice;
    private String deliveryAddress;
    private String customerMobile;
    private Status status;
    private Long customerId;
    private List<OrderItemResponseDTO> items;

    // Constructor
    public OrderResponseDTO(Long id, LocalDateTime orderDate, Double totalPrice, String deliveryAddress,
                            String customerMobile, Status status, Long customerId) {
        this.id = id;
        this.orderDate = orderDate;
        this.totalPrice = totalPrice;
        this.deliveryAddress = deliveryAddress;
        this.customerMobile = customerMobile;
        this.status = status;
        this.customerId = customerId;
    }



    // Getters
    public Long getId() {
        return id;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public String getCustomerMobile() {
        return customerMobile;
    }

    public Status getStatus() {
        return status;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public List<OrderItemResponseDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemResponseDTO> items) {
        this.items = items;
    }
}
