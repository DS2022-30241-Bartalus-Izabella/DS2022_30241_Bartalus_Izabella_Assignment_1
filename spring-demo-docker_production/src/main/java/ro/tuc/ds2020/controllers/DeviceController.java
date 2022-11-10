package ro.tuc.ds2020.controllers;

import ch.qos.logback.core.status.Status;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.DeviceDTO;
import ro.tuc.ds2020.dtos.mapper.DeviceMapper;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.services.DeviceService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/devices")
public class DeviceController {

    private final DeviceService deviceService;

    private final DeviceMapper deviceMapper;

    @GetMapping
    public List<DeviceDTO> getDevices() {
        List<Device> deviceEntities = deviceService.getAll();
        List<DeviceDTO> deviceDTOList = new ArrayList<>();
        deviceEntities.forEach(
                device -> {
                    DeviceDTO deviceDTO = deviceMapper.toDeviceDTO(device);
                    deviceDTOList.add(deviceDTO);
                }
        );
        return deviceDTOList;
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<DeviceDTO> getDeviceById(@PathVariable Integer id){
        Device device = deviceService.getById(id);
        DeviceDTO deviceDTO = deviceMapper.toDeviceDTO(device);
        return new ResponseEntity<>(deviceDTO, HttpStatus.CREATED);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Status> deleteDeviceById(@PathVariable Integer id){
        deviceService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<DeviceDTO> updateProduct(@RequestBody DeviceDTO deviceDTO, @PathVariable Integer id) throws NotFoundException {
        Device device = deviceService.update(deviceMapper.toDevice(deviceDTO), id);
        return new ResponseEntity<>(deviceMapper.toDeviceDTO(device), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<DeviceDTO> create(@RequestBody @Valid DeviceDTO deviceDTO) {
        Device device = deviceService.create(deviceMapper.toDevice(deviceDTO));
        return new ResponseEntity<>(deviceMapper.toDeviceDTO(device), HttpStatus.OK);
    }
}
