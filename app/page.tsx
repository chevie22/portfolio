import Image from "next/image";
import { Charm } from "next/font/google";
import { Fredericka_the_Great } from "next/font/google";
import { IM_Fell_French_Canon_SC } from "next/font/google";

const frederickaTheGreat = Fredericka_the_Great({
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
        <div className="px-[11vw] pt-[10vw]">

          <div className="flex items-center gap-3">
            <hr className="flex-grow border-t-2 border-white" />

            <div className={`${imFellFrenchCanonSC.className} text-center`}>
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
          <div className="text-center text-lg px-[10vw] -mt-[2.5vw]">
            A developer from da pelepens, this is so great wow. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusamus, adipisci soluta facilis modi corrupti fugit eos consequatur quasi nobis assumenda in! Nam tempora yman.
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
