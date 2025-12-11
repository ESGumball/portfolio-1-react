import avatar from '../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faGithub  } from '@fortawesome/free-brands-svg-icons';

const social = [
  {
    href: "#myfb", label: <FontAwesomeIcon icon={faSquareFacebook} />
  },
  {
    href: "#mygit", label: <FontAwesomeIcon icon={faGithub} />
  },
]

const Home = () => {
  return (
    <section id="home" className=" bg-sky-100 py-16 min-h-screen">
        <div className="container flex flex-col-reverse lg:flex-row gap-10 justify-between mx-auto px-10 lg:px-20 w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="font-medium leading-tight text-3xl space-y-3 max-w-160">
                <h1>Hello, It's me <span className="text-sky-500 font-bold">ESGUMBALL</span></h1>
                <h1>I'm a fullstack developer!</h1>
                <p className='text-xl font-normal'> 
                  "Sinh viên CNTT định hướng Web Developer, đang học hỏi và xây dựng dự án cá nhân.
                  Xây dựng sản phẩm web hiệu quả, đang tìm cơ hội internship, ..."
                </p>
                <div className='flex gap-3'>
                  {social.map((social) => (
                    <a
                    className='hover:scale-120 transition'
                    href={social.href}
                    key={social.href}>
                      {social.label}
                    </a>
                  ))}
                </div>
                <button className='text-xl font-bold cursor-pointer bg-sky-200 text-sky-500 rounded-2xl w-40 p-2
                hover:scale-110 transition hover:bg-sky-300 hover:text-sky-600'>
                  Download CV
                </button>
              </div>
            </div>
            <div>
                <img src={avatar} className='w-160 rounded-4xl' />
            </div>
        </div>
    </section>
  )
}

export default Home