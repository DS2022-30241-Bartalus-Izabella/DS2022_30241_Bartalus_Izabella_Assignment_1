package ro.tuc.ds2020.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ro.tuc.ds2020.entities.Role_type;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer id;
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private Role_type roleType;
}
