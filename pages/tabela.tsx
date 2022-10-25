import type { NextPage } from 'next'
import Head from 'next/head'

const Tabela: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sistema de Gerenciamento de Frotas - Tabela</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <table className="w-[80%] text-center shadow-xl">

          <thead className="border-b bg-gradient-to-r from-[#056f92] to-[#063954] text-white">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                ID
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Data de coleta de dados
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Carro
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Velocidade
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Odometro
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
                FUSCA
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                20
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                18
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
                FERRARI
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                150
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                100
              </td>
            </tr>

          </tbody>
        </table>
    </div>
  )
}

export default Tabela
