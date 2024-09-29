export default function FanzruProject() {
    return (
      <div className="bg-black text-white min-h-screen p-8 mt-[100px]">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold">Hi, I'm Anand 👋</h1>
          <p className="mt-4 text-lg">Information Technology Student from Udayana University</p>
          <div className="mt-6">
            <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/109955813?s=400&v=4"
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
          Anand Hari Krsna, a graduate in Information Technology from Universitas Udayana.
          </p>
        </section>
      </div>
    );
  }
  