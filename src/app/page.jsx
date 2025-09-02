"use client";
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: "Men's Fashion",
    image: '/categories/men.jpg', // Place your images in public/categories/
    href: '/categories/men',
  },
  {
    name: "Women's Fashion",
    image: '/categories/women.jpg',
    href: '/categories/women',
  },
  {
    name: 'Electronics',
    image: '/categories/electronics.jpg',
    href: '/categories/electronics',
  },
  {
    name: 'Home & Decor',
    image: '/categories/home.jpg',
    href: '/categories/home',
  },
];

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: '/products/headphones.jpg',
    price: 89.99,
    oldPrice: 109.99,
    rating: 5,
    reviews: 128,
    discount: 20,
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    image: '/products/smartwatch.jpg',
    price: 199.99,
    rating: 4,
    reviews: 94,
  },
  {
    id: 3,
    name: 'Leather Backpack',
    image: '/products/backpack.jpg',
    price: 129.99,
    rating: 5,
    reviews: 67,
  },
  {
    id: 4,
    name: 'Running Shoes',
    image: '/products/shoes.jpg',
    price: 79.99,
    rating: 4,
    reviews: 45,
    isNew: true,
  },
];

const stars = (count) => {
  const fullStars = Math.floor(count);
  const halfStar = count - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-3.09 1.62.59-3.44L5 11.18l3.46-.5L10 7l1.54 3.68 3.46.5-2.5 2.5.59 3.44L10 15z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 inline" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">


        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">Summer Collection 2024</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the latest trends and elevate your style with our premium collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/shop" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                Shop Now

              </Link>
              <Link href="/about" className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition font-semibold">
                Learn More

              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero/hero-image.jpg"
              alt="Summer collection models"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-[100%]"
              priority
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <span className="text-sm text-gray-600">Starting at</span>
              <div className="text-2xl font-bold text-blue-600">$49.99</div>
            </div>
          </div>
        </div>

      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Shop by Category</h2>
          <p className="text-gray-600 mb-12 text-center max-w-xl mx-auto">
            Explore our wide range of products
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(({ name, image, href }) => (
              <Link key={name} href={href} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
                  <h3 className="text-white text-xl font-semibold">{name}</h3>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Featured Products</h2>
          <p className="text-gray-600 mb-12 text-center max-w-xl mx-auto">
            Our most popular items this season
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(
              ({ id, name, image, price, oldPrice, rating, reviews, discount, isNew }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="relative mb-4">
                    <Image
                      src={image}
                      alt={name}
                      width={300}
                      height={300}
                      className="rounded object-cover w-full h-48"
                    />
                    {discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                        -{discount}%
                      </div>
                    )}
                    {isNew && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                        New
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{name}</h3>
                  <div className="flex items-center mb-2">
                    {stars(rating)}
                    <span className="text-sm text-gray-600 ml-2">({reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">${price.toFixed(2)}</span>
                      {oldPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      aria-label={`Add ${name} to cart`}
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m5-9v9m4-9v9m5-9l-1.35 6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Summer Sale</h3>
              <p className="mb-4">Up to 50% off on selected items</p>
              <Link href="/deals" className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Shop Now

              </Link>
            </div>
            <Image
              src="/offers/summer-sale.png"
              alt="Summer sale banner"
              width={128}
              height={128}
              className="absolute right-4 bottom-4 opacity-50"
            />
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
              <p className="mb-4">On orders over $100</p>
              <Link href="/shipping-info" className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Learn More

              </Link>
            </div>
            <Image
              src="/offers/free-shipping.png"
              alt="Free shipping banner"
              width={128}
              height={128}
              className="absolute right-4 bottom-4 opacity-50"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Real reviews from satisfied shoppers
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                review:
                  'The quality of the products is exceptional. Fast shipping and great customer service!',
                rating: 5,
                image: '/testimonials/sarah.jpg',
              },
              {
                name: 'Mike Chen',
                review:
                  'Love the variety of products. The website is easy to navigate and the checkout process was smooth.',
                rating: 4,
                image: '/testimonials/mike.jpg',
              },
              {
                name: 'Emily Rodriguez',
                review:
                  'Excellent customer support and the products arrived exactly as described. Will shop again!',
                rating: 5,
                image: '/testimonials/emily.jpg',
              },
            ].map(({ name, review, rating, image }) => (
              <div key={name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{stars(rating)}</div>
                <p className="text-gray-600 mb-4">&quot;{review}&quot;</p>
                <div className="flex items-center justify-center md:justify-start">
                  <Image
                    src={image}
                    alt={`${name} profile`}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, new arrivals, and fashion tips
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email && email.includes('@')) {
                alert('Thank you for subscribing!');
                e.target.reset();
              } else {
                alert('Please enter a valid email address');
              }
            }}
            className="max-w-md mx-auto flex gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
