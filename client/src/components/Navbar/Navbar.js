const Navbar = props => {

    let style = "navbar__brand";

    if (props.color) style += ` ${props.color}`;

    return (
        <nav className="navbar">
            <h3 className={style}>Fun App</h3>
        </nav>
    )

}

export default Navbar;