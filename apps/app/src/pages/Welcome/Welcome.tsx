import { Link } from 'react-router-dom';
import './Welcome.styles.css';
import BackgroundImg from '../../assets/img/General/Background.jpg';
import MainLogo from '../../assets/img/General/PopFlix.png';

const Welcome = () => {
  return (
    <div>
      {/*Background*/}
      <div className="Background">
        <img src={BackgroundImg} />
      </div>

      {/*Logo*/}
      <div className="logo">
        <img src={MainLogo} alt="Palomitas_de_Maiz_Logo" width={400} />
      </div>

      {/*login & fix animation*/}
      <div className="botones">
        <nav>
          <ul>
            <li className="myList">
              <Link to="/Profiles">
                Login<span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </li>

            <li className="myList">
              <Link to="/signin">
                Create Account<span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Welcome;
