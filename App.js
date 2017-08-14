import React from 'react';
import ReactDOM from 'react-dom';
import AddWork from './containers/AddWorks.jsx';
import WorkList from './containers/worklist.jsx';


class App extends React.Component{

  render(){
    return(
      <div>
       <AddWork />
       <WorkList/>
      </div>
    )
  }
}
export default App;
