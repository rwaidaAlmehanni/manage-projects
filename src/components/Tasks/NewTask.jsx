import { useState } from "react"

export default function NewTask({ onAddTask }) { 
    const [task, setTask] = useState('')

    const handleChangeTask = (e) => { 
        setTask(e.target.value)
    }

    const onClickAdd = () => { 
        onAddTask({ text: task }) 
        setTask('')
    }

    return (
        <div className="flex items-center gap-4">
            <input onChange={handleChangeTask} value={ task } type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button className="text-stone-700 hover:text-stone-950" onClick={ onClickAdd }>Add Task</button>
        </div>
    )
}