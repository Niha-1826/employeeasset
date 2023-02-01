package com.employee.exceptioncontroller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.employee.exception.AssetNotFoundException;
import com.employee.exception.EmployeeNotFoundException;

@ControllerAdvice
public class ExceptionController {
	
	@ExceptionHandler(value = EmployeeNotFoundException.class)
	public ResponseEntity<Object> handleEmployeeException(Exception ex){
		return new ResponseEntity<Object> ("Employee Not Found",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = AssetNotFoundException.class)
	public ResponseEntity<Object> handleAssetException(Exception ex){
		return new ResponseEntity<Object> ("Asset Not Found",HttpStatus.NOT_FOUND);
	}

}
