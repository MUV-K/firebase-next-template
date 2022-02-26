import Image from 'next/image';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <div className="m-auto flex max-w-7xl flex-col items-center justify-center ">
        <div className="md-w-64 relative h-48 w-48 p-8 md:h-64">
          <Image
            alt="preview-image"
            layout="fill"
            objectFit="contain"
            priority
            src="/logo.svg"
          />
        </div>{' '}
        <div className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">
                Thanks for trying out this template.
              </span>
              <span className="block text-fuchsia-500">
                We hope you enjoy working with it!
              </span>
            </h2>

            <div className="mt-16">
              <div className="">
                <a
                  target="_blank"
                  href="https://muv-k.ch"
                  className="inline-flex items-center justify-center rounded-full border border-fuchsia-100 border-transparent bg-white px-24 py-6 text-xl font-medium text-fuchsia-500 shadow-xl shadow-fuchsia-500/50 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                  rel="noreferrer"
                >
                  Visit us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
