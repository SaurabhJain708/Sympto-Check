import { HeartPulse } from "lucide-react";

export default function MainFeed() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white text-red-700 flex">
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

      {/* === Mobile Menu === */}
    </main>
  );
}
