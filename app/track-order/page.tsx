import type { Metadata } from "next";
import { TrackOrderForm } from "@/components/track-order-form";
import { OrderTrackingResult } from "@/components/order-tracking-result";

export const metadata: Metadata = {
  title: "Track Your Order | ECommerce",
  description:
    "Track the status and delivery of your order with our easy-to-use order tracking system.",
};

export default function TrackOrderPage() {
  return (
    <>
      <div className="relative h-[40vh] md:h-[50vh] text-white w-full">
        {/* Background image or color can be placed here if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b74d80] via-[#b74d809d] to-transparent z-10" />

        <div className="relative z-20 flex items-center h-full">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ml-2 sm:ml-4">
              Track Order 
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 ml-2 sm:ml-4">
              Discover the passion and craftsmanship behind Your Fashion Store,
              where tradition meets contemporary style.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-8xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <TrackOrderForm />
          </div>

          {/* This would typically be conditionally rendered based on form submission */}
          {/* For demo purposes, we're showing a sample tracking result */}
          <div className="mt-12">
            <OrderTrackingResult />
          </div>
        </div>
      </div>
    </>
  );
}
