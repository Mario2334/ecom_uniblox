import type { NextPage } from 'next'
import Header from "./components/Header";
import axios from "axios";
import {useEffect, useState} from "react";
import Product from "./components/Product";
import {response} from "express";

type ProductType = {
    id: number,
    title: string,
    image: string,
    amount: number,
    rating: number
}

const Home: NextPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("/api/product").then(response => {
            console.log(response);
            let products = response.data
            setProducts(products);
        });
    }, []);

    return (
      <div className=" min-h-screen  bg-slate-300">
        <Header />
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
          {/* map products with product cards */}
          {products.map((product: ProductType) => (
              // @ts-ignore
              <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.amount}
                  rating={product.rating}
              />
          ))}
        </div>
      </div>
  )
}

export default Home
