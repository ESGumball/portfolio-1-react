import React from 'react'

const Contact = () => {
  return (
    <section className='bg-sky-100 py-16 min-h-screen'>
        <div className='container flex flex-col mx-auto items-center space-y-4'>
            <h1 className='text-4xl font-bold'> Contact me ! </h1>
            <h2 className='text-2xl font-medium'> Vui lòng điền đầy đủ thông tin để liên hệ với tôi ! </h2>
            <form className='rounded-4xl bg-sky-300 w-1/2 p-10 space-y-5 '>
                <input type='text' placeholder='Your name' className='rounded-2xl bg-blue-500 p-3 w-full
                focus:outline-sky-100'></input>
                <input type='text' placeholder='Your email' className='rounded-2xl bg-blue-500 p-3 w-full
                focus:outline-sky-100'></input>
                <textarea placeholder='your messenger' className='rounded-2xl bg-blue-500 p-3 w-full
                focus:outline-sky-100'></textarea>
                <button className='flex mx-auto p-2 rounded-2xl bg-sky-500 font-bold text-sky-100 
                cursor-pointer hover:bg-sky-600 transition
                hover:scale-110 hover:text-sky-200 items-center'> Submit </button>
            </form>
        </div>
    </section>
  )
}

export default Contact