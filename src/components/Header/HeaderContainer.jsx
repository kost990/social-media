import React from 'react';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose(
    connect(mapStateToProps, { logout })
)(HeaderContainer)