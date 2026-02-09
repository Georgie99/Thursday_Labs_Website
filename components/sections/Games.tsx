import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

const Games = () => {
  const externalLinkProps = (href?: string) => {
    if (!href || !/^https?:\/\//i.test(href)) {
      return {};
    }

    return {
      target: '_blank',
      rel: 'noreferrer noopener nofollow',
    };
  };

  const games = [
    {
      id: 1,
      status: 'Released',
      title: 'Squidpunk',
      description: "A high-energy beat 'em up about sisterhood and street fights in Y2K Japan.",
      fullDescription: "Squidpunk is a Japan-set side-scrolling beat 'em up following Yumie, a ramen-shop girl pulled into the city's girl-gang underworld. Fight rival crews, deliver orders, and protect your found family alongside Natsuko, Squidpunk's cold-but-caring leader.",
      additionalInfo: "Commissioned by Meta, Squidpunk is currently playable as a vertical slice on Meta Horizon Worlds, with a PC demo planned for late 2026.",
      image: '/assets/images/squidpunk.png',
      cta: 'Play Squidpunk',
      ctaLink: 'https://horizon.meta.com/world/4396674987322493/?target=_blank&locale=en_US',
      layout: 'image-left',
    },
    {
      id: 2,
      status: 'In Production',
      title: 'Pawseed',
      description: 'Where care, grief, and renewal take root.',
      fullDescription: "Pawseed is an in-development animated short film and mobile study tool about care, growth, and renewal. Through a quiet story of farming, memory, and a vegetable creature that brings new life to the land, the project explores sustainability, food insecurity, and emotional reflection—reimagining focus as an act of care.",
      additionalInfo: '',
      image: '/assets/images/pawseed.png',
      cta: '',
      ctaLink: '',
      layout: 'image-right',
    },
    {
      id: 3,
      status: 'In Development/Planning',
      title: 'Signed to You',
      description: 'A K-pop romance shaped by fame, choice, and connection for fans of Love and Deepspace.',
      fullDescription: "Signed to You is a mobile and web-based K-pop otome game set behind the scenes of the idol industry. Navigate romance, ambition, and power dynamics as you form relationships with rising stars, trainees, and industry insiders—where every choice impacts both love and career.",
      additionalInfo: "Currently in Concept Stage, Signed to You is an original IP exploring fandom, parasocial intimacy, and the realities of fame, and is seeking funding and development partners.",
      image: '/assets/images/signedtoyou.png',
      cta: 'Play Otome Game',
      ctaLink: '#',
      layout: 'image-left',
    },
  ];

  return (
    <section
      id="games"
      className="pb-20 pt-40 px-4 sm:px-6 -mt-20 lg:px-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/images/2nd_section.png)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="m3-display-large font-bold text-gray-900 mb-4">
            Our Games
          </h2>
          <p className="m3-body-large text-gray-600 max-w-xl mx-auto">
            Original game projects designed for fandom communities, and culturally driven audiences.
          </p>
        </div>

        {/* Games List */}
        <div className="space-y-16">
          {games.map((game) => (
            <div
              key={game.id}
              className={`grid md:grid-cols-13 grid-cols-1 w-full gap-8 items-center`}
            >
              {/* Image */}
              <div className={cn("md:col-span-8", game.layout === 'image-left' ? 'lg:order-2' : '')}>
                <div className={`relative`}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full object-cover drop-shadow-md"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={cn("md:col-span-5 space-y-4")}>
                <span className="inline-block bg-linear-to-r text-white from-brand-pink to-brand-peach px-4 py-1 rounded-full text-sm font-semibold">
                  {game.status}
                </span>
                <h3 className="m3-headline-medium font-bold text-gray-900">
                  {game.title}
                </h3>
                <p className="m3-title-medium font-medium text-gray-800">
                  {game.description}
                </p>
                <p className="m3-body-large text-gray-600 leading-relaxed">
                  {game.fullDescription}
                </p>
                {game.additionalInfo && (
                  <p className="m3-body-medium text-gray-500 leading-relaxed">
                    {game.additionalInfo}
                  </p>
                )}
                {game.cta && (
                  <a
                    href={game.ctaLink}
                    {...externalLinkProps(game.ctaLink)}
                    className="btn-secondary inline-flex items-center gap-2 mt-4"
                  >
                    {game.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
