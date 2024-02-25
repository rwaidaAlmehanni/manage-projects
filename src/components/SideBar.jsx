import Button from './Button'

const SideBar = ({ onCreate, projects, onSelectProject, selectedId }) => { 
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={ onCreate }>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClass = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
                    if (selectedId === project.id) { 
                        cssClass+= 'text-stone-200 bg-stone-800'
                    } else {
                        cssClass+= 'text-stone-600' 
                    }
                    return (
                        <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)}
                                className={cssClass}>{project.title}</button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
export default SideBar