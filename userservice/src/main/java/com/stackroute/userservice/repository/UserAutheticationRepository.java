package com.stackroute.userservice.repository;



import com.stackroute.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface UserAutheticationRepository extends JpaRepository<User, String> {



     @Query("Select u FROM User u where u.userName=?1 and u.userPassword=?2") 
    User findByUserIdAndUserPassword(String userId,String userPassword);
}
