import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselSlideShow = ({ testimonials }) => {
  console.log(testimonials);
  const [currentSlide, setCurrentSlide] = useState(0);
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: "ariaLabel",
  });

  const imageTemplates = testimonials.map((item, index) => {
    let imageSrc = item.fields.image.fields.media.fields.file.url;
    let clientName = item.fields.client.fields.name;
    let quote = item.fields.quote;
    let authorName = item.fields.authorName;
    let authorTitle = item.fields.authorTitle;

    return (
      <div className="relative" key={index}>
        <div className="container mx-auto">
          <div className="my-14">
            <div className="absolute bottom-0 z-10 items-center block grid-cols-1 gap-0 mx-6 h-96 absoluteb md:mx-0 md:grid md:grid-cols-14">
              <div className="col-span-8 p-10 text-white bg-black col-start-0 h-96">
                <div>
                  <h2 className="pb-5 text-left overline">{clientName}</h2>
                  <p className="pb-5 text-xl text-left text-white ">
                    "{quote}"
                  </p>
                  <p className="text-left text-white">
                    {authorName}, {authorTitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="items-center block grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14">
              <div className="col-span-10 col-start-5">
                <div className="mt-6 md:mt-0">
                  <div className="relative w-full h-72 md:h-page-section-image-height-desktop">
                    <Image
                      className="z-0"
                      height={620}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      src={`https:${imageSrc}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const previous = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  return (
    <>
      <div className="absolute z-10 block w-5/12 h-16 mx-6 bg-white mt-14 md:mx-0 md:grid md:grid-cols-14">
        <div className="col-span-6 col-start-2">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <button onClick={previous}>PREV</button>
              </div>
              <div>
                <hr className="w-12" />
              </div>
              <div>
                <button onClick={next}>NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        {...getConfigurableProps()}
        onChange={updateCurrentSlide}
        selectedItem={currentSlide}
      >
        {imageTemplates}
      </Carousel>
    </>
  );
};

export default CarouselSlideShow;
