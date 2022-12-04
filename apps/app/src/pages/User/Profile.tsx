import Layout from '../../layouts/Layout';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { IUser } from '../../context/interfaces';

interface Props extends IUser {
  role?: string[];
}

const Profile = () => {
  const { user } = useContext(AuthContext) as { user: Props };

  return (
    <Layout>
      <div className="text-center mx-auto bg-primary rounded-3xl p-7 max-w-[500px]">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <div className="py-3">
          <p className="capitalize text-center text-2xl pb-2 text-gray-500">
            nombre de usuario:
          </p>
          <p className="capitalize text-center text-2xl ">{user?.username}</p>
        </div>
        <div className="py-3">
          <p className="capitalize text-center text-2xl pb-2 text-gray-500">
            direccion:
          </p>
          <p className="capitalize text-center text-2xl ">{user?.address}</p>
        </div>
        <div className="py-3">
          <p className="capitalize text-center text-2xl pb-2 text-gray-500">
            pais:
          </p>
          <p className="capitalize text-center text-2xl ">{user?.country}</p>
        </div>
        <div className="py-3">
          <p className="capitalize text-center text-2xl pb-2 text-gray-500">
            rol:
          </p>
          <p className="capitalize text-center text-2xl ">
            {user?.role![0].startsWith('cli') ? 'cliente' : 'administrador'}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
