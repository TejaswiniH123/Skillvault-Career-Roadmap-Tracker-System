package com.skillvault.skillvault_backend.repository;

import com.skillvault.skillvault_backend.entity.Step;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StepRepository extends JpaRepository<Step, Long> {
    List<Step> findByRoadmap_Id(Long roadmapId);
}
