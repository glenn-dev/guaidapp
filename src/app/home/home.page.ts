import { Component } from "@angular/core";
import { ToastController, AlertController } from "@ionic/angular";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from "@ionic-native/admob-free/ngx";
import { AdsService } from "../service/ads.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  frases: any;
  counter = 0;
  constructor(
    public adsService: AdsService,
    public toastController: ToastController,
    public alertController: AlertController,
    public admob: AdMobFree
  ) {
    this.adsService.BannerAd();
    this.frases = [
      "¡¡Vamos bien!!",
      "¡¡Vamos bien!!",
      "¡¡Vamos bien!!",
      "¡¡Cese de Usurpación!!",
      "¡¡Gobierno de Transición!!",
      "¡¡Elecciones Libres!!",
      "¡¡Acciones de Calle!!",
      "¡¡Ayuda Humanitaria!!",
      "¡¡Artículo 233!!",
      "¡¡Artículo 333!!",
      "¡¡Artículo 350!!",
      "¡¡Vamos muy bien!!",
      "¡¡Muera la opresión!!",
      "¡¡Estamos cada vez más cerca!!!"
    ];
  }
  async generarFrase() {
    this.counter++;
    let random = this.getRandomInt(this.frases.length);
    if(this.counter === 10){
      this.counter = 0;
      console.log(this.counter)
      this.adsService.InterstitialAd();
    }
    const toast = await this.toastController.create({
      message: this.frases[random],
      duration: 500,
      color: "dark",
      cssClass: "toaster"
    });
    toast.present();
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "¿Qué esperabas?",
      message: "No hago nada en la vida real mucho menos aquí :)",
      buttons: ["OK"],
      mode: "md"
    });

    await alert.present();
  }
}
