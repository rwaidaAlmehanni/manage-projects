import { forwardRef } from "react"

const Input = forwardRef(({ isTextarea = false, title, content, type }, ref) => { 
    const classes = 'border-b-2 w-full p-1 rounded-sm text-stone-600 bg-stone-200 border-stone-300 focus:outline-none focus:border-stone-600'
    return (
        <p className="flex flex-col gap-1 my-4">
             <label className="text-sm font-bold uppercase text-stone-500">{ title }</label>
            { isTextarea ?
                <textarea ref={ ref } className={ classes } />
                :
                <input ref={ ref } type={type} className={ classes } />
            }
        </p>
    )
})
export default Input