// The input form

'use client';

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault(); // prevents form submitting and reloading the entire app
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
                <svg>
                    <path d=" "/>
                </svg>
            </button>
        </form>
    );
}

export default Form;