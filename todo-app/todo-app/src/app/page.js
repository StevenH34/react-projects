import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TodoHero from "@/components/TodoHero";
import TodoList from "@/components/TodoList";

function Home() {
    return (
        <div className="wrapper">
            <Header />
            <TodoHero todosCompleted={0} totalTodos={0} />
            <Form />
            <TodoList todos={[]} />
        </div>
    );
}

export default Home;
