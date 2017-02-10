import React from 'react';
import {Paper} from 'material-ui';
import {colors} from 'material-ui/styles';

class RequestFeedPost extends React.Component {
    static propTypes = {
        requesterName: React.PropTypes.string.isRequired,
        valentineName: React.PropTypes.string.isRequired,
        customMessage: React.PropTypes.string.isRequired,
        wasAccepted: React.PropTypes.bool.isRequired,
        // Improvement: Implement a custom address type to validate these proptypes
        requesterAddress: React.PropTypes.string.isRequired,
        // style: React.PropTypes.object.isRequired,
    }
    render() {
        const style = {
            // ...this.props.style,
            width: '90%',
            display: 'inline-block',
            overflow: 'hidden',
            margin: '10px',
            color: colors.grey800,
        };

        return (
            <Paper
                style={style}
                zDepth={1} >
                <div className="clearfix">
                    <div className="col col-3 pt1 pl1 left-align">
                        <span style={{fontWeight: '500'}}>To: </span>
                        {this.props.valentineName}
                    </div>
                    <div
                        className="col col-9 pt1 pr1 right-align"
                        style={{color: colors.greenA700}}>
                        {this.props.wasAccepted ? 'Accepted' : ''}
                    </div>
                </div>
                <div
                    className="p1 relative center"
                    style={{fontFamily: 'Caveat Brush, cursive', fontSize: '22px', height: '54px'}}>
                    <div
                        className="absolute"
                        style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%'}} >
                        {`"${this.props.customMessage}"`}
                    </div>
                </div>
                <div className="pb1">- {this.props.requesterName} ({this.props.requesterAddress})</div>
            </Paper>
        );
    }
}

export default RequestFeedPost;
