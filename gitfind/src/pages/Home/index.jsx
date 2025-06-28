
import {useState} from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PerfilUsuario from "../../components/PerfilUsuario";
import ItemList from "../../components/ItemList";
import background from "../../assets/background.png";
import './styles.css';

function App() {
  // referente ao usuário
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  // referente a páginação dos repositórios
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos?.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = repos ? Math.ceil(repos.length / reposPerPage) : 0;


  const handleGetData = async () => {
  const userData = await fetch(`https://api.github.com/users/${user}`);
  const newUser = await userData.json();



  if (newUser.name) {
    const { avatar_url, name, login, bio } = newUser;
    setCurrentUser({ avatar_url, name, login, bio });

    const reposData = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`);
    const newRepos = await reposData.json(); // <- Correção aqui

    if (newRepos.length) {
      setRepos(newRepos);
    }
  }
};


  return (
    <div className="App">
      <>
      <Header/>
      <div className="conteudo">
        <img src={background} alt="imagem png da logo do github em preto com fundo transparente"
        className="background"/>
        <div className="info">
          <div>
            
            <Input placeholder={"@usuário"} value={user} onChange={event => setUser(event.target.value)}/>

            <Button children={"Buscar"} onClick={handleGetData}/>
          </div>
          {currentUser?.name ? (
            <>
            <PerfilUsuario imagem={currentUser.avatar_url} nome={currentUser.name} arroba={currentUser.login} descricaoLonga={currentUser.bio}/>
            <hr/>
            </>
          ) : null}
  
    <div className='repositorios'>
    <h4> Repositórios </h4>

      {repos?.length ? (
        <>
        {currentRepos.map(repo => (
        <ItemList
          key={repo.id}
          title={repo.name}
          description={repo.description}
          login={currentUser.login}
        />
        ))}

        {/* Navegação de páginas */}
        <div className="pagination-buttons" style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ⬅ Anterior
        </Button>

        <span style={{ color: "white" }}>
          Página {currentPage} de {totalPages}
        </span>

        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Próxima ➡
        </Button>
        </div>
        </>
      ) : null}
    </div>


        </div>
      </div>
      </>
      

    </div>
  );
}

export default App;
