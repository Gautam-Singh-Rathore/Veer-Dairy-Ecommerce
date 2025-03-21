package com.veer_dairy.Backend.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime orderDate;
    private Double totalPrice;
    // Order relationship with user
    @ManyToOne
    @JoinColumn(name = "customer_id" , nullable = false)
    private Customer customer;

    // Order relationship with order-items
    @OneToMany(mappedBy = "order" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items;

    @PrePersist
    protected  void onCreate(){
        this.orderDate = LocalDateTime.now();
    }

    private String deliveryAddress;
    private String customerMobile;
    private Status status;

    // Constructors
    public Order() {
    }

    public Order(LocalDateTime orderDate, String deliveryAddress, String customerMobile, Status status, Customer customer, Double totalPrice) {
        this.orderDate = orderDate;
        this.deliveryAddress = deliveryAddress;
        this.customerMobile = customerMobile;
        this.status = status;
        this.customer = customer;
        this.totalPrice = totalPrice;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getCustomerMobile() {
        return customerMobile;
    }

    public void setCustomerMobile(String customerMobile) {
        this.customerMobile = customerMobile;
    }
}
