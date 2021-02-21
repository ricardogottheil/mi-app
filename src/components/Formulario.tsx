import { useForm } from '../hooks/useForm';

const Formulario = () => {
  const { email, nombre, handleChange, formulario } = useForm({
    email: 'ricardogottheil@gmail.com',
    nombre: 'Ricardo Gottheil',
  });

  //   const { email, nombre } = formulario;

  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label'>Email:</label>
        <input
          onChange={handleChange}
          type='email'
          name='email'
          id='email'
          value={email}
          className='form-control'
        />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Nombre:</label>
        <input
          onChange={handleChange}
          type='text'
          name='nombre'
          id='nombre'
          value={nombre}
          className='form-control'
        />
      </div>

      <pre> {JSON.stringify(formulario)} </pre>
    </form>
  );
};

export default Formulario;
