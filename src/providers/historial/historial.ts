import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan-data.model";

@Injectable()
export class HistorialService {

  private historial:ScanData[] = [];

  constructor() {
    
  }

  agregarHistorial (texto:string) {
    let data = new ScanData(texto);

    this.historial.unshift(data);

    console.log(this.historial);
  }

  cargarHistorial() {
    return this.historial;
  }

}
