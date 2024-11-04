package com.CarShowroomSystem.CarShowroom.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import java.util.ArrayList;
import java.util.List;


@RequiredArgsConstructor
@Entity
@Data
@Table(name="showroom")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "commercial_registration_number"
)
public class ShowroomEntity {


    @Id
    @NotNull(message = "commercial registration number is required")
    private int commercial_registration_number;

    @NotNull(message = "Name is required")
    @Size(max = 100, message = "Name must be at most 100 characters long")
    private String name;

    @Size(max = 100, message = "manager_name must be at most 100 characters long")
    private String manager_name;

    @NotNull(message = "contact number is required")
    private int contact_number;

    @Size(max = 255, message = "Address must be at most 255 characters long")
    private String address;

    @OneToMany(mappedBy = "showroom", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<CarEntity> carList = new ArrayList<>();

    public ShowroomEntity(int commercial_registration_number, String name, String manager_name, int contact_number, String address, List<CarEntity> carList) {
        this.commercial_registration_number = commercial_registration_number;
        this.name = name;
        this.manager_name = manager_name;
        this.contact_number = contact_number;
        this.address = address;
        this.carList = carList;
    }

    public void addCar(CarEntity car) {
        carList.add(car);
        car.setShowroom(this);  // Link back to the showroom
    }

    public int getCommercial_registration_number() {
        return commercial_registration_number;
    }

    public void setCommercial_registration_number(int commercial_registration_number) {
        this.commercial_registration_number = commercial_registration_number;
    }

    public List<CarEntity> getCarList() {
        return carList;
    }

    public void setCarList(List<CarEntity> carList) {
        this.carList = carList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getManager_name() {
        return manager_name;
    }

    public void setManager_name(String manager_name) {
        this.manager_name = manager_name;
    }

    public int getContact_number() {
        return contact_number;
    }

    public void setContact_number(int contact_number) {
        this.contact_number = contact_number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}
