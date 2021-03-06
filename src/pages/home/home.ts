import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photos : any;
  public base64Image : string;
  constructor(public navCtrl : NavController, private camera : Camera, private alertCtrl : AlertController) {}

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index) {
    let confirm = this
      .alertCtrl
      .create({
        title: 'Etes-vous sûr de vouloir supprimer la photo?',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
              this
                .photos
                .splice(index, 1);
              //return true;
            }
          }
        ]
      });
    confirm.present();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
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
