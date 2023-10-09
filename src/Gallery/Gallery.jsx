import { useEffect, useState } from "react";


const Gallery = () => {
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        fetch('/data/gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])


    const [curr, setCurr] = useState("slide1");

    const prevSlide = () => {
        if (curr === "slide1") {
            setCurr("slide6");
        } else if (curr === "slide2") {
            setCurr("slide1");
        } else if (curr === "slide3") {
            setCurr("slide2");
        } else if (curr === "slide4") {
            setCurr("slide3");
        } else if (curr === "slide5") {
            setCurr("slide4");
        } else if (curr === "slide6") {
            setCurr("slide5");
        }
    }

    const nextSlide = () => {
        if (curr === "slide1") {
            setCurr("slide2");
        } else if (curr === "slide2") {
            setCurr("slide3");
        } else if (curr === "slide3") {
            setCurr("slide4");
        } else if (curr === "slide4") {
            setCurr("slide5");
        } else if (curr === "slide5") {
            setCurr("slide6");
        } else if (curr === "slide6") {
            setCurr("slide1");
        }
    }

    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center mt-12 mb-12' data-aos="fade-down">
            <h1 className="font-bold text-5xl mb-5 ">Gallery</h1>
            
            <div className="carousel carousel-end  p-4 space-x-4 rounded-box">
                {gallery.map((item) => (
                    <div key={item.id} id={item.id} className="carousel-item">

                        <div className={`${curr === item.id ? 'relative border-2 border-fuchsia-700 rounded-2xl' : 'relative'}`}>
                            <div className='relative'>
                                <img src={item.imageSrc} className="rounded-box w-[230px] h-[400px]" />
                                <p className='absolute  rounded-xl'></p>
                            </div>
                            <p className='font-bold text-2xl text-white text-center absolute bottom-10 left-16'>{item.title}</p>
                        </div>

                    </div>
                ))}
            </div>

            <div>
                <a onClick={prevSlide} href={`#${curr}`} className="btn btn-circle mr-7">❮</a>
                <a onClick={nextSlide} href={`#${curr}`} className="btn btn-circle">❯</a>

            </div>
        </div>
    );
};

export default Gallery;