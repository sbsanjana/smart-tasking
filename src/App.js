import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/RenderTask';
import './components/Task'
import TaskList from './components/TaskList'
import RenderTask from './components/RenderTask';
import {Form, Input, Button,Card, Grid,  Rating, Segment} from 'semantic-ui-react'
import { ConsoleWriter } from 'istanbul-lib-report';
import { PropTypes } from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      rating:0,
      tasks:[{
      // name: '',
      // id: '',
      //rating ; 0
      // completed: false
    }],
    
  }
  this.handleChange = this.handleChange.bind(this);
  this.addTask = this.addTask.bind(this);
  this.handleChangeOnRate = this.handleChangeOnRate.bind(this);
  this.markComplete = this.markComplete.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addTask() {
    let nTask = {
      name: this.state.value,
      id: Date.now(),
      rating: this.state.rating,
      completed: false
    };
    this.setState(
      
      { tasks: [...this.state.tasks, nTask]});
  }

  markComplete( taskitem ) {
    const tasks = this.state.tasks.map(task => {
      if (task.id === taskitem) {
        task.completed = !task.completed
      }
      return task
    });
    this.setState({tasks, task: ''})
    // this.forceUpdate();
  }
  removeItems = event => {


    // event.preventDefault();
    // this.setState(prevState => {
    //   return {
    //     tasks: prevState.task.filter(task => {
    //       return !task.completed;
    //     })
    //   }
    // })
  }

  handleChangeOnRate(e, { rating }) {
    e.preventDefault();
    this.setState(
      {rating: rating}
    );
  }
  //   this.setState (
  //   {rating: event.target.value});
  // }
  
  render() {
    return (
      <div>
        <div className="App">
        <h1>Smart-Tasking</h1>
        <Form>
        <Input id="form" type="text" placeholder="Add a task..." value={this.state.value} style={{marginBottom:25}}onChange={this.handleChange} />
        <Rating
          rating={this.rating}
          onRate={this.handleChangeOnRate}
          maxRating={5}
          icon='star'
        />
          <button class="ui button" style={{marginLeft:5, marginBottom:25}} onClick={this.addTask}>Click Here</button>
          </Form>
      </div>
      <TaskList 
      tasks={this.state.tasks}
      rate={this.state.rate}
      parentMethod = {this.markComplete}
      />
      </div>
    );
  }
}

export default App;
