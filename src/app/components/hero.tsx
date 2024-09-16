// app/components/hero.tsx

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Join Our <span className="text-yellow-400">GIT Training</span> Session
        </h1>
        <p className="text-lg mb-8 text-gray-400">
          Learn how to manage version control efficiently and collaborate with your team using Git and GitHub.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-200">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-gray-800 hover:border-gray-800 transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Elemen visual latar belakang */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="w-full h-32 fill-current text-gray-700 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,288L48,266.7C96,245,192,203,288,192C384,181,480,203,576,197.3C672,192,768,160,864,144C960,128,1056,128,1152,154.7C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
        </svg>
      </div>
    </section>
  );
}
