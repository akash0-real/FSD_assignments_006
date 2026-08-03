import './App.css'

function App() {
  const products = [
    {
      name: 'Urban Runner',
      category: 'Sneakers',
      price: '$79',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Minimal Backpack',
      category: 'Bags',
      price: '$59',
      image:
        'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Classic Watch',
      category: 'Accessories',
      price: '$129',
      image:
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Soft Hoodie',
      category: 'Clothing',
      price: '$49',
      image:
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80',
    },
  ]

  return (
    <main>
      <header className="topbar">
        <p className="brand">NovaCart</p>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#deals">Deals</a>
          <a href="#reviews">Reviews</a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero-content">
          <p className="eyebrow">Fresh Drops Every Week</p>
          <h1>Discover Everyday Essentials with Premium Style</h1>
          <p>
            A simple one-page shopping showcase with smooth scrolling, curated
            collections, and trending picks.
          </p>
          <a className="btn" href="#products">
            Explore Collection
          </a>
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Scroll through our top picks crafted for comfort and style.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="card">
              <img src={product.image} alt={product.name} />
              <div className="card-body">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section deals" id="deals">
        <div className="section-heading">
          <h2>Weekend Deals</h2>
          <p>Limited-time offers with up to 40% off selected categories.</p>
        </div>
        <div className="deal-strip">
          <div>
            <p>Footwear Sale</p>
            <h3>Buy 1 Get 1 30% Off</h3>
          </div>
          <div>
            <p>Accessories</p>
            <h3>Flat $20 Off Orders Above $100</h3>
          </div>
          <div>
            <p>Free Shipping</p>
            <h3>All Orders This Weekend</h3>
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="section-heading">
          <h2>What Customers Say</h2>
        </div>
        <div className="review-grid">
          <blockquote>
            “Simple shopping experience and quality products. Loved the fast
            delivery!”
            <cite>- Priya</cite>
          </blockquote>
          <blockquote>
            “Great pricing and clean design. I found exactly what I needed in
            minutes.”
            <cite>- Aman</cite>
          </blockquote>
          <blockquote>
            “Perfect single-page showcase with smooth navigation between
            sections.”
            <cite>- Rhea</cite>
          </blockquote>
        </div>
      </section>

      <footer className="footer section">
        <h2>Join NovaCart</h2>
        <p>Get updates on new arrivals and seasonal discounts.</p>
        <button type="button">Subscribe</button>
      </footer>
    </main>
  )
}

export default App
