import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import BookImage from "@/assets/images/book.png";
import { title } from "process";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import emoji from "@/assets/images/memoji.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/Toolbox";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Lecture",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Musique",
    emoji: "🎺",
    left: "50%",
    top: "5%",
  },
  {
    title: "Jeux Vidéos",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Randonnée",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Sport",
    emoji: "🏋️‍♂️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Films",
    emoji: "🎬",
    left: "5%",
    top: "65%",
  },
  {
    title: "Voitures",
    emoji: "🏎️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="A Propos de moi"
          title="Un petit pas dans mon monde"
          description="Apprenez en plus à propos de qui je suis, ce que je fais et ce qui m'inspire"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8  md:grid-cols-5">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="Mes Livres"
                description="Découvrez les livres qui m'ont le plus marqué"
              />
              <div className="justify-center items-center gap-4">
                <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl md:text-sm -mt-5 ml-5">
                  <span className="font-semibold">Ma liste de lecture</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
              <div className="w-40 mx-auto mt-5">
                <Image src={BookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="Ma Boîte à Outils"
                description="Explorez les technologies et les outils utilisés pour développer
                mes compétences"
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title="Au delà du code"
                description="Explorez mes intérets et mes passions au delà du monde digital"
                className="px-6 pt-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={emoji} alt="smile emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
