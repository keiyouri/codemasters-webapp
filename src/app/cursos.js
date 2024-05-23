import React, { useEffect, useState } from 'react';
import FichaCurso from '../components/FichaCurso';

const Cursos = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        // Aquí debes reemplazar 'url-del-servidor' con la URL de tu servidor
        fetch('http://localhost:3001/cursos')
            .then(response => response.json())
            .then(data => setCursos(data));
    }, []);

    return (
        <div>
            {cursos.map(curso => (
                <FichaCurso
                    key={curso.id}
                    nombre={curso.nombre}
                    curso={curso.curso}
                    descripcion={curso.descripcion}
                />
            ))}
        </div>
    );
};

export default Cursos;