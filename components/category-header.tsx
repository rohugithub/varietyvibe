"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categoryData = {
  "bookworms-paradise": {
    name: "Books",
    subcategories: [
      {
        name: "Fiction",
        items: [
          "Romance",
          "Mystery",
          "Thriller",
          "Historical Fiction",
          "Science Fiction",
          "Fantasy",
        ],
      },
      {
        name: "Non-Fiction",
        items: [
          "Biography",
          "Self-Help",
          "Business",
          "Health",
          "Travel",
          "Cooking",
        ],
      },
      {
        name: "Kids",
        items: [
          "Board Books",
          "Hardcover",
          "Paperback",
          "Activity Books",
          "Picture Books",
          "Early Readers",
        ],
      },
      {
        name: "Regional",
        items: ["Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati"],
      },
      {
        name: "Specialized",
        items: [
          "Teen Fiction",
          "Book Sets",
          "Manga & Comics",
          "Knowledge",
          "Educational",
        ],
      },
    ],
  },
  "home-furnishing": {
    name: "Home Furnishing",
    subcategories: [
      {
        name: "Bedding",
        items: [
          "Bedsheet",
          "Comforter",
          "Dohar",
          "Rajai",
          "Bed Cover",
          "Blanket",
        ],
      },
      {
        name: "Bath & Towels",
        items: [
          "Towel",
          "Bath Mat",
          "Shower Curtain",
          "Bath Robe",
          "Face Towel",
        ],
      },
      {
        name: "Cushions & Pillows",
        items: [
          "Cushion",
          "Cushion Cover",
          "Pillow",
          "Pillow Cover",
          "Throw Pillows",
        ],
      },
      {
        name: "Room Decor",
        items: ["Room Set", "Runner", "Door Mat", "Wall Decor", "Curtains"],
      },
      {
        name: "Dining & Kitchen",
        items: [
          "Dining Cover",
          "Table Runner",
          "Placemats",
          "Kitchen Towels",
          "Aprons",
        ],
      },
      {
        name: "Wellness",
        items: [
          "Yoga Mat",
          "Exercise Mat",
          "Meditation Cushion",
          "Aromatherapy",
        ],
      },
    ],
  },
  "machine-zone": {
    name: "Machine Zone",
    subcategories: [
      {
        name: "Mobile & Tablets",
        items: [
          "Smartphones",
          "Tablets",
          "Mobile Accessories",
          "Cases & Covers",
          "Screen Guards",
        ],
      },
      {
        name: "Computers",
        items: [
          "Laptops",
          "Desktops",
          "Monitors",
          "Keyboards",
          "Mouse",
          "Webcams",
        ],
      },
      {
        name: "Audio & Video",
        items: [
          "Headphones",
          "Speakers",
          "Earbuds",
          "Microphones",
          "TV",
          "Soundbars",
        ],
      },
      {
        name: "Smart Devices",
        items: [
          "Smart Watch",
          "Fitness Trackers",
          "Smart Home",
          "IoT Devices",
          "Drones",
        ],
      },
      {
        name: "Accessories",
        items: [
          "Chargers",
          "Power Banks",
          "Cables",
          "Adapters",
          "Storage Devices",
        ],
      },
    ],
  },
  "fashion-frenzy": {
    name: "Fashion Frenzy",
    subcategories: [
      {
        name: "Women's Clothing",
        items: [
          "Dresses",
          "Tops",
          "Jeans",
          "Ethnic Wear",
          "Western Wear",
          "Innerwear",
        ],
      },
      {
        name: "Men's Clothing",
        items: [
          "Shirts",
          "T-Shirts",
          "Jeans",
          "Formal Wear",
          "Casual Wear",
          "Innerwear",
        ],
      },
      {
        name: "Footwear",
        items: [
          "Sneakers",
          "Formal Shoes",
          "Sandals",
          "Boots",
          "Sports Shoes",
          "Slippers",
        ],
      },
      {
        name: "Accessories",
        items: ["Bags", "Wallets", "Belts", "Watches", "Jewelry", "Sunglasses"],
      },
      {
        name: "Kids Fashion",
        items: [
          "Boys Clothing",
          "Girls Clothing",
          "Kids Footwear",
          "School Uniforms",
          "Party Wear",
        ],
      },
    ],
  },
  "stationary-sanctuary": {
    name: "Stationary Sanctuary",
    subcategories: [
      {
        name: "Writing Essentials",
        items: [
          "Pens",
          "Pencils",
          "Markers",
          "Highlighters",
          "Erasers",
          "Sharpeners",
        ],
      },
      {
        name: "Notebooks & Paper",
        items: [
          "Notebooks",
          "Diaries",
          "Sticky Notes",
          "Copy Paper",
          "Ruled Sheets",
          "Graph Paper",
        ],
      },
      {
        name: "Office Supplies",
        items: [
          "Files",
          "Folders",
          "Binders",
          "Staplers",
          "Paper Clips",
          "Rubber Bands",
        ],
      },
      {
        name: "Art & Craft",
        items: [
          "Color Pencils",
          "Crayons",
          "Paint",
          "Brushes",
          "Craft Paper",
          "Glue",
        ],
      },
      {
        name: "Desk Organization",
        items: [
          "Desk Organizer",
          "Pen Holders",
          "Document Trays",
          "Calendar",
          "Desk Pads",
        ],
      },
      {
        name: "Technology",
        items: [
          "Calculator",
          "Laminator",
          "Paper Shredder",
          "Label Maker",
          "Printer Paper",
        ],
      },
    ],
  },
  gamesphere: {
    name: "GameSphere",
    subcategories: [
      {
        name: "Gaming Consoles",
        items: [
          "PlayStation",
          "Xbox",
          "Nintendo",
          "Handheld Consoles",
          "Retro Consoles",
        ],
      },
      {
        name: "PC Gaming",
        items: [
          "Gaming Keyboards",
          "Gaming Mouse",
          "Gaming Headsets",
          "Gaming Chairs",
          "Controllers",
        ],
      },
      {
        name: "Games",
        items: [
          "Action Games",
          "Adventure Games",
          "Sports Games",
          "Racing Games",
          "Strategy Games",
        ],
      },
      {
        name: "Gaming Accessories",
        items: [
          "Gaming Mouse Pads",
          "Controller Grips",
          "Gaming Glasses",
          "Cable Management",
        ],
      },
      {
        name: "VR & AR",
        items: [
          "VR Headsets",
          "VR Controllers",
          "AR Glasses",
          "VR Games",
          "VR Accessories",
        ],
      },
      {
        name: "Board Games",
        items: [
          "Strategy Board Games",
          "Family Games",
          "Card Games",
          "Puzzle Games",
          "Party Games",
        ],
      },
    ],
  },
};

