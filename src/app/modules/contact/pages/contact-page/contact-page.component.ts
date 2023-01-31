import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit  {

   email = new FormControl('', [Validators.required, Validators.email]);
   name = new FormControl('', [Validators.required ,Validators.minLength(5) , Validators.maxLength(42)]);
   feedbackMsg = new FormControl('', [Validators.required ,Validators.minLength(5) , Validators.maxLength(600)]);

  feedbackForm: FormGroup = this.builder.group({
    name: this.name,
    email: this.email,
    feedbackMsg : this.feedbackMsg
  });

  constructor(private builder: FormBuilder) { }
 
  ngOnInit(): void{
  console.log('hi there')
 }


 onSubmitFeedback() {
  console.log(this.feedbackForm.value);
  
  this.feedbackForm.reset();
  Object.keys(this.feedbackForm.controls).forEach(key => {
    this.feedbackForm.controls[key].setErrors(null)
  });
       
}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  reset() {
    
    this.feedbackForm.reset();
    
  }

}


