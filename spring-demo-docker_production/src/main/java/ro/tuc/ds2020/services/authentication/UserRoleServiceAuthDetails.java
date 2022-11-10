package ro.tuc.ds2020.services.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserRoleServiceAuthDetails implements UserDetailsService {
    private static final String NO_USER_EXCEPTION = "There is no user with this username";

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findUserByUsername(username);
        if (user.isPresent()) {
            return new UserRoleDetails(user.get());
        }
        throw new UsernameNotFoundException(NO_USER_EXCEPTION);
    }
}
