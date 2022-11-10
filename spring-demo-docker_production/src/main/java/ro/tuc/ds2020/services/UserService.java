package ro.tuc.ds2020.services;

import javassist.NotFoundException;
import ro.tuc.ds2020.dtos.UserDeviceMappingDTO;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.entities.User;

import java.util.List;

public interface UserService {

    List<User> getAll();

    User getById(Integer id);

    User update(User user, Integer id) throws NotFoundException;

    void deleteById(Integer id);

    UserDeviceMappingDTO mapDeviceToClient(Integer clientId, Integer deviceId) throws NotFoundException;

    List<Device> getDevicesByUserId(Integer id) throws NotFoundException;
}
