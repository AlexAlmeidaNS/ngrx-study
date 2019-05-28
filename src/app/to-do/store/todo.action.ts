import { Action } from "@ngrx/store";
import ActionWithPayload from "../../action.payload";
import ToDo from "../to-do.model";

export const GET_TODO = '[ToDo] GET_TODO';
export const GET_TODO_SUCCESS = '[ToDo] GET_TODO_SUCCESS';
export const GET_TODO_ERROR = '[ToDo] GET_TODO_ERROR';

export const CREATE_TODO = '[ToDo] CREATE_TODO';
export const CREATE_TODO_SUCCESS = '[ToDo] CREATE_TODO_SUCCESS';
export const CREATE_TODO_ERROR = '[ToDo] CREATE_TODO_ERROR';

export class GetToDo implements Action {
    readonly type = GET_TODO;

    constructor() { }
}

export class CreateToDo implements ActionWithPayload<ToDo> {
    readonly type = CREATE_TODO;
    payload: ToDo;

    constructor(payload: ToDo) {
        this.payload = payload;
    }
}

export class GetToDoSuccess implements ActionWithPayload<ToDo[]> {
    readonly type = GET_TODO_SUCCESS;
    payload: ToDo[];

    constructor(payload: ToDo[]) {
        this.payload = payload;
    }
}

export class CreateToDoSuccess implements ActionWithPayload<ToDo> {
    readonly type = CREATE_TODO_SUCCESS;
    payload: ToDo;

    constructor(payload: ToDo) {
        this.payload = payload;
    }
}


export class ToDoError implements Action {
    readonly type: string;
    readonly message: string;

    constructor(type: string, message: string) {
        this.message = message;
        this.type = type;
    }
}