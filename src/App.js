import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import CommentApp from './components/commentApp'

const toLearn = ['React', 'Redux', 'Electron']
class App extends Component {
  static defaultProps = {
    name: 'Hehoku Studio'
  }
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hehoku',
      currentHour: new Date().getHours()
    }
    // this.handleClickOnImage.bind(this)
  }

  handleClickOnImage() {
    console.log('this is image')
    console.log(this)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.handleClickOnImage.bind(this)}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name || this.state.name} Relearn React at{' '}
            {this.state.currentHour > 12 ? (
              <span>afternoon</span>
            ) : (
              <span>morning</span>
            )}
          </a>
          <CommentApp />
        </header>
      </div>
    )
  }
}

export default App
