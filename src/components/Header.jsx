import React from 'react'
import { Badge, Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import cartSlice from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const cart=useSelector((state)=>state.cartReducer)
  console.log(cart); 
  return (

          <Navbar expand='lg' className='bg-warning '>
              <Container>
                <Nav className="me-auto">
                  <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bolder'}}>Flikpart</Link></Navbar.Brand>
                  <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                  <Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
            <Nav.Link className='btn border border-dark rounded mt-2' > <Link to={'/cart'} style={{textDecoration:'none'}}>Cart   <Badge>{cart.length} </Badge></Link></Nav.Link>
  <Nav.Link  className='btn border border-dark rounded mt-2 ms-2'> <Link to={'/wishlist'} style={{textDecoration:'none'}}>Wishlist   <Badge>{wishlist.length} </Badge></Link></Nav.Link>
                </Nav>
              </Container>
          </Navbar>
    
  )
}

export default Header