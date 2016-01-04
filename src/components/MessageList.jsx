import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

let {Card, List} = mui;

export default class MessageList extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            messages: {}
        };

        this.firebaseRef = new Firebase('https://react-flux-webpack-firebase.firebaseio.com/messages');
        this.firebaseRef.on('child_added', (msg) => {
            if (this.state.messages[msg.key()]) {
                return;
            }

            let msgVal = msg.val();
            msgVal.key = msg.key();
            this.state.messages[msgVal.key] = msgVal;
            this.setState({
                messages: this.state.messages
            });
        });

        this.firebaseRef.on('child_removed', (msg) => {
            let key = msg.key();
            delete this.state.messages[key];
            this.setState({
                messages: this.state.messages
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render() {
        var messageNodes = _.values(this.state.messages).map((message, i) => {
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