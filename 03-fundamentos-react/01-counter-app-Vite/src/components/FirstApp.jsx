import PropTypes from 'prop-types';

const saludo = () => {
  return 'Hola Mauricio'
}

// const newMessage = {
//   message: 'Hola mundo',
//   telefono: 31234,
// };

export const FirstApp = ( { title, subTitle, name } ) => {

  return (
    <>
      <h1>{ title }</h1>
      {/* 
        <code>{ JSON.stringify( newMessage ) }</code> 
      */}
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Mauricio Rodriguez'
}