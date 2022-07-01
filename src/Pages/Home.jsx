import React from 'react'
import  '../Styles/Home.scss'
import FeaturedInfo from './FeaturedInfo'
import Chart from '../Components/Chart'
import { userData } from '../Components/ChartData'

const Home = () => {
  return (
    <div className='ConatinerHome'>
        <FeaturedInfo></FeaturedInfo>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">

       </div>
    </div>
  )
}

export default Home