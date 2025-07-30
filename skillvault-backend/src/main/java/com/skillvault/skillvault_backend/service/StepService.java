package com.skillvault.skillvault_backend.service;

import com.skillvault.skillvault_backend.entity.Step;
import com.skillvault.skillvault_backend.repository.StepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StepService {

    @Autowired
    private StepRepository stepRepository;

    // Create a new step
    public Step createStep(Step step) {
        return stepRepository.save(step);
    }

    // Get all steps for a specific roadmap
    public List<Step> getStepsByRoadmapId(Long roadmapId) {
        return stepRepository.findByRoadmap_Id(roadmapId);
    }

    // Update an existing step
    public Step updateStep(Long id, Step updatedStep) {
        Optional<Step> optionalStep = stepRepository.findById(id);
        if (optionalStep.isPresent()) {
            Step step = optionalStep.get();
            step.setTitle(updatedStep.getTitle());
            step.setContent(updatedStep.getContent());
            step.setOrderIndex(updatedStep.getOrderIndex());
            step.setRoadmap(updatedStep.getRoadmap());
            return stepRepository.save(step);
        } else {
            return null;
        }
    }

    // Delete a step by ID
    public void deleteStep(Long id) {
        stepRepository.deleteById(id);
    }
}
