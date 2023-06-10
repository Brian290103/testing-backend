'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductDetails = ({ params }) => {
  const { slug } = params; // Retrieve the slug from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${slug}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductDetails();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(product);

  return (
    <div>
      {product.map((pd) => {
        return (
          <div key={pd.id}>
            <h1>{pd.id}</h1>
            <p>{pd.name}</p>
            <p>{pd.descr}</p>
            <p>{pd.slug}</p>
            <p>{pd.price}</p>
            <p>{pd.originalPrice}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;

export async function generateStaticParams() {
  const posts = await fetch('/api/products').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
