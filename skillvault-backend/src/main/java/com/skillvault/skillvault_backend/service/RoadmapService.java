package com.skillvault.skillvault_backend.service;

import com.skillvault.skillvault_backend.entity.Roadmap;
import com.skillvault.skillvault_backend.entity.Step;
import com.skillvault.skillvault_backend.repository.RoadmapRepository;
import com.skillvault.skillvault_backend.repository.StepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoadmapService {

    @Autowired
    private RoadmapRepository roadmapRepository;

    @Autowired
    private StepRepository stepRepository;

    public Roadmap createRoadmap(Roadmap roadmap) {
        return roadmapRepository.save(roadmap);
    }

    public List<Roadmap> getAllRoadmaps() {
        return roadmapRepository.findAll();
    }

    public List<Roadmap> getRoadmapsByUserId(Long userId) {
        return roadmapRepository.findByUserId(userId);
    }



    public Step addStepToRoadmap(Long roadmapId, Step step) {
        Roadmap roadmap = roadmapRepository.findById(roadmapId).orElseThrow();
        step.setRoadmap(roadmap);
        return stepRepository.save(step);
    }

    public List<Step> getStepsForRoadmap(Long roadmapId) {
        return roadmapRepository.findById(roadmapId).map(Roadmap::getSteps).orElse(null);
    }
}
