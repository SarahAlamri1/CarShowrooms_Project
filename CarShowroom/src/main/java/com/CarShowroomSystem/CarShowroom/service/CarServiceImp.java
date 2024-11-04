package com.CarShowroomSystem.CarShowroom.service;

import com.CarShowroomSystem.CarShowroom.dto.CarDTO;
import com.CarShowroomSystem.CarShowroom.dto.ShowroomDTO;
import com.CarShowroomSystem.CarShowroom.entity.CarEntity;
import com.CarShowroomSystem.CarShowroom.entity.ShowroomEntity;
import com.CarShowroomSystem.CarShowroom.repositry.CarRepository;
import com.CarShowroomSystem.CarShowroom.repositry.CarShowroomRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Service
public class CarServiceImp implements CarService {

    @Autowired
    private CarRepository carRepository;
    @Autowired
    private CarShowroomRepository carShowroomRepository;

    @Override
    public CarEntity saveCar(CarEntity car) {
        System.out.println(car);
        ShowroomEntity showroom = carShowroomRepository.findById(car.getShowroom().getCommercial_registration_number())
                .orElseThrow(() -> new RuntimeException("Showroom not found with ID: " + car.getShowroom().getCommercial_registration_number()));
        car.setShowroom(showroom);
        return carRepository.save(car);
    }

    @Override
    public CarEntity updateCar(CarEntity car) {
        return carRepository.save(car);
    }

    @Override
    public void deleteCar(CarEntity car) {
        carRepository.delete(car);
    }

    @Override
    public CarEntity getCarById(String id) {
        return carRepository.findById(id).get();
    }

    @Override
    public Page<CarDTO> getAllCars(Pageable pageable) {
        Page<CarEntity> cars = carRepository.findAll(pageable);

        List<CarDTO> carDtos = cars.getContent().stream()
                .map(car -> {
                    ShowroomDTO showroomDTO = new ShowroomDTO(
                            car.getShowroom().getName(),
                            car.getShowroom().getContact_number(),
                            car.getShowroom().getCommercial_registration_number()
                    );
                    return new CarDTO(
                            car.getVin(),
                            car.getMaker(),
                            car.getModel(),
                            car.getModelYear(),
                            car.getPrice(),
                            showroomDTO
                    );
                })
                .collect(Collectors.toList());

        return new PageImpl<>(carDtos, pageable, cars.getTotalElements());
    }


}
