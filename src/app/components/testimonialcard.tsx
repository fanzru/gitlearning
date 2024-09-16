// app/components/testimonialCard.tsx

interface TestimonialCardProps {
  name: string;
  feedback: string;
  avatar: string;
  role: string;
}

export default function TestimonialCard({ name, feedback, avatar, role }: TestimonialCardProps) {
  return (
    <div className="bg-black border-2 border-gray-500 text-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
      <div className="flex items-center space-x-4 mb-4">
        {/* Avatar */}
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-gray-300" />
        <div>
          {/* Nama dan Role */}
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      {/* Feedback */}
      <p className="text-gray-300">{feedback}</p>
    </div>
  );
}
