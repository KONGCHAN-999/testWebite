import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai"
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import React from 'react'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <section className="min-h-screen flex contect_b">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              HI, I'm Kongchan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Font end Developer and designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillGithub />
              <AiFillFacebook />
              <AiFillInstagram />
            </div>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-5 md:h-96 md:w-96">
            <img className='img_c' src="./images/dev-ed-wave.png" layout="fill" objectFit="cover" />
          </div>
        </section>

        <div className="box_skill">
          <div className="content_skill">
            <div className="skills_item">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium.</p>
            </div>
            <div className="skills_item">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium.</p>
            </div>
            <div className="skills_item">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium.</p>
            </div>
          </div>
        </div>

        <Contact />

        <div className="footer">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi maxime facilis quod veritatis quia doloremque sapiente aliquam officiis dolor iste, officia voluptatem ut magnam ipsum praesentium! Praesentium numquam molestias mollitia.</p>
        </div>

      </div>
    </>
  )
}

export default App
