import React, { useRef } from 'react';
import '../pages/LoginRegistro.css';

const LoginRegistro = () => {
    const containerRef = useRef(null);

    const handleRegisterClick = () => {
        containerRef.current.classList.add('active');
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove('active');
    };

    return (
        <div className="container" ref={containerRef}>
            <div className="form-container sign-up">
                <form>
                    <h1>Crear Cuenta</h1>
                    
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                
                    <span>O usa tu correo electronico para registrarte</span>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <button type="submit">Registrarse</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Iniciar sesion</h1>
                    
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                
                    <span>O usa tu correo electronico para iniciar sesion</span>
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button type="submit">Inicar sesion</button>
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bienvenido De nuevo!</h1>
                        <p>Ingrese sus datos personales para utilizar todas las funciones del sitio.</p>
                        <button className="" id="login" onClick={handleLoginClick}>Iniciar sesion</button>
                    </div>
                    
                    <div className="toggle-panel toggle-right">
                        <h1>Hola, Amigo!</h1>
                        <p>Registrate con tus datos personales para utilizar todas las funciones del sitio.</p>
                        <button className="" id="register" onClick={handleRegisterClick}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegistro;
