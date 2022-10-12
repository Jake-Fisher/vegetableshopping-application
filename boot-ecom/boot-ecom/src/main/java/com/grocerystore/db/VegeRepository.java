package com.grocerystore.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocerystore.model.Vege;

public interface VegeRepository extends JpaRepository<Vege, Long> {
}