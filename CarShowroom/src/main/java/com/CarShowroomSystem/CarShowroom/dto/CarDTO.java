package com.CarShowroomSystem.CarShowroom.dto;
import com.fasterxml.jackson.annotation.JsonProperty;


public class CarDTO {
    @JsonProperty("vin")
    private String vin;

    @JsonProperty("maker")
    private String maker;

    @JsonProperty("model")
    private String model;

    @JsonProperty("modelYear")
    private int modelYear;

    @JsonProperty("price")
    private double price;

    @JsonProperty("showroom")
    private ShowroomDTO showroom;


    public CarDTO(String vin, String maker, String model, int modelYear, double price, ShowroomDTO showroom) {
        this.vin = vin;
        this.maker = maker;
        this.model = model;
        this.modelYear = modelYear;
        this.price = price;
        this.showroom = showroom;
    }
}
