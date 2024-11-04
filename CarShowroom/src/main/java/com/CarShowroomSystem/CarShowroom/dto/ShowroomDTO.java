package com.CarShowroomSystem.CarShowroom.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShowroomDTO {

    @JsonProperty("name")
    private String name;

    @JsonProperty("contactNumber")
    private int contactNumber;

    @JsonProperty("commercialRegistrationNumber")
    private int commercialRegistrationNumber;


    public ShowroomDTO(String name, int contactNumber, int commercialRegistrationNumber) {
        this.name = name;
        this.contactNumber = contactNumber;
        this.commercialRegistrationNumber = commercialRegistrationNumber;
    }
}
