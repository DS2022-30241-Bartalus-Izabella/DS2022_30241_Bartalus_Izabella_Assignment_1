package ro.tuc.ds2020.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDeviceMappingDTO {
    private Integer clientId;
    private Integer deviceId;
    private String clientUsername;
    private String deviceDescription;
}
