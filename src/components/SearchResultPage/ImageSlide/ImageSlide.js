import React from "react"
import './ImageSlide.css'


export default function ImageSlide() {
    
    return (
        <div className='img-slide-container'>
            <div className="my-slide slidein">
                <img src="https://media.istockphoto.com/photos/small-red-brick-house-with-green-grass-picture-id1221023970?b=1&k=20&m=1221023970&s=170667a&w=0&h=oSL3u-58FBN3lYDiDAHrGHIgJKi0Y0C0VWmHpZg5HUo="/>
            </div>
            <div className="my-slide slidein">
                <img src="https://media.istockphoto.com/photos/new-homes-on-a-quiet-street-in-raleigh-nc-picture-id1319270783?b=1&k=20&m=1319270783&s=170667a&w=0&h=p873ZnnKZXb2p33ykA_F4AGxXk7iCBK394AqP8CuFlE="/>
            </div>
            <div className="my-slide slidein">
                <img src="https://media.istockphoto.com/photos/aerial-view-of-residential-distratic-at-major-mackenzie-dr-and-ave-picture-id1320991884?b=1&k=20&m=1320991884&s=170667a&w=0&h=N79xaO8j11u7tRWG7RCy8ksCkdTgujeFLFpXR_guaa0="/>
            </div>
            <div className="my-slide slidein">
                <img src="https://media.istockphoto.com/photos/beautiful-suburban-home-exterior-on-bright-sunny-day-with-green-grass-picture-id1312027174?b=1&k=20&m=1312027174&s=170667a&w=0&h=zK3cGGNoncen4jvTn_fK0Q0xPdF3UdKg2UryGyE9Iw8="/>
            </div>
            
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>

            <div className="dots">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>
    )
}

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }