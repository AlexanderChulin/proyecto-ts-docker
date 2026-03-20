"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoCollection_1 = require("./todoCollection");
const todoItem_1 = require("./todoItem");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);
// Mostrar lista inicial
collection.getTodoItems(true).forEach(item => item.printDetails());
// Agregar tarea
let newId = collection.addTodo("Go to gym");
// Marcar como completada
collection.markComplete(newId, true);
console.log("\nAfter adding and completing a task:");
collection.getTodoItems(true).forEach(item => item.printDetails());
// Eliminar completadas
collection.removeComplete();
console.log("\nAfter removing completed tasks:");
collection.getTodoItems(true).forEach(item => item.printDetails());
