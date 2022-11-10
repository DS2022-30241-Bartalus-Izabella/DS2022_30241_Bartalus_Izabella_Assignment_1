package ro.tuc.ds2020.services.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.services.EnergyConsumptionService;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class EnergyConsumptionServiceImpl implements EnergyConsumptionService {
}
