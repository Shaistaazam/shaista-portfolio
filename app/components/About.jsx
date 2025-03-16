import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-10'>
    <h4 className='text-center mt-10 text-lg font-serif'>Introduction</h4>
    <h2 className='text-center text-5xl font-serif mt-3 mb-2'>About Me</h2>
  
    <div className='flex w-full flex-col lg:flex-row items-center gap-10 my-10'>
  
    <div className='w-64 sm:w-80 rounded-3xl max-w-non'>
    <Image 
     src="/pick.jpg"  
     alt="Shaista Azam"
      width={150}  
      height={150}
     className='w-80 h-80 mt-6 ml-6' 
/>

   
    </div>
    <div className='mt-10 max-w-1-2xl font-serif'>
        <p className='mb-10 text-1xl' >
    I am an experienced Frontend Developer with over a 
    decade of <br />professional experties in the failed <br />  Throughout my career , i have had the
    privilege of collaborating <br /> to their sucess and growth.
    </p>


    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
{infoList.map(({icon, iconDark , title, description},
 index)=>(
    <li className='border-[3px] border-blue-700 rounded-xl p-6
     cursor-pointer hover:bg-lime-500 hover:translate-y-1 duration-500 hover:shadow-amber-50'
     key={index}>

        <Image src={icon} alt={title}  className='w-7 mt-3'/>
        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
        <p className='text-black text-sm'>{description}</p>

    </li>
 ))}
    </ul>
    <h4 className='my-6 text-gray-700 font-serif font-bold font-size'>Tools i use</h4>
    <ul className='flex items-center gap-3 sm:gap-5'> 
    {toolsData.map((tool,index)=>
    (
      <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500'
       key={index}>
        <Image src={tool}  alt='Tool' className='w-5
        sm:w-7'/>

      </li>  
    ))}    
    </ul>


    </div>


</div>

    </div>



  )
}

export default About