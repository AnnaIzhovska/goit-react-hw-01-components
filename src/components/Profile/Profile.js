import avatarImg from '../avatar.webp';
import PropTypes from'prop-types';
import s from './Profile.module.css';
import {ImLocation2} from 'react-icons/im';
import {FaUserAlt} from 'react-icons/fa';

const Profile = ({avatar = avatarImg, name, tag, stats, location}) => {
    return(
        <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar} width="100"
            alt="Аватар пользователя"
            className={s.avatar}
          />
          <p className={s.name}>{name}</p>
          <p className={s.tag}><FaUserAlt className={s.icons} size="16"/>@{tag}</p>
          <p className={s.location}><ImLocation2 className={s.icons} size="20"/>{location}</p>
        </div>
        <ul className={s.list}>
          <li className={s.item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
      )
    }

//     Profile.defaultProps = {
//         avatar: avatarImg,
//     }

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

  export default Profile;

