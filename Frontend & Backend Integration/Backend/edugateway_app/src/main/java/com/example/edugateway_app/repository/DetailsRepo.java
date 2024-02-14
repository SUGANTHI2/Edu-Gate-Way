package com.example.edugateway_app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// import java.util.Optional;

import com.example.edugateway_app.entity.Details;
@Repository
public interface DetailsRepo extends JpaRepository<Details,Long>{
    // List<UserDetails> getAllUsers();

    // Optional<UserDetails> getUserById(Long userId);

    // UserDetails createUser(UserDetails userDetails);

    // UserDetails updateUser(Long userId, UserDetails userDetails);

    // void deleteUser(Long userId);
}
