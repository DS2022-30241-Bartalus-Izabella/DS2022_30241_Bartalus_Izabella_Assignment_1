package ro.tuc.ds2020.services.implementation;

import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.controllers.handlers.exceptions.model.ResourceNotFoundException;
import ro.tuc.ds2020.dtos.UserDeviceMappingDTO;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.repositories.DeviceRepository;
import ro.tuc.ds2020.repositories.UserRepository;
import ro.tuc.ds2020.services.UserService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final DeviceRepository deviceRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(Integer id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User update(User user, Integer id) throws NotFoundException {
        if(userRepository.existsById(user.getId())){
            user.setId(id);
            return userRepository.save(user);
        }
        throw new NotFoundException("Can not find user");
    }

    @Override
    public void deleteById(Integer id) {
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
        }
    }

    @Override
    public UserDeviceMappingDTO mapDeviceToClient(Integer clientId, Integer deviceId) throws NotFoundException {
        Optional<User> getUser = userRepository.findById(clientId);
        Optional<Device> getDevice = deviceRepository.findById(deviceId);
        if(getUser.isPresent()){
            if (getDevice.isPresent()){
                User userToMap = getUser.get();
                Device deviceToMap = getDevice.get();
                userToMap.getDevices().add(deviceToMap);
                userRepository.save(userToMap);
                return new UserDeviceMappingDTO(userToMap.getId(), deviceToMap.getId(), userToMap.getUsername(), deviceToMap.getDescription());
            } else {
                throw new NotFoundException("This device does not exist!");
            }
        } else {
            throw new NotFoundException("This user does not exist!");
        }
    }

    @Override
    public List<Device> getDevicesByUserId(Integer id) throws NotFoundException {
        if(userRepository.existsById(id)){
            return userRepository.findById(id).get().getDevices();
        }else{
            throw new NotFoundException("This user does not exist!");
        }
    }
}
