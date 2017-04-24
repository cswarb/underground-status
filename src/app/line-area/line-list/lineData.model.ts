export class lineDataModel {

  constructor(public $type?: string, 
    public id?: string,
    public name?: string,
    public modeName?: string,
    public disruptions?: any,
    public created?: string,
    public modified?: string, 
    public lineStatuses?: any,
    public routeSections?: any,
    public serviceTypes?: any,
    public crowding?: any
  ) {}

}