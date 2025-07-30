package com.skillvault.skillvault_backend.controller;

import com.skillvault.skillvault_backend.entity.Skill;
import com.skillvault.skillvault_backend.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("/add")
    public String addSkill(@RequestBody Skill skill) {
        skillService.createSkill(skill);
        return "Skill added successfully!";
    }

    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getAllSkills();
    }
}
