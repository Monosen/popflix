import Layout from '../../layouts/Layout';

const Profile = () => {
  return (
    <Layout>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        class="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p class="text-gray-500">Web designer</p>
      <p className="capitalize text-center text-2xl py-4">nombre de usuario:</p>
      <p className="capitalize text-center text-2xl py-4">pepe</p>
      <p className="capitalize text-center text-2xl py-4">direccion:</p>
      <p className="capitalize text-center text-2xl py-4">carrea 45 a #1g-43</p>
      <p className="capitalize text-center text-2xl py-4">pais:</p>
    </Layout>
  );
};

export default Profile;
