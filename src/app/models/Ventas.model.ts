import { Menu } from "./Menu.model";
import { timestamp } from "./Time.model";

export interface Ventas{
  id: string,
  price: number,
  fecha: timestamp,
  productos: Array<Menu>,
  status: string
}
