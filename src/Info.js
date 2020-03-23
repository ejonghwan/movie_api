import React, {Component} from 'react';

class Info extends Component {

    state = {
        editing: false,
        name: '',
        num: '',
    }

    toggleEditing = () => {
        const { data, onUpdate } = this.props;
        this.setState({
            editing: !this.state.editing,
            name: data.name,
            num: data.num,
        })

        onUpdate(data.id, {
            name: this.state.name,
            num: this.state.num,
        })
    }

    handleRemove = () => {
        const { data, onRemove } = this.props;
        onRemove(data.id)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {

        const { name, num } = this.props.data;
        const styled = {
            padding: '10px',
            background: '#dfdfdf',
            Color: '#555',
            marginTop: '5px'
        }

        return (
            <div style={styled}>
                {
                    this.state.editing ? (
                        <div>
                            <div>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={this.state.num}
                                    name="num"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                    ) : (
                        <div>
                            <div>name: {name}</div>
                            <div>num: {num}</div>
                        </div>
                    )
                }

                <button onClick={this.handleRemove}>delete</button>
                <button onClick={this.toggleEditing} onChange={this.handleChange}>
                    {
                        this.state.editing ? 'ok' : 'update'
                    }
                </button>
            </div>
        );
    }
}

export default Info;