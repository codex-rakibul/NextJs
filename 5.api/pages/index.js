import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import FooterCom from "@/components/FooterCom";
import HeaderCom from "@/components/HeaderCom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <HeaderCom />
      <Link href={"/users"}>
        <h1>User</h1>
      </Link>
      <FooterCom />
    </>
  );
}

