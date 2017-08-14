import { connect } from 'react-redux';
import  List from './../components/List.jsx';


const mapStateToProps = state =>{
	return  {
		data:state.data
	}
};

const mapDispatchToProps = dispath =>{
	return {}
}

const WorkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default WorkList;
