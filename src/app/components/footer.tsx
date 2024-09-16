// app/components/footer.tsx

export default function Footer() {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            Created with <span className="text-red-500">♥</span> by 
            <a href="https://fanzru.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline ml-1">
              fanzru.dev
            </a>
          </p>
        </div>
      </footer>
    );
  }
  