import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import axios from 'axios';
import { BASE_URL } from '../../../src/config/Enviroment';
import { COUNT_ENDPOINT } from '../../../src/config/Endpoints';
import ShowMainView from './ShowView';

class DataMainView extends Component {

    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}${COUNT_ENDPOINT}`)
      .then(({ data }) => {
        this.setState({
          data: data.response
        })
      })
    }


    render() {
        return (
           <Card.Group itemsPerRow={3}>
    
                {this.state.data.map((item) => (
                    <ShowMainView {...item} />
                ))}
               
                
            </Card.Group>
        );
    }

}

export default DataMainView;