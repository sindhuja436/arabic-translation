import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';

@Component({
  selector: 'tr-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  localType:string;
  dir:string;

  constructor(private translate: TranslateService,private router : Router) {
    translate.setDefaultLang("en");
  }


  ngOnInit() {
    this.localType = localStorage.getItem('lang');
    this.translate.use(this.localType);

    console.log(this.localType);
  }
  toRoute(){
    // console.log("getting userType" + JSON.stringify(this.localType));
    // if(this.localType=='en'){
    //     this.router.navigate(['/']);
    // }else if(this.localType=='ar'){
    //     this.router.navigate(['/']);
    // }else{
    //   console.log("the usertype received is incorrect ");
    // }
         this.router.navigate(['/']);

  }

}
