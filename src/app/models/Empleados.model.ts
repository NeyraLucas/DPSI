import { timestamp } from "./Time.model";

export interface Roles {
  empleado_roles: string;
}

export interface Empleado{
  name: string;
  email: string;
  numero: number;
  roles: Roles;
  foto: string;
  uid?: string;
  registro?: timestamp;
}
