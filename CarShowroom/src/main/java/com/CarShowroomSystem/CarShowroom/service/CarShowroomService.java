package com.CarShowroomSystem.CarShowroom.service;

import com.CarShowroomSystem.CarShowroom.dto.ShowroomDTO;
import com.CarShowroomSystem.CarShowroom.entity.ShowroomEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface CarShowroomService {
    ShowroomEntity save(ShowroomEntity showroom);
    Page<ShowroomDTO> findAll(Pageable pageable);
    ShowroomEntity findById(int id);
    void deleteById(int id);
    ShowroomEntity update(int commercial_registration_number, int contact_number, String manager_name, String address );

}
