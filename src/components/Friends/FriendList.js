import s from './Friends.module.css'

const FriendList = ({ children }) => (

  <ul  className={s.list}>{children}</ul>
    );

  export default FriendList