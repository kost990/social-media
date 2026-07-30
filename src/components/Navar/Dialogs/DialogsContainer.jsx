import { onSendMessage, updateNewMessageBody } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
    }
}
export default compose(
    connect(mapStateToProps, {updateNewMessageBody,onSendMessage}),
    withAuthRedirect
)(Dialogs);