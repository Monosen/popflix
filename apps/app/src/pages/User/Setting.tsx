import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { popflixApi } from '../../api';
import { AuthContext } from '../../context';
import Layout from '../../layouts/Layout';
import { IUser } from '../../context/interfaces';

interface FormData {
  username: string;
  address: string;
  country: string;
  password: string;
}

interface Props extends IUser {
  _id: string;
}

const Setting = () => {
  const { user, updateUser } = useContext(AuthContext) as unknown as {
    user: Props;
    updateUser: (user: IUser, password: string) => void;
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit = async (formData: FormData) => {
    try {
      const { data } = await popflixApi.patch(
        `/user/update/${user._id}`,
        formData
      );

      sessionStorage.setItem('user', JSON.stringify(data));

      updateUser(data, formData.password);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl mx-auto text-center py-9 capitalize">
        Actualizar informacion
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-6">
          <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombre De Usuario
          </label>
          <input
            {...register('username', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="text"
            name="username"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            direccion
          </label>
          <input
            {...register('address', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="text"
            name="address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            pais
          </label>
          <input
            {...register('country', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="text"
            name="country"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            contraseña
          </label>
          <input
            {...register('password', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <button
          type="submit"
          className="text-white capitalize bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          actualizar
        </button>
      </form>
    </Layout>
  );
};

export default Setting;
