import { Component } from '@angular/core';

//Components
import { ToastController } from 'ionic-angular';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, 
    private toastCtrl: ToastController) {

  }

  scan() {
    console.log("Realizando Scan");

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
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
