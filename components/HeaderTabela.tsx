import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import logo from '../img/logo.png';

const Header: NextPage = () => {
  return (
    <div className='flex flex-row items-center justify-between bg-white w-full shadow-xl p-2 pl-8 pr-8'>
        <Image src={logo} width={130} height={50} />

        <Link href="/">
            <span className='cursor-pointer hover:text-[#db0000] transition-colors'>SAIR</span>
        </Link>
    </div>
  )
}

export default Header
