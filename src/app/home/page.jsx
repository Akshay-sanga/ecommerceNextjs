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
    <h1>Ecommerce Home Page</h1>
    </>

  );
}
