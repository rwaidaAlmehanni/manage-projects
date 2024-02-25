import Button from './Button'
import noPrjectImage from '../assets/no-projects.png'

const NoProjectSelected = ({ onCreate }) => { 
    return (
        <div className="mt-24 text-center w-2/3 m-0">
            <img className="w-16 h-16 object-contain mx-auto" src={ noPrjectImage } alt="No project image"/>
            <h2 className="text-xl font-bold uppercase md:text-xl text-stone-600">No Project Selected</h2>
            <p className="text-stone-600 mb-4">Select a project or create new one.</p>
            <p className="text-center"><Button onClick={ onCreate }>Create New Project</Button></p>
        </div>
    )
}
export default NoProjectSelected