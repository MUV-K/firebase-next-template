import Image from 'next/image';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-muv-notblack">
      <div className="m-auto flex h-full max-w-7xl flex-col items-center justify-center">
        <div className="relative h-48 w-48 p-8 md:h-64 md:w-64">
          <svg
            viewBox="0 0 184 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-muv-notwhite"
          >
            <path d="M19.055 91.443H0.914414L13.7042 0.087657H45.1565L37.326 61.2957L35.1074 77.0872H37.326L39.5447 61.2957L48.8107 0.087657H80.263L67.4733 91.443H49.3327L60.0344 14.4435H57.1632L52.987 44.7213L44.8955 91.443H23.4922L28.843 44.7213L32.3667 14.4435H29.7566L19.055 91.443ZM97.8255 92.7481C90.4301 92.7481 84.9922 91.1385 81.512 87.9193C78.1188 84.6131 76.4222 79.7408 76.4222 73.3024C76.4222 70.9533 76.5963 68.6912 76.9443 66.516L86.3408 0.087657H107.222L97.3035 70.3008C97.2165 70.5618 97.173 70.9533 97.173 71.4753C97.173 72.6064 97.7385 73.1719 98.8696 73.1719C99.3916 73.1719 99.7831 72.9544 100.044 72.5194C100.392 72.0844 100.61 71.3448 100.697 70.3008L110.615 0.087657H131.496L121.578 70.9533C119.577 85.4831 111.659 92.7481 97.8255 92.7481ZM165.908 91.443H127.799L135.238 0.087657H157.555L148.942 65.733L147.376 77.0872H149.986L151.552 65.733L161.601 0.087657H183.918L165.908 91.443Z" />
          </svg>
        </div>
        <div className="">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-muv-notwhite sm:text-4xl">
              <span className="block">
                Thanks for trying out this template.
              </span>
              <span className="block text-muv-notpurple">
                We hope you enjoy working with it!
              </span>
            </h2>

            <div className="mt-8">
              <div className="">
                <a
                  target="_blank"
                  href="https://muv-k.ch"
                  className="inline-flex items-center justify-center rounded-full border border-muv-notpurple border-transparent bg-muv-notwhite px-24 py-6 text-2xl font-medium text-muv-notpurple shadow-lg shadow-muv-notpurple/50 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
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
