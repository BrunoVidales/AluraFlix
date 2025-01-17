import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { read, add } from '../../api/api'
import Cards from '../cards/Cards';
import NewVideo from '../../views/NewVideo';


const Main = () => {
  const location = useLocation();
  const isNewVideoPage = location.pathname === '/nuevo-video';

  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await read('/categories');
        setSectionData(result);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);
  
  // Envios los recursos al servidor
  const handleSubmit = async (e, url, setForm) => {
    e.preventDefault();
    try {
      const newCard = await add(url);
      
      setForm({
        title: '',
        category: '',
        image: '',
        video: '',
        description: ''
      })
    } catch (error) {
      console.log('Hubo un error al crear la nueva card', error);
    }
  };

  return (
    <main className="main spacing container">
      {!isNewVideoPage ? (
        sectionData.map(data => (
          <section key={data.id} className="main__section">
            <h2 style={{backgroundColor: data.color}} className="main__title">{data.title}</h2>
            <Cards color={data.color} dataTitle={data.title} categories={sectionData} />
          </section>
        ))
      ) : (
        <NewVideo handleSubmit={handleSubmit} categories={sectionData} />
      )}
    </main>
  );
};

export default Main;
