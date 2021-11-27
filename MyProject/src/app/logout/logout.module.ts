import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { EmployeeService } from 'src/app/service/employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogoutComponent } from './logout.component';
import { LogoutRouting } from './logout.routing';
import { AccountService } from '../service/account.service';


@NgModule({
  declarations: [
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LogoutRouting,
    BrowserAnimationsModule,   
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    EmployeeService,
    AccountService
  ],
  
})


export class LogoutModule {

}