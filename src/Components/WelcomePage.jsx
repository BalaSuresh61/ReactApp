import './WelcomePage.css'
import { Link } from 'react-router-dom'
// import resume from '../../public/Bala_Suresh_CV.pdf'
import data from '../assets/sampleProject.json'
const WelcomePage = () => {
    return (
        <div className="welcome">
            <div className="welcome-container">
                
                <div className="projects">
                    <div className="links">
                    <h3 className='p1'> <a href="https://github.com/BalaSuresh61">Github</a></h3>
                    <h3 className='p2'> <a href="https://www.linkedin.com/in/k-bala-suresh-4a4623241/">LinkedIn</a></h3>

                    </div>
                    <div className="react-projects">
                        {data.map((proj)=>(<Link to={proj.endpoint} key={proj.name}><div className="project" >{<><h4>{proj.name}</h4><p>{proj.content}</p></>}</div></Link>
                            
                        ))}
                    </div>
                </div><div className="information">
                    <iframe src='src\assets\Bala_Suresh_resume.pdf' height="100%" width="100%"></iframe>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage