import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  layoutForm: FormGroup;
  @Output() layoutSelected = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.layoutForm = this.formBuilder.group({
      layoutSelection: 1,
    });
  }

  ngOnInit() {
    this.layoutForm.controls.layoutSelection?.valueChanges.subscribe((value) =>
      this.layoutSelected.emit(value)
    );
  }
}
