import Logo from '../assets/react.svg'
function Header() {

    return (
        <>
            <img src={Logo} className="logo" />
            <input type='text' className="FilterInput" />
        </>
    )
}

export default Header