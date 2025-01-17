
const Btn = ({ setForm }) => {

  const clean = () => {
    setForm({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  }

  return (
    <div className="btn">
      <button type="submit">Guardar</button>
      <button onClick={clean}>Limpiar</button>
    </div>
  );
};

export default Btn;
