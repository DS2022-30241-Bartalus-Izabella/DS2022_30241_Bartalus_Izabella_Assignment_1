package ro.tuc.ds2020.entities;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="energy_consumption")
public class EnergyConsumption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "time_stamp", nullable = false)
    private LocalDateTime time_stamp;

    @Column(name = "energy_consumption_per_hour")
    private Double energyConsumptionPerHour;

    @ManyToOne
    @JoinColumn(name = "device_id", nullable = false)
    private Device device;
}
