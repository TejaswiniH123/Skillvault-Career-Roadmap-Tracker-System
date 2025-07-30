package com.skillvault.skillvault_backend.service;

import com.skillvault.skillvault_backend.entity.Skill;
import com.skillvault.skillvault_backend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public Skill createSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Optional<Skill> getSkillById(Long id) {
        return skillRepository.findById(id);
    }

    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }

    public Skill updateSkill(Long id, Skill updatedSkill) {
        return skillRepository.findById(id).map(skill -> {
            skill.setName(updatedSkill.getName());
            skill.setLevel(updatedSkill.getLevel());
            skill.setCategory(updatedSkill.getCategory());
            return skillRepository.save(skill);
        }).orElse(null);
    }
}
