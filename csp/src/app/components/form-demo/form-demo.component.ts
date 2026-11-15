import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { strongPassword } from '../../validators/password.validator';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { Store } from '@ngrx/store';
import { selectCartCount } from '../../cart/cart.selectors';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form-demo',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, CapitalizePipe],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private apiService: ApiService
  ) {
    effect(() => {
      console.log(this.val1());
    });
  }

  // cartCount$ = this.store.select(selectCartCount);

  regForm!: FormGroup;
  submitted: boolean = false;
  title: any = 'registration';

  val1: any = signal(0);

  apiResponse: any = null;
  apiError: string = '';
  apiLoading: boolean = false;

  deployApiResponse: any = null;
  deployApiError: string = '';
  deployApiLoading: boolean = false;

  increament() {
    this.val1.set(20);
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, strongPassword]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      skills: this.fb.array([
        this.fb.control('', [Validators.required])
      ]),
    });
  }

  get skills() {
    return this.regForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(
      this.fb.control('', [Validators.required])
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    this.increament();
    this.submitted = true;
    if (this.regForm.valid) {
      console.log(this.regForm.value);
    } else {

    }
  }


  testLaravelApi() {
    this.apiLoading = true;
    this.apiResponse = null;
    this.apiError = '';

    this.apiService.testApi().subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.apiLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.apiError = 'Laravel API connection failed!';
        this.apiLoading = false;
      }
    });
  }

  testLaravelDeployApi() {
    this.deployApiLoading = true;
    this.deployApiResponse = null;
    this.deployApiError = '';

    this.apiService.deployApi().subscribe({
      next: (response) => {
        this.deployApiResponse = response;
        this.deployApiLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.deployApiError = 'Laravel Deploy API connection failed!';
        this.deployApiLoading = false;
      }
    });
  }

}
