import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

// const tempUser: User = {
//   uid: 'XYZ123',
//   name: 'asdasd',
// };

const Usuario = () => {
  const [user, setUser] = useState<User>({
    uid: '',
    name: '',
  });

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Ricardo Gottheil',
    });
  };

  return (
    <div className='mt-5'>
      <h3>Usuario: useState</h3>
      <button onClick={login} className='btn btn-outline-primary'>
        login
      </button>
      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default Usuario;
