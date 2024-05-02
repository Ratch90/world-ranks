import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [LogoComponent]
})
export class HeaderComponent {}
