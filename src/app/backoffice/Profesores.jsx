import React, { useEffect, useState } from 'react';
import RootLayout from '../../components/layout';

const Profesores = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/profesores')
            .then(response => response.json())
            .then(data => setProfesores(data))
            .catch(error => console.error('Error fetching profesores:', error));
    }, []);

    return (
        <RootLayout>
            <h1>Lista de Profesores</h1>
            {profesores.length > 0 ? (
                <ul>
                    {profesores.map((profesor, index) => (
                        <li key={index}>{profesor.nombre}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay datos disponibles.</p>
            )}
        </RootLayout>
    );
};

export default Profesores;
