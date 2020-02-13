import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {ToastModule} from 'primeng/toast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  homePage=false;
  packagePage=false;
  continent:string;
  successMessage:string = null;
  constructor(private router: Router,private messageService: MessageService) { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }
  getPackages(){
    this.packagePage=true;
    this.router.navigateByUrl('/packages/'+this.continent);
  }

  showInfo() {
    this.successMessage = "Thank you for subscribing. Updates will be sent to the subscribing Email ID"
    this.messageService.add({severity:'info', summary: this.successMessage, detail:''});
  }

}
