
const OptionList = ({ categories, category, handleChange }) => {
    
  return (
    <div className="optionList">
        <label htmlFor="category">Categoria</label>
        <select 
            value={category}
            onChange={handleChange} 
            id="category" 
            name="category"
        >
          <option disabled defaultValue="">Escoja una categoría</option>
          {categories && categories.length > 0 ? (
            categories.map(cat => <option value={cat.title} key={cat.id}>{cat.title}</option>)
            ) : (
            <option disabled>No hay categorías disponibles</option>
          )}

      </select>
    </div>
  );
};

export default OptionList;
