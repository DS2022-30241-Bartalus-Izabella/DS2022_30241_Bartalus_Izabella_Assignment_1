package ro.tuc.ds2020.dtos.mapper;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.entities.User;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final ModelMapper modelMapper;

    public UserDTO toUserDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public User toUser(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }

}
