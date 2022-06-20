import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'Pharmacies',
      url: '/tabs/tab2',
      icon: 'globe'
    },
    {
      title: 'Medicine',
      url: '/tabs',
      icon: 'paper-plane'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'play'
    },
    {
      title: 'Contact',
      url: '/contactus',
      icon: 'call'
    },
    {
      title: 'Health tips',
      url: '/tabs/tab3',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  ngOnInit() {

  }

  navigateP(url){
    this.router.navigateByUrl(url);
  }
}
