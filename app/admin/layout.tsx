"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

// In a real application, this would be connected to your authentication system
const isAuthenticated = () => {
  // Replace with actual authentication logic
  return true;
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [pathname, router]);

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">Admin Dashboard</div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      {children}
    </div>
  );
}