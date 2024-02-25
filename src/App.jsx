import { useState } from 'react'
import SideBar from './components/SideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectsDetails, setProjectsDetails] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  const handleAddTask = (newTask) => { 
    setProjectsDetails((prev) => ({
      ...prev,
      tasks: [...prev.tasks, { ...newTask, id: Math.random(), projectId: prev.selectedProjectId }]
    }))
  }

  const handleDeleteTask = (id) => { 
  setProjectsDetails((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id)
    }))
  }

  const handleDeleteProject = () => { 
    setProjectsDetails((prev) => ({ ...prev, selectedProjectId: undefined, projects: prev.projects.filter((project) => project.id !== prev.selectedProjectId )}))
  }
  
  const handleSelectProject = (id) => { 
   setProjectsDetails((prev) => ({ ...prev, selectedProjectId: id }))
  }

  const onClickCreate = () => { 
    setProjectsDetails((prev) => ({ ...prev, selectedProjectId: null }))
  }

  const onCancelCreate = () => { 
    setProjectsDetails((prev) => ({ ...prev, selectedProjectId: undefined })) 
  }

  const addNewProjectHandle = (newProjet) => { 
    setProjectsDetails((prev) => ({ ...prev, projects: [ ...prev.projects, newProjet ]}))
  }

  const selectedProject = projectsDetails.projects.find((project) => project.id === projectsDetails.selectedProjectId)
  const selectedProjectTasks = projectsDetails.tasks.filter((task) => (task.projectId === projectsDetails.selectedProjectId))
  
  let content = (<SelectedProject project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasksList={ selectedProjectTasks}
  />)

  if (projectsDetails.selectedProjectId === null) {
    content = (<NewProject onAdd={addNewProjectHandle}
                          onCancle={onCancelCreate} />)
  } else if (projectsDetails.selectedProjectId === undefined) { 
    content = <NoProjectSelected onCreate={ onClickCreate } />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onCreate={onClickCreate}
               projects={projectsDetails.projects}
               selectedId={ projectsDetails.selectedProjectId }
               onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
