import type { NextPage } from 'next'
import Head from 'next/head'
import Header  from '../components/HeaderTabela'
import Link from 'next/link';

const TabelaDetalhada: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#00aad4ff]'>
      <Header />

      <div className='flex flex-col w-full h-[90vh] justify-center items-center'>
        <Head>
          <title>Tabela Detalhada - Gerenciamento de Frotas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='flex w-[90%] justify-end'>
          <Link href="/tabela">
            <span className='text-[#00aad4ff] bg-white hover:shadow-xl p-2 rounded-full transition-all mb-4 cursor-pointer'>Visualizar Tabela Simplificada</span>
          </Link>
        </div>

        <table className="w-[90%] text-center shadow-xl">

            <thead className="border-b bg-gradient-to-r from-[#056f92] to-[#063954] text-white">
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  ID
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Data de coleta de dados
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Bluetooth
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Carro
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Obd Conectado
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Latitude
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Longitude
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Distância
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Versão Elm
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Etanol %
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Nível de Combustível
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Odômetro
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  RPM
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Velocidade
                </th>
                <th scope="col" className="text-sm font-medium text-white px-2 py-4">
                  Tempo de viagem
                </th>
              </tr>

            </thead>

            <tbody>

              <tr className="bg-white border-b">
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  1
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  26/10/2022 21:07:37
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  Conectado
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  FUSCA
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  Conectado
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  -29.7183354
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  -53.8082999
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  173 Km
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  ELM327 v2.1
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  21.18
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  null
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  8627
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  1344.5
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  50
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  18.82
                </td>
              </tr>

              <tr className="bg-white border-b">
              <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  2
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  26/10/2022 21:38:50
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  Conectado
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  FERRARI
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  Conectado
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  -11.7183354
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  -30.8082999
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  200 Km
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  ELM327 v2.1
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  09.22
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  null
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  9333
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  10520
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  105
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  22.44
                </td>
              </tr>

            </tbody>
          </table>
      </div>
    </div>
  )
}

export default TabelaDetalhada
