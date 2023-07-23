import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import userStyles from "./User.module.css";

const User = ({
  login, 
  avatar_url, 
  location, 
  followers, 
  following}: UserProps
) => {  
  return (
    <div className={userStyles.user}>
      <div className={userStyles.image}>
        <img src={avatar_url} alt={'foto de perfil do usuário' + login} />
      </div>
      <h2>{login}</h2>
      <p className={userStyles.location}>
        <MdLocationPin/>
        <span>{location}</span>
      </p>
      <div className={userStyles.status}>
        <div>
          <p>Seguidores</p>
          <p className={userStyles.number}>{followers}</p>
        </div>
        |
        <div>
          <p>Seguindo</p>
          <p className={userStyles.number}>{following}</p>
        </div>
      </div>

      {/* <Link to={`/repos/${login}`}>Ver repositórios</Link> */}
    </div>
  );
}

export default User;