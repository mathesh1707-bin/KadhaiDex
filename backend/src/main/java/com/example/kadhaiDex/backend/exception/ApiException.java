package com.example.kadhaiDex.backend.exception;

public class ApiException extends RuntimeException {
    public ApiException(String message) {
        super(message);
    }
}