import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import {Link} from "react-router-dom"
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="text-white text-center p-4 text-sm mt-10">
      <h1>© 2025 Ziaur Rahman </h1>
       <Link target="_blank" to="https://github.com/zrwin" className="w-6 h-6"> <FontAwesomeIcon icon={faGithub} />  </Link>
       <Link target="_blank" to="https://www.linkedin.com/in/zrwin/" className="w-6 h-6"> <FontAwesomeIcon icon={faLinkedin} /> </Link>
       <Link target="_blank"> <FontAwesomeIcon icon={faFile} /> </Link>
        
        
       
    </footer>
  );
}
