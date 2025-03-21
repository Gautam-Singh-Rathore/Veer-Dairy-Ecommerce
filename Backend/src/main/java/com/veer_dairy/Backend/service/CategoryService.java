package com.veer_dairy.Backend.service;

import com.veer_dairy.Backend.dto.CategoryDTO;
import com.veer_dairy.Backend.entity.Category;
import com.veer_dairy.Backend.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepo repo;

    public List<CategoryDTO> getAll(){
        try {
            List<Category> list = repo.findAll();
            List<CategoryDTO> ans = new ArrayList<>();
            for(Category c : list){
                ans.add(new CategoryDTO(c.getId() , c.getName()));
            }
            return ans;
        }catch (DataIntegrityViolationException e){
            throw new RuntimeException("Categories not found");
        }

    }
}
