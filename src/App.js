import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BugerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BugerBuilder />
        </Layout>
        
      </div>
    );
  }
}

export default App;
