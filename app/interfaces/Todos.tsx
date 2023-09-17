export type Todo = {
    id: number,
    created_at: Date,
    modify_at: Date,
    description: string
}

export type Todos = {
    items: Todo[]
}

export type TodoListProps = {   
    onAddTodo: (newTodo: string) => void
}