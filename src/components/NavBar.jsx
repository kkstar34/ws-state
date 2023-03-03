

function NavBar(props){


    return (
    <nav className="navbar">
        <ul>
            <li>
                {props.name}
            </li>
            <li>
                {props.lastName}
            </li>

            <li>
                About
            </li>

            <li>
                About
            </li>

            <li>
                About
            </li>

            <li>
                About
            </li>
        </ul>
    </nav>
    )

  
}

export default NavBar;