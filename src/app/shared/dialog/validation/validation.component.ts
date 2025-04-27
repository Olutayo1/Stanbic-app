import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatDialogModule, RouterOutlet],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.scss'
})
export class ValidationComponent implements OnInit {
 loginForm!: FormGroup;
 readonly dialog = inject(MatDialog);

 constructor(private fb : FormBuilder,private router: Router) {
  
 }
 ngOnInit(): void {
  this.loginForm = this.fb.group({
    accountName : ["",[Validators.required]],
    password : ["",[Validators.required]],
  });
}
closeModal() {
this.dialog.closeAll();
}
submitRequest(){
  this.router.navigate(['/info']);
  this.dialog.closeAll();
}
}
