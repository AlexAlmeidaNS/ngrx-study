import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect,  ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import ToDo from '../to-do.model';
import {
  CreateToDo,
  CREATE_TODO,
  CREATE_TODO_ERROR,
  GetToDo,
  GetToDoSuccess,
  GET_TODO,
  GET_TODO_ERROR,
  CreateToDoSuccess,
  ToDoError
} from './todo.action';

@Injectable()
export class ToDoEffects {
  constructor(private http: HttpClient, private action$: Actions) {}
  private ApiURL: string = 'https://localhost:44360/api/ToDo';

  @Effect()
  GetToDos$: Observable<Action> = this.action$.pipe(ofType<GetToDo>(GET_TODO),
    mergeMap(action =>
      this.http.get(this.ApiURL).pipe(
        map(data => {
          console.log('Effects Http call: ', data);
          return new GetToDoSuccess(data as ToDo[]);
        }),
        catchError(error => {
          console.error('Http Call Error: ', error);
          return of(new ToDoError(GET_TODO_ERROR, error.message));
        })
      )
    )
  );

  @Effect()
  CreateToDos$: Observable<Action> = this.action$
    .pipe(ofType<CreateToDo>(CREATE_TODO), 
      mergeMap(action =>
        this.http
          .post(this.ApiURL, JSON.stringify(action.payload), {
            headers: { 'Content-Type': 'application/json' }
          })
          .pipe(
            map(data => {
              console.log('Effects Post Http call success: ', data);
              return new CreateToDoSuccess(action.payload as ToDo);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new ToDoError(CREATE_TODO_ERROR, error.message));
            })
          )
      )
    );
}