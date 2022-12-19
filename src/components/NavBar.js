import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linksMap = links.map((link, index) => {
    return <a key={index} href={"#" + link}>{link}</a>
  })

  return <nav>{linksMap}</nav>;
}

export default NavBar;
