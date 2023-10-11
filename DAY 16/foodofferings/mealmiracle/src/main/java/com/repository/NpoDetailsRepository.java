package com.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.NpoDetails;

public interface NpoDetailsRepository extends JpaRepository<NpoDetails, Long> {
}
