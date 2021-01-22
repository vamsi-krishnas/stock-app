import './App.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter}from 'react-router-dom'
import { Component } from 'react';
import Loginscreen from './Containers/Loginscreen/Loginscreen';
class App extends Component {
  constructor (props) {
      super(props);
      this.state= {
        loginpage: []
      }
  }
  componentDidMount () {
    <Loginscreen  />
  }
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout>
        
      </Layout>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
