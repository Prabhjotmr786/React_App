import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

// Component to display the table of products
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  // Loop through each product to filter and group them by category
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return; // Skip products that do not match the filter text
    }
    if (inStockOnly && !product.stocked) {
      return; // Skip products that are not in stock if inStockOnly is true
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category; // Update the lastCategory to group products correctly
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
