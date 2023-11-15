'use client'
import TodosList from "../components/TodosList";
import Filter from "../components/Filter";
import useTodos  from '../app/hooks/useTodos'

export default function Main() {
    const { todos, setTodos, deleteHandler, isLoading } = useTodos()

    return (
        <>
        <Filter 
            todos={todos}/>
        <TodosList 
            todos={todos} 
            setTodos={setTodos}
            deleteHandler={deleteHandler}
            isLoading={isLoading}
            />
        </>   
    )
}