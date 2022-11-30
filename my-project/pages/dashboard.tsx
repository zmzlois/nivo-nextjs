import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import NivoBar from '../components/index/nivo-charts/nivo-bar'
import Layout from './layout'

export default function Dashboard() {
  return (
    <div>
      <Layout>
          <Navbar page="dashboard" />
          <NivoBar />
      </Layout>
    </div>
  )
}
