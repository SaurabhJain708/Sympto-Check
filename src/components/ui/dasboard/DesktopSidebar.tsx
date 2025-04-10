import { Button } from "../button";
import { Bell, User, Home, Bot } from "lucide-react";
import Link from "next/link";

export default function DesktopSidebar() {
  return (
    <>
      {/* === Left Sidebar === */}
      <aside className="hidden md:flex flex-col w-72 p-6 bg-white border-r shadow-md sticky top-0 h-screen overflow-y-auto">
        <nav className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Navigation</h2>

            {/* Sidebar Navigation Items */}
            <Link href="/v1/dashboard" passHref>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Home className="w-5 h-5 text-red-500" />
                <span>Dashboard</span>
              </Button>
            </Link>

            <Link href="/v1/connections" passHref>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <User className="w-5 h-5 text-red-500" />
                <span>Connections</span>
              </Button>
            </Link>

            <Link href="/v1/ai-chatbot" passHref>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Bot className="w-5 h-5 text-red-500" />
                <span>AI Chatbot</span>
              </Button>
            </Link>

            <Link href="/v1/notifications" passHref>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 rounded-lg hover:bg-red-100 flex items-center space-x-2"
              >
                <Bell className="w-5 h-5 text-red-500" />
                <span>Notifications</span>
              </Button>
            </Link>
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
    </>
  );
}