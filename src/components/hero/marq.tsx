import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Siva bhadra",
    body: "These guys are doing just great, I love their work!!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Rithwika",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Sujith Krishna.Y",
    body: "The branding and the website they made were juzt amazing",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Hemanth",
    body: "WT work they are doing, dammm they are litt",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Santhosh.K",
    body: "Iam their biggest fan!, optat juzt rocks",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Motowize",
    body: "DO not hesitate to give them a project, they will surely make it great! trust me!",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        // dark styles
        " dark:bg-gray-50/[.10] ",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marq() {
  return (
    <div className="relative flex h-[300px] w-500px flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} username={review.name} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} username={review.name} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Marq;