package com.veer_dairy.Backend.dto;

import java.util.List;

public class OrderRequestDTO {
    private Long customerId;
    private Double total;
    private String address;
    private String mobile;
    private List<OrderItemDto> items;

    // Constructor

    public OrderRequestDTO() {
    }

    public OrderRequestDTO(Long customerId, Double total, String address, List<OrderItemDto> items , String mobile) {
        this.customerId = customerId;
        this.total = total;
        this.address = address;
        this.mobile = mobile;
        this.items = items;
    }

    // Getters and Setters

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<OrderItemDto> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDto> items) {
        this.items = items;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
