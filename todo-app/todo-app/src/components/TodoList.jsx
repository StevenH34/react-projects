function TodoList({todos, setTodos}) {
    return (
        <ol className="todo-list">
            {todos && todos.length > 0 ? (
                todos.map((item, index) => (
                    <Item key={index} item={item} setTodos={setTodos} /> 
                ))
            ) : (
                <p>No Todos</p>
            )}
        </ol>
    );
}

// Item component
function Item({item, setTodos}) {
    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };
    return (
        <li id={item?.id} className="todo-item">
            <button className="todo-item-left" onClick={completeTodo}>
                <p style={ item.isCompleted ? { textDecoration: "line-through" } : {} }>
                    {item?.title}
                </p>
            </button>
            <div className="todo-item-right">
                <button>
                    <span className="visually-hidden">Edit</span>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                </button>
            </div>
        </li>
    );
}

export default TodoList;