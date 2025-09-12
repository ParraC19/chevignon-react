
import React, { useRef } from 'react';

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

  return (
    <section className="h-screen flex items-center justify-center">
    <div
      className="relative overflow-hidden bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] w-[768px] max-w-full min-h-[480px] transition-all duration-700 ease-in-out"
      ref={containerRef}
    >
      {/* SIGN UP */}
      <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center flex-col px-10 transition-all duration-700 ease-in-out opacity-0 z-[1] container-login-active:translate-x-full container-login-active:opacity-100 container-login-active:z-[5]">
        <form className="flex flex-col items-center justify-center h-full w-full px-10 bg-white">
          <h1 className="text-3xl font-bold mb-4">Crear Cuenta</h1>

          <div className="flex justify-center items-center gap-2 my-5">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-google"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <span className="text-sm mb-3">
            O usa tu correo electrónico para registrarte
          </span>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full bg-gray-200 rounded-lg px-4 py-2 mb-2 outline-none"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full bg-gray-200 rounded-lg px-4 py-2 mb-2 outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full bg-gray-200 rounded-lg px-4 py-2 mb-2 outline-none"
          />
          <button
            type="submit"
            className="bg-[#353535] text-white px-12 py-2 rounded-lg uppercase tracking-wider mt-4 hover:opacity-90"
          >
            Registrarse
          </button>
        </form>
      </div>

      {/* SIGN IN */}
      <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center flex-col px-10 transition-all duration-700 ease-in-out z-[2] container-login-active:translate-x-full">
        <form className="flex flex-col items-center justify-center h-full w-full px-10 bg-white">
          <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>

          <div className="flex justify-center items-center gap-2 my-5">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-google"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <span className="text-sm mb-3">
            O usa tu correo electrónico para iniciar sesión
          </span>
          <input
            type="email"
            placeholder="Correo"
            className="w-full bg-gray-200 rounded-lg px-4 py-2 mb-2 outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full bg-gray-200 rounded-lg px-4 py-2 mb-2 outline-none"
          />
          <a href="#" className="text-sm text-gray-700 mb-3">
            ¿Olvidaste tu contraseña?
          </a>
          <button
            type="submit"
            className="bg-[#353535] text-white px-12 py-2 rounded-lg uppercase tracking-wider mt-4 hover:opacity-90"
          >
            Iniciar sesión
          </button>
        </form>
      </div>

      {/* TOGGLE */}
      <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden rounded-[150px_0_0_100px] z-[1000] transition-all duration-700 ease-in-out container-login-active:-translate-x-full container-login-active:rounded-[0_150px_100px_0]">
        <div className="bg-gradient-to-r from-[#fafafa] to-[#8b8b8b] text-gray-800 relative left-[-100%] w-[200%] h-full transition-all duration-700 ease-in-out container-login-active:translate-x-1/2">
          {/* TOGGLE LEFT */}
          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out container-login-active:translate-x-0 -translate-x-[200%]">
            <h1 className="text-3xl font-bold">Bienvenido de nuevo!</h1>
            <p className="my-5">
              Ingrese sus datos personales para utilizar todas las funciones del
              sitio.
            </p>
            <button
              id="login"
              onClick={handleLoginClick}
              className="bg-[#353535] text-white px-12 py-2 rounded-lg uppercase tracking-wider mt-4 hover:opacity-90"
            >
              Iniciar sesión
            </button>
          </div>

          {/* TOGGLE RIGHT */}
          <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out container-login-active:translate-x-[200%]">
            <h1 className="text-3xl font-bold">Hola, Amigo!</h1>
            <p className="my-5">
              Regístrate con tus datos personales para utilizar todas las
              funciones del sitio.
            </p>
            <button
              id="register"
              onClick={handleRegisterClick}
              className="bg-[#353535] text-white px-12 py-2 rounded-lg uppercase tracking-wider mt-4 hover:opacity-90"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default LoginRegistro;