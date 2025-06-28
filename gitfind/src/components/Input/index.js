import './styles.css';

function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      className="input-padrao"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
