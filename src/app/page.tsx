import React from 'react';
import Image from 'next/image';
import InstagramLogo from '../../public/images/insta.svg'
import GithubLogo from '../../public/images/github.svg'
import MirrorLogo from '../../public/images/mirror.svg'

export default function Home() {
  return (
    <div className="bg-[#222831] justify-center min-h-screen flex flex-col topo-background">
      <header className='scale-animation'>
        <h1 className="font-black text-center text-6xl py-4 text-[#EEEEEE] ">Meu perfil</h1>
      </header>
      <div className="flex flex-col items-center mt-4">
        <a
          href="https://www.instagram.com/vaz_lucas_silva/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold flex items-center justify-center mb-2 rounded-full bg-[#393E46] text-[#EEEEEE] border-[#00ADB5] border-2 w-72 h-12 mt-2 border-solid transition ease-in-out delay-125 hover:-translate-y-1 hover:scale-110 hover:bg-[#00acb59a] duration-300"
        >
          <Image src={InstagramLogo} alt="Instagram" width={24} height={24} className="mr-2" /><span>Instagram</span>
        </a>
        <a
          href="https://github.com/Vaaaaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold flex items-center justify-center mb-2 rounded-full bg-[#393E46] text-[#EEEEEE] border-[#00ADB5] border-2 w-72 h-12 mt-2 border-solid transition ease-in-out delay-125 hover:-translate-y-1 hover:scale-110 hover:bg-[#00acb59a] duration-300"
        >
          <Image src={GithubLogo} alt="Github" width={24} height={24} className="mr-2" /><span>Github</span>
        </a>
        <a
          href="https://mirrorstyles.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold flex items-center justify-center mb-2 rounded-full bg-[#393E46] text-[#EEEEEE] border-[#00ADB5] border-2 w-72 h-12 mt-2 border-solid transition ease-in-out delay-125 hover:-translate-y-1 hover:scale-110 hover:bg-[#00acb59a] duration-300"
        >
          <Image src={MirrorLogo} alt="Mirror" width={24} height={24} className="mr-2" /><span>Mirror</span>
        </a>
      </div>
      <div className="flex justify-center mt-8">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/6lioIeChcPGakJ3OGsZsHr?utm_source=generator"
          width="50%"
          height="128"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
