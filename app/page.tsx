import Image from "next/image";
import { Charm } from "next/font/google";
import { Fredericka_the_Great } from "next/font/google";
import { Kings } from "next/font/google";
import { Markazi_Text } from "next/font/google";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import { Bitter } from "next/font/google";
import { Lora } from "next/font/google";
import { Tai_Heritage_Pro } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const frederickaTheGreat = Fredericka_the_Great({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const taiHeritagePro = Tai_Heritage_Pro({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const kings = Kings({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const markaziText = Markazi_Text({
  subsets: ["latin"],
  weight: ["400"] // choose weights u want
});

const imFellFrenchCanonSC = IM_Fell_French_Canon_SC({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Home() {
  return (
    <>
      <div 
        className="relative h-[55vw] bg-cover bg-center"
        // style={{ backgroundImage: "url('/perfect_blue.jpg')" }}
        // style={{ backgroundImage: "url('/Phillips-Neon-Genesis-Evangelion.webp')" }}
        // style={{ backgroundImage: "url('/frieren-beyond-journeys-end-thumb.jpg')" }}
        style={{ backgroundImage: "url('/frieren-beyond-journeys-end-thumb-darker.jpg')" }}

      >
        <div className="px-[11vw] pt-[11vw]">
          <div className={`${markaziText.className} -mb-[2.3vw] text-[1.3vw]`}>            
            Lami kaayo i kaon og tae lmaoo. Lorem ipsum dolor, sit amet consect oten.
            <span className="ml-[12.6vw]">
              Lami kaayo i kaon og tae lmaoo. Lorem ipsum dolor, sit amet consect oten.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <hr className="flex-grow border-t-2 border-white" />

            <div className={`${taiHeritagePro.className} text-center mx-1`}>
              <div className="text-[1.5vw]">
                CHEVIE
              </div>
              <div className="text-[2vw] -mt-[1vw]">
                JADRAQUE
              </div>
            </div>

            <hr className="flex-grow border-t-2 border-white" />

          </div>


          <div className={`${frederickaTheGreat.className} text-[12vw] text-center -mt-[4vw]`}>
            FULLSTACK
          </div>

          <div className={`${frederickaTheGreat.className} text-[10vw] text-center -mt-[7.7vw]`}>
            DEVELOPER
          </div>
          <div className="-mt-[2vw]">
            <div className={`${markaziText.className} text-center text-[1.3vw] px-[10vw] -mt-[]`}>
              A 23 year old fullstack developer based in the Philippines, this is so great wow. Lorem ipsum, dolor sit amet consectetur adipisicing
            </div>
            <div className={`${markaziText.className} text-center text-[1.3vw] px-[10vw] -mt-[0.8vw]`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate excepturi aspernatur
            </div>
            <div className={`${markaziText.className} text-center text-[1.3vw] px-[10vw] -mt-[0.8vw]`}>
              Lorem ipsum dolor sit amet consectetur, 
            </div>
          </div>

        </div>

        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>

      </div>

      <div className="mt-30">
        weee
      </div>

    </>
  );
}
