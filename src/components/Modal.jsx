import { forwardRef, useRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"
import Button from './Button'

const Modle = forwardRef(({ children, buttonCaption }, ref) => { 
    const dialogRef = useRef()

    useImperativeHandle(ref, () => { 
        return {
            open() { 
              dialogRef.current.showModal()  
            }
        }
    })

    return createPortal(
        <dialog ref={ dialogRef } className="backdrop:bg-stone-900/90 p-5 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{ buttonCaption }</Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    )
})
export default Modle