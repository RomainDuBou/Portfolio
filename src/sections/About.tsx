import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"

export const AboutSection = () => {
  return <div className="pb-96">
    <SectionHeader eyebrow="A Propos de moi" title="Un petit pas dans mon monde" description="Apprenez en plus à propos de qui je suis, ce que je fais et ce qui m'inspire"/>
    <div>
      <Card>
        <div>
          <StarIcon />
          <h3>Mes Livres</h3>
          <p>Explorez mes livres favoris</p>
        </div>
      </Card>
    </div>
  </div>
}