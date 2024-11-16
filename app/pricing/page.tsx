"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Camera, Heart, Star, Users } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Pack 1",
    price: 299,
    icon: Camera,
    description: "Perfect for personal or intimate photoshoots.",
    features: [
      "Unlimited photos on a flash drive",
      "Photo print (15 x 21 cm)",
      "Pre-event photo/video shoot",
      "Photo enlargement on MDF (30 x 40 cm)",
    ],
    popular: false,
  },
  {
    name: "Pack 2",
    price: 599,
    icon: Users,
    description: "Great for professional or group celebrations.",
    features: [
      "Unlimited photos on a flash drive",
      "Photographer available during the event",
      "40 photo prints (15 x 21 cm)",
      "Full event video coverage (3 hours, 4K quality)",
      "Videographer available during the event",
      "Photo enlargement on MDF (30 x 40 cm)",
    ],
    popular: false,
  },
  // Uncomment and use if needed
  // {
  //   name: "Wedding Premium",
  //   price: 1999,
  //   icon: Heart,
  //   description: "Comprehensive coverage for your wedding day.",
  //   features: [
  //     "Unlimited photos on a flash drive",
  //     "Two photographers",
  //     "300+ edited digital photos",
  //     "Engagement session",
  //     "Online gallery",
  //     "Wedding album",
  //     "Print release",
  //   ],
  //   popular: true,
  // },
  {
    name: "Pack 3",
    price: 899,
    icon: Star,
    description: "Advanced photography for special moments.",
    features: [
      "Unlimited photos on a flash drive",
      "50 photos in a photobook",
      "Full event video coverage (3 hours, 4K quality) on a flash drive",
      "2-minute video summary/Instagram reel",
      "Pre-event photo/video shoot",
      "Photo enlargement on MDF (30 x 40 cm)",
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Photography Packages</h1>
            <p className="text-muted-foreground">
              Choose the perfect package for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-lg shadow-sm overflow-hidden ${
                  pkg.popular ? "ring-2 ring-primary" : "border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <pkg.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-center text-muted-foreground mb-4">
                    {pkg.description}
                  </p>
                  {/* <div className="text-center mb-6">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                  </div> */}
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link
                      href={`/booking?package=${pkg.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      Book Now
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
