import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/HeaderTabela'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Tabela: NextPage = () => {
  const [lista, setLista] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001').then((list) => {
      setLista(list.data.dados)
    })

  }, [])

  lista.map((dado) => {
    console.log(dado)
  })

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

            {lista.map((dado: any) => {
              return (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dado.id}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    26/10/2022 21:07:37
                    {dado.collectTimestamp}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {dado.bluetoothIsEnable ? 'Conectado' : 'Desconectado'}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {dado.carDescription}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {dado.connectObd ? 'Conectado' : 'Desconectado'}
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tabela
