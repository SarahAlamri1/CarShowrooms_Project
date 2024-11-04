package com.CarShowroomSystem.CarShowroom.controller;
import com.CarShowroomSystem.CarShowroom.dto.CarDTO;
import com.CarShowroomSystem.CarShowroom.entity.CarEntity;
import com.CarShowroomSystem.CarShowroom.service.CarServiceImp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class CarController {

    private CarServiceImp carService;

    public CarController(CarServiceImp carService) {
        this.carService = carService;
    }

    @PostMapping("/car")
    public CarEntity createCar(@RequestBody CarEntity car) {
        System.out.println(car);
        return carService.saveCar(car);
    }

    @GetMapping("/car")
    public Page<CarDTO> getAllCarShowroom(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "vin") String sortBy,
            @RequestParam(defaultValue = "true") boolean ascending
    ) {
        Sort sort = ascending ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return carService.getAllCars(pageable);

    }
}
