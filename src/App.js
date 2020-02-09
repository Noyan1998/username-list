import React, { Component } from 'react';
import List from './List';
import Searchbox from './Searchbox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      usernameslist: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/bVfhPDVVMy?indent=2')
    .then(response => response.json())
    .then(users => this.setState({ usernameslist: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const {usernameslist, searchfield} = this.state;
    const filteredUsers = usernameslist.filter(username => {
      return username.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
      <div>
        <h1 className='tc'>Bank's Username List</h1>
        <Searchbox searchChange = {this.onSearchChange}/>
        <List usernameslist = {filteredUsers} />
      </div>
    );
  }
}

export default App;
