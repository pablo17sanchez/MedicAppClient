

export class Paciente {





  constructor(
    public nombre: string,
    public apellido: string,
    public cedula: string,
    public direccion: string,
    public telefono: string,
    public fnacimiento: Date,
    public  status: boolean,
    public provinciaId: number,
    public sectorId: number,
    public arsid: number,
    public tipoSangre: string,
    public genero: string,
    public email: string,
    public imagen: string,
    public alergico: string,
    public ocupacion: string,
    public totalRecords: number,
    public estadoCivil: string,
    public peso: string,
    public fuma: boolean,
    public bebe: boolean,
    public lat: string,
    public log: string,
    public noAfiliadoARS: string,
    public tombreContacto: string,
    public telefonoContacto: string,
    public estatura: string,
    public idaciente?: number



  ) { }

}
