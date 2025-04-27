import { Component, ViewChild, inject } from '@angular/core';
import { ICustomerData, ISenderData } from '../../model/schema';
import { ValidationComponent } from '../../shared/dialog/validation/validation.component';
import {MatTableDataSource, MatTableModule,} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, MatTableModule,MatPaginatorModule,MatDialogModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['Account Name', 'Collection Name', 'Sender Name','Narration', 'Transaction Date', 'Status'];
  dataSource = new MatTableDataSource<ISenderData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router : Router){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    const dialogRef =this.dialog.open(ValidationComponent,{
      data:{}
    });

    // dialogRef.afterAllClosed().subscribe((result: string) => {
    //   if(result !== undefined || result === "")
    //     console.log(result);
    // });
  }
  goToLayout() :void {
    this.router.navigate(['/layout']);
  }
}
const ELEMENT_DATA: ISenderData[] = [
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Deposit"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
  {"accountName":"African Artists’ Foundation", "collectionName":"African Artists’ Foundation - Design for public schools", "senderName": "Elizabeth Okey","narration":"Payment IFO foundation","transanctionDate" :new Date(),"Status": "Withdrawal"},
];
