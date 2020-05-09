
export class SectorCreate {

  constructor(
    public nombre: string,
    public status: boolean,
    public codigoPostal: string,
    public sectorId?: number
  ) { }

}
