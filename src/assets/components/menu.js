import { Typography, Link, Popper, Paper } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
/** Load images */
/** */
const Left = [
  {
    title: "home",
    subMenu: [],
  },
  {
    title: "dnd",
    subMenu: [
      {
        title: "characters",
        subMenu: [
          {
            title: "submenu second layer",
            subMenu: [],
          },
        ],
      },
    ],
  },
];
/** */
const Right = [
  {
    title: "right",
    subMenu: [],
  },
];
/** */
const MapItem = ({
  name,
  Map,
  pages,
  navMenu,
  setNavMenu,
  navSubMenu,
  setNavSubMenu,
  navSubMenuLowest,
  setNavSubMenuLowest,
  show,
  menu,
}) => {
  return show
    ? Map.map((link, i) => (
        <React.Fragment key={name + "-fragment-" + link.title}>
          <Link
            aria-describedby={link.title}
            onMouseEnter={(e) => {
              setNavMenu(e.currentTarget);
              setNavSubMenu(null);
              setNavSubMenuLowest(null);
            }}
            to={`${link.title === "Home" ? pages + "" : pages + link.title}`}
            key={name + "-btn-" + link.title + "-" + i}
            component={NavLink}
            className="h4-h1"
          >
            <Typography variant="h4" className="h1">
              {link.title}
            </Typography>
          </Link>
          {link.subMenu.lenght !== 0 ? (
            <Popper
              placement={menu ? "left-start" : "bottom-start"}
              key={name + "-popover-" + link.title}
              id={link.title}
              className="menu"
              open={
                navMenu !== null
                  ? link.title === navMenu.getAttribute("aria-describedby")
                    ? true
                    : false
                  : false
              }
              anchorEl={navMenu}
            >
              <Paper className="menu">
                {link.subMenu.map((link, i) => (
                  <React.Fragment key={name + "subFragment-" + link.title}>
                    <Link
                      aria-describedby={link.title}
                      onMouseEnter={(e) => {
                        setNavSubMenu(e.currentTarget);
                        setNavSubMenuLowest(null);
                      }}
                      to={`${
                        link.title === "Home" ? pages + "" : pages + link.title
                      }`}
                      key={name + "-subBtn-" + link.title + "-" + i}
                      component={NavLink}
                      className="h4-h1"
                    >
                      <Typography variant="h4" className="h1">
                        {link.title}
                      </Typography>
                    </Link>
                    {link.subMenu.lenght !== 0 ? (
                      <Popper
                        placement={menu ? "left-start" : "right-start"}
                        key={name + "-subPopper-" + link.title}
                        id={link.title}
                        className="menu"
                        open={
                          navSubMenu !== null
                            ? link.title ===
                              navSubMenu.getAttribute("aria-describedby")
                              ? true
                              : false
                            : false
                        }
                        anchorEl={navSubMenu}
                      >
                        <Paper className="menu">
                          {link.subMenu.map((link, i) => (
                            <React.Fragment
                              key={name + "lowerSubFragment-" + link.title}
                            >
                              <Link
                                aria-describedby={link.title}
                                onMouseEnter={(e) =>
                                  setNavSubMenuLowest(e.currentTarget)
                                }
                                to={`${
                                  link.title === "Home"
                                    ? pages + ""
                                    : pages + link.title
                                }`}
                                key={
                                  name + "-lowerSubBtn-" + link.title + "-" + i
                                }
                                component={NavLink}
                                className="h4-h1"
                              >
                                <Typography variant="h4" className="h1">
                                  {link.title}
                                </Typography>
                              </Link>
                              {link.subMenu.lenght !== 0 ? (
                                <Popper
                                  placement={
                                    menu ? "left-start" : "right-start"
                                  }
                                  key={name + "-lowerSubPopper-" + link.title}
                                  id={link.title}
                                  className="menu"
                                  open={
                                    navSubMenuLowest !== null
                                      ? link.title ===
                                        navSubMenuLowest.getAttribute(
                                          "aria-describedby"
                                        )
                                        ? true
                                        : false
                                      : false
                                  }
                                  anchorEl={navSubMenuLowest}
                                >
                                  <Paper className="menu">
                                    {link.subMenu.map((link, i) => (
                                      <React.Fragment
                                        key={
                                          name +
                                          "lowestSubFragment-" +
                                          link.title
                                        }
                                      >
                                        <Link
                                          aria-describedby={link.title}
                                          to={`${
                                            link.title === "Home"
                                              ? pages + ""
                                              : pages + link.title
                                          }`}
                                          key={
                                            name +
                                            "-lowestSubBtn-" +
                                            link.title +
                                            "-" +
                                            i
                                          }
                                          component={NavLink}
                                          className="h4-h1"
                                        >
                                          <Typography
                                            variant="h4"
                                            className="h1"
                                          >
                                            {link.title}
                                          </Typography>
                                        </Link>
                                      </React.Fragment>
                                    ))}
                                  </Paper>
                                </Popper>
                              ) : (
                                <></>
                              )}
                            </React.Fragment>
                          ))}
                        </Paper>
                      </Popper>
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </Paper>
            </Popper>
          ) : (
            <></>
          )}
        </React.Fragment>
      ))
    : null;
};
/** */
export { Left, Right, MapItem };
