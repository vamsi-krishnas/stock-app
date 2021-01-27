import './App.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter}from 'react-router-dom'
import { Component } from 'react';
class App extends Component {
  constructor (props) {
      super(props);
      this.state= {
       
      }
  }
  componentDidMount(){
    
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
