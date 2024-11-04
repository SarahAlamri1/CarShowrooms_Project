package com.CarShowroomSystem.CarShowroom.service;

import com.CarShowroomSystem.CarShowroom.dto.ShowroomDTO;
import com.CarShowroomSystem.CarShowroom.entity.ShowroomEntity;
import com.CarShowroomSystem.CarShowroom.repositry.CarRepository;
import com.CarShowroomSystem.CarShowroom.repositry.CarShowroomRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.NoResultException;
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
public class CarShowroomServiceImp implements CarShowroomService {

    @Autowired
    private CarShowroomRepository carShowroomRepository;
    @Autowired
    private CarRepository carRepository;

    @Override
    public ShowroomEntity save(ShowroomEntity showroom) {
        carShowroomRepository.findById(showroom.getCommercial_registration_number())
                .ifPresent(entity -> {
                    throw new EntityExistsException(
                            "Showroom with commercial registration number " + showroom.getCommercial_registration_number() + " already exists."
                    );
                });
       return carShowroomRepository.save(showroom);
    }

    public ShowroomEntity update(ShowroomEntity showroom) {
        return carShowroomRepository.save(showroom);
    }

    @Override
    public Page<ShowroomDTO> findAll(Pageable pageable) {

        Page<ShowroomEntity> showrooms = carShowroomRepository.findAll(pageable);

        List<ShowroomDTO> showroomList = showrooms.getContent().stream()
                .map(originalShowroom -> new ShowroomDTO(
                        originalShowroom.getName(),
                        originalShowroom.getContact_number(),
                        originalShowroom.getCommercial_registration_number()
                ))
                .collect(Collectors.toList());

        showroomList.forEach(showroom ->
                System.out.println(showroom)
        );

        return new PageImpl<>(showroomList, pageable, showrooms.getTotalElements());
    }

    @Override
    public ShowroomEntity findById(int id) {
        return carShowroomRepository.findById(id)
                .map(originalShowroom -> new ShowroomEntity(
                        originalShowroom.getCommercial_registration_number(),
                        originalShowroom.getName(),
                        originalShowroom.getManager_name(),
                        originalShowroom.getContact_number(),
                        originalShowroom.getAddress(),
                        originalShowroom.getCarList()
                        ))
                .orElseThrow(() -> new RuntimeException("Showroom not found with ID: " + id));
    }

    @Override
    public void deleteById(int id) {
        ShowroomEntity item = carShowroomRepository.findById(id).get();
        item.getCarList().forEach(car -> carRepository.deleteById(car.getVin()));
        carShowroomRepository.deleteById(id);
    }

    @Override
    public ShowroomEntity update(int commercial_registration_number, int contact_number, String manager_name, String address) {
        try {
            ShowroomEntity updatedShowroom =  carShowroomRepository.findById(commercial_registration_number).get();
            updatedShowroom.setContact_number(contact_number);
            updatedShowroom.setManager_name(manager_name);
            updatedShowroom.setAddress(address);
            return carShowroomRepository.save(updatedShowroom);
        } catch (NoResultException e) {
            System.out.println("No carshoweoom found with id: " + commercial_registration_number);
            throw  e;
        }

    }
}
