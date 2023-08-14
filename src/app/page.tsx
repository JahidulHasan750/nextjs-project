'use client'
import {useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation';
export default function Home() {
  const [inputVal,setInputVal]=useState('');
  const {push}= useRouter()
  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }
  return (
    <div className=' text-center pt-10 flex flex-col gap-8 mt-32 h-80 w-96 mx-auto bg-red-500'>
      <div>
        <h1 className='font-bold text-4xl'>Enter your name</h1>
      </div>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <input className='text-black px-4 mx-10' value={inputVal} onChange={(e)=>setInputVal(e.target.value)} type="text" placeholder='Type Your Name' />
        <button className='bg-blue-500 w-48 mx-auto rounded-lg' type='submit'>Predic Data</button>
      </form>
    </div>
  )
}
