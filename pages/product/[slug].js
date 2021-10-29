import Head from 'next/head'
import Image from 'next/image'

const defaultEndpoint = 'https://api.nairobidrinks.co.ke/api/products/slug';
const myLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/cprvr2lhot/${src}?w=${width}&q=${quality || 75}`
}

export default function Product({ product  }) {
    console.log('product', product);
    // const { result } = product;
    // const {name, image } = result;
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Portia Software Solutions</title>
                <meta name="description" content="Software development, web apps, mobile apps" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            {/* <div className="text-xl text-red-500 font-bold">{name}</div> */}
            <div className="text-xl text-red-500 font-bold">Portia</div>


        </div>
    )
}

// export async function getServerSideProps({ context }) {
//     const {slug} = context;
//     const res = await fetch(`${defaultEndpoint}/${slug}`);
//     const product = await res.json();
//     return {
//         props: {
//             product,
//         },
//     }
// }


export async function getStaticPaths() {

    const res = await fetch(defaultEndpoint,
        {
            method: "GET",
            headers: {
              // update with your user-agent
              "User-Agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
              Accept: "application/json; charset=UTF-8",
            },
          });
    const products = await res.json();

    const { result = [] } = products;

    const paths = result.map((product) => ({
        params: { slug: product.slug.toString() },
    }));

    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const {slug} = params;
    const res = await fetch(`https://api.nairobidrinks.co.ke/api/products/slug/${slug}`);
    const product = await res.json();

    return { props: { product } }
}

