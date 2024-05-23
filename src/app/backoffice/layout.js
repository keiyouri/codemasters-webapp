import "./backoffice.css";

export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav>
                <ul>
                    <li><a href="/backoffice/dashboard">Inicio</a></li>
                    <li><a href="/backoffice/alumno">Alumno</a></li>
                    <li><a href="/backoffice/profesores">Profesores</a></li>
                    <li><a href="/backoffice/cursos">Cursos</a></li>
                </ul>
            </nav>
            <section>
                {children}
            </section>
        </section>
    );
}
