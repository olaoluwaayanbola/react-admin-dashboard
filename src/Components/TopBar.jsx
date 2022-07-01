import React from "react";
import "../Styles/TopBar.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const TopBar = () => {
  return (
    <div className="ContainerTopBar">
      <div className="navBarWrapper">
        <div className="TopLeft">
          <span className="logo">
            <h2> Olaoluwa-Ayanbola</h2>
          </span>
        </div>
        <div className="TopRight">
          <div className="TopBarIconContainer">
            <NotificationsNoneOutlinedIcon />
            <span className="IconBadge">4</span>
          </div>
          <div className="TopBarIconContainer">
            <LanguageOutlinedIcon />
            <span className="IconBadge">4</span>
          </div>
          <div className="TopBarIconContainer">
            <SettingsOutlinedIcon />
          </div>
          <span>
            <img
              src="https://cdn.vox-cdn.com/thumbor/E2lbwfV51V0fMJhmUDatasLw00U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15985293/NintendoSwitch_MarioKart8Deluxe_artwork_char_01_png_jpgcopy.jpg"
              alt="Mario Cart"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
