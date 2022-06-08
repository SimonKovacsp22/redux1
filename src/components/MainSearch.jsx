import { useState} from 'react'
import { Container, Row, Col, Form, Spinner} from 'react-bootstrap'
import Job from './Job'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getCompaniesActionThunk, } from '../redux/Actions'


// const mapStateToProps =(state) => {
//    return {
//      jobs: state.comp.companies,
//      isLoading: state.comp.isLoading
//    }
// }



// const mapDispatchToProps = (dispatch) => {
//   return {
//     getJobs: (query)=> {
//       dispatch(getCompaniesActionThunk(query))
//     },
    
//   }
//}


const MainSearch=()=> {
  const [term, setTerm]= useState('')
  const jobs = useSelector((state)=> state.comp.companies)
  const isLoading = useSelector((state) => state.comp.isLoading)

  const dispatch = useDispatch()
 


  const handleChange = (e) => {
    setTerm( e.target.value )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    dispatch(getCompaniesActionThunk(term))
  }

  
    const mystyle = {
      marginLeft:'50px',
      border: 'solid 2px var(--light)',
      borderRadius:'5px',
      padding:'3px 5px 3px 5px',
      backgroundColor:'var(--primary)',
      color:'black',
    };
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
           <Row >
              <Form style={{flexGrow:'1'}} onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={term}
                  onChange={handleChange}
                  placeholder="type and press Enter"
                />
              </Form>
              <Link to='/Favourites'>
              <div style={mystyle}>Favourites</div>
              </Link>
           </Row>
          </Col>
          <Col xs={10} className="mx-auto mb-5" style={{position:'relative'}}>
            {isLoading && <Spinner  animation="border" variant="secondary" />}
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }


export default MainSearch
