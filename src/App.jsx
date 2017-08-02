import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ACCESS_TOKEN = 'BQAwXtkepUy25EgIgR3yg0jkP_fXhXBsGP_sG_msaZc84vQTdxzhYRfeGraCmfSUsL4ZvbNGiC4fqgpRQzX-ww';

    console.log('FETCH_URL', FETCH_URL);

    fetch(FETCH_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
      },
      mode: 'cors',
      cache: 'default'
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master from App</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                console.log('event.key', event.key);
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          <div>Gallery</div>
        </div>
      </div>

    )
  }
}

export default App;
