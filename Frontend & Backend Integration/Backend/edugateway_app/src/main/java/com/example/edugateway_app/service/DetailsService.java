package com.example.edugateway_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.edugateway_app.entity.Details;
import com.example.edugateway_app.repository.DetailsRepo;

@Service
public class DetailsService {
    @Autowired
    private DetailsRepo userDetailsRepository;

   
    public List<Details> getAllUsers() {
        return userDetailsRepository.findAll();
    }

    
    public Optional<Details> getUserById(Long userId) {
        return userDetailsRepository.findById(userId);
    }

  
    public Details createUser(Details userDetails) {
         userDetailsRepository.save(userDetails);
         return userDetails;
    }


    public Details updateUser(Long userId, Details userDetails) {
        if (userDetailsRepository.existsById(userId)) {
            userDetails.setUserId(userId);
            return userDetailsRepository.save(userDetails);
        } else {
            return null;
        }
    }

   
    public boolean deleteUser(Long userId) {
        userDetailsRepository.deleteById(userId);
        return true;
    }
}
