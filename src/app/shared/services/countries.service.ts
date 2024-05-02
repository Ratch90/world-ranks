import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    private httpClient = inject(HttpClient);

    fetchCountries(): Observable<Country[]> {
        return this.httpClient.get<Country[]>('https://restcountries.com/v3.1/all');
    }
}
