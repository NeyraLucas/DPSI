import { Menu } from "./Menu.model";
import { timestamp } from "./Time.model";

export interface Ventas{
  id: string,
  price: number,
  productos: Array<Menu>,
  status: string,
  fecha?: any,
}

export interface VentasUnit{
  id: string,
  price: number
}

export interface VentasTest{
  id: string,
  price: number,
  productos: ventas,
  status: string,
  fecha?: any,
}
export interface ventas{
  ventas: Array<Menu>
}
