import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import gif from '../img/vehicle_moving_animation.gif';
import { UserCircle } from 'phosphor-react';
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login - Sistema de Gerenciamento de Frotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col bg-slate-50 rounded-xl shadow-2xl'>
        <Image src={gif} width={600} height={400} className='rounded-t-xl' />

        <div className='flex flex-col items-center m-10'>
          <span className='mb-4 text-xl'>Sistema de Gerenciamento de Frotas</span>
          <div className='mb-4 flex flex-row items-center'>
            <UserCircle className='text-4xl mr-2' />
            <input type="text" placeholder='ID DE USUÁRIO' className='focus:outline-0 border-2 border-black focus:border-[#34a3f7] text-black p-2 rounded-md transition-all' />
          </div>

          <div className='w-60 h-1 bg-[#34a3f7] opacity-50 rounded-full mb-4'/>

          <span className='text-[#1972e5] hover:scale-105 hover:border hover:border-[#1972e5] hover:shadow-xl p-2 rounded-full transition-all'>
            <Link href="/tabela">ENTRAR</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
