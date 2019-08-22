import React from 'react';

import simpleAction from './actions/index';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        apiError: false,
        apiSuccess: false,
        addStudent: false,
      }

      this.handleStudentDelete = this.handleStudentDelete.bind(this)
      this.handleStudentAdd = this.handleStudentAdd.bind(this)
      this.handleAddStudentChange = this.handleAddStudentChange.bind(this)

  }


  async handleStudentDelete(_id) {
    try  {
      let response = null; 
      let data = null;
      response = await fetch('localhost:3000/users/', {method: "delete", body: JSON.stringify({_id})})
      response = response.json()
    } catch(e) {
      console.error(e)
      this.setState({apiError: e})
    }
  }

  async handleStudentAdd(id) {
    try  {
      let response = null; 
      let data = null;
      response = await fetch('localhost:3000/users/', {method: "post", body: JSON.stringify({_id})})
      data = response.json()
      this.setState({apiSuccess: data})
    } catch(e) {
      console.error(e)
      this.setState({apiError: e})
    }
  }

  handleAddStudentChange(event) {
    this.setState({
      addStudent: event.target.value
    });
  }

  async componentDidMount() {
    try {
      let response = null; 
      let data = null;
      response = await fetch('localhost:3000/users/')
      data = response.json()
      this.setState({ apiSuccess: data })
    } catch(e) {
      console.log(e)
      this.setState({ apiError: e })
    }
  }


  render() {
    return (
      <div className="App container">
        <header className="App-header">

          <div className="col-6">
            <h1>Students</h1>
            {this.state.api_success.map((e) => {
              <div style={{display: "inline"}}>
                <p>{e.name}</p>
                <p>{e.dob}</p>
                <button onClick={() => this.handleStudentDelete(e._id)}>Delete</button>
              </div>
            })}
          </div>

          <div className="col-6">

            <h1>Add a student</h1>
            <form onSubmit={this.handleStudentAdd}>
              <input type="text" value={this.state.addStudent} onChange={this.handleAddStudentChange} />
              <button type="submit">Submit</button>
            </form>
          </div>

        </header>
      </div>
    );
  }
}
  


export default App;