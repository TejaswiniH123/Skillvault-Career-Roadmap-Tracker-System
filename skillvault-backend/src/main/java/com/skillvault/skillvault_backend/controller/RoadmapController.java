package com.skillvault.skillvault_backend.controller;

import com.skillvault.skillvault_backend.entity.Roadmap;
import com.skillvault.skillvault_backend.entity.Step;
import com.skillvault.skillvault_backend.service.RoadmapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roadmaps")
public class RoadmapController {

    @Autowired
    private RoadmapService roadmapService;

    @PostMapping
    public Roadmap createRoadmap(@RequestBody Roadmap roadmap) {
        return roadmapService.createRoadmap(roadmap);
    }

    @GetMapping
    public List<Roadmap> getAllRoadmaps() {
        return roadmapService.getAllRoadmaps();
    }

    @GetMapping("/user/{userId}")
    public List<Roadmap> getRoadmapsByUserId(@PathVariable Long userId) {
        return roadmapService.getRoadmapsByUserId(userId);
    }


    @PostMapping("/{roadmapId}/steps")
    public Step addStep(@PathVariable Long roadmapId, @RequestBody Step step) {
        return roadmapService.addStepToRoadmap(roadmapId, step);
    }

    @GetMapping("/{roadmapId}/steps")
    public List<Step> getSteps(@PathVariable Long roadmapId) {
        return roadmapService.getStepsForRoadmap(roadmapId);
    }
}
