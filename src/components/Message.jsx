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
                leftAvatar={<Avatar src="http://www.clayton-media.com/imagesINV/manufacturing/dhd/c981aaef-694f-466c-955b-fa5f99bdec81.png?width=2000&height=1125"/>}
            >{this.props.message}</ListItem>
        );
    }
}