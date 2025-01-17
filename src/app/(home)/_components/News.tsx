"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Navigation } from "swiper";

const data = [
  {
    id: 1,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 3,
    title: "We create some things for your success in future growth",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 2,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
];

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 3,
  loop: true,
  spaceBetween: 25,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".blog-modern .swiper-button-next",
    prevEl: ".blog-modern .swiper-button-prev",
  },
};

function News() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);
  return (
    <section
      className="blog-crev section-padding"
      style={{ paddingBottom: "60px" }}
    >
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h2 className="fz-60 fw-700 underline">Latest News</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="full-width d-flex justify-content-end justify-end">
                <div className="vew-all wow fadeIn">
                  <Link href="/news">
                    View All Our News
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className={`item ${index !== data.length - 1 ? "md-mb50" : ""}`}
              >
                {/* <div className="cont">
                  <div className="img">
                    <Image
                      width={500}
                      height={500}
                      src={item.cover}
                      alt="News"
                    />
                    <Link href="/news" className="main-colorbg3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <h6>
                    <Link href="/dark/blog-details">{item.title}</Link>
                  </h6>
                  <div className="info mt-20 mb-20 pt-20 bord-thin-top">
                    <span className="by">
                      <Link href="/news">
                        <i className="far fa-user fz-14 mr-10"></i> By{" "}
                        {item.author}
                      </Link>
                    </span>
                    <span className="dot main-colorbg3"></span>
                    <span className="date">
                      <Link href="/news">
                        <i className="far fa-calendar-alt fz-14 mr-10"></i>
                        {item.date}
                      </Link>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="blog-carsouel">
          {loadSwiper && (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-blog"
              className="swiper-container"
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="wow fadeInUp "
                  data-wow-delay=".1s"
                >
                  <div className="item">
                    <div className="img">
                      <img
                        style={{
                          height: "225px",
                        }}
                        src={item.cover}
                        alt=""
                      />
                      <div className="date">
                        <Link href="/dark/blog-post">{item.date}</Link>
                      </div>
                    </div>
                    <div className="cont mt-30">
                      <h6>
                        <Link href="/dark/blog-post">{item.title}</Link>
                      </h6>
                      {/* <Link
                        href="/dark/blog-post"
                        className="mt-20 ls1 sub-title"
                      >
                        Read More{" "}
                        <i className="ml-5">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </i>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default News;
