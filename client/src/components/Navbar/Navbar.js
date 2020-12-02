const Navbar = props => {

    let style = "navbar__brand";

    const navbarStyle = {};

    const custom = props.color ? props.color.toLowerCase() : '';

    if (custom) {
        if (custom.includes('#') || custom.includes('rgb')) navbarStyle.color = custom;
        else style += ` ${props.color}`;
    }

    return (
        <nav className="navbar">
            <h3 className={style} style={navbarStyle}>Fun App</h3>
        </nav>
    )

}

export default Navbar;