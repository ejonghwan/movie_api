import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import List from './List'


class App extends Component {
    id = 0;
    state = {
        information: []
    }

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({
                ...data,
                id: this.id++
            })
        })
    }

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter( data => data.id !== id )
        })
    }

    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map( d => {
                if( d.id === id ) {
                    console.log(data)
                    return {
                        ...data,
                        id
                    }
                }
                return data;
            } )
        })
    }


    render(){

      return (
        <div>
            <Form onCreate={this.handleCreate} />
            {/*{JSON.stringify(this.state.information)}*/}
            <List data={this.state.information} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
        </div>
      );
    }
}

export default App;
