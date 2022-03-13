export interface User {
    uid: string;
    age: number;
    name: string;
    roles: Roles;
  }
  
  export interface Roles {
    admin: boolean;
    customer: boolean;
  }
  