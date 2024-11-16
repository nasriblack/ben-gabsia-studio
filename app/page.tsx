"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <Image
          src="/images/couv.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white space-y-6 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Capturing Life's Precious Moments
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Professional photography services for weddings, events, and special
            occasions
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/booking">
              Book Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground">
              A glimpse into my recent photography projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
              "https://images.unsplash.com/photo-1519741497674-611481863552",
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative aspect-square group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Featured work ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/20"
                  >
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground">
              Professional photography services for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Weddings",
                description: "Capture your special day with elegance and style",
              },
              {
                icon: Star,
                title: "Events",
                description:
                  "Professional coverage for corporate and social events",
              },
              {
                icon: Camera,
                title: "Portraits",
                description: "Beautiful portraits that tell your story",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-background p-8 rounded-lg shadow-sm text-center"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
            >
              <source src="/showreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Watch My Story</h2>
                <p className="max-w-2xl mx-auto">
                  A glimpse into my journey and passion for photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's work together to capture your special moments
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
