import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import List from './List'


class App extends Component {
    id = 3;
    state = {
        information: [
            {
                id: 0,
                name: '이종환',
                num: '01020018363',
            },
            {
                id: 1,
                name: '신민아',
                num: '01020018365',
            },
            {
                id: 2,
                name: '룰루',
                num: '01025558355',
            }
        ]
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
                return d;
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
