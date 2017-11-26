import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  public photos : any;
  public base64Image : string;

  constructor(public navCtrl: NavController, private camera : Camera) {

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
          //confirm.present();
      }, (err) => {
        console.log(err);
      });
  }
}
