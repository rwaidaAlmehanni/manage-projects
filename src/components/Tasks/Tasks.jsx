import { useState } from 'react'
import NewTask from "./NewTask"

export default function Tasks({ tasks, onAdd, onDelete }) { 
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={ onAdd } />
            {tasks.length === 0 && <p className="text-stone-800 my-4">This project dose not has any task yet.</p>}
            {tasks.length > 0 && <ul className="bg-stone-100 rounded-sm p-2 mt-4">
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between items-center hover:bg-stone-200 px-2 py-1">
                        <span className="text-stone-500">{task.text}</span>
                        <button onClick={() => onDelete(task.id)}
                            className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>
                ))}
            </ul>}
        </section>
    )
}