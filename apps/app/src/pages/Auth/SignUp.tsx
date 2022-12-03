import { useForm } from 'react-hook-form';

import LogoCreate from '../../assets/img/General/Palomitas_de_Maiz.png';
import Background from '../../assets/img/General/Background.jpg';
import avatar from '../../assets/img/General/Avatar.jpg';
import './SignIn.styles.css';
import { useState } from 'react';

type Inputs = {
  username: string;
  password: string;
  address: string;
  country: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [showError, setShowError] = useState(false);
  /* eslint-disable no-unused-vars */
  const [errorMessage, setErrorMessage] = useState('');

  const onRegisterForm = async ({
    username,
    password,
    address,
    country,
  }: Inputs) => {
    setShowError(false);
    console.log(username, password, address, country);

    // const { hasError, message } = await registerUser(
    //   username,
    //   password,
    //   address,
    //   country
    // );

    // if (hasError) {
    //   setShowError(true);
    //   setErrorMessage(message!);
    //   setTimeout(() => setShowError(false), 3000);
    // }
    // // const destination = router.query.p?.toString() || '/'

    // // router.replace(destination)

    // await signIn('credentials', { email, password });
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
        onSubmit={handleSubmit(onRegisterForm)}
        noValidate
        className="form-account"
      >
        <br></br>
        <h5>Crear una Cuenta</h5>
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
        <input
          {...register('address', {
            required: 'address is required',
            minLength: { value: 1, message: 'minimum length is 1' },
          })}
          className="control p-2 rounded"
          type="text"
          name="address"
          defaultValue=""
          placeholder="Address"
        />
        {errors.address && (
          <p className="text-red-800">{errors.address.message}</p>
        )}
        <input
          {...register('country', {
            required: 'country is required',
            minLength: { value: 1, message: 'minimum length is 1' },
          })}
          className="control p-2 rounded"
          type="text"
          name="country"
          defaultValue=""
          placeholder="Country"
        />
        {errors.country && (
          <p className="text-red-800">{errors.country.message}</p>
        )}
        <button className="btn btn-primary" type="submit">
          Crear Cuenta
        </button>
        <p>
          <a href="#">¿Forgot your password?</a>
        </p>
      </form>
    </>
  );
};

export default SignIn;
