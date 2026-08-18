import { ArrowUpRight, Linkedin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const members: TeamMember[] = [
  {
    id: 1,
    name: 'Talha Bin Zubair',
    role: 'FullStack Software Engineer',
    bio: 'Building scalable products at the intersection of product thinking, engineering execution, and modern web experiences.',
    image: '/images/team%20member%201.jpg',
    linkedin: 'https://www.linkedin.com/in/TalhaZubair01',
  },
  {
    id: 2,
    name: 'Muhamad Bilal Tayyab',
    role: 'MERN Stack Developer',
    bio: 'Crafting fast, reliable interfaces and data-driven application flows for real-world business needs.',
    image: '/images/team%20member%202.jpg',
    linkedin: 'https://www.linkedin.com/in/bilaltayyab121/',
  },
  {
    id: 3,
    name: 'M. Hassnain Ayoub',
    role: 'Software Engineer | AI/Computer Vision Researcher',
    bio: 'Combining software engineering with AI research to build smarter, more adaptive digital products.',
    image: '/images/team%20member%203.jpg',
    linkedin: 'https://www.linkedin.com/in/m-hassnain-ayoub-65926827a/',
  },
  {
    id: 4,
    name: 'Usman Falak',
    role: 'Software Engineer',
    bio: 'Focused on product reliability, thoughtful architecture, and polished engineering delivery.',
    image: '/images/team%20member%204.jpg',
    linkedin: 'https://www.linkedin.com/in/usman-falak/',
  },
  {
    id: 5,
    name: 'Salman Siddique',
    role: 'AI/ML Software Engineer',
    bio: 'Designing intelligent systems and AI-powered experiences that help products scale with insight.',
    image: '/images/team%20member%205.jpg',
    linkedin: 'https://www.linkedin.com/in/siddiquesalman-ds-ks/',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-teal-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            Cofounders
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Meet the team
          </h2>
          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-2xl mx-auto">
            A multidisciplinary crew building strategy, software, and AI-powered experiences for ambitious brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition-all duration-500 hover:border-teal-400/30 hover:bg-white/[0.04]"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:border-teal-400/40 hover:text-teal-300"
                  aria-label={`Visit ${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium text-white leading-tight">
                    {member.name}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300" />
                </div>

                <p className="mt-2 text-sm font-medium text-teal-300">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
