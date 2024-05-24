import React from "react";

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
    const [editing, setEditing] = React.useState(false); // Create state
    const inputRef = React.useRef(null);

    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    };

    const handleEdit = () => { setEditing(true); }; // Set editing state to true
    React.useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus(); // positions the cursor in the input field
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);

    const handleInputChange = (event) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id ? { ...todo, title: event.target.value } : todo
            )
        );
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
    };

    const handleInputBlur = () => {
        setEditing(false);
    }


    return (
        <li id={item?.id} className="todo-item">
            {editing ? (
                <form className="edit-form" onSubmit={handleInputSubmit}>
                    <label htmlFor="edit-todo">
                        <input 
                            ref={inputRef}
                            type="text"
                            name="edit-todo"
                            id="edit-todo"
                            defaultValue={item?.title}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
            ) : (
                <>
                    <button className="todo-items-left" onClick={completeTodo}>
                        <p style={ item.isCompleted ? { textDecoration: "line-through" } : {} }>
                            {item?.title}
                        </p>
                    </button>
                    <div className="todo-items-right">
                        <button onClick={handleEdit}>
                            <span>Edit</span>
                        </button>
                        <button onClick={handleDelete}>
                            <span>Delete</span>
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoList;