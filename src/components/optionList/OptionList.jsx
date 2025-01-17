
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
            {categories.map(cat => <option value={cat.title} key={cat.id}>{cat.title}</option>)}
        </select>
    </div>
  );
};

export default OptionList;
