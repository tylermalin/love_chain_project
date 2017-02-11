import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import {MuiThemeProvider, getMuiTheme, colors} from 'material-ui/styles';
import utils from 'js/utils/utils';
import BlockchainState from 'js/blockchain_state';

class App extends React.Component {
    componentWillMount() {
        this._blockchainState = new BlockchainState(() => {
            this.forceUpdate();
        });
    }
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                blockchainState: this._blockchainState
            })
        );

        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: colors.redA200,
                primary2Color: colors.red500,
                textColor: colors.redA200,
            },
        });

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div className="center clearfix">
                        <div className="h1 xsm-h1" style={{fontFamily: 'Pacifico, cursive'}}>
                            <Link className="text-decoration-none white-text" to="/">Happy Crypto Valetines Day!</Link>
                        </div>
                        <div className="white-text p2">
                            Declare your love immutably on the blockchain
                        </div>
                    </div>
                    <div className="mx-auto max-width-4 mainContent">
                        <div className="clearfix">
                            <div className="center">
                                {childrenWithProps}
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
