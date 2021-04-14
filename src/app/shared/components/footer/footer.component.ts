import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('nicolas');
    this.emailField.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }

  ngOnInit(): void {
  }

}
