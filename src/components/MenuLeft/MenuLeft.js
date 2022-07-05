import React, { useState, useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import "./MenuLeft.scss";

function MenuLeft(props) {
  const { location } = props;
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const handlerMenu = (e, menu) => {
    setActiveMenu(menu.to);
  };
  return (
    <>
      <Menu className="menu-left" vertical>
        <div className="top">
          <Menu.Item
            as={Link}
            to="/"
            active={activeMenu === "/"}
            onClick={handlerMenu}
          >
            <Icon name="home" /> Home
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/finder-url"
            active={activeMenu === "/finder-url"}
            onClick={handlerMenu}
          >
            <Icon name="search" /> Search with URL
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/finder-image"
            active={activeMenu === "/finder-image"}
            onClick={handlerMenu}
          >
            <Icon name="cloud upload" /> Search with Image
          </Menu.Item>
        </div>
        <div className="footer">
          <Menu.Item
            as={Link}
            to="/terms"
            active={activeMenu === "/terms"}
            onClick={handlerMenu}
          >
            <Icon name="book" /> Terms
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/contribution"
            active={activeMenu === "/contribution"}
            onClick={handlerMenu}
          >
            <Icon name="sticky note" /> Contribution
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/help"
            active={activeMenu === "/help"}
            onClick={handlerMenu}
          >
            <Icon name="help circle" /> How to use
          </Menu.Item>
        </div>
      </Menu>
    </>
  );
}

export default withRouter(MenuLeft);
