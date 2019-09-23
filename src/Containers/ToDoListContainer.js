import { connect } from 'react-redux';
import ToDoList from '../Components/ToDoList';

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;