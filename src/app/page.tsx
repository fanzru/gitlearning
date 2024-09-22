import Hero from './components/hero';
import ContributorCard from './components/contributorcard';
import TestimonialCard from './components/testimonialcard';

export default function Home() {
  const contributors = [
    {
      name: 'Ananda Affan Fattahila',
      role: 'Software Engineer',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQFhGAr8bu-rtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1628616651792?e=1732147200&v=beta&t=2f9P1hqLE07rwxYBmfym-Ly9Z1JzzjUQW_VDmxvuFHA',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Golang'],
      summary: 'Ananda is a software engineer with 3 years of experience in building web applications.',
      link: '/projects/fanzru',
    },
    {
      name: 'M. Satya Bintang Ramadhani',
      role: 'Mahasiswa Jember',
      avatar: 'https://avatars.githubusercontent.com/u/107668671?v=4',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Golang'],
      summary: 'Satya Bintang Ramdhani, sebagai mahasiswa IT, memiliki pemahaman yang baik dalam pemrograman, seperti Python, Java, dan C++. Contohnya, dalam salah satu proyek kuliahnya, ia mengembangkan aplikasi manajemen tugas menggunakan Python dan framework Django, yang membantu pengguna mengatur dan memprioritaskan pekerjaan mereka. Selain itu, ia juga menguasai konsep keamanan jaringan, seperti firewall dan enkripsi, yang ia praktikkan saat membantu mendesain sistem keamanan untuk jaringan kampus.',
      link: '/projects/indobin',
    },
    {
      name: 'Widya/Dio Nugraha/304-Chan',
      role: 'Sysadmin',
      avatar: 'https://avatars.githubusercontent.com/u/56766061?v=4',
      technologies: ['Rem','Violet'],
      summary: '-',
      link: '#',
    },
  ];

  const testimonials = [
    {
      name: 'Ananda Affan Fattahila',
      feedback: 'This event is amazing! I learned a lot about GIT and how to collaborate with my team.',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQFhGAr8bu-rtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1628616651792?e=1732147200&v=beta&t=2f9P1hqLE07rwxYBmfym-Ly9Z1JzzjUQW_VDmxvuFHA',
      role: 'Software Engineer',
    },
    {
      name: 'M. Satya Bintang Ramadhani',
      feedback: 'This event is amazing! I learned a lot about GIT and how to collaborate with my team.',
      avatar: 'https://avatars.githubusercontent.com/u/107668671?v=4',
      role: 'mahasiswa Jember',
    },
    {
      name: 'Widya Cui',
      feedback: 'keren',
      avatar: 'https://avatars.githubusercontent.com/u/107668671?v=4',
      role: 'Sysadmin',
    }
  ];

  return (
    <div>
      <Hero />

      {/* Contributor Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold">Our Contributors</h2>
          <p className="text-gray-400">Meet the amazing people who made this event possible.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contributors.map((contributor, index) => (
            <ContributorCard
              key={index}
              name={contributor.name}
              summary={contributor.summary}
              role={contributor.role}
              avatar={contributor.avatar}
              technologies={contributor.technologies}
              link={contributor.link}
            />
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold">What People Are Saying</h2>
          <p className="text-gray-400">Here's what our participants have to say about the GIT training.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              feedback={testimonial.feedback}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
