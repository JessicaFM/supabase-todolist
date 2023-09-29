'use client'
import {useState} from 'react';
import { createClient } from '@supabase/supabase-js'
import { Input, Button } from "@nextui-org/react";
import styles from '../app/modules/styles.module.css'
import TodoListProps from '../app/interfaces/Todos.jsx'


export default function Filter({onAddTodo}: TodoListProps) {
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
        const { error } = await supabase
        .from('todos')
        .insert({ description: newTodo })
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