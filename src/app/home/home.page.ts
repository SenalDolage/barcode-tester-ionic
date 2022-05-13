import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private barcodeScanner: BarcodeScanner) {}

  async scanDoor() {
    // if (!environment.production) {
    //   return (window && window['doornr']) || '2.6.Wc';
    // }

    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
        return barcodeData.text.toString();
      })
      .catch((err) => {
        console.log('Error', err);
      });

    // const barcodeData = await this.barcodeScanner.scan();
    // if (barcodeData.text.toString().trim() !== '') {
    //   console.log(barcodeData.text.toString());
    //   return barcodeData.text.toString();
    // } else {
    //   throwError('QR code scan result invalid');
    // }
  }
}
