"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Weddings", "Events", "Portraits"];

const images = [
  {
    src: "/images/_YAC8732-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8738-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8085-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8722-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8503-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8358-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8284-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC6013-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC6068-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC7095-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC7549-min-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC8495-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/_YAC7447-min.jpg",
    category: "Weddings",
  },
  {
    src: "/images/DSC_8848-min.jpg",
    category: "Portraits",
  },
  {
    src: "/images/_YAC7561-min.jpg",
    category: "Portraits",
  },
  {
    src: "/images/_YAC9458-min.jpg",
    category: "Portraits",
  },
  {
    src: "/images/_YAC9452-min.jpg",
    category: "Portraits",
  },
  {
    src: "/images/_YAC2575-min.jpg",
    category: "Events",
  },
  {
    src: "/images/_YAC2377-min.jpg",
    category: "Events",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            <p className="text-gray-600">
              Explore my collection of photography work
            </p>
          </motion.div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {images
                    .filter(
                      (img) => category === "All" || img.category === category
                    )
                    .map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-square group cursor-pointer"
                      >
                        <Image
                          src={img.src}
                          alt={`Portfolio ${index + 1}`}
                          fill
                          className="object-cover rounded-lg"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button
                            variant="outline"
                            className="text-white border-white hover:bg-white/20"
                          >
                            View Details
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
}
