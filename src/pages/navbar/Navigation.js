import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
const Navigation = () => {
    // const [showMenu, setShowMenu] = useState(false)

    //conditional render 
    /* 
    let menu;
    if(showMenu){
        menu= <div> the menu </div>
    }
    
    */
    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark mb-4">
            <Navbar.Toggle aria-controls='basic-navbar' ></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar'>
                <Nav>
                    <Nav.Item>
                        <Link to="/" className='nav-link'>
                            Home
                </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/comments" className='nav-link'>
                            Table Comments
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/todos" className='nav-link'>
                            Table Comments with react boostrap table
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/double_table" className='nav-link'>
                           Double Table
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}


export default Navigation;