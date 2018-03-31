import { Component } from '@angular/core';

//Components
import { ToastController, Platform } from 'ionic-angular';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Servicios
import { HistorialService } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, 
    private toastCtrl: ToastController, 
    private platform: Platform, private historialService:HistorialService) {

  }

  scan() {
    console.log("Realizando Scan");

    if (!this.platform.is('cordova')) { //Cordova isn't present.
    // this.historialService.agregarHistorial("geo: 9.94959, -94.854884");
    this.historialService.agregarHistorial( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log("result: ", barcodeData.text);
      console.log("format: ", barcodeData.format);
      console.log("Cancelled: ", barcodeData.cancelled);
          
      if (barcodeData.cancelled == false && barcodeData.text!= null) {
      
      }

     }).catch(err => {
         console.log('Error', err);
         this.mostrarError("Error: "+err);
     });

  }

  mostrarError(mensaje:string) {
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 2500
      });
      toast.present();
  }

}
