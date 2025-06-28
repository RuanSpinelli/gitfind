import './styles.css';

function Button({ children, onClick, disabled }) {
  return (
    <button className="botao-padrao" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
