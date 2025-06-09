import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { CartItem, HomeService } from "../types/type";
import apiClient from "../services/apiServices";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DetailsPage() {
  const { slug } = useParams<{ slug: string }>(); // Get slug from URL params

  const [service, setService] = useState<HomeService | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAdding, setIsAdding] = useState(false); // Used to track if an item is currently being added to cart

  const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled

  // Load cart from local storage on page load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (slug) {
      // Only fetch if slug is available
      apiClient
        .get(`/service/${slug}`)
        .then((response) => {
          setService(response.data.data); // Adjust if API response structure is different (e.g., response.data)
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to load service details");
          setLoading(false);
          // console.error("Error fetching service details:", error); // Optional: for debugging
        });
    }
  }, [slug]); // Depend on slug so it refetches if slug changes

  const handleAddToCart = () => {
    if (service) {
      // Ensure service data is loaded
      setIsAdding(true);
      const itemExists = cart.find((item) => item.service_id === service.id);

      if (itemExists) {
        alert("Jasa sudah tersedia di Cart!"); // "Service is already in Cart!"
        setIsAdding(false);
      } else {
        const newCartItem: CartItem = {
          service_id: service.id,
          slug: service.slug,
          quantity: 1, // Default quantity
        };
        const updatedCart = [...cart, newCartItem];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        alert("Jasa berhasil ditambahkan ke Cart!"); // "Service successfully added to Cart!"
        setIsAdding(false);
      }
    }
  };

  const BASE_URL = import.meta.env.VITE_REACT_API_STORAGE_URL;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading: {error}</p>;
  }

  if (!service) {
    // If service is null/undefined after loading and no error, it means not found
    return <p>Service not found!</p>;
  }
  // Format currency to IDR
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };
  return (
    <main className="relative mx-auto w-full max-w-[640px] overflow-x-hidden bg-white pb-[144px]">
      <div id="Background" className="absolute left-0 right-0 top-0 h-[228px]">
        <img
          src="/assets/images/backgrounds/orange-service-details.png"
          alt="image"
        />
      </div>
      <section
        id="NavTop"
        className={`fixed left-0 right-0 z-30 transition-all duration-300 
          ${isScrolled ? "top-[30px]" : "top-[16px]"}`}
      >
        <div className="relative mx-auto max-w-[640px] px-5">
          <div
            id="ContainerNav"
            className={`flex items-center justify-between py-[14px] transition-all duration-300 
              ${
                isScrolled
                  ? "bg-white rounded-[22px] px-[16px] shadow-[0px_12px_20px_0px_#0305041C]"
                  : ""
              }`}
          >
            <Link to={`/`}>
              <div
                id="Back"
                className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white
                  ${isScrolled ? "border border-rumahrapih-graylight" : ""}`}
              >
                <img
                  src="/assets/images/icons/back.svg"
                  alt="icon"
                  className="h-[22px] w-[22px] shrink-0"
                />
              </div>
            </Link>
            <h2
              id="Title"
              className={`font-semibold transition-all duration-300
                ${isScrolled ? "" : "text-white"}`}
            >
              Details
            </h2>
            <Link to={`/cart`}>
              <div
                id="Cart"
                className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white
                  ${isScrolled ? "border border-rumahrapih-graylight" : ""}`}
              >
                <img
                  src="/assets/images/icons/cart.svg"
                  alt="icon"
                  className="h-[22px] w-[22px] shrink-0"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <header className="mt-[100px] px-5">
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[40px]">
          <img
            src={`${BASE_URL}/${service.thumbnail}`}
            alt="image"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-5 top-5 flex shrink-0 items-center gap-[2px] rounded-full bg-white px-[8px] py-[7px]">
            <img
              src="/assets/images/icons/star-service-details.svg"
              alt="icon"
              className="h-[22px] w-[22px] shrink-0"
            />
            <p className="font-semibold">4.8</p>
          </div>
          {service.is_popular ? (
            <div className="absolute bottom-5 left-[20.5px] flex shrink-0 items-center gap-[2px] rounded-full bg-white px-[8px] py-[7px]">
              <img
                src="/assets/images/icons/star-service-details.svg"
                alt="icon"
                className="h-[22px] w-[22px] shrink-0"
              />
              <p className="font-semibold">Popular</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className="mt-5 text-2xl font-bold leading-[36px]">
          {service.name}
        </h1>
      </header>
      <section
        id="ServiceDetails"
        className="mt-5 grid grid-cols-2 gap-[14px] px-5"
      >
        <div className="flex items-center gap-[10px] rounded-[20px] bg-[#F4F5F7] px-[14px] py-[14px]">
          <img
            src="/assets/images/icons/clock-service-details.svg"
            alt="icon"
            className="h-[32px] w-[32px] shrink-0"
          />
          <div>
            <strong className="text-sm font-semibold leading-[21px]">
              {service.duration} Hours
            </strong>
            <p className="text-sm leading-[21px] text-rumahrapih-gray">
              Duration
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] rounded-[20px] bg-[#F4F5F7] px-[14px] py-[14px]">
          <img
            src="/assets/images/icons/note-service-details.svg"
            alt="icon"
            className="h-[32px] w-[32px] shrink-0"
          />
          <div>
            <strong className="text-sm font-semibold leading-[21px]">
              Top Service
            </strong>
            <p className="text-sm leading-[21px] text-rumahrapih-gray">
              Guarantee
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] rounded-[20px] bg-[#F4F5F7] px-[14px] py-[14px]">
          <img
            src="/assets/images/icons/calender-service-details.svg"
            alt="icon"
            className="h-[32px] w-[32px] shrink-0"
          />
          <div>
            <strong className="text-sm font-semibold leading-[21px]">
              {service.category.name}
            </strong>
            <p className="text-sm leading-[21px] text-rumahrapih-gray">
              Category
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] rounded-[20px] bg-[#F4F5F7] px-[14px] py-[14px]">
          <img
            src="/assets/images/icons/clock-service-details.svg"
            alt="icon"
            className="h-[32px] w-[32px] shrink-0"
          />
          <div>
            <strong className="text-sm font-semibold leading-[21px]">
              Free Tools
            </strong>
            <p className="text-sm leading-[21px] text-rumahrapih-gray">
              SNI Level
            </p>
          </div>
        </div>
      </section>
      <section id="ServiceDescription" className="mt-5 px-5">
        <h3 className="font-semibold">Details</h3>
        <p className="leading-7">{service.about}</p>
      </section>
      <section id="ServiceBenefits" className="mt-5 px-5">
        <div className="flex w-full flex-col gap-3 rounded-[24px] border border-rumahrapih-graylight p-[14px]">
          <h3 className="font-semibold">Service Benefits</h3>
          {service?.benefits && service.benefits.length > 0 ? (
            service.benefits.map((benefit, index) => (
              <div key={benefit.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/images/icons/verify-service-details.svg"
                    alt="icon"
                    className="h-[32px] w-[32px] shrink-0"
                  />
                  <p className="leading-[26px]">{benefit.name}</p>
                </div>
                {index < service.benefits.length - 1 && (
                  <hr className="border-rumahrapih-graylight" />
                )}
              </div>
            ))
          ) : (
            <p>Belum ada data</p>
          )}
        </div>
      </section>
      <section id="GreatCustomers" className="relative mt-5 space-y-[14px]">
        <h3 className="pl-5 font-semibold">Great Customers</h3>
        <div
          id="GreatCustomersSlider"
          className="swiper w-full overflow-x-hidden"
        >
          <Swiper
            className="pb-[30px]"
            direction="horizontal"
            spaceBetween={20}
            slidesPerView="auto"
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
          >
            {service.testimonials.length > 0
              ? service.testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="!w-fit">
                    <a href="#" className="card">
                      <div className="flex w-[300px] flex-col gap-4 rounded-3xl border border-rumahrapih-graylight p-5">
                        <div className="stars flex items-center">
                          <img
                            src="/assets/images/icons/star-service-details.svg"
                            alt="icon"
                            className="h-[22px] w-[22px] shrink-0"
                          />
                          <img
                            src="/assets/images/icons/star-service-details.svg"
                            alt="icon"
                            className="h-[22px] w-[22px] shrink-0"
                          />
                          <img
                            src="/assets/images/icons/star-service-details.svg"
                            alt="icon"
                            className="h-[22px] w-[22px] shrink-0"
                          />
                          <img
                            src="/assets/images/icons/star-service-details.svg"
                            alt="icon"
                            className="h-[22px] w-[22px] shrink-0"
                          />
                          <img
                            src="/assets/images/icons/star-service-details.svg"
                            alt="icon"
                            className="h-[22px] w-[22px] shrink-0"
                          />
                        </div>
                        <p className="leading-7">{testimonial.message}</p>
                        <div className="profil flex items-center gap-3">
                          <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full">
                            <img
                              src={`${BASE_URL}/${testimonial.photo}`}
                              alt="image"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-[2px]">
                            <h5 className="font-semibold">
                              {testimonial.name}
                            </h5>
                            <p className="text-sm leading-[21px] text-rumahrapih-gray">
                              Programmer Need more field
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))
              : " No testimonials available"}
          </Swiper>
        </div>
      </section>
      <nav className="fixed bottom-5 left-0 right-0 z-30 mx-auto w-full">
        <div className="mx-auto max-w-[640px] px-5">
          <div className="flex items-center gap-[45px] rounded-[24px] bg-rumahrapih-black px-[20px] py-[14px]">
            <div>
              <strong className="whitespace-nowrap text-[22px] font-extrabold leading-[33px] text-white">
                {formatCurrency(service.price)}
              </strong>
              <p className="text-sm leading-[21px] text-white">
                Refund Guarantee
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full"
            >
              <p className="w-full rounded-full bg-rumahrapih-orange px-[18px] py-[14px] text-center font-semibold text-white transition-all duration-300 hover:shadow-[0px_4px_10px_0px_#D04B1E80]">
                {isAdding ? "Adding..." : "Add to Cart"}
              </p>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}
