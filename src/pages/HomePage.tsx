import { Swiper, SwiperSlide } from "swiper/react";

export default function HomePage() {
  return (
    <main className="relative mx-auto w-full max-w-[640px] overflow-hidden bg-white pb-[142px]">
      <div id="Background" className="absolute left-0 right-0 top-0">
        <img
          src="assets/images/backgrounds/home-banner.png"
          alt="image"
          className="h-[349.02px] w-full object-cover object-bottom"
        />
      </div>
      <section id="NavTop" className="fixed left-0 right-0 top-5 z-30">
        <div className="relative mx-auto max-w-[640px] px-5">
          <div className="flex items-center justify-between rounded-[22px] bg-white px-4 py-[14px]">
            <a href="#">
              <img
                src="assets/images/logos/company.svg"
                alt="icon"
                className="h-[40px] w-[114px] shrink-0"
              />
            </a>
            <ul className="flex items-center gap-[10px]">
              <li className="shrink-0">
                <a href="#">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-rumahrapih-graylight">
                    <img
                      src="assets/images/icons/notification.svg"
                      alt="icon"
                      className="h-[22px] w-[22px] shrink-0"
                    />
                  </div>
                </a>
              </li>
              <li className="shrink-0">
                <a href="#">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-rumahrapih-graylight">
                    <img
                      src="assets/images/icons/cart.svg"
                      alt="icon"
                      className="h-[22px] w-[22px] shrink-0"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <header className="relative ml-5 mt-[128px] w-[246px]">
        <h1 className="text-[32px] font-extrabold leading-[46px]">
          Discover Top Home Services
        </h1>
      </header>
      <section
        id="Categories"
        className="swiper mt-[40px] w-full overflow-x-hidden"
      >
        <div className="pb-5">
          <Swiper
            className="swiper-wrapper"
            direction="horizontal"
            spaceBetween={20}
            slidesPerView="auto"
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
          >
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="category.html" className="card">
                <div className="shrink-0 space-y-3 rounded-[24px] border border-x-rumahrapih-graylight bg-white py-4 text-center transition-all duration-300 hover:border-rumahrapih-orange">
                  <div className="mx-auto flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src="assets/images/icons/living-room.svg"
                      alt="icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-[130px] flex-col gap-[2px]">
                    <h3 className="font-semibold">Living Room</h3>
                    <p className="text-sm leading-[21px] text-rumahrapih-gray">
                      1,353 Services
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="category.html" className="card">
                <div className="shrink-0 space-y-3 rounded-[24px] border border-x-rumahrapih-graylight bg-white py-4 text-center transition-all duration-300 hover:border-rumahrapih-orange">
                  <div className="mx-auto flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src="assets/images/icons/kitchens.svg"
                      alt="icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-[130px] flex-col gap-[2px]">
                    <h3 className="font-semibold">Kitchens</h3>
                    <p className="text-sm leading-[21px] text-rumahrapih-gray">
                      1,353 Services
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="category.html" className="card">
                <div className="shrink-0 space-y-3 rounded-[24px] border border-x-rumahrapih-graylight bg-white py-4 text-center transition-all duration-300 hover:border-rumahrapih-orange">
                  <div className="mx-auto flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src="assets/images/icons/gardens.svg"
                      alt="icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-[130px] flex-col gap-[2px]">
                    <h3 className="font-semibold">Gardens</h3>
                    <p className="text-sm leading-[21px] text-rumahrapih-gray">
                      1,353 Services
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="category.html" className="card">
                <div className="shrink-0 space-y-3 rounded-[24px] border border-x-rumahrapih-graylight bg-white py-4 text-center transition-all duration-300 hover:border-rumahrapih-orange">
                  <div className="mx-auto flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src="assets/images/icons/security.svg"
                      alt="icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-[130px] flex-col gap-[2px]">
                    <h3 className="font-semibold">Security</h3>
                    <p className="text-sm leading-[21px] text-rumahrapih-gray">
                      1,353 Services
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="category.html" className="card">
                <div className="shrink-0 space-y-3 rounded-[24px] border border-x-rumahrapih-graylight bg-white py-4 text-center transition-all duration-300 hover:border-rumahrapih-orange">
                  <div className="mx-auto flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src="assets/images/icons/recreation.svg"
                      alt="icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-[130px] flex-col gap-[2px]">
                    <h3 className="font-semibold">Recreation</h3>
                    <p className="text-sm leading-[21px] text-rumahrapih-gray">
                      1,353 Services
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="category.html" className="card">
                <div className="shrink-0 space-y-3 rounded-[24px] border border-x-rumahrapih-graylight bg-white py-4 text-center transition-all duration-300 hover:border-rumahrapih-orange">
                  <div className="mx-auto flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src="assets/images/icons/storages.svg"
                      alt="icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-[130px] flex-col gap-[2px]">
                    <h3 className="font-semibold">Storages</h3>
                    <p className="text-sm leading-[21px] text-rumahrapih-gray">
                      1,353 Services
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="Adverticement" className="relative px-5">
        <a href="#">
          <img src="assets/images/backgrounds/adverticement.png" alt="icon" />
        </a>
      </section>
      <section id="PopularSummer" className="mt-[30px] space-y-[14px]">
        <h2 className="pl-5 text-[18px] font-bold leading-[27px]">
          Popular This Summer
        </h2>
        <div
          id="PopularSummerSlider"
          className="swiper w-full overflow-x-hidden"
        >
          <Swiper
            className="swiper-wrapper pb-[30px]"
            direction="horizontal"
            spaceBetween={20}
            slidesPerView="auto"
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
          >
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="service-details.html" className="card">
                <div className="relative flex w-[230px] shrink-0 flex-col gap-[12px] overflow-hidden rounded-[24px] border border-rumahrapih-graylight bg-white p-4 transition-all duration-300 hover:border-rumahrapih-orange">
                  <span className="absolute right-[26px] top-[26px] shrink-0 rounded-full bg-white px-2 py-[7px]">
                    <div className="flex items-center gap-[2px]">
                      <img src="assets/images/icons/star.svg" alt="icon" />
                      <p className="text-xs font-semibold leading-[18px]">
                        4.8
                      </p>
                    </div>
                  </span>
                  <div className="flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9]">
                    <img
                      src="assets/images/thumbnails/watchtv-medium.png"
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="line-clamp-2 min-h-[48px] font-semibold">
                    Home Family Theater Best Lights Installation
                  </h3>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/date.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        Living Room
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/clock.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        15 Hours
                      </p>
                    </div>
                    <strong className="font-semibold text-rumahrapih-orange">
                      Rp 8.560.392
                    </strong>
                    <img
                      className="absolute bottom-0 right-0"
                      src="assets/images/backgrounds/decoration.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="service-details.html" className="card">
                <div className="relative flex w-[230px] shrink-0 flex-col gap-[12px] overflow-hidden rounded-[24px] border border-rumahrapih-graylight bg-white p-4 transition-all duration-300 hover:border-rumahrapih-orange">
                  <span className="absolute right-[26px] top-[26px] shrink-0 rounded-full bg-white px-2 py-[7px]">
                    <div className="flex items-center gap-[2px]">
                      <img src="assets/images/icons/star.svg" alt="icon" />
                      <p className="text-xs font-semibold leading-[18px]">
                        4.8
                      </p>
                    </div>
                  </span>
                  <div className="flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9]">
                    <img
                      src="assets/images/thumbnails/swim-medium.png"
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="line-clamp-2 min-h-[48px] font-semibold">
                    Mini Swim Pool and Kids Soccer Fields Grass
                  </h3>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/date.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        Recreation
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/clock.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        15 Hours
                      </p>
                    </div>
                    <strong className="font-semibold text-rumahrapih-orange">
                      Rp 8.560.392
                    </strong>
                    <img
                      className="absolute bottom-0 right-0"
                      src="assets/images/backgrounds/decoration.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="service-details.html" className="card">
                <div className="relative flex w-[230px] shrink-0 flex-col gap-[12px] overflow-hidden rounded-[24px] border border-rumahrapih-graylight bg-white p-4 transition-all duration-300 hover:border-rumahrapih-orange">
                  <span className="absolute right-[26px] top-[26px] shrink-0 rounded-full bg-white px-2 py-[7px]">
                    <div className="flex items-center gap-[2px]">
                      <img src="assets/images/icons/star.svg" alt="icon" />
                      <p className="text-xs font-semibold leading-[18px]">
                        4.8
                      </p>
                    </div>
                  </span>
                  <div className="flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9]">
                    <img
                      src="assets/images/thumbnails/gardening-medium.png"
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="line-clamp-2 min-h-[48px] font-semibold">
                    Rumah Kaca Garden Zen Cactus Bonsai Zen
                  </h3>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/date.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        Gardens
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/clock.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        15 Hours
                      </p>
                    </div>
                    <strong className="font-semibold text-rumahrapih-orange">
                      Rp 8.560.392
                    </strong>
                    <img
                      className="absolute bottom-0 right-0"
                      src="assets/images/backgrounds/decoration.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="service-details.html" className="card">
                <div className="relative flex w-[230px] shrink-0 flex-col gap-[12px] overflow-hidden rounded-[24px] border border-rumahrapih-graylight bg-white p-4 transition-all duration-300 hover:border-rumahrapih-orange">
                  <span className="absolute right-[26px] top-[26px] shrink-0 rounded-full bg-white px-2 py-[7px]">
                    <div className="flex items-center gap-[2px]">
                      <img src="assets/images/icons/star.svg" alt="icon" />
                      <p className="text-xs font-semibold leading-[18px]">
                        4.8
                      </p>
                    </div>
                  </span>
                  <div className="flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9]">
                    <img
                      src="assets/images/thumbnails/press-medium.png"
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="line-clamp-2 min-h-[48px] font-semibold">
                    AI House Security Max Secure within Apps
                  </h3>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/date.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        Security
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/icons/clock.svg"
                        alt="icon"
                        className="h-5 w-5 shrink-0"
                      />
                      <p className="text-sm leading-[21px] text-rumahrapih-gray">
                        15 Hours
                      </p>
                    </div>
                    <strong className="font-semibold text-rumahrapih-orange">
                      Rp 8.560.392
                    </strong>
                    <img
                      className="absolute bottom-0 right-0"
                      src="assets/images/backgrounds/decoration.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <nav className="fixed bottom-5 left-0 right-0 z-30 mx-auto w-full">
        <div className="mx-auto max-w-[640px] px-5">
          <div className="rounded-[24px] bg-rumahrapih-black px-[20px] py-[14px]">
            <ul className="flex items-center gap-[20.30px]">
              <li className="w-full">
                <a href="#">
                  <div className="flex items-center justify-center gap-2 rounded-full bg-rumahrapih-orange px-[18px] py-[10px] transition-all duration-300 hover:shadow-[0px_4px_10px_0px_#D04B1E80]">
                    <img
                      src="assets/images/icons/browse.svg"
                      alt="icon"
                      className="h-6 w-6 shrink-0"
                    />
                    <p className="text-sm font-semibold leading-[21px] text-white">
                      Browse
                    </p>
                  </div>
                </a>
              </li>
              <li className="shrink-0">
                <a href="#">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-rumahrapih-graylight transition-all duration-300 hover:border-rumahrapih-orange">
                    <img
                      src="assets/images/icons/note.svg"
                      alt="icon"
                      className="h-[22px] w-[22px] shrink-0"
                    />
                  </div>
                </a>
              </li>
              <li className="shrink-0">
                <a href="#">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-rumahrapih-graylight transition-all duration-300 hover:border-rumahrapih-orange">
                    <img
                      src="assets/images/icons/chat.svg"
                      alt="icon"
                      className="h-[22px] w-[22px] shrink-0"
                    />
                  </div>
                </a>
              </li>
              <li className="shrink-0">
                <a href="#">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-rumahrapih-graylight transition-all duration-300 hover:border-rumahrapih-orange">
                    <img
                      src="assets/images/icons/profil.svg"
                      alt="icon"
                      className="h-[22px] w-[22px] shrink-0"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
