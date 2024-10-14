// Component for the search bar with filter text and in-stock only checkbox
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) 
{
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} // Update filterText on input change
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} // Update inStockOnly on checkbox change
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
