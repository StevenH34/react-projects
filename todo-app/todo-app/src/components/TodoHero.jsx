function TodoHero({todosComplete, totalTodos}) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todosComplete}/{totalTodos}
            </div>
        </section>
    );
}

export default TodoHero;