import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {RouterModule,} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppServices } from './app.service';
import { InterceptorService } from './interceptor.service';
import { FilterPipe } from './app.filterPipe';
import { AuthGaurd } from './app.authgaurd';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatStepperModule} from '@angular/material/stepper';
import { TasksComponent } from './tasks/tasks.component';
import { Task2Component } from './task2/task2.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MoviessearchComponent } from './moviessearch/moviessearch.component';
import {MatDialogModule} from '@angular/material/dialog';


const router : AppRoutingModule=[

]
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TasksComponent,
    Task2Component,
    MoviessearchComponent
   // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatGridListModule,
  MatBottomSheetModule,
  MatStepperModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule
   // FilterPipe
   
   // RouterModule.forRoot(router)
  ],
  providers: [AppServices,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi:true
  },AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
