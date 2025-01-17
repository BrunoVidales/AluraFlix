import { useState, useEffect } from "react";
import { read, eliminate } from "../../api/api";
import Modal from "../modal/Modal";


const Cards = ({ dataTitle, color, categories }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editForm, setEditForm] = useState(null);

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

      const handleDelete = (id) => {
        eliminate(id).then(() => {
            setCardsData(cardsData.filter(card => card.id !== id));
        }).catch(error => {
            console.error("Error al eliminar la tarjeta:", error);
        });
    };

    const closeModal = () => setIsModalOpen(false);

  return (
    <div className="cards">
        {
            cardsData.filter( card => card.category === dataTitle )
            .map(card => (
                <div key={card.id} className="cards__card" style={{  border: `5px solid ${color}` }}>
                    <a href={card.video} target="_blank">
                        <img className="cards__img" src={card.image} alt={`imagen ${card.title}`} />
                    </a>
                    <div className="cards__info" style={{ borderTop: `5px solid ${color}` }}>
                        <h3 className="cards__title">{card.title}</h3>
                        <div className="cards__btns">
                            <button onClick={() => handleDelete(card.id)} className="cards__btn"><img src="/icons/iconDelete.png" alt="Icono de borrar" />Borrar</button>
                            <button 
                              onClick={() => {
                                setEditForm(card);
                                setIsModalOpen(true);
                              }}
                              className="cards__btn">
                                <img src="/icons/iconEdit.png" alt="Icono de editar" />Editar
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
        <Modal 
          isOpen={isModalOpen} 
          closeModal={closeModal}
          editForm={editForm} 
          setEditForm={setEditForm}
          setCardsData={setCardsData} 
          categories={categories}
        />
    </div>
  );
};

export default Cards;
