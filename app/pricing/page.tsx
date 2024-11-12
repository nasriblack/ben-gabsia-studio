"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Camera, Heart, Star, Users } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Basic Portrait",
    price: 299,
    icon: Camera,
    description: "Perfect for individual or couple portraits",
    features: [
      "2-hour photo session",
      "1 location",
      "20 edited digital photos",
      "Online gallery",
      "Print release"
    ],
    popular: false
  },
  {
    name: "Event Coverage",
    price: 599,
    icon: Users,
    description: "Ideal for corporate events and celebrations",
    features: [
      "4-hour event coverage",
      "Multiple locations",
      "100 edited digital photos",
      "Online gallery",
      "Print release",
      "Same-day preview shots"
    ],
    popular: false
  },
  {
    name: "Wedding Premium",
    price: 1999,
    icon: Heart,
    description: "Complete wedding day coverage",
    features: [
      "8-hour wedding coverage",
      "2 photographers",
      "300+ edited digital photos",
      "Engagement session",
      "Online gallery",
      "Wedding album",
      "Print release"
    ],
    popular: true
  },
  {
    name: "Professional",
    price: 899,
    icon: Star,
    description: "Professional photography for all needs",
    features: [
      "6-hour photo session",
      "Multiple locations",
      "150 edited digital photos",
      "Online gallery",
      "Print release",
      "Professional retouching",
      "Commercial usage rights"
    ],
    popular: false
  }
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
            <p className="text-muted-foreground">Choose the perfect package for your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-lg shadow-sm overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary' : 'border'
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
                  <h3 className="text-xl font-bold text-center mb-2">{pkg.name}</h3>
                  <p className="text-center text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Link href={`/booking?package=${pkg.name.toLowerCase().replace(" ", "-")}`}>
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