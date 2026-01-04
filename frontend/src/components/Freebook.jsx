import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // 👈 MOST IMPORTANT
        const books = data.filter(
          (item) => item.category?.toLowerCase() === "free"
        );
        console.log("Filtered free books:", books);
        setBooks(books);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container  md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vero iusto illo recusandae, nostrum esse. Saepe minus
            molestiae explicabo nobis veritatis alias voluptates, architecto
            earum perferendis dolorum accusantium. Veniam, nobis.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {books.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
