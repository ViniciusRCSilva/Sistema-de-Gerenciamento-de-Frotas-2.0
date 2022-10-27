import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../img/logo.png';
import Header  from '../components/Header'

const OQueSomos: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#00aad4ff]'>
        <Header />
        <div className='flex flex-col h-[90vh] items-center justify-center py-2'>
            <Head>
                <title>O que somos - Gerenciamento de Frotas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='flex flex-col bg-white rounded-xl shadow-2xl p-10'>
                <div className='mb-5'>
                <Image src={logo} width={450} height={180} />
                </div>

                <div className='flex flex-col items-start'>
                    <span className='text-4xl mb-4 font-bold'>O que somos?</span>
                    <span className='w-[420px] text-center'>Somos uma empresa de gerenciamento de frotas, sejam eles de motos, carros ou caminhões. Aqui nós estamos na área a frente da estratégia e da administração desses meios de transporte e de seus motoristas, garantindo que tudo funcione com eficiência, economia e segurança.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OQueSomos
