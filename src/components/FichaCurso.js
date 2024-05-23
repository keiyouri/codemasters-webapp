import React from 'react';
import PropTypes from 'prop-types';
import './FichaCurso.css';

const FichaCurso = ({ nombre, curso, descripcion }) => {
return (
<div className="ficha-curso">
    <h2>{nombre}</h2>
    <h3>{curso}</h3>
    <p>{descripcion}</p>
</div>
);
};

FichaCurso.propTypes = {
nombre: PropTypes.string.isRequired,
curso: PropTypes.string.isRequired,
descripcion: PropTypes.string.isRequired,
};

export default FichaCurso;