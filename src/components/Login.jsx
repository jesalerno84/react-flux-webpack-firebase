import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

let { Card, CardText, RaisedButton } = mui;

export default class Login extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render(){

        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
                <CardText style={{
                'textAlign': 'center'
              }}>
                    To start chatting away, please log in with your Google account.
                </CardText>

                <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
                              label="Log in with Google" primary={true} />
            </Card>

        );
    }

    onClick() {
        Actions.login();
    }
}