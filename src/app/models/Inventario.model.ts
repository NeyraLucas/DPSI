export interface inventario{
    brand: string;
    coding: string;
    description: string;
    name: string;
    id: string;
    status: boolean;
    stock:{
        entradas: number;
        salidas: number;
        total: number;
    }
}