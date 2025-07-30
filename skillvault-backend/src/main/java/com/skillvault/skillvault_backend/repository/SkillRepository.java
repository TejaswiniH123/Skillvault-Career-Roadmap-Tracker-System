package com.skillvault.skillvault_backend.repository;

import com.skillvault.skillvault_backend.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}
