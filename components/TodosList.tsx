'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, getKeyValue} from "@nextui-org/react";
import Link from 'next/link'
import styles from "../app/modules/styles.module.css";
import Todos from '../app/interfaces/Todos.jsx'
import React from "react";
import { EditIcon } from '../components/EditIcon'

const columns = [
    {
        key: "id",
        label: "ID"
    },
    { 
        key: "description",
        label: "DESCRIPTION"
    },
    { 
        key: "created_at",
        label: "CREATED"
    },
    { 
        key: "modify_at",
        label: "MODIFIED"
    },
    {
        key: "actions",
        label: "ACTIONS"
    },
];
export default function TodosList({todos}: Todos) {   
    const renderCell = React.useCallback((item: any, columnKey: string) => {
        const cellValue = item[columnKey];
        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Link href="/edit/[id]" as={`/edit/${item.id}`}>
                            <Tooltip content="Edit user">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EditIcon />
                                </span>
                            </Tooltip>
                        </Link>
                    </div>
                );
            case "modify_at":
                return (
                    <div className="flex">
                        { new Date(cellValue).toDateString() }
                    </div>
                );
            default:
                return cellValue;
    }}, []);

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
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
    )

}