import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import greenLeavesImage from "../../images/greenLeaves.jpg";
import mountain from "../../images/mountain.jpg";
import { Box } from "@mui/material";
const SlickComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const silderData = [
    {
      alt: "Green Leaves Image",
      src: greenLeavesImage,
      className: "text-white",
    },
    { alt: "Mountain Image", src: mountain, className: "" },
  ];
  return (
    <Slider {...settings}>
      {silderData.map(({ alt, src, className }) => (
        <div key={alt}>
          <Box
            className={`relative h-[85vh] w-full flex items-center justify-center ${className}`}
          >
            <img src={src} alt={alt} className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center font-black text-6xl">
              WELCOME
            </div>
          </Box>
        </div>
      ))}
    </Slider>
  );
};
export default SlickComponent;
