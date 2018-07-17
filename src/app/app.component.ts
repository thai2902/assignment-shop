import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    // Add extra icons that not existed in material theme
    iconRegistry.addSvgIcon(
      'wishlist',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/wishlist.svg'));
  }
}
