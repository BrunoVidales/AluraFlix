import Btn from "../components/btn/Btn";

const NewVideo = ({ categories }) => {

  return ( 
    <section className="form spacing container">
      <h1 className="form__heading">Nuevo Video</h1>
      <p className="form__text">Complete el formulario para crear una nueva tarjeta de video</p>
      <form className="form__form-video">
        <h2 className="form__title">Crear Tarjeta </h2>
        <div className="form__grid">

          <div className="form__input">
            <label htmlFor="">Título</label>
            <input type="text" placeholder="título del video" />
          </div>

          <div className="form__input">
            <label htmlFor="">Categoria</label>
            <select id="category" name="category">
              <option value="" disabled defaultValue="" hidden>Escoja una categoría</option>
              <option value="frontend">Front End</option>
              <option value="backend">Back End</option>
              <option value="innovation">Innovación y Gestión</option>
            </select>
          </div>

          <div className="form__input">
            <label htmlFor="">Imagen</label>
            <input type="text" placeholder="link de la imagen" />
          </div>

          <div className="form__input">
            <label htmlFor="">Video</label>
            <input type="text" placeholder="link del video" />
          </div>

          <div className="form__input"> 
            <label htmlFor="">Descripción</label>
            <textarea></textarea>
          </div>
        </div>

        <Btn />
       </form>
    </section>
  );
};

export default NewVideo;
