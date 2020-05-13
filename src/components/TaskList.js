import React from 'react';
import { Button,Card, Grid,  Modal, Rating, Segment} from 'semantic-ui-react'
import { throwStatement } from '@babel/types';
 

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div class="container-fluid">
           <Grid columns={3} style={{marginLeft:15, marginRight:15}} >
                 <Grid.Row>
            {this.props.tasks.map((task) => {
                if (task.completed == false && task.name != '') {
                return (
                    <Grid.Column>
                        <Card style={{marginBottom:15}}>
                            <Card.Content style={{align:'center'}}>
                                <Card.Description>
                                    {task.name}
                                    
                                </Card.Description>
                                <Button onClick={this.props.removeItems} basic color='red'> Remove </Button>
                                <Rating defaultRating={task.rating} maxRating={5}/>
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