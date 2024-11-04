package com.CarShowroomSystem.CarShowroom.repositry;


import com.CarShowroomSystem.CarShowroom.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<CarEntity,String> {}
