import { useState, useEffect } from "react";
import { read } from "../../api/api";


const Cards = ({ dataId, color }) => {

    const [cardsData, setCardsData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await read('/cards');
            setCardsData(result);
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
        fetchData();
      }, []);

  return (
    <div className="cards">
        {
            cardsData.filter( card => card.categoryId === dataId )
            .map(card => (
                <div key={card.id} className="cards__card" style={{  border: `5px solid ${color}` }}>
                    <a href={card.video}>
                        <img className="cards__img" src={card.image} alt={`imagen ${card.title}`} />
                    </a>
                    <div className="cards__info" style={{ borderTop: `5px solid ${color}` }}>
                        <h3 className="cards__title">{card.title}</h3>
                        <div className="cards__btns">
                            <button className="cards__btn"><img src="/icons/iconDelete.png" alt="Icono de borrar" />Borrar</button>
                            <button className="cards__btn"><img src="/icons/iconEdit.png" alt="Icono de editar" />Editar</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default Cards;
