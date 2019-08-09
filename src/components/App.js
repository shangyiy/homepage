import React from 'react';
import '../css/App.css';

import { Avatar } from './Avatar';
import { RenderContent } from './RenderContent';

class App extends React.Component{
  render() {
    return (
      <div className="app">
        <Avatar />
        <RenderContent />
      </div>
    )
  }
}

export default App;
