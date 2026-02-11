import Image from "next/image";
import { Charm } from "next/font/google";
import { Fredericka_the_Great } from "next/font/google";
import { Kings } from "next/font/google";
import { Markazi_Text } from "next/font/google";
import { IM_Fell_French_Canon_SC } from "next/font/google";

const frederickaTheGreat = Fredericka_the_Great({
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
        className="relative h-[50vw] bg-cover bg-center"
        style={{ backgroundImage: "url('/perfect_blue.jpg')" }}
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

            <div className={`${imFellFrenchCanonSC.className} text-center mx-1`}>
              <div className="text-[1.5vw]">
                CHEVIE
              </div>
              <div className="text-[2vw] -mt-[1vw]">
                JADRAQUE
              </div>
            </div>

            <hr className="flex-grow border-t-2 border-white" />

          </div>


          <div className={`${frederickaTheGreat.className} text-[12vw] text-center -mt-[3.7vw]`}>
            FULLSTACK
          </div>

          <div className={`${frederickaTheGreat.className} text-[10vw] text-center -mt-[7.7vw]`}>
            DEVELOPER
          </div>
          <div className={`${markaziText.className} text-center text-[1.3vw] px-[10vw] -mt-[]`}>
            A 23 year old fullstack developer based in the Philippines, this is so great wow. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora explicabo exercitationem incidunt voluptatem aliquid impedit vero sit.
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
