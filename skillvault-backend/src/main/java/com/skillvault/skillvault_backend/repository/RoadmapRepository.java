package com.skillvault.skillvault_backend.repository;

import com.skillvault.skillvault_backend.entity.Roadmap;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RoadmapRepository extends JpaRepository<Roadmap, Long> {
    List<Roadmap> findByUserId(Long userId); // Add this line
}
