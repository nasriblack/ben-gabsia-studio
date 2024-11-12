"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const packages = {
  "basic-portrait": {
    name: "Basic Portrait",
    price: 299,
    duration: "2",
  },
  "event-coverage": {
    name: "Event Coverage",
    price: 599,
    duration: "4",
  },
  "wedding-premium": {
    name: "Wedding Premium",
    price: 1999,
    duration: "8",
  },
  "professional": {
    name: "Professional",
    price: 899,
    duration: "6",
  },
};

export default function Booking() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Book a Session</h1>
            <p className="text-muted-foreground">Let's capture your special moments together</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Alert className="mb-8">
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                View our <Link href="/pricing" className="font-medium underline">pricing page</Link> to learn more about our photography packages.
              </AlertDescription>
            </Alert>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-lg shadow-sm"
            >
              <form className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">1. Select Package</h2>
                  <RadioGroup defaultValue={selectedPackage || "basic-portrait"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(packages).map(([key, pkg]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <RadioGroupItem value={key} id={key} />
                          <Label htmlFor={key} className="flex items-center justify-between flex-1">
                            <span>{pkg.name}</span>
                            <span className="text-sm text-muted-foreground">${pkg.price}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">2. Choose Date & Time</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">3. Your Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">4. Additional Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="location">Event Location</Label>
                      <Input id="location" placeholder="Enter event location" />
                    </div>
                    <div>
                      <Label htmlFor="notes">Special Requirements</Label>
                      <Input id="notes" placeholder="Any special requests or requirements?" />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Book Now</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}