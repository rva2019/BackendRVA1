import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoziloComponent } from './components/primer-components/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primer-components/automobil/automobil.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule, 
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatGridListModule,
         MatExpansionModule, 
         MatTableModule,
         MatToolbarModule,
         MatOptionModule,
         MatSelectModule,
         MatSnackBarModule,
         MatDialogModule,
         MatInputModule,
         MatCheckbox,
         MatNativeDateModule,
         MatCheckboxModule,
         MatDatepickerModule,
         MatPaginatorModule,
         MatSortModule} from '@angular/material';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './components/stavka-porudzbine/stavka-porudzbine.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArtiklService } from './services/artikl.service';
import { ArtiklDialogComponent } from './components/dialogs/artikl-dialog/artikl-dialog.component';
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './components/dialogs/dobavljac-dialog/dobavljac-dialog.component';
import { DobavljacService } from './services/dobavljac.service';
import { PorudzbinaDialogComponent } from './components/dialogs/porudzbina-dialog/porudzbina-dialog.component';
import { PorudzbinaService } from './services/porudzbina.service';
import { StavkaPorudzbineService } from './services/stavkaPorudzbine.service';
import { StavkaPorudzbineDialogComponent } from './components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';

const Routes = [
  { path: 'artikl', component: ArtiklComponent },
  { path: 'dobavljac', component: DobavljacComponent },
  { path: 'porudzbina', component: PorudzbinaComponent },
  { path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    PorudzbinaDialogComponent,
    StavkaPorudzbineDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(Routes)
  ],
  entryComponents: [ArtiklDialogComponent,
                    DobavljacDialogComponent,
                    PorudzbinaDialogComponent,
                    StavkaPorudzbineDialogComponent
  ],
  providers: [ArtiklService,
              DobavljacService, 
              PorudzbinaService,
              StavkaPorudzbineService],

  bootstrap: [AppComponent]
})
export class AppModule { }
