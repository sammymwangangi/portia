import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const defaultEndpoint = 'https://api.nairobidrinks.co.ke/api/products';
const myLoader = ({ src, width, quality }) => {
  return `https://ik.imagekit.io/cprvr2lhot/${src}?w=${width}&q=${quality || 75}`
}

export default function Home({ products  }) {
  console.log('products', products);
  const { result = [] } = products;
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Portia Software Solutions</title>
        <meta name="description" content="Software development, web apps, mobile apps" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="text-xl font-bold text-red-500">Portia Software Solutions</div>
      
      <ul>
          {result.data.map(result =>{
            const {_id, name, image, url } = result;

            return (
              <li key={_id}>
                <Image loader={myLoader} src={image} width="10" height="10" alt="prod image" />
                  <Link href="/product/[slug]" as={`/product/${url}`}>
                    <h4 className="font-semibold text-gray-500">{ name }</h4>
                  </Link>
              </li>
            )
          })}
      </ul>

    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch(defaultEndpoint)
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

