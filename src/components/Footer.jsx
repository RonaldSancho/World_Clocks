import React from "react";

function Footer(){
    const date = new Date().getFullYear();

    return  (
        <footer>
            <p>&copy; 2023 World Clock &bull; All rights reserved &bull; Made By <a href="https://ronaldsancho.github.io/Portfolio_Ronald/">Ronald Sancho</a></p>
        </footer>
    );
}

export default Footer;