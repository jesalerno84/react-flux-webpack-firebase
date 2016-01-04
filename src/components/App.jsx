import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let AppBar = mui.AppBar;

@connectToStores
export default class App extends React.Component {
    static getStores() {
        return [ChatStore];
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    constructor() {
        super();

        ThemeManager.setPalette({
            primary1Color: Colors.blue500,
            primary2Color: Colors.blue700,
            primary3Color: Colors.blue100,
            accent1Color: Colors.pink400
        })
    }

    render() {
        let view = <Login />;

        if (this.props.user) {
            view = (
                <div>
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                    }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            );
        }

        return (
            <div>
                <AppBar title="Chat App"/>
                {{view}}
            </div>
        );
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }

}