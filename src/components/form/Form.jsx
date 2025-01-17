import Btn from "../btn/Btn";
import OptionList from "../optionList/OptionList";



const Form = ({ form, setForm, categories, handleSubmit  }) => {

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
        
      };

  return (
    <form onSubmit={(e) => handleSubmit(e, form, setForm)} className="form">
        <h2 className="form__title">Crear Tarjeta </h2>
        <div className="form__grid">

          <div className="form__input">
            <label htmlFor="title">Título</label>
            <input
              onChange={handleChange}
              value={form.title} 
              name="title" 
              id="title" 
              type="text" 
              placeholder="título del video" 
            />
          </div>

          <OptionList handleChange={handleChange} category={form.category} categories={categories} />

          <div className="form__input">
            <label htmlFor="image">Imagen</label>
            <input
              onChange={handleChange} 
              value={form.image} 
              name="image" 
              id="image" 
              type="text" 
              placeholder="link de la imagen" 
            />
          </div>

          <div className="form__input">
            <label htmlFor="video">Video</label>
            <input
              onChange={handleChange} 
              value={form.video} 
              name="video" 
              id="video" 
              type="text" 
              placeholder="link del video" 
            />
          </div>

          <div className="form__input"> 
            <label htmlFor="description">Descripción</label>
            <textarea
              onChange={handleChange} 
              value={form.description} 
              name="description" 
              id="description">
            </textarea>
          </div>
        </div>

        <Btn setForm={setForm} />
       </form>
  );
};

export default Form;
