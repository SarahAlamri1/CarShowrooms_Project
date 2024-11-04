package com.CarShowroomSystem.CarShowroom.exception;

public class EntityAlreadyExistsException extends RuntimeException {
    public EntityAlreadyExistsException(String massage) {
        super(massage);
    }
}
