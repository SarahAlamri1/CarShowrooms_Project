package com.CarShowroomSystem.CarShowroom.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Entity
@Data
@Table(name="car")
public class CarEntity {
    @Id
    @NotNull(message = "vin number is required")
    @Size(max = 25, message = "vin must be at most 25 characters long")
    private String vin;

    @NotNull(message = "marker is required")
    @Size(max = 25, message = "marker must be at most 25 characters long")
    private String maker;

    @NotNull(message = "model  is required")
    @Size(max = 25, message = "model must be at most 25 characters long")
    private String model;

    @NotNull(message = "model year  is required")
    private int modelYear;

    @NotNull(message = "price year  is required")
    private double price;

    @ManyToOne
    @JoinColumn(name = "commercial_registration_number", nullable = false)
    @JsonBackReference
    private ShowroomEntity showroom;

    public CarEntity(String vin, String maker, String model, int modelYear, double price, ShowroomEntity showroom) {
        this.vin = vin;
        this.maker = maker;
        this.model = model;
        this.modelYear = modelYear;
        this.price = price;
        this.showroom = showroom;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getMarker() {
        return maker;
    }

    public void setMarker(String marker) {
        this.maker = marker;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getModel_year() {
        return modelYear;
    }

    public void setModel_year(int model_year) {
        this.modelYear = model_year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
