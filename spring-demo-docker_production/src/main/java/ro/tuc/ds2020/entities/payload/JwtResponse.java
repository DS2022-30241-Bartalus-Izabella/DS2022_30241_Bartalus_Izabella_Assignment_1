package ro.tuc.ds2020.entities.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ro.tuc.ds2020.entities.Role_type;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    private Role_type roleType;
    private String accessToken;
}
