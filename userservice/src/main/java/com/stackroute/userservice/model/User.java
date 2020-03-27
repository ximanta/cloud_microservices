package com.stackroute.userservice.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 * The class "User" will be acting as the data model for the User Table in the database. 
 * Please note that this class is annotated with @Entity annotation. 
 * Hibernate will scan all package for any Java objects annotated with the @Entity annotation. 
 * If it finds any, then it will begin the process of looking through that particular 
 * Java object to recreate it as a table in your database.
 */
@Entity
@Table(name = "user")
public class User {

    

    public User(){
        
    }
    public User(String userName, String userPassword, String firstName, String lastName, String userRole, Date userAddedDate) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userAddedDate = userAddedDate;
    }

    
    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

   

    public Date getUserAddedDate() {
        return userAddedDate;
    }

    public void setUserAddedDate(Date userAddedDate) {
        this.userAddedDate = userAddedDate;
    }

   

     @Id
     @Column(name = "user_name")
    private String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
      @Column(name = "user_password")
    private String userPassword;
     @Column(name = "first_name")  
    private String firstName;
      @Column(name = "last_name")
    private String lastName;
    
       @Column(name = "created_at")
    private Date userAddedDate;

    @Override
    public String toString() {
        return "User{" + "userName=" + userName + ", userPassword=" + userPassword + ", firstName=" + firstName + ", lastName=" + lastName + ", userAddedDate=" + userAddedDate + '}';
    }
   
	
   

    


}
