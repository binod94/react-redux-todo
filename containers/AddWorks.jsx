import { connect } from 'react-redux';
import addwork from './../components/addwork.jsx';
import {AddWork} from './../Actions.js';

const mapStateToProps = state =>{
  return{}
}

const mapDispatchToProps = dispatch =>{
  return {
    addWorktolist: (text) =>{
      dispatch(AddWork(text))
    }
  }
}

const AddWorks = connect(
  mapStateToProps,
  mapDispatchToProps
)(addwork);

export default AddWorks;
