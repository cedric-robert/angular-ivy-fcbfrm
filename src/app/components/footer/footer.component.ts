import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  layoutForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.layoutForm = this.formBuilder.group({
      layoutSelection: 1,
    });
  }

  ngOnInit() {
    this.layoutForm.valueChanges.subscribe((value) => console.log(value));
  }
}
