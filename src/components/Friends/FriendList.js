import avatarImg from '../avatar.webp';
import PropTypes from'prop-types';
import s from './Friends.module.css'

const FriendList = ({isOnline, avatar = avatarImg, name}) => (
  <>
  <span className={s.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}>{isOnline}</span>
  <img className={s.avatar} src={avatar} alt="" width="48" />
  <p className={s.name}>{name}</p>
  </>
    )

FriendList.propTypes = {
avatar: PropTypes.string,
name: PropTypes.string.isRequired,
isOnline: PropTypes.string.isRequired,
}

export default FriendList;