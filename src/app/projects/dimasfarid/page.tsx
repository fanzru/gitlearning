export default function FanzruProject() {
    return (
      <div className="bg-black text-white min-h-screen p-8 mt-[100px]">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold">Halo, Saya Dimas Farid 👋</h1>
          <p className="mt-4 text-lg">Seorang mahasiswa yang berminat dalam web developer & IOT</p>
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
            Saya merupakan Mahasiswa semester akhir di Universitas Madura. Saya ingin menjadi Web Developer dan memperdalam skill saya di bidang IoT!
          </p>
        </section>
  
      </div>
    );
  }
  