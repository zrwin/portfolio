import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <section id='home' className="max-w-[1080px] md:h-auto p-10 m-auto">
      <div className="flex flex-col md:flex-row items-center h-auto md:h-96 gap-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-semibold mb-2">It's me. <span className="text-5xl font-semibold text-blue-400">
          <Typewriter
                words={['Ziaur Rahman']}
                loop={3}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </span></h1>
          <p className="text-xl">FullStack Developer | MERN Stack</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-90 h-60 md:w-full md:h-80">
            <img
              src="/images/Ziaur_Rahman_Profile.jpeg"
              alt="Ziaur Rahman"
              className="w-full h-full object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
        <div className="mt-14 text-center">
          <FontAwesomeIcon icon={faArrowDown} className="text-4xl text-gray-500 animate-bounce" />
        </div>
    </section>
  );
}
