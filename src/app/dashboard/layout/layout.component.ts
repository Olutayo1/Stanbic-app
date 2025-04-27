import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule, } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ICustomerData } from '../../model/schema';
import { ValidationComponent } from '../../shared/dialog/validation/validation.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatDialogModule,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['Account Name', 'Collection Name', 'Terminal Date', 'Account Number', 'Action'];
  dataSource = new MatTableDataSource<ICustomerData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.openDialog();
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    const dialogRef = this.dialog.open(ValidationComponent, {
      data: {}
    });

    // dialogRef.afterAllClosed().subscribe((result: string) => {
    //   if(result !== undefined || result === "")
    //     console.log(result);
    // });
  }
}
const ELEMENT_DATA: ICustomerData[] = [
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
  { "accountName": "African Artists’ Foundation", "accountNumber": '0123456789', "collectionName": "African Artists’ Foundation - Design for public schools", "terminalDate": new Date() },
];


