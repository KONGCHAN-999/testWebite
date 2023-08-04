import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a0xau9e', 'template_o4gjltm', form.current, 'CSKHZ4P_WGDa6Rr0d')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };
    return (
        <div className="contact">
            <main className='h-screen flex item-center justify-center'>
                <form ref={form} onSubmit={sendEmail} className='bg-slate-100 flex rounded-lg w-1/2 h-max font-latoRegular'>
                    <div className='flex-1 text-gray-700 p-20'>
                        <h1 className='text-3xl pb-2'>Let's get stated👋</h1>
                        <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, impedit!</p>
                        <div className='mt-6'>
                            <div className="pb-4">
                                <label className='block text-sm pb-2' htmlFor="name">Name</label>
                                <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500' type="text" name='name' placeholder='Enter your name' />
                            </div>
                            <div className="pb-4">
                                <label className='block text-sm pb-2' htmlFor="email">Email</label>
                                <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500' type="email" name='email' placeholder='Enter your email' />
                            </div>
                            <div className="pb-4">
                                <label className='block text-sm pb-2' htmlFor="message">Message</label>
                                <textarea className='border-2 border-gray-500 p-2 rounded-md w-full ' name="message" id="" cols="60" rows="7" placeholder='Message'></textarea>
                            </div>
                            <button type='submit'class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Message</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Contact