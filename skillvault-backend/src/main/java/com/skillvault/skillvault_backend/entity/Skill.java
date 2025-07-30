package com.skillvault.skillvault_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String level; // Beginner, Intermediate, Advanced
    private String category; // Domain or Topic

    // Constructors
    public Skill() {}

    public Skill(String name, String level, String category) {
        this.name = name;
        this.level = level;
        this.category = category;
    }

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getLevel() { return level; }

    public void setLevel(String level) { this.level = level; }

    public String getCategory() { return category; }

    public void setCategory(String category) { this.category = category; }
}
