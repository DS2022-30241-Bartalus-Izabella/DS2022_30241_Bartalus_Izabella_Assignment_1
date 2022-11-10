export interface Device {
  id: number,
  description: string,
  address: string,
  maxHourlyEnergyConsumption: number,
  user_id?: number
}
