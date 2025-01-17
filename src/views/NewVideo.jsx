import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Form from "../components/form/Form";


const NewVideo = ({ categories, handleSubmit }) => {

  const [form, setForm] = useState({
    id: uuidv4(),
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });


  return ( 
    <section className="form spacing container">
      <h1 className="form__heading">Nuevo Video</h1>
      <p className="form__text">Complete el formulario para crear una nueva tarjeta de video</p>

      <Form form={form} setForm={setForm} categories={categories} handleSubmit={handleSubmit} />
    </section>
  );
};

export default NewVideo;
