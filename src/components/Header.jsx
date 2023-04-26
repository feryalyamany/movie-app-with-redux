import React from 'react'
import { Navbar, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getAllMovies, getSearch } from '../redux/actions'
const Header = () => {
  const dispatch= useDispatch()
  const searchHandler= (word)=>{
    search(word)
   }

  const search = async (word)=>{
    if(word===""){
      dispatch(getAllMovies())
    } else{
    
   dispatch(getSearch(word))
    
    }
  }


  return (
    
   <>
     <Navbar bg="dark" expand="lg">
      <Container >
        <Navbar.Brand href="#" className="text-light fw-bold">
         
           MOVIES
         
          
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
          <Form className="d-flex w-100">
            <Form.Control
              type="search"
              placeholder="Find Movie"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>searchHandler(e.target.value)}
            />
         
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header