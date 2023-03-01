import { Button } from 'antd';
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/users");
  };

  return (
    <>
     <h1>Server Site Rendering</h1>
     <Button onClick={handleClick}>See all users</Button>
    </>
  )
}
