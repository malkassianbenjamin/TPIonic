import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  takeVideo() {
    const options : CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.VIDEO
    }
    this
      .camera
      .getPicture(options)
      .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this
          .photos
          .push(this.base64Image);
        this
          .photos
          .reverse();
          let photoOk = this
            .alertCtrl
            .create({
              title: 'La photo a été enregistrée',
              message: '',
              buttons: [
                {
                  text: 'Ok',
                }
              ]
            });
          photoOk.present();

          //confirm.present();
      }, (err) => {
        console.log(err);
      });
  }
}
