import './TodoList.css'
import TodoListItem from './TodoListItem';
import CreateTodo from './CreateTodo';
import { useState,useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const defaultTodos = [
    { id: 58477, user: 1, text: "Wash dishes", done: false },
    { id: 64851, user: 1, text: "Bake a cake", done: true },
    { id: 59858, user: 2, text: "Make a website", done: true },
];

function TodoList() {
    const [todos, setTodos] = useState(defaultTodos);
    const {theme, setTheme} = useContext(ThemeContext);


    function deleteTodo(todo) {
        const newTodos = todos.filter(f => f.id !== todo.id);
        setTodos(newTodos);
    }

    function createTodo(todo) {
        const newTodos = [...todos];
        newTodos.push(todo);
        setTodos(newTodos);
    }

    console.log(todos);

    return (
        <div className={`todos ${theme}`}>
            <CreateTodo createTodo={createTodo} />
            <ul>
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                    />
                )}
            </ul>
        </div>
    );
}

export default TodoList;