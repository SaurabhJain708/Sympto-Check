"use client";

import { useState } from "react";
import { Menu, Users, Home, Bell, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function PhoneSidebar() {
  const [open, setOpen] = useState(false);

  return (
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

            {/* Mobile Sidebar Navigation Items */}
            <Link href="/v1/dashboard" passHref onClick={() => setOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Home className="w-5 h-5 text-red-500" />
                <span>Dashboard</span>
              </Button>
            </Link>

            <Link href="/v1/connections" passHref onClick={() => setOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Users className="w-5 h-5 text-red-500" />
                <span>Connections</span>
              </Button>
            </Link>

            <Link href="/v1/ai-chatbot" passHref onClick={() => setOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Bot className="w-5 h-5 text-red-500" />
                <span>AI Chatbot</span>
              </Button>
            </Link>

            <Link href="/v1/notifications" passHref onClick={() => setOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Bell className="w-5 h-5 text-red-500" />
                <span>Notifications</span>
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}