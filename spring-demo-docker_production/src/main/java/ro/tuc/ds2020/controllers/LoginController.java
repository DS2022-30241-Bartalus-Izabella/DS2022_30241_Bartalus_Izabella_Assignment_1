package ro.tuc.ds2020.controllers;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.LoginJwtDTO;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.dtos.UserLoginDTO;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.services.implementation.LoginServiceImpl;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api")
public class LoginController {
    private final LoginServiceImpl loginServiceImpl;

    private final ModelMapper modelMapper;

    @PostMapping("/login")
    public ResponseEntity<LoginJwtDTO> login(@RequestBody UserLoginDTO userLoginDTO) {
        return new ResponseEntity<>(modelMapper.map(loginServiceImpl.login(userLoginDTO.getUsername(),
                userLoginDTO.getPassword()), LoginJwtDTO.class), HttpStatus.CREATED);
    }

    @PostMapping("/register")
    public ResponseEntity registerUser(@RequestBody UserDTO user) {
        return new ResponseEntity<>(modelMapper
                .map(loginServiceImpl.registerUser(modelMapper.map(user, User.class)), LoginJwtDTO.class),
                HttpStatus.CREATED);
    }
}
