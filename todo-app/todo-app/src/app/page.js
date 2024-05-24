"use client";

import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TodoHero from "@/components/TodoHero";
import TodoList from "@/components/TodoList";

function Home() {
    // useState hook to store todos
    const [todos, setTodos] = React.useState([]); 
    const todosCompleted = todos.filter(todo => todo.isCompleted === true ).length;
    const totalTodos = todos.length;

    return (
        <div className="wrapper">
            <Header />
            <TodoHero todosCompleted={todosCompleted} totalTodos={totalTodos} />
            <Form setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default Home;
