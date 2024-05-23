import React, { useEffect, useState } from 'react';
import FichaCurso from '../../components/FichaCurso';
import RootLayout from '../../components/layout';

const Cursos = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cursos')
            .then(response => response.json())
            .then(data => setCursos(data))
            .catch(error => console.error('Error fetching cursos:', error));
    }, []);

    return (
        <RootLayout>
            <h1>Lista de Cursos</h1>
            {cursos.map((curso, index) => (
                <FichaCurso
                    key={index}
                    nombre={curso.nombre}
                    curso={curso.curso}
                    descripcion={curso.descripcion}
                />
            ))}
        </RootLayout>
    );
};

export default Cursos;
