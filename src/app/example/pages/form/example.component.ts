import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { ISelect, IUserInfo } from '../../interfaces/example.interface';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  genders: ISelect[] = [
    { value: 'm', label: 'Maculino' },
    { value: 'f', label: 'Femenino' },
  ]

  form: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    last_name: ['', [ Validators.minLength(3) ]],
    document: ['', [ Validators.required, Validators.minLength(10) ]],
    email: ['', [ Validators.required, Validators.pattern(this.emailPattern) ]],
    gender: ['', [ Validators.required ]],
    age: ['', [ Validators.min(0), Validators.max(100) ]],
    hobby: ['', [ Validators.required ]]
  })

  constructor(
    private fb: FormBuilder,
    private exampleService: ExampleService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form.reset({
      name: 'Edwin',
      last_name: 'Figueroa',
      document: '1234567890',
      email: 'edwin@gmail.com',
      gender: 'm',
      age: '25',
      hobby: 'leer',
    })

    this.getInfo();
  }

  openDialog(title = 'Guardado', message = 'Se guardo la información!', background = 'green', info: IUserInfo): void {
    const dialog = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title,
        message,
        background,
        info
      }
    });
  }

  onlyNumbers(event: KeyboardEvent ) {
    if(Number(event.key) >= 0 && Number(event.key) <= 9) return true;
    return false;
  }

  validInput(nameInput: string, errorName: string) {
    return this.form.controls[nameInput]?.invalid && this.form.controls[nameInput]?.touched && this.form.controls[nameInput].hasError(errorName);
  }

  resetInput(inputs: string | string[]) {
    if(typeof inputs === 'string') this.form.get(inputs)?.setValue('')
    else inputs.forEach(imput => this.form.get(imput)?.setValue(''))
  }

  getInfo() {
    this.exampleService.getInfo().subscribe(response => console.log(response))
  }

  submitForm() {
    if(this.form.get('gender')?.value !== 'm') this.resetInput('age');
    this.exampleService.saveInfo(this.form.value);

    this.openDialog(undefined,undefined,undefined,this.form.value);
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

}
