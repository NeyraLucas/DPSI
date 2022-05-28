import { Menu } from "./Menu.model";
import { timestamp } from "./Time.model";

export interface Ventas{
  id: string,
  price: number,
  productos: Array<Menu>,
  status: string,
  fecha?: timestamp,
}

export interface VentasUnit{
  id: string,
  price: number
}
