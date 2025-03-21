package com.veer_dairy.Backend.dto;

public class OrderItemDto {

    private Long productId;
    private Long orderId;
    private Integer quantity;

    // Constructors
    public OrderItemDto() {
    }

    public OrderItemDto(Long productId, Long orderId, Integer quantity) {
        this.productId = productId;
        this.orderId = orderId;
        this.quantity = quantity;
    }

    // Getters and Setters


    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
