/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.tod = [];
  }
  add(todo) {
    this.tod.push(todo);
  }
  remove(indexOfTodo) {
    this.tod.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (this.tod[index] != undefined) {
      this.tod.splice(index, 1, updatedTodo);
    }
  }
  get(indexOfTodo) {
    return this.tod[indexOfTodo] == undefined ? null : this.tod[indexOfTodo];
    // console.log(this.todo[indexOfTodo]);
  }
  getAll() {
    return this.tod;
  }
  clear() {
    this.tod = [];
  }
}

module.exports = Todo;
