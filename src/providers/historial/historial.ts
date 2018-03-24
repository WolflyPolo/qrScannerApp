import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan-data.model";

import { InAppBrowser } from '@ionic-native/in-app-browser';


@Injectable()
export class HistorialService {

  private historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {
    
  }

  agregarHistorial (texto:string) {
    let data = new ScanData(texto);

    this.historial.unshift(data);

    console.log(this.historial);

    this.abrirScan(0);
  }

  abrirScan( index:number ) {
    let scanData = this.historial[index];
    console.log(scanData);

    switch (scanData.tipo) {
      case "http":
      this.iab.create(scanData.info, "_system");

      break

      default:
        console.error("Tipo No Soportado");

    }
  }

  cargarHistorial() {
    return this.historial;
  }

}
