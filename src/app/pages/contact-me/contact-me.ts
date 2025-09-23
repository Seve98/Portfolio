import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-me',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css'
})
export default class ContactMe {
contactForm:FormGroup;
successMessage:string='';
errorMessage:string='';

  constructor(private fb:FormBuilder) {
this.contactForm=this.fb.group({
  name:['', Validators.required],
  email:['',[Validators.required, Validators.email]],
  message:['', Validators.required]
})}
  onSubmit(){
    if(this.contactForm.valid){
      const {name,email,message}=this.contactForm.value
      emailjs.send(
        'service_1gg5znw',
        'template_jeo991g',
        {name,email,message},
        'oGr5I6SMEWP7tVR9E'
      ).then(()=>{
        this.successMessage='Messaggio inviato con successo!';
        this.errorMessage='';
        this.contactForm.reset();

        setTimeout(() => {
          this.successMessage='';
        }, 5000);
      }).catch(err=>{
        console.error(err);
        this.successMessage='';
        this.errorMessage='Si è verificato un errore durante l\'invio del messaggio';

        setTimeout(() => {
          this.errorMessage='';
        }, 5000);
      })


      
    }
  }
}
