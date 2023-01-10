import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isHome = true

  constructor(private _router: Router){ }

  ngOnInit(){
    //tramite il metodo navigate della classe Router posso dire alla mia app di aprire la rotta 'studenti/home' 
    //non appena l'applicazione viene lanciata (onInit) e dunque anziché andare su 'localhost' va direttamente in
    //localhost/studenti/home
    this._router.navigate(['studenti/home']);
  }
}
