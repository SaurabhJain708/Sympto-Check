import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Bot, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function DeskTopRecommendationBar() {
  return (
    <aside className="hidden lg:block w-80 p-6 bg-white border-l shadow-md sticky top-0 h-screen overflow-y-auto">
      <ScrollArea className="h-full">
        <div className="space-y-6">
          {/* Navigation Options */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Quick Access</h2>
            <Link
              href="/v1/dashboard"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Home className="w-5 h-5 text-blue-500" />
              <span>Home</span>
            </Link>
            <Link
              href="/v1/ai-chatbot"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Bot className="w-5 h-5 text-green-500" />
              <span>Consult AI Doctor</span>
            </Link>
          </div>

          {/* Recommended Doctors Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Recommended Doctors</h2>
            {[
              {
                name: "Dr. Jane Smith",
                specialty: "Dermatologist",
                icon: Stethoscope,
              },
              {
                name: "Dr. Rajiv Kumar",
                specialty: "Pediatrician",
                icon: Stethoscope,
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-xl p-4 hover:shadow-md transition flex items-center space-x-3"
              >
                <doc.icon className="text-blue-500 w-6 h-6" />
                <div>
                  <p className="font-semibold">{doc.name}</p>
                  <p className="text-sm text-gray-600">{doc.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Health Tip Section */}
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h3 className="font-semibold mb-1">Health Tip</h3>
            <p className="text-sm text-gray-700">
              Regular check-ups can detect early signs of health issues before
              symptoms appear.
            </p>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}