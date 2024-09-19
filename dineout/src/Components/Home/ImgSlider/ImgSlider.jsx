import Slider from "react-slick";
import "./ImgSlider.css";

const images = [
    {
        id: 1,
        img: "https://images.adsttc.com/media/images/5f72/88fa/63c0/17ae/2200/025e/newsletter/IMG_8150.jpg?1601341658"
    },
    {
        id: 2,
        img: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/news-events/news/5-restaurants-in-bali-that-make-your-dinner-experience-magical/ca995757824913f84eb916f1c6646cfcaba93b28-5de17.jpg"
    }, 
    {
        id: 3,
        img: "https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068298.jpg?output-format=webp"
    },
    {
        id: 4,
        img: "https://resizer.otstatic.com/v2/photos/wide-large/1/23751892.jpg"
    }
]

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div className="imgSlider">
            <h2>Our Service</h2>
            <div className="imgSlider-container">
                <Slider {...settings}>
                {
                    images.map((item) => {
                        return (
                            <img src={item.img} alt={item.id} />
                        )
                    })
                }
                </Slider>
            </div>
        </div>
    )
}

export default ImgSlider