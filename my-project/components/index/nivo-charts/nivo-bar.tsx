import React from 'react'
import dynamic from 'next/dynamic'
import homeStyles from '../../../styles/Home.module.css'

import barchartData from './nivo-data/barchart-data.json'

export const myResponsiveBarData = barchartData

const MyResponsiveBar = dynamic(() => import('./barchart'), {
  ssr: false,
})

const NivoBar = () => {
  return (
    <div className={homeStyles.smallbarchart}>
      <MyResponsiveBar data={myResponsiveBarData} />
    </div>
  )
}

export default NivoBar
