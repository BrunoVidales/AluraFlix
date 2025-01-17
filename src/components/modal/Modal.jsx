import { update } from "../../api/api";

const Modal = ({ isOpen, closeModal, editForm, setEditForm, setCardsData, categories }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      
      await update(editForm.id, editForm);
      
      // Actualizar el estado de cardsData con el nuevo objeto editado
      setCardsData(prevCardsData => 
        prevCardsData.map(card => 
          card.id === editForm.id ? { ...card, ...editForm } : card
        )
      );

      closeModal(); // Cerrar el modal
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__header">
          <button className="modal__close-btn" onClick={closeModal}>
            <img src="/icons/iconClose.png" alt="Icono de cerrar" />
          </button>
        </div>
        <form className="modal__form">
          <input 
            className="modal__input"
            name="title" 
            value={editForm?.title || ''} 
            onChange={handleChange} 
            placeholder="Título" 
          />
           <div className="optionList">
            <select 
              name="category" 
              value={editForm?.category || ''} 
              onChange={handleChange}
              id="category"
            >
              <option disabled value="">Seleccione una categoría</option>
              {categories && categories.length > 0 ? (
                categories.map(cat => <option value={cat.title} key={cat.id}>{cat.title}</option>)
              ) : (
                <option disabled>No hay categorías disponibles</option>
              )}
            </select>
          </div>
          <button type="button" className="modal__submit-btn" onClick={handleSave}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
