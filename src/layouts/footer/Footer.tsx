import Image from "next/image";
import UfcLogo from "/public/UFC_Logo.svg";
import Ultiman from "@/assets/footer/ultiman_logo_75.png";

const UFC = [
  {
    list: "The Sport",
  },
  {
    list: "UFC Foundation",
  },
  {
    list: "Careers",
  },
  {
    list: "Store",
  },
  {
    list: "UFC Fight Club",
  },
  {
    list: "UFC Video",
  },
  {
    list: "Archive",
  },
];

const SOCIAL_MEDIA = [
  {
    list: "Facebook",
  },
  {
    list: "Instagram",
  },
  {
    list: "TikTok",
  },
  {
    list: "X",
  },
  {
    list: "Youtube",
  },
];

const HELP = [
  {
    list: "Fight Pass FAQ",
  },
  {
    list: "Device",
  },
  {
    list: "Press",
  },
  {
    list: "Credentials",
  },
];

const LEGAL = [
  {
    list: "Terms",
  },
  {
    list: "Privacy Police",
  },
  {
    list: "Ad Choices",
  },
];

export default function Footer() {
  return (
    <div className="bg-dark">
      <div className="container flex justify-between w-full min-h-[24rem] text-white py-5">
        <div className="uppercase flex flex-col justify-between items-start">
          <div className="flex items-center gap-5">
            <Image src={UfcLogo} alt="ufc-logo" width={90} />
            <div>
              <a href="#" className="text-sm font-bold">
                ufc.com
              </a>{" "}
              - <span className="text-sm font-bold">world</span>
            </div>
          </div>
          <Image src={Ultiman} alt="ultiman" width={90} />
        </div>

        <div className="flex gap-8">
          <div>
            <h3 className="text-white text-bold">UFC</h3>
            {UFC.map((ufc, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {ufc.list}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-bold">SOCIAL MEDIA</h3>
            {SOCIAL_MEDIA.map((sosmed, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {sosmed.list}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-bold">HELP</h3>
            {HELP.map((help, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {help.list}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-bold">LEGAL</h3>
            {LEGAL.map((legal, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {legal.list}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
