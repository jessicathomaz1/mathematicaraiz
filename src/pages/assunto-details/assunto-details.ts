import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';
import { Assunto } from '../../model/assunto';
import { LoadingProvider } from '../../providers/loading';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
	selector: 'page-assunto-details',
	templateUrl: 'assunto-details.html',
})
export class AssuntoDetailsPage implements AfterViewInit {
	id;
	assuntos = new Object();
	modal = false;
	obg: any;


	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public af: AngularFirestore,
		private viewCtrl: ViewController
	) {
		console.log('===>>>>', this.navParams.get('data'));
	}

	//Close modal
	close() {
		this.viewCtrl.dismiss()
	}
	ngAfterViewInit() {
		this.assuntos = this.navParams.get('data')
		console.log(this.assuntos);
	}
}
