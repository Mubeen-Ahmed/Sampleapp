import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuccessComponent } from './success.component';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css'],

})

export class LogincomponentComponent {

  data: Object = [];

  constructor(private _router: Router) { };

  formSubmit() {
    if (this.data.username == "admin" && this.data.password == "admin") {
      console.log("Hello Admin");
      this._router.navigate(["login/success"]);
    }

    else {
      console.log("Who are you ? ");
      this._router.navigate(["login/pagenotfound"]);
    }

  }

}
