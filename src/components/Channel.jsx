import React from 'react';
import mui from 'material-ui';

let {ListItem} = mui;

export default class Channel extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render() {
        return (
            <ListItem>{this.props.channel}</ListItem>
        );
    }
}