import React from 'react';
import '../css/App.css';

import { RenderContent } from './RenderContent';

class App extends React.Component{
  render() {
    return (
      <div className="app">
        <RenderContent />
      </div>
    )
  }
}

export default App;
