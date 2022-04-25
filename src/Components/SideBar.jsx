
import '../Styles/SideBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

const SideBar = () => {
  return (
    <div className='Container'>
        <div className="sideBarWrapper">
            <div className="sideBarMenu">
                <span className="sideBarTitle">Dashboard</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                       <HomeOutlinedIcon className='sideIcon'/>
                       <span className='hoverman'>
                           Home
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       < TimelineOutlinedIcon className='sideIcon'/>
                       <span>
                           Analytics
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       < TrendingUpOutlinedIcon className='sideIcon'/>
                       <span>
                           Sales
                        </span>
                    </li>
                </ul>
            </div>
            <div className="sideBarMenu">
            <   span className="sideBarTitle">Quick Menu</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                       <PersonOutlineIcon className='sideIcon'/>
                       <span>
                           Users
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <StorefrontIcon className='sideIcon'/>
                       <span>
                            Products
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <AttachMoneyIcon className='sideIcon'/>
                       <span>
                           Transactions
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <BarChartIcon className='sideIcon'/>
                       <span>
                            Reports
                        </span>
                    </li>
                </ul>
            </div>
            <div className="sideBarMenu">
                <span className="sideBarTitle">Notifications</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                       <MailOutlineIcon className='sideIcon'/>
                       <span>
                            Mail
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <DynamicFeedIcon className='sideIcon'/>
                       <span>
                            Feedback
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <ChatBubbleOutlineIcon  className='sideIcon'/>
                       <span>
                            Messages
                        </span>
                    </li>
                </ul>
            </div>
            <div className="sideBarMenu">
                <span className="sideBarTitle">Staff</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                       <WorkOutlineIcon className='sideIcon'/>
                       <span>
                            Manage
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <TimelineOutlinedIcon className='sideIcon'/>
                       <span>
                            Analytics
                        </span>
                    </li>
                    <li className="sideBarListItem">
                       <ReportIcon  className='sideIcon'/>
                       <span>
                            Reports
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar