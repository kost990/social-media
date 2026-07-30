import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, updateStatus, getUserStatus } from "../../redux/profile-reducer"
import { compose } from 'redux';
import { withRouter } from '../../App';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 32771;
    }
    this.props.setUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserStatus, updateStatus }),
  withRouter,
)(ProfileContainer);
