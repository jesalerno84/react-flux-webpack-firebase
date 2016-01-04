import React from 'react';
import mui from 'material-ui';

let {ListItem, Avatar} = mui;

export default class Message extends React.Component {
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
            <ListItem
                leftAvatar={<Avatar src={this.props.message.profilePic}/>}
            >{this.props.message.message}</ListItem>
        );
    }
}