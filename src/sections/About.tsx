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
  },
  {
    title: "Musique",
    emoji: "🎺",
  },
  {
    title: "Randonnée",
    emoji: "🥾",
  },
  {
    title: "Jeux Vidéos",
    emoji: "🎮",
  },
  {
    title: "Sport",
    emoji: "🏋️‍♂️",
  },
  {
    title: "Randonnée",
    emoji: "⛰️",
  },
  {
    title: "Voitures",
    emoji: "🏎️",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="A Propos de moi"
          title="Un petit pas dans mon monde"
          description="Apprenez en plus à propos de qui je suis, ce que je fais et ce qui m'inspire"
        />
        <div className="mt-20">
          <Card className="h-[350px]">
            <CardHeader
              title="Mes Livres"
              description="Découvrez les livres qui m'ont le plus marqué"
            />
            <div className="justify-center items-center gap-4">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                <span className="font-semibold">Ma liste de lecture</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Book cover" />
            </div>
          </Card>
          <Card>
            <CardHeader
              title="Ma Boîte à Outils"
              description="Explorez les technologies et les outils utilisés pour développer
                mes compétences"
            />
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
          <CardHeader
              title="Au delà du code"
              description="Explorez mes intérets et mes passions au delà du monde digital"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={emoji} alt="smile emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
