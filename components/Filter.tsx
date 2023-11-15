'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { Input, Button } from "@nextui-org/react";
import styles from '../app/modules/styles.module.css'
import { Todo } from '../app/interfaces/Todos.jsx'


export default function Filter({onAddTodo}: TodoListProps) {
    const router = useRouter()
	const  [inputValue, setInputValue] =  useState('');
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    const addForm = () => {
        addNewTodo(inputValue)
    }

    const  handleChange = (event: any) => {
		setInputValue(event.target.value);
	};

    const addNewTodo = async (newTodo: string) => {
        const { data, error } = await supabase
        .from('todos')
        .insert({ description: newTodo })
        .select()
        if(!error) {
            let todo: Todo = {
                id: data[0].id,
                description: newTodo,
                created_at: data[0].created_at,
                modify_at: data[0].modify_at
            }
        } else {
            // TODO
        }
    };

    return (
        <div className={`${styles.filter} rounded-large`}>
            <div className="flex">
                <Input value={inputValue} onChange={handleChange} size="md" type="email" placeholder="New Todo" />
                <Button color="primary" size="md"
                    onClick={addForm}>
                    Add
                </Button>
            </div>
        </div>
    )
}