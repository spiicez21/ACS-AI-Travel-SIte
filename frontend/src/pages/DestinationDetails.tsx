import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DESTINATION_DATA: Record<string, any> = {
  kyoto: {
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Honshu Island, Japan',
    title: 'Kyoto: The Timeless Heart of Japan',
    heroDesc: 'Step into a living masterpiece where thousand-year-old temples coexist with avant-garde tea houses.',
    editorial: {
      heading: 'The Silent Architecture of Zen',
      p1: 'Kyoto is not merely a destination; it is a ritual. For over a millennium, it served as the imperial capital of Japan, a sanctuary where the arts of the kimono, the tea ceremony, and the rock garden were perfected. To walk through the Gion district at twilight is to witness the seamless folding of time.',
      p2: 'Unlike the neon-drenched kinetic energy of Tokyo, Kyoto moves with the deliberate pace of a brush stroke. It is a city defined by its silences—the soft crunch of gravel in a Daitoku-ji temple garden, the rustle of silk in a Pontocho alley, and the steam rising from a bowl of matcha.',
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1000',
    },
    landmarks: [
      { img: 'https://images.unsplash.com/photo-1473186505569-9c61870f119c?auto=format&fit=crop&q=80&w=1000', title: 'Fushimi Inari-taisha', desc: 'The Path of Ten Thousand Gates' },
      { img: 'https://images.unsplash.com/photo-1590457631379-3733ba40df83?auto=format&fit=crop&q=80&w=1000', title: 'Kinkaku-ji', desc: 'The Zen Golden Pavilion' },
      { img: 'https://images.unsplash.com/photo-1478059299873-f0473614ee29?auto=format&fit=crop&q=80&w=1000', title: 'Arashiyama', desc: 'The Bamboo Forest' },
      { img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1000', title: 'Gion District', desc: 'The Geisha Quarter' },
    ],
    practical: {
      time: 'The cherry blossoms of Late March and the fiery maples of November are peak experiences. For a quieter, meditative journey, the snow-dusted temples of January offer unparalleled solitude.',
      etiquette: 'Precision in social interaction is key. Speak softly in temples, always remove shoes when entering tatami spaces, and respect the privacy of Geiko in Gion by observing from a distance.',
      rituals: 'Engage with a private tea master in the Higashiyama hills or take part in a Zazen meditation session. Kyoto is best understood through participation, not just observation.'
    }
  },
  venice: {
    heroImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Veneto, Italy',
    title: 'Venice: The Floating Canvas',
    heroDesc: 'Navigate a labyrinth of canals and palazzos where Renaissance romance meets Byzantine opulence.',
    editorial: {
      heading: 'A City Forged by Water',
      p1: 'Venice defies logic. Built on wooden pilings driven into marshland, it stands as a testament to human ingenuity and aesthetic obsession. Every palazzo facade tells a story of maritime wealth and artistic rivalry that spans centuries.',
      p2: 'Beyond the crowded Piazza San Marco lies the true Venice—a quiet maze of hidden campi (squares), echoing footsteps, and the gentle lapping of the lagoon. It is a place to get intentionally lost, discovering hidden artisan workshops and secluded wine bars.',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000',
    },
    landmarks: [
      { img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000', title: 'Grand Canal', desc: 'The Main Artery' },
      { img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000', title: 'Doge\'s Palace', desc: 'Gothic Masterpiece' },
      { img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&q=80&w=1000', title: 'Rialto Bridge', desc: 'Architectural Icon' },
      { img: 'https://images.unsplash.com/photo-1549495759-3d1264c18090?auto=format&fit=crop&q=80&w=1000', title: 'Murano', desc: 'The Glass Island' },
    ],
    practical: {
      time: 'Spring (April to June) and Autumn (September to October) offer perfect light and mild weather. Winter provides a haunting, mist-covered romance without the overwhelming crowds.',
      etiquette: 'Do not eat while walking through the narrow calli, and always keep to the right on bridges. Remember that Venice is a living city; respect the locals\' need to commute.',
      rituals: 'Hire a private water taxi at sunset to cruise the lagoon, or partake in the local tradition of cicchetti (small bites) and an ombra (small glass of wine) in a tucked-away bacaro.'
    }
  },
  agra: {
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Uttar Pradesh, India',
    title: 'Agra: A Monument to Love',
    heroDesc: 'Experience the grandeur of the Mughal Empire and the unparalleled symmetry of the Taj Mahal.',
    editorial: {
      heading: 'Symmetry and Devotion',
      p1: 'Agra is synonymous with the Taj Mahal, but the city itself is a vast tapestry of Mughal history. It is a place where white marble and red sandstone speak of legendary emperors, tragic romances, and architectural brilliance that remains unmatched.',
      p2: 'To experience Agra is to step into a poem written in stone. Beyond the iconic mausoleum, the city vibrates with the energy of bustling bazaars, ancient forts, and the timeless flow of the Yamuna River.',
      image: 'https://images.unsplash.com/photo-1564507592224-2c09098fb5eb?auto=format&fit=crop&q=80&w=1000',
    },
    landmarks: [
      { img: 'https://images.unsplash.com/photo-1564507592224-2c09098fb5eb?auto=format&fit=crop&q=80&w=1000', title: 'Taj Mahal', desc: 'The Teardrop on the Cheek of Time' },
      { img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000', title: 'Agra Fort', desc: 'Red Sandstone Citadel' },
      { img: 'https://images.unsplash.com/photo-1620245648873-45f86e3f848f?auto=format&fit=crop&q=80&w=1000', title: 'Fatehpur Sikri', desc: 'The Abandoned City' },
      { img: 'https://images.unsplash.com/photo-1625409949673-f1ba55060950?auto=format&fit=crop&q=80&w=1000', title: 'Mehtab Bagh', desc: 'The Moonlight Garden' },
    ],
    practical: {
      time: 'The cooler months from October to March are ideal. Avoid the scorching summer heat from April to June.',
      etiquette: 'Dress modestly when visiting monuments, covering shoulders and knees. Remove shoes before entering mosques or mausoleums.',
      rituals: 'View the Taj Mahal from Mehtab Bagh across the river at sunset for a serene, crowd-free perspective.'
    }
  },
  yosemite: {
    heroImage: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'California, USA',
    title: 'Yosemite: Nature\'s Cathedral',
    heroDesc: 'Stand in awe of granite monoliths, thundering waterfalls, and ancient sequoia groves.',
    editorial: {
      heading: 'The Scale of the Sublime',
      p1: 'Yosemite Valley is a shrine to the raw power of nature. Carved by glaciers millions of years ago, its towering granite cliffs and deep valleys inspire a profound sense of perspective and humility.',
      p2: 'Whether it is the sheer vertical face of El Capitan or the ancient wisdom of the Mariposa Grove, Yosemite demands a quiet reverence. It is a sanctuary for those seeking the profound silence that only absolute wilderness can provide.',
      image: 'https://images.unsplash.com/photo-1516934824316-95f26fb7cb17?auto=format&fit=crop&q=80&w=1000',
    },
    landmarks: [
      { img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1000', title: 'Half Dome', desc: 'The Granite Icon' },
      { img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000', title: 'El Capitan', desc: 'The Vertical Monolith' },
      { img: 'https://images.unsplash.com/photo-1522851411475-43a992cb91b1?auto=format&fit=crop&q=80&w=1000', title: 'Yosemite Falls', desc: 'The Thundering Cascade' },
      { img: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80&w=1000', title: 'Mariposa Grove', desc: 'Ancient Giants' },
    ],
    practical: {
      time: 'May and June offer the most spectacular waterfalls. September provides beautiful autumn light and fewer crowds.',
      etiquette: 'Strictly adhere to "Leave No Trace" principles. Keep a safe distance from wildlife and store food in bear-proof containers.',
      rituals: 'Watch the sunset cast a fiery glow on Half Dome from Sentinel Bridge, or hike the Mist Trail in the early morning.'
    }
  }
};

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const destId = id?.toLowerCase() || 'kyoto';
  
  // Use specific data if it exists, otherwise generate a beautiful generic fallback
  const destName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Kyoto';
  
  const data = DESTINATION_DATA[destId] || {
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Global Destination',
    title: `${destName}: A World Awaits`,
    heroDesc: `Discover the hidden beauty and untold stories of ${destName}.`,
    editorial: {
      heading: `The Essence of ${destName}`,
      p1: `Every destination has its own heartbeat, and ${destName} is no exception. It is a place where history, culture, and modern life intersect to create a truly unique atmosphere.`,
      p2: `To experience ${destName} is to embrace the unexpected. Let the local rhythms guide you through a journey of unparalleled discovery and inspiration.`,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',
    },
    landmarks: [
      { img: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1000', title: 'Local Landmark', desc: 'Discover the heritage' },
      { img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=1000', title: 'Cultural Hub', desc: 'The heart of the city' },
      { img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=1000', title: 'Natural Wonder', desc: 'Scenic beauty' },
      { img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000', title: 'Hidden Gem', desc: 'Off the beaten path' },
    ],
    practical: {
      time: 'Every season brings its own magic. Research the local climate to find your perfect window.',
      etiquette: 'Respect local customs, learn a few phrases of the local language, and travel with an open mind.',
      rituals: 'Find a quiet cafe or a bustling market square and simply observe the daily life unfolding around you.'
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[90vh] w-full overflow-hidden">
        <img src={data.heroImage} alt={`${destName} Hero`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end px-margin-desktop pb-24 max-w-container-max mx-auto">
          <span className="font-label-sm text-label-sm text-on-primary uppercase tracking-[0.2em] mb-4">{data.subtitle}</span>
          <h1 className="font-display-xl text-display-xl text-on-primary max-w-4xl">{data.title}</h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mt-6 max-w-2xl leading-relaxed">
            {data.heroDesc}
          </p>
        </div>
      </header>

      {/* Editorial Section */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{data.editorial.heading}</h2>
          <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>{data.editorial.p1}</p>
            <p>{data.editorial.p2}</p>
          </div>
        </div>
        <div className="md:col-start-7 md:col-span-6">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden editorial-shadow">
            <img src={data.editorial.image} alt="Editorial View" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Must See Bento Grid */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Curated Map</span>
              <h2 className="font-headline-lg text-headline-lg mt-4">Essential Destinations</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              A precision-curated selection of the most culturally significant landmarks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl editorial-shadow">
              <img src={data.landmarks[0].img} alt={data.landmarks[0].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-on-primary">
                <h3 className="font-headline-md text-headline-md">{data.landmarks[0].title}</h3>
                <p className="font-label-md text-label-md opacity-80 mt-2">{data.landmarks[0].desc}</p>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl editorial-shadow">
              <img src={data.landmarks[1].img} alt={data.landmarks[1].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-on-primary">
                <h3 className="font-headline-md text-headline-md">{data.landmarks[1].title}</h3>
                <p className="font-label-md text-label-md opacity-80 mt-2">{data.landmarks[1].desc}</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl editorial-shadow">
              <img src={data.landmarks[2].img} alt={data.landmarks[2].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <h4 className="font-label-md text-label-md font-bold">{data.landmarks[2].title}</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl editorial-shadow">
              <img src={data.landmarks[3].img} alt={data.landmarks[3].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <h4 className="font-label-md text-label-md font-bold">{data.landmarks[3].title}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Best Time to Visit</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {data.practical.time}
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary">domino_mask</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Cultural Etiquette</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {data.practical.etiquette}
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-primary">local_cafe</span>
            </div>
            <h3 className="font-headline-md text-headline-md">The Rituals</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {data.practical.rituals}
            </p>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
        <Link to="/plan" state={{ destination: destName }}>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-label-md text-label-md hover:scale-105 transition-all group">
            <span>Plan a trip to {destName}</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default DestinationDetails;
