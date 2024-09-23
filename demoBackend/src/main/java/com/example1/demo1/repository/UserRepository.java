package com.example1.demo1.repository;

import com.example1.demo1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository< User,Long> {

}
