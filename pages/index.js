import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

  return (
    <div className="bg-gray-900">
      <Head>
        <title>Portia Software Solutions</title>
        <meta name="description" content="Software development, web apps, mobile apps" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="text-xl font-bold text-red-500">Portia Software Solutions</div>

    </div>
  )
}

