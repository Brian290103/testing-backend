'use client';
import Feed from '@components/Feed';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

const Home = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleView = (product) => {
    router.push(`/product/${product.slug}`);
  };

  console.log(data);

  return (
    <section className="flex flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient ">AI_Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        Promptopia is an open-sourse AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <table className="min-w-full mt-5 divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              id
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              subtitle
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              descr
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              originalPrice
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              slug
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              image
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              createdAt
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              view{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.subtitle}</td>
                <td>{product.descr}</td>
                <td>{product.originalPrice}</td>
                <td>{product.slug}</td>
                <td>{product.image}</td>
                <td>{product.createdAt}</td>
                <td className="flex items-center justify-center">
                  <button
                    className="flex items-center justify-between gap-2 text-blue-500 underline"
                    onClick={() => handleView(product)}
                  >
                    Edit
                    <FaEye />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Home;
