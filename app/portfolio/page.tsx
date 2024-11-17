"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

const categories = ["All", "Weddings", "Events", "Portraits"];
const IMAGES_PER_PAGE = 6;

const images = [
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731772017/_YAC8732-min_afmgpu.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771788/_YAC6013-min_gvidhx.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771954/_YAC7549-min-min_vn2kmp.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771890/_YAC8495-min_leqmkh.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771792/_YAC7095-min_w7lqyp.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731772012/_YAC8722-min_m4zz3b.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771915/_YAC8358-min_wy7q18.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771734/_YAC6068-min_rgwxys.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771971/_YAC8085-min_zkryef.jpg",
    category: "Weddings",
  },

  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771965/_YAC8503-min_iifgjl.jpg",
    category: "Weddings",
  },

  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771948/_YAC8284-min_qepqu6.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731772027/_YAC8738-min_l2in0i.jpg",
    category: "Weddings",
  },

  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771849/_YAC7447-min_iyx9he.jpg",
    category: "Weddings",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731772025/DSC_8848-min_uud7dj.jpg",
    category: "Portraits",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771851/_YAC7561-min_bmdclt.jpg",
    category: "Portraits",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731779806/_YAC9458-min_wdywzh.jpg",
    category: "Portraits",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731779803/_YAC9452-min_dpnqux.jpg",
    category: "Portraits",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771857/_YAC2575-min_ws2lud.jpg",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/day0flv3i/image/upload/v1731771814/_YAC2377-min_s4rdoj.jpg",
    category: "Events",
  },
];

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setCurrentPage(1);
    updateDisplayedImages("All", 1);
  }, []);

  const updateDisplayedImages = (category: any, page: any) => {
    const filteredImages: any = images.filter(
      (img) => category === "All" || img.category === category
    );
    const startIndex = (page - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    setDisplayedImages(filteredImages.slice(startIndex, endIndex));
  };

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    updateDisplayedImages(category, 1);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    const filteredImages: any = images.filter(
      (img) => selectedCategory === "All" || img.category === selectedCategory
    );
    const startIndex = 0;
    const endIndex = nextPage * IMAGES_PER_PAGE;
    setDisplayedImages(filteredImages.slice(startIndex, endIndex));
  };

  const hasMoreImages = () => {
    const filteredImages = images.filter(
      (img) => selectedCategory === "All" || img.category === selectedCategory
    );
    return currentPage * IMAGES_PER_PAGE < filteredImages.length;
  };

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

          <Tabs
            defaultValue="All"
            className="w-full"
            onValueChange={handleCategoryChange}
          >
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
                  {displayedImages.map((img: any, index) => (
                    <motion.div
                      key={`${img.src}-${index}`}
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
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                {hasMoreImages() && (
                  <div className="mt-8 text-center">
                    <Button
                      onClick={handleLoadMore}
                      variant="outline"
                      className="mx-auto"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
}
