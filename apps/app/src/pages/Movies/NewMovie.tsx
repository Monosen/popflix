import { ChangeEvent, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { popflixApi } from '../../api';
import { MovieContext } from '../../context';
import Layout from '../../layouts/Layout';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  categories: string;
  video: string;
  description: string;
  file: any;
}

const NewMovie = () => {
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({});

  const onSubmit = async (formData: FormData) => {
    if (!formData.file || formData.file.length === 0) return;

    try {
      for (const file of formData.file) {
        const formData = new FormData();

        formData.append('name', getValues('name'));
        formData.append('video', getValues('video'));
        formData.append('description', getValues('description'));
        formData.append('categories', getValues('categories'));
        formData.append('categories', '');
        formData.append('file', file);

        const { data } = await popflixApi.post('/movie/create', formData);

        await addMovie(data);

        navigate('/movies');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl mx-auto text-center py-9">
        Agregar Nueva Pelicula
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombre
          </label>
          <input
            {...register('name', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Categoria
          </label>
          <input
            {...register('categories', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="text"
            name="categories"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Video URL
          </label>
          <input
            {...register('video', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            type="text"
            name="video"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Imagen
          </label>
          <input
            {...register('file', {
              required: 'Este campo es requerido',
            })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            type="file"
            accept="image/png, image/git, image/jpeg, image/jpg"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Descripcion
          </label>
          <textarea
            {...register('description', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            name="description"
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Añadir Pelicula
        </button>
      </form>
    </Layout>
  );
};

export default NewMovie;
