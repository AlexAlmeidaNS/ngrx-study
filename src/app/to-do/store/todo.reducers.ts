import ActionWithPayload from "../../action.payload";
import ToDo from "../to-do.model";
import { ToDoState, initializeState } from "./todo.state";
import * as ToDoActions from "./todo.action";
import { Action } from "@ngrx/store";

const initialState = initializeState();

export function ToDoReducer(state: ToDoState = initialState,
    action: Action) {

    switch (action.type) {
        case ToDoActions.GET_TODO:            
            return { ...state, Loaded: false, Loading: true };

        case ToDoActions.CREATE_TODO:
            return ({
                ...state,
                ToDoList: state.ToDoList.concat((action as ActionWithPayload<ToDo[]>).payload),
                Loaded: false, Loading: true
            });

        default:
            return state;
    }
}