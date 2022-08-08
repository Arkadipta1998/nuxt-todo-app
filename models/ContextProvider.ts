import { Ref } from "vue";
import { Todo } from "./Todo";

export interface ContextProvider {
  editTodo: Ref<Todo | null>;
  todos: Ref<Todo[]>;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (newTodo: Todo) => void;
}
