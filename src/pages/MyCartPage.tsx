import { useEffect, useState } from "react";
import type { CartItem, HomeService } from "../types/type";
import apiClient from "../services/apiServices";
import { Link } from "react-router-dom";
import AccordionSection from "../components/AccordionSection";

export default function MyCartPage() {
  const [serviceDetails, setServiceDetails] = useState<HomeService[]>([]); // Assuming HomeService is defined.
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled
  // useEffect untuk handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartItems: CartItem[] = JSON.parse(savedCart);
      setCart(cartItems);

      const fetchServiceDetails = async () => {
        const validServices: HomeService[] = [];
        const updatedCart: CartItem[] = [];

        for (const item of cartItems) {
          try {
            const response = await apiClient.get(`/service/${item.slug}`);
            const service = response.data.data;
            if (service) {
              validServices.push(service);
              updatedCart.push(item);
            } else {
              console.warn(
                `Service with slug ${item.slug} is no longer available`
              );
            }
          } catch (error: unknown) {
            if (error instanceof Error) {
              setError(error.message);
              console.error(
                `Error fetching service with slug ${item.slug}: ${error.message}`
              );
            }
          }
        }

        // Update cart with only valid items
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setServiceDetails(validServices);
        setLoading(false);
      };

      fetchServiceDetails();
    } else {
      setLoading(false);
    }
  }, []);

  // Remove item from cart
  const handleRemoveItem = (slug: string) => {
    const updatedCart = cart.filter((item) => item.slug !== slug);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setServiceDetails((prevDetails) =>
      prevDetails.filter((service) => service.slug !== slug)
    );
  };

  const subtotal = serviceDetails.reduce(
    (acc, service) => acc + service.price,
    0
  );
  const tax = subtotal * 0.11;
  const total = subtotal + tax;

  const BASE_URL = import.meta.env.VITE_REACT_API_STORAGE_URL;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
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
    <main className="relative mx-auto min-h-screen w-full max-w-[640px] bg-[#F4F5F7] pb-[158px]">
      <div id="Background" className="absolute left-0 right-0 top-0">
        <img
          src="/assets/images/backgrounds/orange.png"
          alt="image"
          className="h-[190px] w-full object-cover object-bottom"
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
            className={`relative flex h-[68px] items-center justify-center transition-all duration-300
        ${
          isScrolled
            ? "bg-white rounded-[22px] px-[16px] shadow-[0px_12px_20px_0px_#0305041C]"
            : ""
        }`}
          >
            <Link
              to={"/"}
              id="BackA"
              className="absolute left-0 transition-all duration-300"
            >
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
            <h1
              id="Title"
              className={`font-semibold transition-all duration-300
          ${isScrolled ? "" : "text-white"}`}
            >
              My Cart
            </h1>
          </div>
        </div>
      </section>
      <div className="relative flex flex-col gap-[20px] px-5 pt-[100px]">
        <AccordionSection
          title="Home Services"
          iconSrc="/assets/images/icons/bottom-booking-form.svg"
        >
          <div className="flex flex-col gap-4" id="HomeServicesJ">
            {serviceDetails.length > 0
              ? serviceDetails.map((service, index) => (
                  <div key={service.id} className="flex flex-col gap-4">
                    <div className="card flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-3xl">
                          <img
                            src={`${BASE_URL}/${service.thumbnail}`}
                            alt="image"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="line-clamp-2 h-[42px] text-sm font-semibold leading-[21px]">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-[6px]">
                            <div className="flex items-center gap-1">
                              <img
                                src="/assets/images/icons/coint.svg"
                                alt="icon"
                                className="h-4 w-4 shrink-0"
                              />
                              <p className="text-xs leading-[18px] text-rumahrapih-gray">
                                Rp {formatCurrency(service.price)}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <img
                                src="/assets/images/icons/clock-cart.svg"
                                alt="icon"
                                className="h-4 w-4 shrink-0"
                              />
                              <p className="text-xs leading-[18px] text-rumahrapih-gray">
                                {service.duration} Hours
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(service.slug)}
                        type="button"
                        className="shrink-0"
                      >
                        <img
                          src="/assets/images/icons/garbage.svg"
                          alt="icon"
                          className="size-[32px] shrink-0"
                        />
                      </button>
                    </div>
                    {index < serviceDetails.length - 1 && (
                      <hr className="border-rumahrapih-graylight" />
                    )}
                  </div>
                ))
              : " Not available yet"}
          </div>
        </AccordionSection>
        <AccordionSection
          title="Booking Details"
          iconSrc="/assets/images/icons/bottom-booking-form.svg"
        >
          <div className="flex flex-col gap-4" id="BookingDetailsJ">
            <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/assets/images/icons/note-payment.svg"
                  alt="icon"
                  className="h-[24px] w-[24px] shrink-0"
                />
                <p className="text-rumahrapih-gray">Sub Total</p>
              </div>
              <strong className="font-semibold">
                {formatCurrency(subtotal)}
              </strong>
            </div>
            <hr className="border-rumahrapih-graylight" />
            <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/assets/images/icons/note-payment.svg"
                  alt="icon"
                  className="h-[24px] w-[24px] shrink-0"
                />
                <p className="text-rumahrapih-gray">Tax 11%</p>
              </div>
              <strong className="font-semibold">{formatCurrency(tax)}</strong>
            </div>
            <hr className="border-rumahrapih-graylight" />
            {/* <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/assets/images/icons/note-payment.svg"
                  alt="icon"
                  className="h-[24px] w-[24px] shrink-0"
                />
                <p className="text-rumahrapih-gray">Insurance</p>
              </div>
              <strong className="font-semibold">Free for All</strong>
            </div>
            <hr className="border-rumahrapih-graylight" />
            <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/assets/images/icons/note-payment.svg"
                  alt="icon"
                  className="h-[24px] w-[24px] shrink-0"
                />
                <p className="text-rumahrapih-gray">Service Tools</p>
              </div>
              <strong className="font-semibold">Free for All</strong>
            </div> */}
          </div>
        </AccordionSection>
      </div>
      <nav className="fixed bottom-5 left-0 right-0 z-30 mx-auto w-full">
        <div className="mx-auto max-w-[640px] px-5">
          <div className="flex items-center gap-[45px] rounded-[24px] bg-rumahrapih-black px-[20px] py-[14px]">
            <div>
              <strong className="whitespace-nowrap text-[22px] font-extrabold leading-[33px] text-white">
                {formatCurrency(total)}
              </strong>
              <p className="text-sm leading-[21px] text-white">Grand Total</p>
            </div>
            {cart.length > 0 ? (
              <Link to={`/booking`} className="w-full">
                <p className="w-full rounded-full bg-rumahrapih-orange px-[18px] py-[14px] text-center font-semibold text-white transition-all duration-300 hover:shadow-[0px_4px_10px_0px_#D04B1E80]">
                  Continue
                </p>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}
