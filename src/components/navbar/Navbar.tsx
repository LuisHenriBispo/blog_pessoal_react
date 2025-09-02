import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert("O Usuario foi desconectado com sucesso!")

        setTimeout(() => {
            navigate('/login');
        }, 100);
    }

    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to={"/home"}>Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        {/* <Link to={"/teste"}>Teste</Link> */}
                        Postagens
                        <Link to="/temas" className="houver:underline">Temas</Link>
                        Cadastrar tema
                        Perfil
                        <span onClick={logout} className="houver:underline" style={{ cursor: "pointer" }}>Sair</span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar