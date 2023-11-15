import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function useTodos () {
    const [ todos, setTodos ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    function deleteHandler(id: number) {
        const deleteFecthTodo = async() => {
            const d = await supabase
                .from('todos')
                .delete()
                .eq('id', id)  
            
        }

        deleteFecthTodo()
            .catch(console.log) 
    }

    function addHandler() {

    }

    useEffect(() => {
        const fetchTodo = async() => {
            const data = await supabase.from("todos").select();
            setTodos(data.data)
            setIsLoading(false)
        } 
        
        fetchTodo()
            .catch(console.log)
    }, [])


    return { todos, setTodos, deleteHandler, isLoading }
}