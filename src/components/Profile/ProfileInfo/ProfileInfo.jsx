import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/user.png'
import ProfileStatusHook from './ProfileStatushook';



const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>  
      </div>
      <div className={s.description}>
        <img alt='' src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
      <div> {props.profile.aboutMe}</div>
       <div>{props.profile.contacts.github}</div>
       <div>{props.profile.lookingForAJobDescription}</div>
       <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
