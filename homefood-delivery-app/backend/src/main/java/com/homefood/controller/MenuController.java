package com.homefood.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    @GetMapping
    public List<String> getMenuItems() {
        return Arrays.asList("Idli", "Dosa", "Chapati", "Pongal");
    }
}

