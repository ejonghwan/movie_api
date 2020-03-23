import React, {Component} from 'react';

class Form extends Component {

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
        e.preventDefault()
        const {onCreate} = this.props;
        onCreate({
            name: this.state.name,
            num: this.state.num,
        })
        this.setState({
            name: '',
            num: '',
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="num"
                            onChange={this.handleChange}
                            value={this.state.num}
                        />
                    </div>
                    <button>create</button>
                </form>
            </div>
        );
    }
}

export default Form;