import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta("O Usuario foi desconectado com sucesso!", "info")

        setTimeout(() => {
            navigate('/login');
        }, 100);
    }


    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to={"/"}>Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        {/* <Link to={"/teste"}>Teste</Link> */}
                        <Link to="/postagens" className="houver:underline">Postagens</Link>
                        <Link to="/temas" className="houver:underline">Temas</Link>
                        <Link to="/cadastrartema" className="houver:underline">Cadastrar tema</Link>
                        <Link to="/perfil" className="houver:underline">Perfil</Link>
                        <span onClick={logout} className="houver:underline" style={{ cursor: "pointer" }}>Sair</span>
                    </div>
                </div>
            </div>
        )
    } else {
    // Usuário não logado
    component = (
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg">
          <Link to={"/"}>Blog Pessoal</Link>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
}

    return (
        <>
            {component}
        </>
    )
}

export default Navbar