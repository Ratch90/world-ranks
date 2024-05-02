import { Component, inject } from '@angular/core';
import { CountriesService } from '../../shared/services/countries.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true
})
export class HomeComponent {
    private countriesService = inject(CountriesService);
}
