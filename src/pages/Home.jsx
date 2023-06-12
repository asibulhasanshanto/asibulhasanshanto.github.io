// import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Layout from "../layouts/Layout";
import mern_img from "../assets/images/mern.jpeg";
import solidity_img from "../assets/images/solidity.png";
import profile_pic from "../assets/images/profile_pic.jpg";
// import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Web3,Etherium and Solidity",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: solidity_img,
    // date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Md Asibul Hasan Shanto",
      imageUrl: profile_pic,
    },
    url: "web3_etherium_solidity",
  },
  {
    id: 2,
    title: "Mern Stack",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: mern_img,
    // date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Md Asibul Hasan Shanto",
      imageUrl: profile_pic,
    },
    url: "",
  },
  // More posts...
];

const Home = () => {
  return (
    <Layout>
      <Navbar />
      {/* <div className="container mt-4 mx-auto p-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div className="category-card">
            <img
              src={solidity_img}
              className="w-full h-48 object-cover"
              alt="solidity"
            />
            <h3 className="text-2xl p-2 text-gray-900">Solidy and Etherium</h3>
          </div>

          <div className="category-card ">
            <img
              src={mern_img}
              className=" w-full h-48  object-cover"
              alt="mern"
            />
            <h3 className="text-2xl p-2 text-gray-900">MERN</h3>
          </div>
        </div>
      </div> */}
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div> */}
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Link to={post.url} >
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  {/* <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time> */}
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article></Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
