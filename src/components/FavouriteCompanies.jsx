import React from 'react'
import { Col, Container, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromFavouritesAction } from '../redux/Actions'

const mapStateToProps = (state) => {
    return {
      favourites: state.fav.favourites,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      removeFromFav: (indexToRemove) => {
        dispatch(removeFromFavouritesAction(indexToRemove)
         
        )
      },
    }
  }


 function FavouriteCompanies({favourites, removeFromFav}) {
  return (
    <Container >
    <Col sm={12}>
        <h1>Favourites</h1>
      <ul style={{ listStyle: 'none',paddingLeft:'0' }} >
        {favourites.map((company, i) => (
          <li key={i} style={{width:'350px',borderBottom:'1px solid'}}className="my-4 d-flex justify-content-between text-truncate align-items-center">
              <Link to={`/${company}`}>{company}</Link>
            <Button style={{margin:'2px'}} variant="danger" onClick={() => { removeFromFav(i) }} >
             Remove
            </Button>
            
          </li>
        ))}
      </ul>
    </Col>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCompanies)