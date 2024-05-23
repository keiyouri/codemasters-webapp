import React, { useEffect, useState } from 'react';
import RootLayout from '../../components/layout';

const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/alumnos')
            .then(response => response.json())
            .then(data => setAlumnos(data))
            .catch(error => console.error('Error fetching alumnos:', error));
    }, []);

    return (
        <RootLayout>
            <h1>Lista de Alumnos</h1>
            {alumnos.length > 0 ? (
                <ul>
                    {alumnos.map((alumno, index) => (
                        <li key={index}>{alumno.nombre}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay datos disponibles.</p>
            )}
        </RootLayout>
    );
};

export default Alumnos;