export function CategoryHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-white shadow-md sticky top-24 z-30 py-2">
      <div className="container px-8 md:px-6 ">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="space-x-16">
              {Object.entries(categoryData).map(([categoryId, category]) => (
                <NavigationMenuItem key={categoryId}>
                  <NavigationMenuTrigger className="h-12 px-2 text-md  text-black font-light  bg-[#b74d8000] hover:bg-gray-50">
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {category.subcategories.map((subcategory, index) => (
                          <div key={index} className="space-y-3">
                            <h4 className="font-semibold text-gray-900 border-b pb-2">
                              {subcategory.name}
                            </h4>
                            <ul className="space-y-2">
                              {subcategory.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={`/category/${categoryId}/${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="text-sm text-gray-600 hover:text-primary transition-colors block py-1"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <Link
                          href={`/category/${categoryId}`}
                          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                        >
                          View All {category.name} Products →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-12">
          <span className="font-semibold text-gray-900">Categories</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-8 w-8"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white absolute left-0 right-0 top-full shadow-lg max-h-96 overflow-y-auto">
            <div className="p-4 space-y-4">
              {Object.entries(categoryData).map(([categoryId, category]) => (
                <div key={categoryId} className="space-y-2">
                  <Link
                    href={`/category/${categoryId}`}
                    className="font-semibold text-gray-900 block py-2 border-b"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                  <div className="grid grid-cols-2 gap-2 pl-4">
                    {category.subcategories
                      .slice(0, 4)
                      .map((subcategory, index) => (
                        <div key={index} className="space-y-1">
                          <h5 className="text-xs font-medium text-gray-700">
                            {subcategory.name}
                          </h5>
                          {subcategory.items
                            .slice(0, 3)
                            .map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={`/category/${categoryId}/${item
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-xs text-gray-600 hover:text-primary block"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item}
                              </Link>
                            ))}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
