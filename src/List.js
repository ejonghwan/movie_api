import React, {Component} from 'react';
import Info from './Info'

class List extends Component {
    render() {

        const { data, onRemove, onUpdate } = this.props;
        const list = data.map( d => <Info data={d} key={d.id} onRemove={onRemove} onUpdate={onUpdate} /> )

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default List;