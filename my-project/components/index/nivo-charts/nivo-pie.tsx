import React from 'react'
import dynamic from 'next/dynamic'
import homeStyles from '../../../styles/Home.module.css'

import piechartData from './nivo-data/piechart-data.json'

export const myResponsiveBarData = piechartData

const MyResponsiveBar = dynamic(() => import('./piechart'), {
  ssr: false,
})

const NivoPie = () => {
  return (
    <div className={homeStyles.smallpiechart}>
      <MyResponsiveBar data={myResponsiveBarData} />
    </div>
  )
}

export default NivoPie
