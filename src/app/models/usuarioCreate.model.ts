
export class UsuarioCreate {


  constructor(
    public nombre: string,
    public apellido: string,
    public status: boolean,
    public correo: string,
    public userName: string,
    public password: string,
    public totalRecords: number,
    public rol?: string,
    public usuarioId?: number,
    public usuarioCreador?: number,
    public sandForPassword?: string
  ) { }

}


