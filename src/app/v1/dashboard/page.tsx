"use client";

import { useState } from "react";
import {
  Menu,
  Users,
  Home,
  Bell,
  Stethoscope,
  HeartPulse,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white text-red-700 flex">
      {/* === Left Sidebar === */}
      <aside className="hidden md:flex flex-col w-72 p-6 bg-white border-r shadow-md sticky top-0 h-screen overflow-y-auto">
        <nav className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Navigation</h2>

            {/* Inline Sidebar Items */}
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
            >
              <Home className="w-5 h-5 text-red-500" />
              <span>Home</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
            >
              <Users className="w-5 h-5 text-red-500" />
              <span>Connections</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
            >
              <Bell className="w-5 h-5 text-red-500" />
              <span>Notifications</span>
            </Button>
          </div>

          <div className="bg-red-100 p-4 rounded-xl shadow-inner mt-6">
            <h3 className="font-semibold mb-2">💡 Health Tip</h3>
            <p className="text-sm text-gray-700">
              Stay hydrated and take 10-minute walks to refresh your mind and
              body daily.
            </p>
          </div>
        </nav>
      </aside>

      {/* === Main Feed === */}
      <section className="flex-1 px-4 py-6 flex flex-col items-center">
        {/* === Header / Hero Section === */}
        <div className="w-full bg-gradient-to-r from-red-100 to-red-200 rounded-2xl shadow-lg px-10 py-8 mb-8 flex items-center justify-between max-w-5xl">
          <div className="flex items-center space-x-4">
            <HeartPulse className="text-red-500 w-10 h-10" />
            <div>
              <h1 className="text-4xl font-extrabold text-red-800">
                SymptoCheck
              </h1>
              <p className="text-sm text-gray-700">
                Your AI-powered health companion
              </p>
            </div>
          </div>
        </div>

        {/* === Posts Feed === */}
        <div className="w-full max-w-3xl space-y-6">
          {[
            "Welcome to SymptoCheck! This is your health feed where AI and doctors come together.",
            "You can later add posts from doctors, symptom updates, or user shares here.",
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-red-100"
            >
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Right Sidebar === */}
      <aside className="hidden lg:block w-80 p-6 bg-white border-l shadow-md sticky top-0 h-screen overflow-y-auto">
        <ScrollArea className="h-full">
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Recommended Doctors</h2>

            {[
              {
                name: "Dr. Jane Smith",
                specialty: "Dermatologist",
                icon: Stethoscope,
              },
              {
                name: "Dr. Rajiv Kumar",
                specialty: "Pediatrician",
                icon: HeartPulse,
              },
              {
                name: "Dr. Emily Clark",
                specialty: "Cardiologist",
                icon: Info,
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="bg-red-100 rounded-xl p-4 shadow hover:shadow-md transition flex items-center space-x-3"
              >
                <doc.icon className="text-red-500 w-6 h-6" />
                <div>
                  <p className="font-semibold">{doc.name}</p>
                  <p className="text-sm text-gray-600">{doc.specialty}</p>
                </div>
              </div>
            ))}

            <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-inner mt-6">
              <h3 className="font-semibold mb-1">📢 Did you know?</h3>
              <p className="text-sm text-gray-700">
                Regular check-ups can detect early signs of health issues before
                symptoms appear.
              </p>
            </div>
          </div>
        </ScrollArea>
      </aside>

      {/* === Mobile Menu === */}
      <div className="md:hidden absolute top-4 right-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="p-3 rounded-xl bg-red-100 shadow hover:bg-red-200"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white">
            <nav className="space-y-4 p-4">
              <h2 className="text-lg font-semibold mb-2">Navigation</h2>

              {/* Inline Mobile Sidebar Items */}
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Home className="w-5 h-5 text-red-500" />
                <span>Home</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Users className="w-5 h-5 text-red-500" />
                <span>Connections</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Bell className="w-5 h-5 text-red-500" />
                <span>Notifications</span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
