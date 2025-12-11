import { useState } from "react";
import project1 from '../../assets/projects/project1.png'
import project2 from '../../assets/projects/project2.png'
import project3 from '../../assets/projects/project3.png'
import project4 from '../../assets/projects/project4.png'
import project5 from '../../assets/projects/project5.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const project = [
    {   
        id: 1,
        img: project1,
        name: 'Portfolio 1',
        mota: 'Đây là portfolio đầu tiên của tôi sử dụng SPA',
    },
    {   
        id: 2,
        img: project2,
        name: 'Portfolio 2',
        mota: 'Đây là portfolio thứ hai của tôi sử dụng routes',
    },
    {
        id: 3,
        img: project3,
        name: 'Dashboard',
        mota: 'Đây là dự án dashboard của tôi',
    },
    {
        id: 4,
        img: project4,
        name: 'Cái gì đó',
        mota: 'Đây là một cái gì đó',
    },
    {
        id: 5,
        img: project5,
        name: 'Cái gì đó',
        mota: 'Đây là một cái gì đó',
    },
]


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
            setCurrentIndex((prevIndex) => 
                prevIndex === project.length - 1 ? 0 : prevIndex + 1
            );
        };
    const prev = () => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? project.length - 1 : prevIndex - 1
            );
        };

  return (
    <section id="project" className=" bg-sky-100 py-16 min-h-screen">
        <div className="container flex flex-col items-center mx-auto space-y-3">
            <h1 className='text-4xl font-bold'> Dự án của tôi </h1>
            <h2 className='text-2xl font-medium'> Dưới đây là những dự án từ đơn giản đến phức tạp mà tôi đã làm được</h2>
            <div className='flex items-center space-x-4'>
                <button
                onClick={prev}
                className="rounded-full bg-sky-200 p-2 cursor-pointer hover:scale-110 transition hover:bg-sky-300
                hover:text-sky-200 text-sky-600">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className="overflow-hidden w-[600px] h-[300px]">
                    <div
                        className="flex gap-20 transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 578}px)` }}>
                        {project.map((p) => (
                            <img
                                key={p.id}
                                src={p.img}
                                className="w-[500px] h-[300px] rounded-2xl object-cover shrink-0"
                            />
                        ))}
                    </div>
                </div>
                <button
                onClick={next}
                className="rounded-full bg-sky-200 p-2 cursor-pointer hover:scale-110 transition hover:bg-sky-300
                hover:text-sky-200 text-sky-600">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <h3 className="text-xl font-bold">
                {project[currentIndex].name}
            </h3>
            <p className="text-lg max-w-[400px] text-center">
                {project[currentIndex].mota}
            </p>
        </div>
    </section>
  );
};

export default Projects