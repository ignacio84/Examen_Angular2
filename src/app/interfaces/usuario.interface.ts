
export interface UsuarioInterface {
    usuario: string;
    password?: string;
    recordar: boolean;
    nombre:string;
    apellido:string;
    email:string;
    img?:string;
    fechaNac?:Date;
    ocupacion?:string;
    rol?:string;
    comentario?:string;
}
