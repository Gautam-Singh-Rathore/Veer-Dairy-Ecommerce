package com.veer_dairy.Backend.dto;

public class OrderItemResponseDTO {
    private Long productId;
    private String productName;
    private Integer quantity;
    private Double priceAtPurchase;

    public OrderItemResponseDTO(Long productId, String productName, Integer quantity, Double priceAtPurchase) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.priceAtPurchase = priceAtPurchase;
    }

    // Getters
    public Long getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Double getPriceAtPurchase() {
        return priceAtPurchase;
    }
}
