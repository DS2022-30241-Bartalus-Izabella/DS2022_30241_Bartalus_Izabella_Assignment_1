package ro.tuc.ds2020.services;

import javassist.NotFoundException;
import ro.tuc.ds2020.entities.Device;

import java.util.List;

public interface DeviceService {
    Device create(Device device);
    List<Device> getAll();

    Device getById(Integer id);

    Device update(Device device, Integer id) throws NotFoundException;

    void deleteById(Integer id);
}
