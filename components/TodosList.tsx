'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import styles from "../app/modules/styles.module.css";
import Todos from '../app/interfaces/Todos.jsx'

const columns = [
    {
        key: "id",
        label: "ID"
    },
    { 
        key: "description",
        label: "Description"
    },
    { 
        key: "created_at",
        label: "Created"
    },
    { 
        key: "modify_at",
        label: "Modified"
    }
];
export default function TodosList({todos}: Todos) {
    
    console.log(todos)
    return (
            <div className={styles.customTable}>
                <Table aria-label="Example table with dynamic content">
                    <TableHeader>
                        {columns.map((column) =>
                        <TableColumn key={column.key}>{column.label}</TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={todos}>
                        {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
    )

}