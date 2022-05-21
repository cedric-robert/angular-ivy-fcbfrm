import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css'],
})
export class Test01Component implements OnInit {
  test01Form = this.formBuilder.group({
    valueInput: '',
  });
  resultat: string | null = null;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit(): void {
    console.log('testing...');
    const value = this.test01Form.controls.valueInput.value;
    /* this.resultat = `hello: ${value}`;
    console.log(this.resultat); */
    this.resultat = this.test01();
    console.log('test finished.');
  }

  onClear(): void {
    this.test01Form.reset();
    this.resultat = null;
  }

  private test01(): string {
    const users: User[] = [{ firstname: 'user1' }];

    const users2: User[] | undefined = undefined;
    return users2?.find((user) => user.firstname === 'user1').firstname;
  }
}
