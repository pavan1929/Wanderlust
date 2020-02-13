import { Component, OnInit } from '@angular/core';
//import necessary modules


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})

export class PackagesComponent implements OnInit {
  //initialise required variables
  showItinerary:Boolean=false;

  

  constructor() { }
  ngOnInit() {
    
  }
  
  getitinerary(){
    this.showItinerary=true;
  }
  //code methods to get packages and hot deals and their details

}

