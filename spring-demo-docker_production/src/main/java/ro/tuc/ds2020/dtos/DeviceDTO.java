package ro.tuc.ds2020.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ro.tuc.ds2020.entities.User;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeviceDTO {
    private Integer id;
    private String description;
    private String address;
    private Double maxHourlyEnergyConsumption;
}
