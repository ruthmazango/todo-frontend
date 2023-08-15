import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2/lib/sweetalert2.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskEditComponent,
    TaskDetailComponent
   //, HomeComponent
],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {
      metaReducers: [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() })
    //,
    //EffectsModule.forFeature([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
