import React from 'react'
import dynamic from 'next/dynamic'
import homeStyles from '../styles/Home.module.css'

import barchartData from './nivo-charts/nivo-data/barchart-data.json'

export const myResponsiveBarData = barchartData

const MyResponsiveBar = dynamic(() => import('./nivo-charts/barchart'), {
  ssr: false,
})

const NivoBar = () => {
  return (
    <div className={homeStyles.smallchart}>
      <MyResponsiveBar data={myResponsiveBarData} />
    </div>
  )
}

export default NivoBar
