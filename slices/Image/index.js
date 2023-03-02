import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice, index }) => {
  const { image, caption } = slice.primary;
  const hasCaption = slice.variation === 'caption';
  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {prismicH.isFilled.image(image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          { hasCaption && (<div className="border-l-2 border-black pl-2 mt-4 text-xs" >{ caption }</div>) }
        </div>
      )}
    </Bounded>
  );
};

export default Image;
