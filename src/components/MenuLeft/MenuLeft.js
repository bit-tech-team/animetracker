import React, { useState, useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import "./MenuLeft.scss";
import { useTranslation } from "react-i18next";

function MenuLeft(props) {
  const { location } = props;
  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [t] = useTranslation("common");

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  /**
   * Chnage the active menu
   * @param {*} e event
   * @param {*} menu menu item
   */
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
            <Icon name="home" />
            {t("Menu.home", { framework: "React" })}
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/finder-url"
            active={activeMenu === "/finder-url"}
            onClick={handlerMenu}
          >
            <Icon name="search" />
            {t("Menu.search_url", { framework: "React" })}
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/finder-image"
            active={activeMenu === "/finder-image"}
            onClick={handlerMenu}
          >
            <Icon name="cloud upload" />{" "}
            {t("Menu.search_img", { framework: "React" })}
          </Menu.Item>
        </div>
        <div className="footer">
          <Menu.Item
            as={Link}
            to="/terms"
            active={activeMenu === "/terms"}
            onClick={handlerMenu}
          >
            <Icon name="book" /> {t("Menu.terms", { framework: "React" })}
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/contribution"
            active={activeMenu === "/contribution"}
            onClick={handlerMenu}
          >
            <Icon name="sticky note" />{" "}
            {t("Menu.contribution", { framework: "React" })}
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/help"
            active={activeMenu === "/help"}
            onClick={handlerMenu}
          >
            <Icon name="help circle" />{" "}
            {t("Menu.how_to_use", { framework: "React" })}
          </Menu.Item>
        </div>
      </Menu>
    </>
  );
}

export default withRouter(MenuLeft);
