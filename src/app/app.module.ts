import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeComponent } from './see/see.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { FilterPipe } from './see/pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    SeeComponent,
    EditComponent,
    NewComponent,
    ViewComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
