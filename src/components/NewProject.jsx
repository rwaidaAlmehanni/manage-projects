import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({ onAdd, onCancle }) => { 
    const modalRef = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()

    const onClickSaveHandle = () => { 
        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const dueDate = dueDateRef.current.value
        const newProject = {
            id: Math.random(1, 10),
            title,
            description,
            dueDate, 
        }
        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') { 
            modalRef.current.open()
        }
        onAdd(newProject)
    }

    return (
        <>
        <Modal buttonCaption={'Okay'} ref={ modalRef }>
        <div>
          <h2 className="text-xl font-bold uppercase md:text-xl text-stone-600">Error Modal</h2>
          <p className="text-stone-600 mb-4 mt-6">Oop ... you added invalid data</p>
          <p className="text-stone-600 mb-4">Please be sure you entered all fields...</p>
        </div>
      </Modal>
        <div className="w-[35rem] mt-16">
            <main className="flex items-center justify-end gap-4 my-4">
                <li className="list-none">
                    <button className="text-stone-800 hover:text-stone-950" onClick={ onCancle }>
                        Cancel
                    </button>
                </li>
                <li className="list-none">
                    <button onClick={onClickSaveHandle}
                        className="rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
                        Save
                    </button>
                </li>
            </main>
            <div>
                <Input ref={ titleRef } title={'Name'} type={"text"} />
                <Input ref={ descriptionRef } title={'Description'} isTextarea={ true } />
                <Input ref={ dueDateRef } title={'Due Date'} type={"date"} />
            </div>
            </div>
            </>
    )
}
export default NewProject