// Component to display the product category as a table row
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan = {2}>{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
