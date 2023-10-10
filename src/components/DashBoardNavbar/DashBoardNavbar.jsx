import { Link, NavLink } from "react-router-dom";
import "./DashboardNavbar.css";
import Logo from "../../assets/images/logo.png";
import {
  FaArchive,
  FaExternalLinkAlt,
  FaHome,
  FaReadme,
  FaRegCommentAlt,
  FaUsersCog,
  FaWarehouse,
} from "react-icons/fa";
const DashBoardNavbar = () => {
  const navBarMenu = [
    {
      path: "/dashboard",
      icon: <FaHome></FaHome>,
      title: "Dashboard",
    },
    {
      path: "/dashboard/trend-and-anlytics",
      icon: <FaReadme></FaReadme>,
      title: "Trend And Anlaytics",
    },
    {
      path: "/dashboard/reports",
      icon: <FaArchive></FaArchive>,
      title: "Reports",
    },
    {
      path: "/dashboard/settings",
      icon: <FaUsersCog></FaUsersCog>,
      title: "Settings",
    },
    {
      path: "/dashboard/notification",
      icon: <FaWarehouse></FaWarehouse>,
      title: "Notification",
    },
    {
      path: "/dashboard/messages",
      icon: <FaRegCommentAlt></FaRegCommentAlt>,
      title: "Messages",
    },
    {
      path: "/dashboard/upload",
      icon: <FaRegCommentAlt></FaRegCommentAlt>,
      title: "upload",
    },
    {
      path: "/dashboard/ContentStatus",
      icon: <FaRegCommentAlt></FaRegCommentAlt>,
      title: "Content Status",
    },
    {
      path: "/dashboard/UploadContent",
      icon: <FaRegCommentAlt></FaRegCommentAlt>,
      title: "Upload Content ",
    },
    {
      path: "/dashboard/LiveSong",
      icon: <FaRegCommentAlt></FaRegCommentAlt>,
      title: "Live Songs ",
    },
    {
      path: "/dashboard/logOut",
      icon: <FaExternalLinkAlt></FaExternalLinkAlt>,
      title: "Logout",
    },
  ];

  return (
    <div className="vertical-menu dash_navber">
      <div data-simplebar className="h-100">
      
        <div className="navbar-brand-box p-4 " style={{backgroundColor:"#7091F5"}}>
          <Link to="/">
            <img  src={Logo} alt="logo" />
          </Link>
        </div>

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu" style={{borderColor:"green", borderRadius:"20px"}}>
          {/* <!-- Left Menu Start --> */}
          <ul className="metismenu list-unstyled" id="side-menu">
            {navBarMenu.map(({ path, icon, title }) => (
              <li key={path} className="fs-2">
                <NavLink
                  to={`${path}`}
                  className={({ isActive }) =>
                    isActive ? "text-info" : "text-dark"
                  }
                >
                  {icon}
                  <span className=" ml-2">{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- Sidebar --> */}
      </div>
    </div>
  );
};

export default DashBoardNavbar;
