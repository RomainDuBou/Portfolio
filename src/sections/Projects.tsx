import MartinKeting from "@/assets/images/MartinKeting.png";
import Cafe from "@/assets/images/Cafe.png";
import Parking from "@/assets/images/Parking.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Projet personnel",
    year: "2024",
    title: "Application de Stationnement",
    results: [
      {
        title: "React/Axios",
      },
      { title: "Implémentation d'une API Laravel" },
    ],
    link: "https://github.com/RomainDuBou/AppParking",
    image: Parking,
  },
  {
    company: "Bocal Academy",
    year: "2024",
    title: "MartinKeting | CRM ",
    results: [
      { title: "Maîtrise avancée de Laravel" },
      { title: "Gestion des API" },
      { title: "Exploration  d'Eloquent ORM" },
    ],
    link: "https://github.com/RomainDuBou/MartinKeting",
    image: MartinKeting,
  },
  {
    company: "Bocal Academy",
    year: "2024",
    title: "Café au Laitzy | Gestion de commande restauration",
    results: [
      {
        title: "HTML, CSS et JavaScript",
      },
    ],
    link: "https://github.com/skyline074/Caf-au-Laitzy",
    image: Cafe,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Espace De Travail" title="Mes Projets" description="Jetez un coup d'oeil aux projets que j'ai réalisé en équipe et en
          autonomie" />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-20" style={{ 
                top: `calc(62px + ${projectIndex * 60}px`
               }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 md:text-base text-sm text-white/50">
                        <CheckCircleIcon key={result} className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto p-7 px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Explorer mon repo GitHub </span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
