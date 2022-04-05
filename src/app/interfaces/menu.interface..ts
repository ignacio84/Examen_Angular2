
export interface MenuInterface {
    titulo: string;
    icono?: string;
    url?:string;
    method?:string;
    submenu?:MenuInterface[];
}