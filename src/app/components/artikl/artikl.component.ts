import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Artikl } from '../../models/artikl';
import { ArtiklService } from '../../services/artikl.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ArtiklDialogComponent } from '../dialogs/artikl-dialog/artikl-dialog.component';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
  dataSource: MatTableDataSource<Artikl>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public artiklService: ArtiklService) { }

  public loadData() {
    this.artiklService.getAllArtikl().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  ngOnInit() {
    this.loadData();
  }

  public openDialog(flag: number, id: number, naziv: string, proizvodjac: string) {
    const dialogRef = this.dialog.open(ArtiklDialogComponent, 
                  {data: { id: id, naziv: naziv, proizvodjac: proizvodjac }}
    );
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1)
        this.loadData();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
