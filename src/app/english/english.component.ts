import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'tr-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
	dire:string;
  	localType:string;
  	trans:string;
	constructor(private translate: TranslateService) {
    	translate.setDefaultLang("en");
	}

	switchLanguage(language: string) {
		localStorage.setItem("lang", language);
		localStorage.setItem('direction', this.dire);
		this.translate.use(language);
  	}

	ngOnInit() {
		this.dire="ltr";
		this.trans=localStorage.getItem('direction');
	
		if(this.trans=="rtl"){
		this.dire="rtl";
		}
		else{
		this.dire="ltr";
		}
	}


	eng()
	{
		this.dire="ltr"
		this.switchLanguage("en");
	}
	ara()
	{
		this.dire="rtl";
		this.switchLanguage("ar");
	}
}
