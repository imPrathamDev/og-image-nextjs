import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface HomeProps {
  title: string;
  desc: string;
  price: string;
  discPrice: string;
  imageURL: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const { title, desc, price, discPrice, imageURL } = query;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      title,
      desc,
      price,
      discPrice,
      imageURL,
    },
  };
};

export default function Home({
  title,
  desc,
  price,
  discPrice,
  imageURL,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>OG Image</title>
      </Head>
      <main className="h-screen w-screen p-24">
        <section className="flex">
          <div className="w-3/4">
            <Image
              src={"/logo-transparent-black.png"}
              alt="Reale"
              width={160}
              height={50}
              className="-ml-4 mb-2"
            />
            <h1 className="text-primary-black text-6xl font-Cinzel uppercase">
              {title}
            </h1>
            <p className="max-w-2xl my-6">{desc}</p>

            <div className="flex gap-x-2 items-baseline font-Cinzel font-semibold">
              <span className="text-primary text-4xl">
                {`\u{20b9}`}
                {discPrice}
              </span>
              <span className="text-3xl text-gray-600 line-through">
                {`\u{20b9}`}
                {price}
              </span>
            </div>

            <h2 className="font-Cinzel font-medium text-3xl uppercase mt-6 text-primary">
              Shop Today On Reale Gioielleria.
            </h2>

            <p className="mb-4">With free shiping all over the India.</p>
          </div>
          <div className="w-1/4">
            <div className="mt-12">
              <Image
                src={imageURL}
                alt={"Image"}
                width={700}
                height={700}
                className="rounded-md scale-125"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
