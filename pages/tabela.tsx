import type { NextPage } from 'next'
import Head from 'next/head'
import Header  from '../components/HeaderTabela'
import Link from 'next/link';

const Tabela: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#00aad4ff]'>
      <Header />

      <div className='flex flex-col w-full h-[90vh] justify-center items-center'>
        <Head>
          <title>Tabela - Gerenciamento de Frotas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='flex w-[70%] justify-end'>
          <Link href="/tabelaDetalhada">
            <span className='text-[#00aad4ff] bg-white hover:shadow-xl p-2 rounded-full transition-all mb-4 cursor-pointer'>Visualizar Tabela Detalhada</span>
          </Link>
        </div>

        <table className="w-[70%] text-center shadow-xl">

            <thead className="border-b bg-gradient-to-r from-[#056f92] to-[#063954] text-white">
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  ID
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Data de coleta de dados
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Bluetooth
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Carro
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Obd Conectado
                </th>
              </tr>

            </thead>

            <tbody>

              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  1
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  26/10/2022 21:07:37
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Conectado
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  FUSCA
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Conectado
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  2
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  26/10/2022 21:38:50
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Conectado
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  FERRARI
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Conectado
                </td>
              </tr>

            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Tabela
