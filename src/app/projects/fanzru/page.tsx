export default function FanzruProject() {
    return (
      <div className="bg-black text-white min-h-screen p-8 mt-[100px]">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold">Hi, I'm Fanzru 👋</h1>
          <p className="mt-4 text-lg">Software Engineer Backend at Tiket.com | Build kerjago.id & astabyte.com</p>
          <div className="mt-6">
            <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
              <img
                src="https://fanzru.dev/_next/image?url=%2Ffanzru-no-bg.png&w=2048&q=75"
                alt="Fanzru's Avatar"
                className="rounded-full"
              />
            </div>
          </div>
        </header>
  
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <p className="text-lg">
            I am a fresh graduate from Bachelor of Informatics at Telkom University with 3+ years experience (calculate) (ex: XL Axiata, GoTo, Tokopedia) with an interest in Software, Business and Product Engineering. I have loved business and IT since I was in junior high school by being an SSH Server seller and HP technician. Since college, I have tried many things from Product Manager, Business Analyst, UI/UX Design, Software Engineer and Mobile Engineer.
          </p>
        </section>
  
        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://logo.clearbit.com/tiket.com" alt="Atomic Finance Logo" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">Tiket.com</h3>
                  <p className="text-gray-400">Software Engineer - Backend</p>
                </div>
              </div>
              <p className="text-gray-400">Oct 2022 - Now</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://logo.clearbit.com/kerjago.id" alt="Kerjago" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">Kerjago</h3>
                  <p className="text-gray-400">Founder</p>
                </div>
              </div>
              <p className="text-gray-400">Jan 2022 - Now</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://logo.clearbit.com/tokopedia.com" alt="Nvidia Logo" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">Tokopedia</h3>
                  <p className="text-gray-400">Software Engineer Intern</p>
                </div>
              </div>
              <p className="text-gray-400">May 2022 - Aug 2022</p>
            </div>
          </div>
        </section>
  
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="https://logo.clearbit.com/telkomuniversity.ac.id" alt="Buildspace Logo" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">Telkom University</h3>
                <p className="text-gray-400">S1 Informatika</p>
              </div>
            </div>
            <p className="text-gray-400">2019 - 2023</p>
          </div>
        </section>
  
      </div>
    );
  }
  