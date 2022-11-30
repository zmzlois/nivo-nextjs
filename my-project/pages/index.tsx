import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Layout from './layout'
import NivoBar from '../components/nivo-bar'

export default function Index() {
  return (
    <div>
      <Layout>
        <Navbar page="index" />
        <div className="flex sm:flex-col lg:flex-row sm:gap-6 lg:gap-12">
          <div className="flex border-2 rounded-lg border-gray-300 flex-wrap justify-between scale-100 hover:scale-110 ease-in duration-100">
            <NivoBar />
            <div className="flex flex-col sm:w-[20vw] lg:w-[40vw]">
              <h1 className="flex text-2xl font-bold pt-4 px-6">Was?</h1>
              <p className="flex py-6 px-6">
                Das Haushaltsbuch erfasst alle deine Ausgaben und stellt diese
                anhand von Diagrammen und Kennzahlen uebersichtlich dar
              </p>
            </div>
          </div>
          <div className="flex border-2 rounded-lg border-gray-300 flex-wrap justify-between scale-100 hover:scale-110 ease-in duration-100">
            <NivoBar />
            <div className="flex flex-col sm:w-[20vw] lg:w-[40vw]">
              <h1 className="flex text-2xl font-bold pt-4 px-6">Was?</h1>
              <p className="flex py-6 px-6">
                Das Haushaltsbuch erfasst alle deine Ausgaben und stellt diese
                anhand von Diagrammen und Kennzahlen uebersichtlich dar
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
