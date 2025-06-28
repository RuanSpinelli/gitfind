import './styles.css';

function PerfilUsuario({ imagem, nome, arroba, descricaoLonga }) {
  return (
    <div className="perfil">
      <img
        src={imagem}
        className="profile"
        alt={`Imagem de perfil de ${nome}`}
      />
      <div>
        <h3>{nome}</h3>
        <span>@{arroba}</span>
        <p>{descricaoLonga}</p>
      </div>
    </div>
  );
}

export default PerfilUsuario;
