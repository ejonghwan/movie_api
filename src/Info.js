import React, {Component} from 'react';

class Info extends Component {

    state = {
        editing: false,
        name: '',
        num: '',
    }

    shouldComponentUpdate(nextProps, nextState) {
        //아무것도 안했을 시 기본동작 return true
        //조건1 지금 state와 다음 state가 다르면 리턴하게끔
        if( this.state !== nextState ) {
            return true
        } //이게 false면 아래 리턴
        return this.props.data !== nextProps.data
    }


    toggleEditing = () => {
        const { data, onUpdate } = this.props;
        this.setState({
            editing: !this.state.editing,
            name: data.name,
            num: data.num,
        });

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

        console.log(name)

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