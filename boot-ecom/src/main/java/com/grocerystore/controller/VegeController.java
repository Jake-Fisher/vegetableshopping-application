package com.grocerystore.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.grocerystore.db.VegeRepository;
import com.grocerystore.model.Vege;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "veges")
public class VegeController {
	
	private byte[] bytes;

	@Autowired
	private VegeRepository vegeRepository;
	
	
	@GetMapping("/get")
	public List<Vege> getVeges() {
		return vegeRepository.findAll();
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	@PostMapping("/add")
	public void createVege(@RequestBody Vege vege) throws IOException {
		vege.setPicByte(this.bytes);
		vegeRepository.save(vege);
		this.bytes = null;
	}
	
	@DeleteMapping(path = { "/{id}" })
	public Vege deleteVege(@PathVariable("id") long id) {
		Vege vege = vegeRepository.getOne(id);
		vegeRepository.deleteById(id);
		return vege;
	}
	
	@PutMapping("/update")
	public void updateVege(@RequestBody Vege vege) {
		vegeRepository.save(vege);
	}
}