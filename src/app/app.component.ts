import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatTableDataSource, MatTableModule,} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ICustomerData } from './model/schema';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ValidationComponent } from './shared/dialog/validation/validation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatTableModule,MatPaginatorModule,MatDialogModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stanbic-ops-app';
}

