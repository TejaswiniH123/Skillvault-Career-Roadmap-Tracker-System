package com.skillvault.skillvault_backend.controller;

import com.skillvault.skillvault_backend.entity.Step;
import com.skillvault.skillvault_backend.service.StepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/steps")
public class StepController {

    @Autowired
    private StepService stepService;

    @PostMapping
    public Step createStep(@RequestBody Step step) {
        return stepService.createStep(step);
    }

    @GetMapping("/roadmap/{roadmapId}")
    public List<Step> getStepsByRoadmap(@PathVariable Long roadmapId) {
        return stepService.getStepsByRoadmapId(roadmapId);
    }

    @PutMapping("/{id}")
    public Step updateStep(@PathVariable Long id, @RequestBody Step updatedStep) {
        return stepService.updateStep(id, updatedStep);
    }

    @DeleteMapping("/{id}")
    public void deleteStep(@PathVariable Long id) {
        stepService.deleteStep(id);
    }
}
