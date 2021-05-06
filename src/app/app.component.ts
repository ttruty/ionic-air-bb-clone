import { Plugins, Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform,)
    {
      this.initializeApp();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
    })
  }

  onLogout() {
    console.log("Logout");
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
