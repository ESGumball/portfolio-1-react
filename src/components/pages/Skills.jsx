import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3, 
    faJs, 
    faReact,
    faPhp,
    faNodeJs,faPython

} from '@fortawesome/free-brands-svg-icons';
import { faWind, faCode, faDatabase, faLeaf, faRobot, faStar, faFlag, faLanguage } from '@fortawesome/free-solid-svg-icons';


const frontend = [
    {name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} />, tiendo: 90},
    {name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3} />, tiendo: 70},
    {name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} />, tiendo: 70},
    {name: 'Tailwind', icon: <FontAwesomeIcon icon={faWind} />, tiendo: 70},
    {name: 'React.js', icon: <FontAwesomeIcon icon={faReact} />, tiendo: 50},
]

const backend = [
    {name: 'PHP', icon:<FontAwesomeIcon icon={faPhp} />, tiendo: 0},
    {name: 'Node.js', icon:<FontAwesomeIcon icon={faNodeJs} />, tiendo: 0},
    {name: 'Laravel', icon:<FontAwesomeIcon icon={faCode} />, tiendo: 0},
    {name: 'Python', icon:<FontAwesomeIcon icon={faPython} />, tiendo: 50},
]

const Database = [
    {name: 'mySQL', icon:<FontAwesomeIcon icon={faDatabase} />, tiendo: 80},
    {name: 'MongoDB', icon:<FontAwesomeIcon icon={faLeaf} />, tiendo: 0},
]

const Tools = [
    {name: 'ChatGPT', icon:<FontAwesomeIcon icon={faRobot} />, tiendo: 100},
    {name: 'Gemini', icon:<FontAwesomeIcon icon={faStar} />, tiendo: 100},
    {name: 'Visual Stuido Code', icon:<FontAwesomeIcon icon={faCode} />, tiendo: 90},
]

const Languages = [
    {name: 'Tiếng Việt', icon:<FontAwesomeIcon icon={faFlag} />, tiendo: 100},
    {name: 'English', icon:<FontAwesomeIcon icon={faLanguage} />, tiendo: 50},
]

const button = [
    {name: 'Frontend', desc: frontend},
    {name: 'Backend', desc: backend},
    {name: 'Database', desc: Database},
    {name: 'Tools', desc: Tools},
    {name: 'Languages', desc: Languages},
]



const Skills = () => {
    const [selected, setSelected] = useState(button[0]);

    
  return (
    <section id='skill' className="scroll-mt-17 bg-sky-200 py-16 min-h-screen"> 
        <div className="container flex flex-col items-center mx-auto space-y-3">
            <h1 className='text-4xl font-bold'> Skills </h1>
            <h2 className='text-2xl font-medium'> Đây là những kĩ năng mà tôi đạt được </h2>
            <div className="flex gap-20">
                {button.map((but) => (
                    <button
                    key={but.name}
                    onClick={() => setSelected(but)}
                    className={`rounded-2xl p-2 cursor-pointer font-bold
                    hover:bg-blue-300 transition hover:scale-110 hover:text-sky-100 ${selected.name === but.name
                        ? "bg-blue-300 text-sky-100"
                        : "text-sky-500 bg-blue-50"
                    }`}>
                        {but.name}
                    </button>
                ))}
            </div>
            {selected && (
                <div className="mt-6 text-lg text-center font-medium space-y-2">
                    {selected.desc.map((item) => (
                        <div 
                            key={item.name}
                            className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm ">
                            {item.icon && (
                                <span className="text-3xl text-sky-600">{item.icon}</span>
                            )}
                            <div className="flex flex-col items-start">
                                <div className="flex justify-between w-full"> 
                                    <span className="font-semibold text-gray-700">{item.name}</span>
                                    <span className="font-semibold text-gray-700">{item.tiendo}%</span>
                                </div>
                                <div className="relative bg-amber-50 w-100 h-2 rounded-full">
                                    <div className="absolute top-0 left-0 bg-amber-200 h-2"
                                    style={{ width: `${item.tiendo}%` }}> </div>
                                </div>
                            </div>
                        </div>   
                    ))}
                </div>
            )}
        </div>
    </section>
  )
}

export default Skills