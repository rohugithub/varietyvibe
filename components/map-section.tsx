"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "Main Store - Downtown",
    address: "123 Commerce Street, Downtown, NY 10001",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1654652356365!5m2!1sen!2sus",
    mapUrl: "https://maps.google.com/?q=123+Commerce+Street+Downtown+NY",
  },
  {
    id: 2,
    name: "Warehouse & Distribution",
    address: "456 Industrial Blvd, Brooklyn, NY 11201",
    phone: "+1 (555) 987-6543",
    hours: "Mon-Fri: 8AM-6PM, Weekends: Closed",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710850888393!2d-73.99668908459445!3d40.69975097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3d8a9d5%3A0x5a0b25f0b0a0a0a0!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1654652356365!5m2!1sen!2sus",
    mapUrl: "https://maps.google.com/?q=456+Industrial+Blvd+Brooklyn+NY",
  },
  {
    id: 3,
    name: "Customer Service Center",
    address: "789 Service Ave, Queens, NY 11375",
    phone: "+1 (555) 456-7890",
    hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-4PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.9663095343008!2d-73.83425878459418!3d40.75844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260bf5c1654f3%3A0xc80f9cfce5383d5d!2sQueens%2C%20NY!5e0!3m2!1sen!2sus!4v1654652356365!5m2!1sen!2sus",
    mapUrl: "https://maps.google.com/?q=789+Service+Ave+Queens+NY",
  },
]

export function MapSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      {/* <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
          <MapPin className="h-5 w-5 text-teal-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Our Locations</h2>
          <p className="text-gray-500 text-sm">Visit us at any of our convenient locations</p>
        </div>
      </div> */}

      {/* Location Selector */}
      {/* <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedLocation.id === location.id
                  ? "border-teal-500 bg-teal-50 text-teal-900"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <h3 className="font-medium text-sm">{location.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{location.address.split(",")[0]}</p>
            </button>
          ))}
        </div>
      </div> */}

      {/* Selected Location Details */}
      {/* <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-3">{selectedLocation.name}</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{selectedLocation.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-700">{selectedLocation.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-700">{selectedLocation.hours}</span>
          </div>
        </div>
      </div> */}

      {/* Interactive Map */}
      <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 border">
        <iframe
          src={selectedLocation.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${selectedLocation.name}`}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={() => window.open(selectedLocation.mapUrl, "_blank")}
          className="flex-1 bg-[#b74d80] hover:bg-[#b74d806f] hover:text-gray-600"
        >
          <Navigation className="h-4 w-4 mr-2" />
          Get Directions
        </Button>
        <Button
          onClick={() => window.open(`tel:${selectedLocation.phone}`, "_self")}
          variant="outline"
          className="flex-1 border-[#b74d80] text-[#b74d80] hover:bg-[#b74d801b]"
        >
          <Phone className="h-4 w-4 mr-2" />
          Call Store
        </Button>
      </div>

      {/* Additional Info */}
      {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Need Help Finding Us?</h4>
        <p className="text-sm text-blue-700">
          Our stores are located near major public transportation hubs. Free parking is available at all locations. For
          specific directions or accessibility information, please call the store directly.
        </p>
      </div> */}
    </div>
  )
}
