
export interface MenuInterface {
    titulo: string;
    icono?: string;
    url:string;
    submenu?:MenuInterface[];
}