package com.CarShowroomSystem.CarShowroom.service;

import com.CarShowroomSystem.CarShowroom.dto.CarDTO;
import com.CarShowroomSystem.CarShowroom.entity.CarEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CarService {

    CarEntity saveCar(CarEntity car);
    CarEntity updateCar(CarEntity car);
    void deleteCar(CarEntity car);
    CarEntity getCarById(String id);
    Page<CarDTO> getAllCars(Pageable pageable);
}
