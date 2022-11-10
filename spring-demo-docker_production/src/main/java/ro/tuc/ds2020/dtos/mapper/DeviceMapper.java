package ro.tuc.ds2020.dtos.mapper;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import ro.tuc.ds2020.dtos.DeviceDTO;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.services.UserService;

@Component
@RequiredArgsConstructor
public class DeviceMapper {
    private final ModelMapper modelMapper;

    public DeviceDTO toDeviceDTO(Device device) {
        return modelMapper.map(device, DeviceDTO.class);
    }

    public Device toDevice(DeviceDTO deviceDTO) {
        return modelMapper.map(deviceDTO, Device.class);
    }
}
