const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-items');
const completedList = document.getElementById('completed-items');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const task = document.getElementById('task-input').value;
  const desc = document.getElementById('desc-input').value;

  const todoItem = document.createElement('li');
  const todoText = document.createTextNode(`${task} - ${desc}`);
  todoItem.appendChild(todoText);

  const tickButton = document.createElement('button');
  const tickText = document.createTextNode('✓');
  tickButton.appendChild(tickText);
  tickButton.addEventListener('click', () => {
    completedList.appendChild(todoItem);
    todoItem.removeChild(tickButton);
    todoItem.removeChild(crossButton);
  });

  const crossButton = document.createElement('button');
  const crossText = document.createTextNode('✗');
  crossButton.appendChild(crossText);
  crossButton.addEventListener('click', () => {
    todoItem.remove();
  });

  todoItem.appendChild(tickButton);
  todoItem.appendChild(crossButton);
  todoList.appendChild(todoItem);

  document.getElementById('task-input').value = '';
  document.getElementById('desc-input').value = '';
});
