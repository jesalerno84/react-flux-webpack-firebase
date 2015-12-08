import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

let {Card, List} = mui;

export default class MessageList extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            messages: [
                'this is a message22',
                'this is another message'
            ]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render() {
        var messageNodes = this.state.messages.map((message, i) => {
            return (
                <Message key={i} message={message} />
            );
        });

        return (
            <Card style={{
                flexGrow: 2
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}