import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

let {Card} = mui;

export default class MessageBox extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.firebaseRef = new Firebase('https://react-flux-webpack-firebase.firebaseio.com/messages');

    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render() {
        return (
            <Card style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 30
            }}>
                <textarea
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    style={{
                        width: '100%',
                        borderColor: '#D0D0D0',
                        resize: 'none',
                        borderRadius: 3,
                        minHeight: 50,
                        color: '#555',
                        fontSize: 14,
                        outline: 'auto 0px'
                }} />
            </Card>
        );
    }

    onChange(evt) {
        this.setState({
            message: evt.target.value
        })
    }

    onKeyUp(evt) {
        if (evt.keyCode === 13 && trim(evt.target.value) !== '') {
            evt.preventDefault();

            this.firebaseRef.push({
                message: this.state.message
            })

            this.setState({
                message: ''
            });

            console.log(`sent a new message ${this.state.message}`);
        }
    }
}