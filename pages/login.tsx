import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import gif from '../img/vehicle_moving_animation.gif';
import { UserCircle } from 'phosphor-react';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sistema de Gerenciamento de Frotas - Login</title>
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

          <input type="button" value="ENTRAR" className='bg-gradient-to-r from-[#1972e5] to-[#34a3f7] p-4 text-white rounded-full transition-all cursor-pointer hover:bg-gradient-to-r hover:from-[#34a3f7] hover:to-[#1972e5] hover:scale-105' />
        </div>
      </div>
    </div>
  )
}

export default Login
