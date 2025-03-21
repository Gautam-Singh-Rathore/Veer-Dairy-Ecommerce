package com.veer_dairy.Backend.controller;

import com.veer_dairy.Backend.dto.AddProductDTO;
import com.veer_dairy.Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestBody AddProductDTO productDTO){
        try {
            productService.addProduct(productDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Product added");
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product not added : "+e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProducts(){
        try {
            var data = productService.getAllProducts();
            return ResponseEntity.status(HttpStatus.OK).body(data);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Could not find products");

        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id){
        try {
            var response = productService.getById(id);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Could not get the product");
        }
    }

    @GetMapping("/category/{name}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable String name){
        try {
            var data = productService.getProductsByCategory(name);
            return ResponseEntity.status(HttpStatus.OK).body(data);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Products not found");
        }
    }

    @GetMapping("/admin/{id}")
    public ResponseEntity<?> getProductsByAdmin(@PathVariable Long id){
        try {
            var data = productService.getProductsByAdminId(id);
            return ResponseEntity.status(HttpStatus.OK).body(data);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Products not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok("Deleted");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product Not Deleted");
        }

    }

}
