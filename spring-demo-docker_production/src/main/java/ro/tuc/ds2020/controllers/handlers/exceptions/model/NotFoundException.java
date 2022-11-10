package ro.tuc.ds2020.controllers.handlers.exceptions.model;

public class NotFoundException extends RuntimeException {

    public NotFoundException(String message) {
        super(message);
    }

}
