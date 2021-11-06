import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit , AfterViewInit {

  signIn : FormGroup;
  signUp : FormGroup;
  isPending: boolean;
  phonePattern = "^01[0-9]{9}";
  typeSelected = [''];

  constructor(private router : Router) { }

  ngOnInit(){

    this.signIn = new FormGroup({
      email : new FormControl(null , [Validators.required , Validators.email]) ,
      password : new FormControl(null , Validators.required )
    });

    this.signUp = new FormGroup({
      basicInfo : new FormGroup({
        accountType : new FormControl(null , Validators.required , this.typeValidation as AsyncValidatorFn),
        username : new FormControl(null , Validators.required),
        email : new FormControl(null , [Validators.required , Validators.email]) ,
        password : new FormControl(null , Validators.required ) ,
      }), 

      additionalInfo : new FormGroup({
        phone : new FormControl(null , [Validators.required, Validators.pattern(this.phonePattern)]),
        address : new FormControl(null , Validators.required),
        spec : new FormControl(null , Validators.required , this.specValidation as AsyncValidatorFn)
      })


    })

  }


  ngAfterViewInit(){
    const signinBtn = document.querySelector('.signinBtn') as HTMLElement;
    const signupBtn = document.querySelector('.signupBtn') as HTMLElement;
    const formbox = document.querySelector('.formbox') as HTMLElement;

    signupBtn.addEventListener('click' , () =>{
      formbox.classList.add('active')
    });

    signinBtn.addEventListener('click' , () => {
      formbox.classList.remove('active')

    })
  }

  onSubmit (form : FormData){
    console.log(form);
    location.href = "home"
  }

  onSelect(event : any) {
    this.typeSelected = event.target.value;
  }


  typeValidation(control :FormControl) : Promise<any>{
    const promise = new Promise<any>((resolve) =>{
      setTimeout(() => {
        if (control.value === 'default'){
         resolve({defaultSelected : true});
        }
        else {
          resolve(null);
        }

    }, 300);
    }) 
    return promise
  }

  specValidation(control :FormControl) : Promise<any>{
    const promise = new Promise<any>((resolve) =>{
      setTimeout(() => {
        if (control.value === 'default'){
         resolve({defaultSelected : true});
        }
        else {
          resolve(null);
        }

    }, 300);
    }) 
    return promise
  }
}
