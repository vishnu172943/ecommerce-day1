import '../styles/Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Jordan 1",
      price: 199.99,
      image: "/shoes/image1.png", // Add leading slash
      speciality: "Classic high-top design, Premium leather",
      brand: "Nike"
    },
    {

      id: 2,
      name: "Adidas NMD Runner",
      price: 169.99,
      image: "/shoes/image 2.png", // Add leading slash
      speciality: "Boost technology, Breathable mesh upper",
      brand: "Adidas"
    },
    {
      id: 3,
      name: "Nike Dunk Low",
      price: 159.99,
      image: "/shoes/image 3.png", // Add leading slash
      speciality: "Vintage basketball inspiration, Iconic colorways",
      brand: "Nike"
    },
    {
      id: 4,
      name: "Air Force 1 Premium",
      price: 189.99,
      image: "/shoes/image 4.jpg", // Add leading slash
      speciality: "Premium materials, Classic silhouette",
      brand: "Nike"
    },
    {
      id: 5,
      name: "Yeezy Boost 350",
      price: 229.99,
      image: "/shoes/image 5.jpg", // Add leading slash
      speciality: "Primeknit upper, Full-length Boost",
      brand: "Adidas"
    },
    {
      id: 6,
      name: "Nike SB Blazer",
      price: 149.99,
      image: "/shoes/image 6.jpg", // Add leading slash
      speciality: "Skate-ready design, Durable construction",
      brand: "Nike"
    },
    {
      id: 7,
      name: "Jordan 4 Retro",
      price: 219.99,
      image: "/shoes/image 7.jpg", // Add leading slash
      speciality: "Classic retro design, Air cushioning",
      brand: "Jordan"
    },
    {
      id: 8,
      name: "Adidas Forum Low",
      price: 139.99,
      image: "/shoes/image 8.jpg", // Add leading slash
      speciality: "Vintage basketball style, Comfortable fit",
      brand: "Adidas"
    },
    {
      id: 9,
      name: "Nike Air Max Plus",
      price: 179.99,
      image: "/shoes/image 9.jpg", // Add leading slash
      speciality: "Tuned Air technology, Bold design",
      brand: "Nike"
    }
  ];

  const handleImageError = (e, productName) => {
    console.log(`Failed to load image for ${productName}`);
    e.target.onerror = null;
    e.target.src = '/placeholder.jpg';
  };

  return (
    <div className="products-container">
      <h1>Featured Sneakers</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image}
                alt={product.name}
                onError={(e) => handleImageError(e, product.name)}
              />
              <div className="brand-tag">{product.brand}</div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <p className="speciality">{product.speciality}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
