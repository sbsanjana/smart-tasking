import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/RenderTask';
import './components/Task'
import TaskList from './components/TaskList'
import RenderTask from './components/RenderTask';
import {Form, Input, Header, Icon, Button,Card, Grid,  Rating, Segment} from 'semantic-ui-react'
import { ConsoleWriter } from 'istanbul-lib-report';
import { PropTypes } from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      desc: '',
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
  this.handleChangeDesc = this.handleChangeDesc.bind(this);


  }

  componentDidMount() {
    document.body.style.backgroundColor = '#D9ECEF';
    const tasks = localStorage.getItem("tasks");
    if (tasks) this.setState({ tasks: JSON.parse(tasks) });
    //D9FFFF';

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChangeDesc(event) {
    this.setState({desc: event.target.value});
  }

  addTask() {
    this.setState({value: ''});
    this.setState({desc: ''});

    let nTask = {
      name: this.state.value,
      id: Date.now(),
      rating: this.state.rating,
      desc: this.state.desc,
      completed: false
    };
    this.setState(
      
      { tasks: [...this.state.tasks, nTask]},
    
    () => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
      );
  }

  markComplete( taskitem ) {
    const tasks = this.state.tasks.map(task => {
      if (task.id === taskitem) {
        task.completed = !task.completed
      }
      return task
    });
    this.setState({tasks, task: ''},
    () => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
    )
    // this.forceUpdate();
  }
  

  handleChangeOnRate(e, { rating }) {
    e.preventDefault();
    this.setState(
      {rating: rating}
    );
    
  }
  
  
  render() {
    return (
      <div>
        <div className="App" style={{marginTop:10}} >
        <Header as='h1' icon inverted textAlign='center' style={{color:'#2B4162'}}>
      <Icon name='sort amount up' style={{color:'#2B4162'}} />
      SmartTasking
      <Header.Subheader style={{color:'#2B4162'}}>
      To begin, simply enter the task you need to complete, rank its level of importance, and press "Enter."      </Header.Subheader>
    </Header>
        {/* <h1 style={{color:'#2B4162'}}>Smart-Tasking</h1>
        <p style={{color:'#2B4162', fontSize:'large'}}>To begin, simply enter the task you need to complete, rank its level of importance, and press "Enter."</p> */}
        <Form>
        <Input id="form" type="text" placeholder="Add a task..." value={this.state.value} style={{marginBottom:25}}onChange={this.handleChange} />
      
        <Input id="form" type="text" placeholder="Add a description..." value={this.state.desc} style={{marginBottom:25}}onChange={this.handleChangeDesc} />
        <Rating
          rating={this.rating}
          onRate={this.handleChangeOnRate}
          maxRating={5}
          icon='star'
        /> 
        
          <button class="ui button" style={{marginLeft:5, marginBottom:25}} onClick={this.addTask}>Enter</button>
       
          
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
