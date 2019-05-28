import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './to-do/components/to-do.component';
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { ToDoReducer} from './to-do/store/todo.reducers';
import { FormsModule } from '@angular/forms';
import { ToDoEffects } from './to-do/store/todo.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([ToDoEffects]),
    StoreModule.forRoot({ todos: ToDoReducer },
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
