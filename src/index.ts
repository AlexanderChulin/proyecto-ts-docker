import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.clear();

console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);

// Mostrar lista inicial
collection.getTodoItems(true).forEach(item => item.printDetails());

// Agregar tarea
let newId: number = collection.addTodo("Go to gym");

// Marcar como completada
collection.markComplete(newId, true);

console.log("\nAfter adding and completing a task:");
collection.getTodoItems(true).forEach(item => item.printDetails());

// Eliminar completadas
collection.removeComplete();

console.log("\nAfter removing completed tasks:");
collection.getTodoItems(true).forEach(item => item.printDetails());