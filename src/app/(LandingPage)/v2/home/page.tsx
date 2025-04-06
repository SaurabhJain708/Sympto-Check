"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquareText, Stethoscope, Brain, HeartPulse } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter()
  return (
    <main className="min-h-screen bg-white text-red-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-100 to-red-50 py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Welcome to SymptoCheck
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
        >
          Your AI-powered health assistant to analyze symptoms and connect with certified doctors.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10"
        >
          <Button onClick={()=>{router.push("/sign-in")}} size="lg" className="bg-red-600 text-white hover:bg-red-700 px-8 py-6 text-lg rounded-xl shadow-lg">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-full">
                <Brain className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-semibold">Smart Symptom Checker</h2>
            </div>
            <p className="text-lg text-gray-700 ml-16">
              Our AI engine uses advanced models to help understand your symptoms quickly and accurately.
            </p>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 px-6 py-4 rounded-lg ml-16">
              <MessageSquareText className="mr-2" /> Try Chatbot
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-full">
                <HeartPulse className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-semibold">Connect with Real Doctors</h2>
            </div>
            <p className="text-lg text-gray-700 ml-16">
              No more guesswork. Get in touch with certified doctors for real-time consultations and personalized help.
            </p>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-100 px-6 py-4 rounded-lg ml-16">
              <Stethoscope className="mr-2" /> Connect with Doctors
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-red-100 to-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">Your health, your way.</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Start your journey to better health with just one click. SymptoCheck is here for you — anytime, anywhere.
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 px-10 py-5 text-lg rounded-xl shadow-md">
            Launch Health Assistant
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-4 bg-white border-t border-gray-200 text-gray-500 text-sm">
        <p>Made with ❤️ by Team <strong>"Bacterias"</strong> | SymptoCheck © 2025</p>
      </footer>
    </main>
  );
}
