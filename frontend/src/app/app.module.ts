import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,MatInputModule,MatOptionModule, MatSelectModule,MatIconModule,MatDividerModule,MatSnackBarModule, MatCardModule,MatButtonModule,MatExpansionModule, MatFormFieldModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { Routes } from '@angular/router';
import { createComponent } from '@angular/compiler/src/core';

import {IssueService } from  './issue.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,MatInputModule,MatOptionModule, MatSelectModule,MatIconModule,MatTableModule,MatDividerModule,
    MatSnackBarModule, MatCardModule,MatButtonModule,MatExpansionModule, MatFormFieldModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
