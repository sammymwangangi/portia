import Head from 'next/head'
import Image from 'next/image'

const defaultEndpoint = 'https://api.nairobidrinks.co.ke/api/products/view';
const myLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/cprvr2lhot/${src}?w=${width}&q=${quality || 75}`
}

export async function getServerSideProps({ query }) {
    const {id} = query;
    const res = await fetch(`${defaultEndpoint}/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        },
    }
}

export default function Product({ data  }) {
    //console.log('data', data);
    const { result } = data;
    const {name, image } = result;
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Portia Software Solutions</title>
                <meta name="description" content="Software development, web apps, mobile apps" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="text-xl text-red-500 font-bold">{name}</div>


        </div>
    )
}


// export async function getStaticPaths() {
//
//     const res = await fetch(defaultEndpoint)
//     const products = await res.json()
//
//     const paths = products.map((product) => ({
//         params: { _id: product._id },
//     }))
//
//     return { paths, fallback: false }
// }
//
//
// export async function getStaticProps({ params }) {
//
//     const res = await fetch(singleEndpoint)
//     const post = await res.json()
//
//     return { props: { product } }
// }

