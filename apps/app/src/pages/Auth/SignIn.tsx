import LogoCreate from '../../assets/img/General/Palomitas_de_Maiz.png';
import Background from '../../assets/img/General/Background.jpg';
import avatar from '../../assets/img/General/Avatar.jpg';
import './SignIn.styles.css';
import { AuthContext } from '../../context';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Inputs = {
  username: string;
  password: string;
  address: string;
  country: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [showError, setShowError] = useState(false);
  /* eslint-disable no-unused-vars */
  const [errorMessage, setErrorMessage] = useState('');

  const onLoginUser = async ({ username, password }: Inputs) => {
    setShowError(false);

    const isValidLogin = await loginUser(username, password);

    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setTimeout(() => navigate('/'), 3000);
  };

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
      <form
        onSubmit={handleSubmit(onLoginUser)}
        noValidate
        className="form-account"
      >
        <br></br>
        <h5>Iniciar Sesion</h5>
        <img className="avatar" src={avatar} alt="avatar-usr" />
        <input
          {...register('username', {
            required: 'username is required',
            minLength: { value: 1, message: 'minimum length is 1' },
          })}
          className="control p-2 rounded"
          type="text"
          name="username"
          defaultValue=""
          placeholder="User Name"
        />
        {errors.username && (
          <p className="text-red-800">{errors.username.message}</p>
        )}
        <input
          {...register('password', {
            required: 'password is required',
            minLength: { value: 8, message: 'minimo 8 carateres' },
          })}
          className="control p-2 rounded"
          type="password"
          name="password"
          defaultValue=""
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-800">{errors.password.message}</p>
        )}
        <button className="btn btn-primary">Iniciar Sesion</button>
        <p>
          <a href="#">¿Forgot your password?</a>
        </p>
      </form>
    </>
  );
};

export default SignUp;
