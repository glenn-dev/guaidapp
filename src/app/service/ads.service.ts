import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
 
 
@Injectable()
export class AdsService {
  interstitialConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    // isTesting: true,
    autoShow: false,
    id: "ca-app-pub-6879570052988444/7415744417"
  };
  constructor(
    private admobFree: AdMobFree,
    public platform: Platform
  ) { 
    this.admobFree.interstitial.config(this.interstitialConfig);
      //Prepare Ad to Show
      this.admobFree.interstitial.prepare()
        .then(() => {
          // alert(1);
        }).catch(e => alert(e));
 
  }
 
  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      autoShow: true,
      id: "ca-app-pub-6879570052988444/7551475785"
    };
    this.admobFree.banner.config(bannerConfig);
 
    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  } 
  InterstitialAd() {
    //Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.interstitial.show();
    })
      .catch(e => alert("isReady " + e));
  }
}