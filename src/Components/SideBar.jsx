import React from 'react'
import '../Styles/SideBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
const SideBar = () => {
  return (
    <div className='Container'>
        <div className="sideBarWrapper">
            <div className="sideBarMeue">
                <h3 className="sideBarTitle">Dashboard</h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                       <HomeOutlinedIcon/>
                       <span>
                           <h4>Home</h4>
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       < TimelineOutlinedIcon/>
                       <span>
                           <h4>Home</h4>
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       < TrendingUpOutlinedIcon/>
                       <span>
                           <h4>Home</h4>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar