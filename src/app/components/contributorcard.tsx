// app/components/contributorCard.tsx

interface ContributorCardProps {
  name: string;
  role: string;
  avatar: string;
  technologies: string[];
  summary: string; // Summary tentang kontributor
  link: string; // Link yang dituju saat kartu di-klik
}

export default function ContributorCard({ name, role, avatar, technologies, summary, link }: ContributorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block border-2 relative bg-black text-white shadow-md rounded-lg overflow-hidden w-full mx-auto hover:shadow-xl transition duration-300 transform hover:scale-105">
      
      {/* Bagian avatar dan informasi kontributor */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          {/* Avatar */}
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-gray-200" />
          
          {/* Nama, role, dan summary */}
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-400">{role}</p>
            <p className="text-xs text-gray-400 mt-2">{summary}</p> {/* Summary tambahan */}
          </div>
        </div>

        {/* Deskripsi atau teknologi yang digunakan */}
        <div className="mt-2">
          <h4 className="text-md font-semibold">Technologies</h4>
          <div className="flex flex-wrap mt-2 space-x-2">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-white rounded-full px-2 py-1 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
        <span className="text-white text-lg font-semibold">Contributor</span>
      </div>
    </a>
  );
}
