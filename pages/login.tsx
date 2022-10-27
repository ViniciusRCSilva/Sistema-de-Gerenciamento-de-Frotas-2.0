import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../img/logo.png';
import { UserCircle } from 'phosphor-react';
import Link from 'next/link';
import { useState } from 'react';

const Login: NextPage = () => {
  const [id, setId] = useState('')

  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <Head>
        <title>Login - Gerenciamento de Frotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='flex flex-col bg-white rounded-xl shadow-2xl p-10'>
        <div className='mb-5'>
          <Image src={logo} width={450} height={180} />
        </div>

        <div className='flex flex-col items-center'>
          <span className='mb-4 text-xl'>Login</span>
          <div className='mb-4 flex flex-row items-center'>
            <UserCircle className='text-4xl mr-2' />
            <input type="text" onChange={event => setId(event.target.value)} placeholder='ID DE USUÁRIO' className='focus:outline-0 border-2 border-black focus:border-[#00aad4ff] text-black p-2 rounded-md transition-all' />
          </div>

          <div className='w-60 h-1 bg-[#00aad4ff] opacity-50 rounded-full mb-4'/>

          <Link href="/tabela">
            <button 
              disabled={id.length === 0}
              className='text-[#00aad4ff] hover:scale-105 hover:border hover:border-[#00aad4ff] hover:shadow-xl p-2 rounded-full cursor-pointer transition-all animate-pulse hover:animate-none disabled:opacity-50 disabled:animate-none disabled:scale-100 disabled:border-none disabled:shadow-none disabled:cursor-default disabled:text-black'>
              ENTRAR  
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
