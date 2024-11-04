package com.CarShowroomSystem.CarShowroom.repositry;

import com.CarShowroomSystem.CarShowroom.entity.ShowroomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.PagingAndSortingRepository;

@Repository
public interface CarShowroomRepository extends JpaRepository<ShowroomEntity, Integer> {
}
