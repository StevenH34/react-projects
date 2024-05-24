function TodoList({todos}) {
    return (
        <ol className="todo-list">
            {todos && todos.length > 0 ? (
                todos.map((item, index) => <Item key={index} item={item} />)
            ): (
                <p>No Todos</p>
            )}
        </ol>
    );
}

// Item component
function Item({item}) {
    return (
        <li id={item?.id} className="todo-item">
            <button>
                <svg>
                    <circle cx="12" cy="12" r="10" fillRule="nonzero"/>
                </svg>
                <p>{item?.title}</p>
            </button>
            <div className="todo-item-right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                        <path d=" "/>
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d=" "/>
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default TodoList;