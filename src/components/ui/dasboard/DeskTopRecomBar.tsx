import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Stethoscope,
    HeartPulse,
    Info,
  } from "lucide-react";



export default function DeskTopRecommendationBar(){
    return(
        <>
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
      </aside></>
    )
}