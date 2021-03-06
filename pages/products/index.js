import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
            <div className="text-xl text-red-500 font-bold">Portia Software Solutions</div>

            <ul>
                {result.data.map(result =>{
                    const {_id, name, image, url } = result;

                    return (
                        <li key={_id}>
                            <Image loader={myLoader} src={image} width="10" height="10" alt="prod image" />
                            <Link href={`/product/${encodeURIComponent(url)}`}>
                                <h4 className="cursor-pointer text-gray-500 font-semibold">{ name }</h4>
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

