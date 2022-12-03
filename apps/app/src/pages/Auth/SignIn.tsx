import './SignIn.styles.css';
import LogoCreate from '../../assets/img/General/Palomitas_de_Maiz.png';
import Background from '../../assets/img/General/Background.jpg';
import avatar from '../../assets/img/General/Avatar.jpg';

const SignIn = () => {
  return (
    <>
      {/*Background*/}
      <div className="backgroundImg">
        <img src={Background} />
      </div>

      {/*LOGO PRINCIPAL*/}
      <br />
      <div className="logo-create">
        <img src={LogoCreate} alt="Palomitas_de_Maiz_Logo" width={100} />
      </div>
      {/*CREATE ACCOUNT*/}
      <section className="form-account">
        <br></br>
        <h5>Crear una Cuenta</h5>
        <img className="avatar" src={avatar} alt="avatar-usr" />
        <input
          className="control p-2 rounded"
          type="text"
          name="user"
          defaultValue=""
          placeholder="User Name"
        />
        <input
          className="control p-2 rounded"
          type="password"
          name="password"
          defaultValue=""
          placeholder="Password"
        />
        <input
          className="control p-2 rounded"
          type="text"
          name="address"
          defaultValue=""
          placeholder="Address"
        />
        <input
          className="control p-2 rounded"
          type="text"
          name="country"
          defaultValue=""
          placeholder="Country"
        />
        <a href="./home.html">
          <input
            className="buttons"
            type="submit"
            name=""
            defaultValue="Create Account"
            placeholder="User"
          />
        </a>
        <p>
          <a href="#">¿Forgot your password?</a>
        </p>
      </section>
    </>
  );
};

export default SignIn;
