import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

// Main component that contains the state and renders SearchBar and ProductTable components
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState(""); // State to store the text used for filtering products
  const [inStockOnly, setInStockOnly] = useState(false); // State to store whether to show only in-stock products

  return (
    <div>
      {/* Pass the state and the state setters to the SearchBar component */}
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      {/* Pass the products and filter criteria to the ProductTable component */}
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
