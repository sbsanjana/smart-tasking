import React from 'react';
import { Button,Card, Grid,  Modal, Rating, Segment, Checkbox} from 'semantic-ui-react'
import { throwStatement } from '@babel/types';
import { PropTypes } from 'react'
 

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange.bind(this)
    }


    handleChange(taskId) {
        this.props.parentMethod(taskId);
    }
    render() {
        const copyState = [].concat(this.props.tasks).sort((a,b) => a.rating < b.rating ? 1 : -1);
        console.log("const");
        return (
        <div class="container-fluid">
           <Grid columns={3} style={{marginLeft:15, marginRight:15}} >
                 <Grid.Row>
                
            {copyState.map((task) => {
                
                if (task.completed == false && task.name != '') {
                return (
                    <Grid.Column>
                        <Card style={{marginBottom:15, textAlign:'center'}}>
                            <Card.Content>
                                <Card.Description>
                                    <h2>{task.name}</h2>
                                    
                                </Card.Description>
                                <Rating rating={task.rating} maxRating={5} disabled/> <br></br>
                                <Checkbox label= 'Mark Complete' onChange ={event => this.handleChange(task.id)}> </Checkbox> 
                            </Card.Content>
                        </Card>
                    </Grid.Column>
           
                )
                }
         
             
            })}
              </Grid.Row>
             </Grid>
     </div>
            
        );
    }
}

export default TaskList;