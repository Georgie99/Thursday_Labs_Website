import { Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const externalLinkProps = (href?: string) => {
  if (!href || !/^https?:\/\//i.test(href)) {
    return {};
  }

  return {
    target: '_blank',
    rel: 'noreferrer noopener nofollow',
  };
};
const Team = () => {

  const teamMembers = [
    {
      name: 'Georgiana Wright',
      role: 'CEO and Founder for Thursday Labs',
      bio: 'Georgiana Wright is the CEO of Thursday Labs, she has previously worked at Rockstar Games, Activision, and Apple.',
      image: '/assets/images/people/georgiana_wright.png',
      linkedin: 'https://www.linkedin.com/in/georgiana-wright/',
      featured: true,
    },
    {
      name: 'Savannah Botters',
      role: 'Animator',
      resume: 'https://savannahbotters.wixsite.com/savannah-botters-art',
      image: '/assets/images/people/savannah_botters.png',
      linkedin: 'https://www.linkedin.com/in/savannah-botters-655990303/',
    },
    {
      name: 'Lily Allen',
      role: 'Character Artist',
      resume: 'https://dkemhji6i1k0x.cloudfront.net/000_clients/3036065/page/lily-allen-resume-6cc565.pdf',
      image: '/assets/images/people/lily_allen.png',
      linkedin: 'https://www.linkedin.com/in/lily-allen-984494198/',
    },
    {
      name: 'Sarah Sparks',
      role: 'Composer',
      resume: 'https://sarahsparks.carrd.co/',
      image: '/assets/images/people/sarah_sparks.png',
      linkedin: 'https://www.linkedin.com/in/sarah-l-sparks-907b9525a/',
    },
    {
      name: 'Naomi Urey',
      role: 'Art Director',
      resume: 'https://www.naomiurey.com/about',
      image: '/assets/images/people/naomi_urey.png',
      linkedin: 'https://www.linkedin.com/in/naomiurey/',
    },
    {
      name: 'Nitesh Sridhar',
      role: 'Producer',
      resume: 'https://static1.squarespace.com/static/58cda68ebebafb2e39a5d973/t/6966eabaa9a48f550037d764/1768352442279/Nitesh_Sridhar_Resume_2026.pdf',
      image: '/assets/images/people/nitesh_sridhar.png',
      linkedin: 'https://www.linkedin.com/in/nitesh-sridhar-4b2048138/',
    },
    {
      name: 'Jimi Stine',
      role: 'Gameplay Engineer',
      resume: 'https://jimistine.com/contact',
      image: '/assets/images/people/jimi_stine.jpeg',
      linkedin: 'https://www.linkedin.com/in/jimistine/',
    },
  ];

  const featuredMember = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  return (
    <section
      id="team"
      className="relative pt-20 pb-60 px-4 sm:px-6 overflow-hidden lg:px-12"
    >
      {/* Background Image */}
      <Image
        src="/assets/images/3rd_section.png"
        alt=""
        fill
        className="object-cover -z-10 bottom-0 object-bottom"
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="m3-display-large font-bold text-gray-900 mb-4">
            The Team
          </h2>
          <p className="m3-body-large text-gray-600 max-w-2xl mx-auto">
            A multidisciplinary team building culturally driven games for Gen-Z and fandom-led audiences.
          </p>
          <p className="m3-body-medium text-gray-500 mt-2 max-w-2xl mx-auto">
            Our team brings experience across games and animation, with backgrounds spanning Pixar, Warner Bros. Animation, Rockstar Games, Activision, Sony, and Respawn Entertainment.
          </p>
        </div>

        {/* Featured Member */}
        {featuredMember && (
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-4xl shadow-lg p-6 sm:p-8 max-w-2xl w-full relative before:absolute before:-inset-0.5 before:rounded-4xl before:bg-linear-to-r before:from-brand-pink before:to-brand-peach before:-z-10 before:pointer-events-none">
              <div className="flex items-start gap-4">
                <img
                  src={featuredMember.image}
                  alt={featuredMember.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="m3-title-large font-bold text-gray-900">
                    {featuredMember.name}
                  </h3>
                  <p className="font-medium text-lg">
                    {featuredMember.role}
                  </p>
                  <p className="text-gray-500 m3-body-medium mt-2">
                    {featuredMember.bio}
                  </p>
                </div>
                <a
                  href={featuredMember.linkedin}
                  {...externalLinkProps(featuredMember.linkedin)}
                  className="text-brand-pink hover:text-brand-pink-dark transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Team Members Grid */}
        <div className="grid grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-full relative shadow-md px-2 flex items-center gap-4 hover:shadow-lg transition-shadow before:absolute before:-inset-0.5 before:rounded-full before:bg-linear-to-r before:from-brand-pink before:to-brand-peach before:-z-10 before:pointer-events-none"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0 py-3">
                <h4 className="font-bold text-gray-900 text-lg truncate">
                  {member.name}
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  {member.role} •{' '}
                  <a
                    href={member.resume}
                    {...externalLinkProps(member.resume)}
                    className="font-bold underline inline-flex items-center gap-1"
                  >
                    See Resume
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
              <a
                href={member.linkedin}
                {...externalLinkProps(member.linkedin)}
                className="text-brand-pink hover:text-brand-pink-dark transition-colors p-3"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
