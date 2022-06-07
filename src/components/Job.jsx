import React from 'react'
import { Row, Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToFavouritesAction } from '../redux/Actions'

const mapStateToProps = (state) => {
  return {}
}


const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (companyToAdd) =>{
      dispatch(addToFavouritesAction(companyToAdd))}
  }
}

const Job = ({ data, addToFav}) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9} className="d-flex">

      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <Button 
      style={{marginLeft:'auto',maxHeight:'38px'}} variant="danger"
      onClick={()=> {
        addToFav(data.company_name)
      }}
      >Favourite</Button>
    </Col>
  </Row>
)

export default connect(mapStateToProps,mapDispatchToProps) (Job)
