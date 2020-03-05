import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { FirebaseProvider } from "../../providers/firebase";
import { LoadingProvider } from "../../providers/loading";

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html"
})
export class FeedPage {
  user;
  assuntos;
  categorias;
  amount = 0;
  items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private firebaseProvider: FirebaseProvider,
    private loadingProvider: LoadingProvider,
    private modalCtrl: ModalController
  ) {
    this.loadingProvider.present().then(() => {
      this.getCurrentUser();
      this.getAssuntos();
    });
  }

  //Refresh page
  refresh(refresher) {
    refresher.complete();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }


  //-------------------------------------------------------------------------------------------------//
  //										OPEN PAGES                                               //
  //-------------------------------------------------------------------------------------------------//
  //Open assuntos
  openAssuntos = () =>
    this.modalCtrl.create("MenuPage", { modal: true }).present();
  //Open assuntos
  openQuestoes = () =>
   this.modalCtrl.create("QuestoesPage", { modal: true }).present();
  //Open products
  openProfiles = () =>
    this.modalCtrl.create("ProfilePage", { modal: true }).present();
  //Open cart
  openCart = () => 
  this.modalCtrl.create("CartPage", { modal: true }).present();


  //-------------------------------------------------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------//

  ionViewDidLoad = () => {
    //Build cart
    this.storage.get("cart_pizza_app").then(res => {
      if (res) {
        this.items = res;

        //Amount
        let i = 0;
        for (i; i < this.items.length; i++) {
          let price = parseFloat(this.items[i].price);
          this.amount = this.amount + price;
        }
      }
    });
  };

  //Get current user data
  getCurrentUser = () => {
    this.storage.get("user_pizza_app").then(user => {
      this.user = user;
    });
  };

  //List all Assuntos to slides
  getAssuntos = () => {
    this.firebaseProvider.getAssuntos().subscribe(res => {
      this.loadingProvider.dismiss();
      this.assuntos = res;
    });
  }

  //Convert to price format
  toPrice = price => parseFloat(price).toFixed(2);
}
