import basketball from "@/assets/images/basketball.png";
import antiphishing from "@/assets/images/antiphishing.png";
import montagne from "@/assets/images/montagne.png";
import bar from "@/assets/images/bar.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "BasketBall App",
    position: "Suivi des performances des joueurs amateurs.",
    text: " Ayant joué de nombreuses années au basketball, j’ai toujours rêvé d'une application permettant de suivre les statistiques individuelles et collectives. Ces données sont cruciales pour analyser les performances et progresser, mais elles manquent souvent d’accessibilité, notamment à un niveau amateur.",
    avatar: basketball,
  },
  {
    name: "AntiPhishing App",
    position: "App pour lutter contre CyberAttacks et le Phishing",
    text: "Face à l’augmentation des cyberattaques et du phishing, j’aimerais construire une application unique pour sensibiliser. Elle se distinguerait par des quiz interactifs, des tutoriels vidéo et des ateliers ludiques, pour rendre l’apprentissage engageant et accessible à tous.",
    avatar: antiphishing,
  },
  {
    name: "Bar Finder",
    position: "Trouver les bars à proximité avec tes critères de recherche",
    text: "L’idée est de permettre aux utilisateurs de trouver des bars à proximité en fonction de leurs critères de recherche. L'application offrirait une interface simple et rapide pour filtrer les bars par ambiance, type de boisson ou avis, afin de trouver l’endroit idéal en quelques clics.",
    avatar: bar,
  },
  {
    name: "Summit Tracker",
    position: "Suivre ses performances et les conditions en randonnée",
    text: `Une application pour les passionnés de randonnée et d’escalade, qui permet de suivre en temps réel les conditions météorologiques et l’état des sentiers. Elle offre aussi un "suivi de sommet" pour enregistrer ses ascensions, obtenir des statistiques personnelles comme le temps et le dénivelé, et partager ses expériences avec une communauté de passionnés.`,
    avatar: montagne,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Projets personnels"
          title="Idées de projets personnels"
          description="Voici quelques concepts de projets que je souhaite réaliser pour
        enrichir mes compétences."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
