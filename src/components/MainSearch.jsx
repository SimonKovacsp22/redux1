import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import {Link} from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'

class MainSearch extends Component {
  state = {
    query: '',
    jobs: [],
  }

  baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(
      this.baseEndpoint + this.state.query + '&limit=20'
    )

    if (!response.ok) {
      alert('Error fetching results')
      return
    }

    const { data } = await response.json()

    this.setState({ jobs: data })
  }

  render() {
    const mystyle = {
      marginLeft:'50px',
      border: 'solid 2px black',
      borderRadius:'5px',
      padding:'3px 5px 3px 5px',
      backgroundColor:'var(--danger)',
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
          <Col xs={10} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainSearch
