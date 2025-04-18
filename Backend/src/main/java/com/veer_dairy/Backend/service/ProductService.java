package com.veer_dairy.Backend.service;

import com.veer_dairy.Backend.dto.AddProductDTO;
import com.veer_dairy.Backend.dto.ProductResponseDTO;
import com.veer_dairy.Backend.entity.Admin;
import com.veer_dairy.Backend.entity.Category;
import com.veer_dairy.Backend.entity.Product;
import com.veer_dairy.Backend.repository.AdminRepo;
import com.veer_dairy.Backend.repository.CategoryRepo;
import com.veer_dairy.Backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private AdminRepo adminRepo;
    @Autowired
    private CategoryRepo categoryRepo;

    // Add a new product
    public void addProduct(AddProductDTO addProductDTO){
        Admin getAdmin = adminRepo.findById(addProductDTO.getAdminId())
                .orElseThrow(()-> new RuntimeException("Admin not found"));
        Category getCategory = categoryRepo.findById(addProductDTO.getCategoryId())
                .orElseThrow(()-> new RuntimeException("Category not found"));

        Product newProduct = new Product(addProductDTO.getName(), addProductDTO.getDescription(), addProductDTO.getPrice(), getAdmin , getCategory , addProductDTO.getUrl());
        try {
            Product addedProduct = productRepo.save(newProduct);
        }catch (DataIntegrityViolationException e){
            throw new RuntimeException("Product not added : "+e.getMessage());
        }


    }

    // Get all products
    public List<ProductResponseDTO> getAllProducts(){
        List<ProductResponseDTO> response = new ArrayList<>();
        List<Product> all = productRepo.findAll();
        for(Product product : all){
            Category cat = categoryRepo.findById(product.getCategory().getId())
                    .orElseThrow(()-> new RuntimeException("Category not found"));
            ProductResponseDTO newDto = new ProductResponseDTO(product.getId(), product.getName(), product.getDescription(), product.getPrice(), cat.getName() , product.getImageUrl());
            response.add(newDto);
        }
        return response;
    }

    // Get products by category
    public List<ProductResponseDTO> getProductsByCategory(String name){
        List<ProductResponseDTO> response = new ArrayList<>();
        Category cat = categoryRepo.findByName(name)
                .orElseThrow(()-> new RuntimeException("Category Not Found"));

        List<Product> all = productRepo.findByCategory(cat)
                .orElseThrow(()-> new RuntimeException("Products Not Found"));

        for(Product product : all){
            ProductResponseDTO newDto = new ProductResponseDTO(product.getId(), product.getName(), product.getDescription(), product.getPrice(),name , product.getImageUrl());
            response.add(newDto);
        }
        return response;
    }

    // Get a product by id
    public ProductResponseDTO getById(Long id){
        Product product = productRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Product not found"));
        return new ProductResponseDTO(product.getId(), product.getName(), product.getDescription(), product.getPrice() , product.getCategory().getName() , product.getImageUrl());

    }

    // Get products by admin id
    public List<ProductResponseDTO> getProductsByAdminId(Long id){
        List<ProductResponseDTO> response = new ArrayList<>();
        Admin admin = adminRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Admin not found"));

        List<Product> all = productRepo.findByAdmin(admin)
                .orElseThrow(()-> new RuntimeException("Products Not Found"));

        for(Product product : all){
            ProductResponseDTO newDto = new ProductResponseDTO(product.getId(), product.getName(), product.getDescription(), product.getPrice(),product.getCategory().getName() , product.getImageUrl());
            response.add(newDto);
        }
        return response;

    }

    public void deleteProduct(Long id){
        productRepo.deleteById(id);
    }
}
