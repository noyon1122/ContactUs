import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav_container'>
        <div className=''>
            <img src="../../public/images/logo.png" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </nav>
  )
}

export default Navbar