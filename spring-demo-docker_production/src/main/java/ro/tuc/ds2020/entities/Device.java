package ro.tuc.ds2020.entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "device")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name="address", nullable = false)
    private String address;

    @Column(name="max_hourly_energy_consumption", nullable = false)
    private Double maxHourlyEnergyConsumption;

    @OneToMany(mappedBy = "device")
    private List<EnergyConsumption> energyConsumptionList;
}
