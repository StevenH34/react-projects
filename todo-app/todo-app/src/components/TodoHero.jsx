function TodoHero({todosCompleted, totalTodos}) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todosCompleted}/{totalTodos}
            </div>
        </section>
    );
}

export default TodoHero;