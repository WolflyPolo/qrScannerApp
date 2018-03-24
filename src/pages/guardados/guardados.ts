import { Component } from '@angular/core';

import { HistorialService } from "../../providers/historial/historial";

import { ScanData } from "../../models/scan-data.model";

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[] = [];

  constructor( private historialService:HistorialService ) {

  }
  
  ionViewDidLoad() {
    this.historial = this.historialService.cargarHistorial();
  }

  abrirScan(index:number) {
    this.historialService.abrirScan(index);
  }

}
