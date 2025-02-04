import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class WeatherService{


    private apikey = 'e6eb017219fc4137994164431250102'
    private apiurl = 'http://api.weatherapi.com/v1/current.json'
    constructor(){}

    fetchWeather(city:string): Promise<any>{
        return fetch(`${this.apiurl}?key=${this.apikey}&q=${city}`)
        .then(response=>{
            return response.json()
        })
        .then(data => data.current)
    }

} 