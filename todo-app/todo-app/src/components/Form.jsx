// The input form
'use client';

function Form({setTodos}) {
    const handleSubmit = (event) => {
        event.preventDefault(); // prevents form submitting and reloading the entire app
        const value = event.target.todo.value; // get value from input
        const newTodo = {
            title: value,
            id: self.crypto.randomUUID(),
            isCompleted: false
        };
        setTodos((prevTodos) => [ ...prevTodos, newTodo ]);

        event.target.reset();   // reset form
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input 
                    type="text" 
                    id="todo" 
                    name="todo" 
                    placeholder="Add a new todo" 
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
            </button>
        </form>
    );
}

export default Form;