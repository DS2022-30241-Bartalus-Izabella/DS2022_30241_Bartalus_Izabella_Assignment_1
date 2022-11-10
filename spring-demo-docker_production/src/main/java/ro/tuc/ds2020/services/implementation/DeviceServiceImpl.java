package ro.tuc.ds2020.services.implementation;

import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.repositories.DeviceRepository;
import ro.tuc.ds2020.services.DeviceService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DeviceServiceImpl implements DeviceService {

    @Autowired
    private final DeviceRepository deviceRepository;

    @Override
    public Device create(Device device) {
        return deviceRepository.save(device);
    }

    @Override
    public List<Device> getAll() {
        return deviceRepository.findAll();
    }

    @Override
    public Device getById(Integer id) {
        return deviceRepository.findById(id).get();
    }

    @Override
    public Device update(Device device, Integer id) throws NotFoundException {
        if(deviceRepository.existsById(device.getId())){
            device.setId(id);
            return deviceRepository.save(device);
        }
        throw new NotFoundException("Can not find device");
    }

    @Override
    public void deleteById(Integer id) {
        if(deviceRepository.existsById(id)){
            deviceRepository.deleteById(id);
        }
    }
}
