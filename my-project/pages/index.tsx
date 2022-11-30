import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Layout from './layout'
import NivoBar from '../components/index/nivo-charts/nivo-bar'
import NivoPie from '../components/index/nivo-charts/nivo-pie'

export default function Index() {
  return (
    <div>
      <Layout>
        <Navbar page="index" />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="flex border-2 rounded-lg border-gray-300 flex-wrap md:justify-between justify-center shadow-lg">
            <NivoBar />
            <div className="flex flex-col sm:w-[20vw] lg:w-[40vw]">
              <h1 className="flex text-2xl font-bold pt-4 px-6">Was?</h1>
              <p className="flex py-6 px-6">
                Das Haushaltsbuch erfasst alle deine Ausgaben und stellt diese
                anhand von Diagrammen und Kennzahlen uebersichtlich dar
              </p>
            </div>
          </div>
          <div className="flex border-2 rounded-lg border-gray-300 flex-wrap md:justify-between justify-center shadow-lg">
            <NivoPie />
            <div className="flex flex-col sm:w-[20vw] lg:w-[40vw]">
              <h1 className="flex text-2xl font-bold pt-4 px-6">Wieso?</h1>
              <p className="flex py-6 px-6">
                Durch die Darstellung und Aufschluesselung deiner Ausgaben
                kannst du Bereiche finden, in denen du Geld sparen kannst
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-2 rounded-lg border-gray-300 flex-wrap md:justify-between justify-center shadow-lg my-6">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col sm:w-[40vw] lg:w-[60vw] justify-center">
              <h1 className="flex text-2xl font-bold pt-4 px-6">
                Jetzt kostenlos anmelden!
              </h1>
              <p className="flex py-6 px-6">
                Diese Seite ist noch im Aufbau. Wenn du dich jetzt anmelden
                wuerdest, bekommst du Zugriff auf die Beta-Version, sobald sie
                fertig ist.
              </p>
            </div>

            <form className="p-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}
