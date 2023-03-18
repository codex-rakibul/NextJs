import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarCom from "@/components/navbar";
import Users from "../components/blogs/index";
import style from ".././styles/Home.module.css";
import { Badge, Rate } from "antd";

export default function Home({ data }) {
  const { products } = data;
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarCom />
      <h1 className="text-blue-800 ml-8 text-xl ">Latest Products</h1>
      <div className={style.cardView}>
        {products.map((product) => {
          const { images } = product;
          console.log(product)
          return (
            <Badge.Ribbon
            className={style.itemCardBadge}
              text={`${product.discountPercentage}% off`}
              color="blue">
              <div className={style.card}>
                <img className="h-40 w-180" src={images[0]} alt="" />
                <h2>{product.title}</h2>
                <div className="flex justify-between">
                  <div>Price :   ${product.price}</div>
                  <div>
                  <Rate className="w-100" allowHalf disabled value={product.rating} />
                  </div>
                </div>
              </div>
            </Badge.Ribbon>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}