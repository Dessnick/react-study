import React from 'react';
import TodoItem from './components/TodoItem';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [inputValue, setInputValue] = React.useState('');
  const [activeColor, setActiveColor] = React.useState('');

  React.useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const onAddTask = (text) => {
    const newTask = { id: 1, text, color: activeColor, completed: false };
    if (tasks.length) {
      const lastTask = tasks[tasks.length - 1];
      newTask.id = lastTask.id + 1;
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const onEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    const prevText = taskToEdit.text;
    const newText = window.prompt('Введите текст', prevText);
    if (!newText.trim()) {
      return;
    }

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      }),
    );
  };

  const onChangeStatus = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    let completed = taskToEdit.completed;
    completed = !completed;

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      }),
    );
  };

  const onRemoveTask = (id) => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleKeyUp = (event) => {
    if (event.target.value.trim() && event.key === 'Enter') {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks.length ? (
          tasks.map((obj) => (
            <TodoItem
              key={obj.id}
              id={obj.id}
              text={obj.text}
              color={obj.color}
              onChangeStatus={() => onChangeStatus(obj.id)}
              onEdit={() => onEditTask(obj.id)}
              onRemove={() => onRemoveTask(obj.id)}
            />
          ))
        ) : (
          <p>Список задач пуст. Введите задачу в поле ввода.</p>
        )}
        <div className="todo-input">
          <input
            autoFocus
            type="text"
            placeholder="Текст задачи..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyUp={handleKeyUp}
          />
          <ul>
            {colors.map((color) => (
              <li
                key={color}
                className={`todo-color ${color} ${color === activeColor ? 'active' : ''}`}
                onClick={() => setActiveColor(color)}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
