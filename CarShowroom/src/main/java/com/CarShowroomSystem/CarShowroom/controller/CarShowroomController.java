package com.CarShowroomSystem.CarShowroom.controller;

import com.CarShowroomSystem.CarShowroom.dto.ShowroomDTO;
import com.CarShowroomSystem.CarShowroom.entity.ShowroomEntity;
import com.CarShowroomSystem.CarShowroom.service.CarShowroomServiceImp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class CarShowroomController {


    private CarShowroomServiceImp carShowroomService;

    public CarShowroomController(CarShowroomServiceImp carShowroomService ) {
        this.carShowroomService = carShowroomService;
    }

    @PostMapping("/carShowroom")
    public ShowroomEntity createCar( @RequestBody ShowroomEntity showroom) {
        carShowroomService.save(showroom);
        return showroom;
    }


    @GetMapping("/carShowroom/{id}")
    public ShowroomEntity getCarShowroom(@PathVariable int id) {
        System.out.println("DEBUD :" + id);
        return carShowroomService.findById(id);
    }

    @GetMapping("/carShowroom")
    public Page<ShowroomDTO> getAllCarShowroom(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "true") boolean ascending
    ) {
        Sort sort = ascending ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return carShowroomService.findAll(pageable);

    }

    @PutMapping("/carShowroom/{id}")

    public ShowroomEntity updateCarShowroom(
                                            @PathVariable int id,
                                            @RequestParam String address,
                                            @RequestParam int contactNumber,
                                            @RequestParam String ManagerName
    ) {
        ShowroomEntity updatedShowroom = carShowroomService.findById(id);

        updatedShowroom.setAddress(address);
        updatedShowroom.setContact_number(contactNumber);
        updatedShowroom.setManager_name(ManagerName);
        return carShowroomService.update(updatedShowroom);
    }

    @DeleteMapping("carShowroom/{id}")
    public void deleteCar(@PathVariable int id) {
        carShowroomService.deleteById(id);
    }

}
