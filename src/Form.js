import React, {Component} from 'react';

class Form extends Component {
    input = null; //ref 포커스 초기화
    state = {
        name: '',
        num: '',
    }

    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onCreate} = this.props;
        onCreate({
            name: this.state.name,
            num: this.state.num,
        });
        this.setState({
            name: '',
            num: '',
        });
        this.input.focus()

    };




    render() {
        const formStyle = {
            padding: '70px',
            display: 'flex',
            justifyContent: 'center',
            background: '#fff',
        }
        const inputStyle = {
            padding: '5px',
            width: '200px',
            marginRight: '5px'
        }

        const btnStyle = {
            background: '#fff',
            color: '#555',
            width: '70px',

        }

        return (
            <div>
                <form onSubmit={this.handleSubmit} style={formStyle}>

                        <input style={inputStyle}
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                               placeholder="name"
                               ref={ ref => this.input = ref }

                        />

                        <input style={inputStyle}
                            type="text"
                            name="num"
                            onChange={this.handleChange}
                            value={this.state.num}
                               placeholder="number"
                        />

                    <button style={btnStyle}>create</button>
                </form>
            </div>
        );
    }
}

export default Form;