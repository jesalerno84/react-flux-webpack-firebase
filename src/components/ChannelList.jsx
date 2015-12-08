import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

let {Card, List} = mui;

export default class ChannelList extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            channels: [
                'Dogs',
                'Cats'
            ]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render() {
        let channelNodes = this.state.channels.map((channel, i) => {
            return (
                <Channel channel={channel} />
            );
        });

        return (
            <Card style={{
                flexGrow: 1
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}