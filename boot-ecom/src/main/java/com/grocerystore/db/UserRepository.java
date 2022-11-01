package com.grocerystore.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocerystore.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}