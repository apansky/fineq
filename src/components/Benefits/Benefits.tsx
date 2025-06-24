import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
  return (
    <div id="features">
      <h2 className="text-center mb-4 text-3xl lg:text-5xl lg:leading-tight font-bold">Náš team</h2>
      {benefits.map((item, index) => {
        return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
      })}
    </div>
  )
}

export default Benefits