import { ShineBorder } from "@/components/ui/shine-border";
const n1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738529208/n1_fpt2xh.png';
const n2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738529208/n2_g0oya5.png';
import './index.css'

export function Border() {
  return (
    <>
      <ShineBorder
        className="relative flex h-[595px] w-[250px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-background md:shadow-2xl m-0 p-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 m-0 p-0">
          <img src={n1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </span>
      </ShineBorder>
      <ShineBorder
        className="relative flex h-[650px] w-[250px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-background md:shadow-xl m-0 p-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 m-0 p-0">
          <img src={n2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </span>
      </ShineBorder>
    </>
  );
}

export default Border;
