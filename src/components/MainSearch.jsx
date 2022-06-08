import { Component } from 'react'
import { Container, Row, Col, Form, Spinner} from 'react-bootstrap'
import Job from './Job'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getCompaniesActionThunk, } from '../redux/Actions'


const mapStateToProps =(state) => {
   return {
     jobs: state.comp.companies,
     isLoading: state.comp.isLoading
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJobs: (query)=> {
      dispatch(getCompaniesActionThunk(query))
    },
    
  }
}


class MainSearch extends Component {
  state = {
    query: '',
   
  }
  componentDidMount=()=>{
    console.log(this.props)
  }


  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    
    this.props.getJobs(this.state.query)

    

    
  }

  render() {
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
              <Form style={{flexGrow:'1'}} onSubmit={this.handleSubmit}>
                <Form.Control
                  type="search"
                  value={this.state.query}
                  onChange={this.handleChange}
                  placeholder="type and press Enter"
                />
              </Form>
              <Link to='/Favourites'>
              <div style={mystyle}>Favourites</div>
              </Link>
           </Row>
          </Col>
          <Col xs={10} className="mx-auto mb-5" style={{position:'relative'}}>
            {this.props.isLoading && <Spinner  animation="border" variant="secondary" />}
            {this.props.jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainSearch)
