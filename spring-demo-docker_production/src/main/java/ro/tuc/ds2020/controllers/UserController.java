package ro.tuc.ds2020.controllers;

import ch.qos.logback.core.status.Status;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.DeviceDTO;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.dtos.UserDeviceMappingDTO;
import ro.tuc.ds2020.dtos.mapper.DeviceMapper;
import ro.tuc.ds2020.dtos.mapper.UserMapper;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.services.UserService;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/users")
public class UserController {
    private final UserService userService;

    private final UserMapper userMapper;

    private final DeviceMapper deviceMapper;

    @GetMapping
    public List<UserDTO> getUsers() {
        List<User> userEntities = userService.getAll();
        List<UserDTO> userDTOList = new ArrayList<>();
        userEntities.forEach(
                user -> {
                    UserDTO userDTO = userMapper.toUserDTO(user);
                    userDTOList.add(userDTO);
                }
        );
        return userDTOList;
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id){
        User user = userService.getById(id);
        UserDTO userDTO = userMapper.toUserDTO(user);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Status> deleteUserById(@PathVariable Integer id){
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<UserDTO> updateProduct(@RequestBody UserDTO userDTO, @PathVariable Integer id) throws NotFoundException {
        User userEntity = userService.update(userMapper.toUser(userDTO), id);
        return new ResponseEntity<>(userMapper.toUserDTO(userEntity), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDeviceMappingDTO> userDeviceMappingDTOResponseEntity(@RequestParam Integer clientId, @RequestParam Integer deviceId) throws NotFoundException {
        UserDeviceMappingDTO userDeviceMappingDTO = userService.mapDeviceToClient(clientId,deviceId);
        return new ResponseEntity<>(userDeviceMappingDTO, HttpStatus.OK);
    }

    @GetMapping(value="/devices/{id}")
    public ResponseEntity<List<DeviceDTO>> getDevicesByUserId(@PathVariable Integer id) throws NotFoundException {
        List<Device> devicesListEntities = userService.getDevicesByUserId(id);
        List<DeviceDTO> deviceDTOList = new ArrayList<>();
        devicesListEntities.forEach(
                device -> {
                    DeviceDTO deviceDTO = deviceMapper.toDeviceDTO(device);
                    deviceDTOList.add(deviceDTO);
                }
        );
        return new ResponseEntity<>(deviceDTOList, HttpStatus.CREATED);
    }
}
