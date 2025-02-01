import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-ang';
  city:string=''
  dcity:String=''
  temp_c:string=''
  wind:string=''
  humidity:string=''
  image:string=''

  setCity(event:any){
      this.city=event.target.value
  }

  checkWeather(){
    this.dcity=this.city;

    fetch(`https://api.weatherapi.com/v1/current.json?key=e6eb017219fc4137994164431250102&q=${this.dcity}`)
    .then((response)=> response.json())

    .then((data)=>{
      this.temp_c ="Temperature: " +data.current.temp_c + "C"
      this.image=data.current.condition.icon
      this.wind = "Wind Speed: " + data.current.wind_kph + "km/hr"
      this.humidity ="Humidity: " +data.current.humidity + "%"
    })
  }

}