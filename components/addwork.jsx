import React from 'react';

class AddWork extends React.Component{
  render(){
    let input;

    return(
      <div>
      <form onSubmit={ e =>{
          e.preventDefault()
          if (!input.value.trim()){
            return
          }
          this.props.addWorktolist(input.value);
          input.value='';}
      }>
       <input  ref={node => { input = node }} placeholder="Enter work"/>
       <button type="submit">Add work</button>
       </form>
      </div>
    )
  }
}
export default AddWork;
