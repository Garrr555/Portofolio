import { gridItems } from "../../../data";
import { BentoGrid, BentoGridItem } from "@/ui/bento-grid/page";

export default function Grid() {
  return (
    <section id="about" className="">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
          key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
