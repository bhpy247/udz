import fs from 'fs';
import path from 'path';
import {
  roomsData,
  attractionsData,
  itinerariesData,
  experiencesData,
  hotelsData,
  siteSettings
} from './frontend/lib/data';

const OUT_DIR = path.join(__dirname, 'static-site');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(path.join(OUT_DIR, 'attractions'), { recursive: true });
fs.mkdirSync(path.join(OUT_DIR, 'itineraries'), { recursive: true });

// Common Layout Helpers
function getHead(title: string, description: string, relPath: string = '.') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Udaipur Unfolded</title>
  <meta name="description" content="${description}">
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            sand: '#F7F4ED',
            sandSecondary: '#E9DFCF',
            charcoal: '#252820',
            terracotta: '#B56B4B',
            terracottaDark: '#9E593A',
            olive: '#777C61',
          },
          fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #F7F4ED; color: #252820; font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="min-h-screen flex flex-col bg-sand text-charcoal antialiased">
`;
}

function getHeader(activePage: string, isHome: boolean = false, relPath: string = '.') {
  const links = [
    { name: 'Home', href: `${relPath}/index.html`, id: 'home' },
    { name: 'Stays', href: `${relPath}/stays.html`, id: 'stays' },
    { name: 'Hotels', href: `${relPath}/hotels.html`, id: 'hotels' },
    { name: 'Explore', href: `${relPath}/places-to-visit.html`, id: 'explore' },
    { name: 'Itineraries', href: `${relPath}/itineraries.html`, id: 'itineraries' },
    { name: 'Experiences', href: `${relPath}/experiences.html`, id: 'experiences' },
    { name: 'About', href: `${relPath}/about.html`, id: 'about' },
  ];

  const headerBgClass = isHome 
    ? 'bg-gradient-to-b from-[#181A14]/90 via-[#181A14]/60 to-transparent py-4 text-white absolute top-0 left-0 right-0 z-40' 
    : 'bg-[#F7F4ED]/98 backdrop-blur-md shadow-sm border-b border-[#E9DFCF] py-3.5 sticky top-0 z-40 text-charcoal';

  return `
  <header id="main-header" class="${headerBgClass}">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="${relPath}/index.html" class="group flex flex-col">
          <span class="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase transition-colors ${isHome ? 'text-white' : 'text-charcoal group-hover:text-terracotta'}">
            Udaipur Unfolded
          </span>
          <span class="text-[10px] tracking-[0.25em] uppercase font-sans -mt-1 hidden sm:block ${isHome ? 'text-[#E9DFCF]/90' : 'text-olive'}">
            Stay closer. Explore deeper.
          </span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center space-x-7">
          ${links.map(l => {
            const isActive = activePage === l.id;
            const textClass = isHome 
              ? (isActive ? 'text-[#E49B7A] font-semibold' : 'text-white/90 hover:text-white')
              : (isActive ? 'text-terracotta font-semibold' : 'text-charcoal hover:text-terracotta');
            return `<a href="${l.href}" class="text-sm font-medium tracking-wide relative py-1 transition-colors ${textClass}">
              ${l.name}
              ${isActive ? `<span class="absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isHome ? 'bg-[#E49B7A]' : 'bg-terracotta'}"></span>` : ''}
            </a>`;
          }).join('')}
        </nav>

        <!-- Right CTA Button -->
        <div class="hidden sm:flex items-center space-x-3">
          <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20would%20like%20to%20enquire%20about%20staying%20at%20Udaipur%20Unfolded." 
             target="_blank" 
             class="inline-flex items-center space-x-2 bg-terracotta hover:bg-terracottaDark text-white text-xs sm:text-sm font-medium px-4 py-2.5 shadow-md tracking-wider uppercase transition-all">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Enquire Now</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center space-x-2 lg:hidden">
          <button id="mobile-toggle" class="p-2 transition-colors ${isHome ? 'text-white' : 'text-charcoal'}" aria-label="Toggle menu">
            <svg class="w-6 h-6 stroke-current fill-none" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Slide Drawer -->
    <div id="mobile-drawer" class="hidden fixed inset-0 z-50">
      <div id="drawer-backdrop" class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-sand shadow-2xl p-6 flex flex-col justify-between text-charcoal">
        <div>
          <div class="flex items-center justify-between pb-6 border-b border-sandSecondary">
            <div>
              <span class="font-serif text-lg font-bold text-charcoal uppercase tracking-wider">Udaipur Unfolded</span>
              <p class="text-[11px] text-olive tracking-widest uppercase">Stay closer. Explore deeper.</p>
            </div>
            <button id="drawer-close" class="p-2 text-charcoal hover:text-terracotta">
              <svg class="w-6 h-6 stroke-current fill-none" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <nav class="mt-8 flex flex-col space-y-4">
            ${links.map(l => `<a href="${l.href}" class="text-lg font-serif tracking-wide py-2 border-b border-sandSecondary/50 flex items-center justify-between hover:text-terracotta">
              <span>${l.name}</span>
              <span class="text-xs text-olive font-sans">→</span>
            </a>`).join('')}
          </nav>
        </div>
        <div class="pt-6 border-t border-sandSecondary space-y-3">
          <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20would%20like%20to%20enquire%20about%20staying%20at%20Udaipur%20Unfolded." 
             target="_blank"
             class="w-full inline-flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracottaDark text-white py-3 font-medium uppercase text-xs tracking-widest">
            <span>Enquire on WhatsApp</span>
          </a>
          <p class="text-[11px] text-center text-olive">Homestay near Ambamata Temple, Udaipur</p>
        </div>
      </div>
    </div>
  </header>
  <script>
    const toggleBtn = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('drawer-close');
    const backdrop = document.getElementById('drawer-backdrop');
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => drawer.classList.remove('hidden'));
      closeBtn && closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
      backdrop && backdrop.addEventListener('click', () => drawer.classList.add('hidden'));
    }
  </script>
`;
}

function getFooter(relPath: string = '.') {
  return `
  <!-- Footer -->
  <footer class="bg-charcoal text-sand pt-16 pb-12 border-t border-[#34382C] mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#34382C]">
        <!-- Brand -->
        <div class="md:col-span-2 space-y-4">
          <a href="${relPath}/index.html" class="inline-block">
            <span class="font-serif text-2xl font-bold tracking-widest text-white uppercase">Udaipur Unfolded</span>
            <span class="block text-xs tracking-[0.25em] text-[#DACBB7] uppercase font-sans mt-0.5">Stay closer. Explore deeper.</span>
          </a>
          <p class="text-sm text-[#DACBB7]/80 max-w-md leading-relaxed">
            A boutique travel discovery brand and intimate residential homestay near Ambamata Temple, Udaipur. Connecting travelers with authentic Mewari hospitality, vetted stays, and local stories.
          </p>
          <div class="pt-2">
            <span class="inline-flex items-center space-x-2 text-xs text-[#DACBB7] bg-[#34382C] px-3 py-1.5 border border-[#484D3E]">
              <span class="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span>Primary homestay inventory: 2 Private Rooms near Ambamata Temple</span>
            </span>
          </div>
        </div>

        <!-- Stays & Links -->
        <div class="space-y-3">
          <h4 class="font-serif text-base font-semibold text-white tracking-wider">Accommodation</h4>
          <ul class="space-y-2 text-sm text-[#DACBB7]">
            <li><a href="${relPath}/room-1.html" class="hover:text-terracotta transition-colors">Room 1 — Deluxe Queen</a></li>
            <li><a href="${relPath}/room-2.html" class="hover:text-terracotta transition-colors">Room 2 — Mountain View</a></li>
            <li><a href="${relPath}/stays.html" class="hover:text-terracotta transition-colors">All Stays & Wings</a></li>
            <li><a href="${relPath}/hotels.html" class="hover:text-terracotta transition-colors">Partner Hotels Directory</a></li>
          </ul>
        </div>

        <!-- Explore -->
        <div class="space-y-3">
          <h4 class="font-serif text-base font-semibold text-white tracking-wider">Discovery</h4>
          <ul class="space-y-2 text-sm text-[#DACBB7]">
            <li><a href="${relPath}/places-to-visit.html" class="hover:text-terracotta transition-colors">15 Places to Visit</a></li>
            <li><a href="${relPath}/itineraries.html" class="hover:text-terracotta transition-colors">Curated Itineraries</a></li>
            <li><a href="${relPath}/experiences.html" class="hover:text-terracotta transition-colors">Local Experiences</a></li>
            <li><a href="${relPath}/about.html" class="hover:text-terracotta transition-colors">About Our Homestay</a></li>
            <li><a href="${relPath}/contact.html" class="hover:text-terracotta transition-colors">Contact & Location</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DACBB7]/70 space-y-4 sm:space-y-0">
        <p>© ${new Date().getFullYear()} Udaipur Unfolded. All rights reserved. Locally rooted hospitality.</p>
        <div class="flex items-center space-x-6">
          <a href="${relPath}/privacy.html" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="${relPath}/terms.html" class="hover:text-white transition-colors">House Rules & Terms</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

// 1. GENERATE INDEX.HTML
console.log('Generating index.html...');
const indexHtml = `
${getHead("Discover Udaipur, Beyond the Ordinary", "Boutique travel discovery and residential homestay near Ambamata Temple, Udaipur, Rajasthan.")}
${getHeader("home", true)}

<main class="flex-grow">
  <!-- B. HERO SECTION -->
  <section class="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-charcoal">
    <div class="absolute inset-0 z-0">
      <img src="images/hero-udaipur.jpg" alt="Udaipur City Palace and Lake Pichola at sunset" class="w-full h-full object-cover object-center opacity-65 brightness-95 filter contrast-105">
      <div class="absolute inset-0 bg-gradient-to-b from-[#181A14]/80 via-transparent to-[#252820]/95 pointer-events-none"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
      <div class="inline-flex items-center space-x-2 bg-sand/15 backdrop-blur-md border border-sand/30 px-4 py-1.5 text-xs text-sand tracking-[0.25em] uppercase font-sans">
        <span class="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
        <span>Stay closer. Explore deeper.</span>
      </div>

      <div class="space-y-4">
        <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-wide leading-[1.15] drop-shadow-md">
          Discover Udaipur, <br class="hidden sm:inline" />
          <span class="italic font-light text-[#E49B7A]">beyond the ordinary.</span>
        </h1>
        <p class="text-sm sm:text-lg text-sand/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-sm">
          Find your stay. Discover hidden gems. Experience the city like a local.
        </p>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="stays.html" class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracottaDark text-white px-8 py-3.5 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-95">
          <span>Explore Stays</span>
          <span>→</span>
        </a>
        <a href="itineraries.html" class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-sand/20 hover:bg-sand/30 text-white backdrop-blur-sm border border-sand/40 px-8 py-3.5 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 active:scale-95">
          <span>Plan Your Trip</span>
        </a>
      </div>
    </div>
  </section>

  <!-- C. INTRODUCTION -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-sand border-b border-sandSecondary">
    <div class="max-w-4xl mx-auto text-center space-y-6">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Boutique Mewari Hospitality</span>
      <h2 class="font-serif text-3xl sm:text-4xl text-charcoal font-normal">Your gateway to the City of Lakes.</h2>
      <div class="w-12 h-0.5 bg-terracotta mx-auto"></div>
      <p class="text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
        Udaipur Unfolded was born from a family home situated near the sacred Ambamata Temple. We offer travelers an authentic residential stay alongside thoughtfully curated destination itineraries, vetted heritage hotels, and hidden cultural trails across the lake basin.
      </p>
    </div>
  </section>

  <!-- D. FEATURED ACCOMMODATION -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-sandSecondary/30">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-sandSecondary pb-6">
        <div>
          <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Our Primary Inventory</span>
          <h2 class="font-serif text-3xl sm:text-4xl text-charcoal font-normal mt-1">Featured Stays</h2>
        </div>
        <p class="text-sm text-olive mt-2 md:mt-0">Private rooms near Ambamata Temple • Under ₹2,000/night</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${roomsData.map(room => `
        <div class="bg-white border border-[#E0D7C7] overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
          <div class="relative h-64 sm:h-72 w-full overflow-hidden">
            <img src="${room.images[0].replace('/images/', 'images/')}" alt="${room.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-4 left-4 bg-charcoal/80 text-sand text-[11px] uppercase tracking-widest px-3 py-1">Homestay Room</span>
            <span class="absolute bottom-4 right-4 bg-terracotta text-white text-xs font-semibold px-3 py-1.5 shadow">₹${room.pricePerNight} <span class="font-normal text-[10px]">/ night</span></span>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
            <div>
              <h3 class="font-serif text-2xl text-charcoal font-normal">${room.name}</h3>
              <p class="text-xs text-olive tracking-wider uppercase mt-0.5">${room.bedConfiguration} • Up to ${room.maxGuests} Guests</p>
              <p class="text-sm text-charcoal/80 mt-3 line-clamp-2">${room.description}</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-2 border-t border-sandSecondary">
              ${room.amenities.slice(0, 4).map(a => `<span class="text-[11px] bg-sand px-2.5 py-1 text-charcoal/80 border border-sandSecondary">${a}</span>`).join('')}
            </div>
            <div class="pt-4 flex items-center justify-between">
              <a href="${room.slug}.html" class="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-terracotta hover:text-terracottaDark">
                <span>View Details</span>
                <span class="ml-1">→</span>
              </a>
              <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20am%20interested%20in%20booking%20${encodeURIComponent(room.name)}%20at%20Udaipur%20Unfolded." target="_blank" class="inline-flex items-center space-x-1.5 text-xs bg-sand border border-[#DACBB7] px-3 py-2 text-charcoal hover:bg-sandSecondary transition-colors">
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- E. EXPLORE UDAIPUR -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-sand">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-sandSecondary pb-6">
        <div>
          <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Curated City Guide</span>
          <h2 class="font-serif text-3xl sm:text-4xl text-charcoal font-normal mt-1">Explore Udaipur</h2>
        </div>
        <a href="places-to-visit.html" class="text-xs uppercase tracking-widest text-terracotta font-semibold hover:underline mt-2 md:mt-0">View All 15 Destinations →</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${attractionsData.slice(0, 6).map(a => `
        <a href="attractions/${a.slug}.html" class="group bg-white border border-[#E0D7C7] overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
          <div class="relative h-56 w-full overflow-hidden">
            <img src="${a.heroImage.replace('/images/', 'images/')}" alt="${a.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 bg-charcoal/80 text-sand text-[10px] uppercase tracking-widest px-2.5 py-1">${a.category}</span>
          </div>
          <div class="p-5 flex flex-col justify-between flex-grow">
            <div>
              <h3 class="font-serif text-xl text-charcoal group-hover:text-terracotta transition-colors">${a.name}</h3>
              <p class="text-xs text-olive mt-1">${a.estimatedDuration} • ${a.location}</p>
              <p class="text-xs text-charcoal/80 mt-2 line-clamp-2">${a.shortDescription}</p>
            </div>
            <span class="text-xs text-terracotta uppercase tracking-wider font-medium mt-4 inline-block">Read Visitor Guide →</span>
          </div>
        </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- F. CURATED ITINERARIES -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-sandSecondary/20">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-sandSecondary pb-6">
        <div>
          <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Travel Plans</span>
          <h2 class="font-serif text-3xl sm:text-4xl text-charcoal font-normal mt-1">Curated Itineraries</h2>
        </div>
        <a href="itineraries.html" class="text-xs uppercase tracking-widest text-terracotta font-semibold hover:underline mt-2 md:mt-0">View All 5 Itineraries →</a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${itinerariesData.slice(0, 3).map(it => `
        <a href="itineraries/${it.slug}.html" class="group bg-white border border-[#E0D7C7] overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
          <div class="relative h-60 w-full overflow-hidden">
            <img src="${it.coverImage.replace('/images/', 'images/')}" alt="${it.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 right-3 bg-terracotta text-white text-[11px] font-semibold px-2.5 py-1">${it.duration}</span>
          </div>
          <div class="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h3 class="font-serif text-2xl text-charcoal group-hover:text-terracotta transition-colors">${it.title}</h3>
              <p class="text-sm text-charcoal/80 mt-3 line-clamp-3">${it.overview}</p>
            </div>
            <span class="text-xs text-terracotta uppercase tracking-widest font-semibold mt-6 inline-block">Explore Itinerary →</span>
          </div>
        </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- G. LOCAL EXPERIENCES -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-sand">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Immerse Yourself</span>
        <h2 class="font-serif text-3xl sm:text-4xl text-charcoal font-normal">Authentic Local Experiences</h2>
        <div class="w-12 h-0.5 bg-terracotta mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${experiencesData.map(exp => `
        <div class="bg-white border border-[#E0D7C7] overflow-hidden group">
          <div class="relative h-48 w-full overflow-hidden">
            <img src="${exp.image.replace('/images/', 'images/')}" alt="${exp.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 bg-charcoal/80 text-sand text-[10px] uppercase tracking-wider px-2 py-0.5">${exp.category}</span>
          </div>
          <div class="p-5 space-y-2">
            <h3 class="font-serif text-lg text-charcoal">${exp.title}</h3>
            <p class="text-xs text-olive">${exp.location} • ${exp.timing}</p>
            <p class="text-xs text-charcoal/80">${exp.description}</p>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- H. WHY CHOOSE US -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-sandSecondary/40 border-t border-sandSecondary">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">The Udaipur Unfolded Difference</span>
        <h2 class="font-serif text-3xl sm:text-4xl text-charcoal font-normal">Why Stay With Us?</h2>
        <div class="w-12 h-0.5 bg-terracotta mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 border border-[#E0D7C7] space-y-3">
          <span class="text-2xl text-terracotta">📍</span>
          <h3 class="font-serif text-xl font-bold text-charcoal">Prime Residential Location</h3>
          <p class="text-sm text-charcoal/80 leading-relaxed">Quiet, secure residential neighborhood right near Ambamata Temple. Just 5 minutes from Fateh Sagar Lake and 8 minutes from Lake Pichola ghats.</p>
        </div>
        <div class="bg-white p-8 border border-[#E0D7C7] space-y-3">
          <span class="text-2xl text-terracotta">🏡</span>
          <h3 class="font-serif text-xl font-bold text-charcoal">Authentic Homestay Comfort</h3>
          <p class="text-sm text-charcoal/80 leading-relaxed">Two private, spacious rooms with dedicated workspace, air conditioning, and attached modern bathrooms. Fair pricing under ₹2,000/night.</p>
        </div>
        <div class="bg-white p-8 border border-[#E0D7C7] space-y-3">
          <span class="text-2xl text-terracotta">💬</span>
          <h3 class="font-serif text-xl font-bold text-charcoal">Personalized WhatsApp Care</h3>
          <p class="text-sm text-charcoal/80 leading-relaxed">Direct WhatsApp coordination with your local hosts. Genuine assistance with daily timings, boat rentals, scooter hire, and hidden dining gems.</p>
        </div>
      </div>
    </div>
  </section>
</main>

${getFooter()}
`;

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexHtml);

// 2. GENERATE STAYS.HTML
console.log('Generating stays.html...');
const staysHtml = `
${getHead("Stays & Accommodation", "Comfortable private rooms in a quiet residential home near Ambamata Temple, Udaipur.")}
${getHeader("stays", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto space-y-12">
    <!-- Header banner -->
    <div class="border-b border-sandSecondary pb-8 space-y-3">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Boutique Homestay</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal font-normal">Our Private Rooms</h1>
      <p class="text-base text-charcoal/80 max-w-3xl font-light">
        Located in a peaceful residential home near Ambamata Temple, our two private rooms offer a restful sanctuary just minutes from Fateh Sagar and the Old City ghats.
      </p>
    </div>

    <!-- Room Cards -->
    <div class="space-y-12">
      ${roomsData.map(room => `
      <div class="bg-white border border-[#E0D7C7] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
        <div class="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px]">
          <img src="${room.images[0].replace('/images/', 'images/')}" alt="${room.name}" class="w-full h-full object-cover">
          <span class="absolute top-4 left-4 bg-charcoal/80 text-sand text-xs uppercase tracking-widest px-3 py-1">Room Inventory</span>
          <span class="absolute bottom-4 right-4 bg-terracotta text-white font-serif text-xl font-bold px-4 py-2 shadow">
            ₹${room.pricePerNight} <span class="text-xs font-sans font-normal">/ night</span>
          </span>
        </div>
        <div class="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div>
              <h2 class="font-serif text-3xl text-charcoal">${room.name}</h2>
              <p class="text-xs text-olive tracking-widest uppercase mt-1">${room.bedConfiguration} • Up to ${room.maxGuests} Guests • Attached Bathroom</p>
            </div>
            <p class="text-sm text-charcoal/80 leading-relaxed">${room.description}</p>
            
            <div class="space-y-2 pt-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-charcoal">Key Amenities:</span>
              <div class="grid grid-cols-2 gap-2 text-xs text-charcoal/80">
                ${room.amenities.map(a => `<div class="flex items-center space-x-2"><span class="text-terracotta">✓</span><span>${a}</span></div>`).join('')}
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-sandSecondary flex flex-col sm:flex-row gap-4">
            <a href="${room.slug}.html" class="inline-flex items-center justify-center bg-sand border border-[#DACBB7] hover:bg-sandSecondary text-charcoal px-6 py-3 text-xs tracking-widest uppercase transition-colors">
              <span>View Full Specs & Gallery</span>
              <span class="ml-1">→</span>
            </a>
            <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20am%20interested%20in%20booking%20${encodeURIComponent(room.name)}%20at%20Udaipur%20Unfolded." target="_blank" class="inline-flex items-center justify-center bg-terracotta hover:bg-terracottaDark text-white px-6 py-3 text-xs tracking-widest uppercase shadow transition-colors">
              <span>Enquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      `).join('')}
    </div>

    <!-- Booking Enquiry Widget -->
    <div class="bg-sandSecondary/40 border border-[#DACBB7] p-8 sm:p-10 space-y-6">
      <div class="max-w-2xl">
        <h3 class="font-serif text-2xl text-charcoal">Direct WhatsApp Booking Assistance</h3>
        <p class="text-sm text-charcoal/80 mt-1">Select your travel dates and preferred room below to generate an instant enquiry with prefilled details.</p>
      </div>
      <form id="enquiry-form" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" onsubmit="event.preventDefault(); submitEnquiry();">
        <div>
          <label class="block text-xs uppercase tracking-wider text-olive font-medium mb-1">Check-in Date</label>
          <input type="date" id="checkin" required class="w-full bg-white border border-[#DACBB7] px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-terracotta">
        </div>
        <div>
          <label class="block text-xs uppercase tracking-wider text-olive font-medium mb-1">Check-out Date</label>
          <input type="date" id="checkout" required class="w-full bg-white border border-[#DACBB7] px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-terracotta">
        </div>
        <div>
          <label class="block text-xs uppercase tracking-wider text-olive font-medium mb-1">Guests</label>
          <select id="guests" class="w-full bg-white border border-[#DACBB7] px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-terracotta">
            <option value="1 Guest">1 Guest</option>
            <option value="2 Guests" selected>2 Guests</option>
            <option value="3 Guests">3 Guests</option>
            <option value="4 Guests (Both Rooms)">4 Guests (Both Rooms)</option>
          </select>
        </div>
        <div>
          <label class="block text-xs uppercase tracking-wider text-olive font-medium mb-1">Select Room</label>
          <select id="room" class="w-full bg-white border border-[#DACBB7] px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-terracotta">
            <option value="Room 1 (Deluxe Queen)">Room 1 (Deluxe Queen)</option>
            <option value="Room 2 (Mountain View)">Room 2 (Mountain View)</option>
            <option value="Entire 2-Room Wing">Entire 2-Room Wing</option>
          </select>
        </div>
        <div class="sm:col-span-2 lg:col-span-4 pt-2">
          <button type="submit" class="inline-flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracottaDark text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all shadow">
            <span>Send Enquiry on WhatsApp</span>
            <span>→</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</main>

<script>
  function submitEnquiry() {
    const cin = document.getElementById('checkin').value || 'TBD';
    const cout = document.getElementById('checkout').value || 'TBD';
    const guests = document.getElementById('guests').value;
    const room = document.getElementById('room').value;

    const msg = "Hi! I am interested in booking " + room + " at Udaipur Unfolded.\\n\\nCheck-in: " + cin + "\\nCheck-out: " + cout + "\\nGuests: " + guests + "\\n\\nPlease share availability and pricing.";
    window.open("https://wa.me/${siteSettings.whatsappNumber}?text=" + encodeURIComponent(msg), "_blank");
  }
</script>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'stays.html'), staysHtml);

// 3. GENERATE ROOM-1.HTML & ROOM-2.HTML
roomsData.forEach(room => {
  console.log(`Generating ${room.slug}.html...`);
  const roomHtml = `
${getHead(`${room.name} — Homestay Details`, room.description)}
${getHeader("stays", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto space-y-12">
    <!-- Breadcrumb -->
    <div class="text-xs text-olive flex items-center space-x-2">
      <a href="index.html" class="hover:underline">Home</a>
      <span>/</span>
      <a href="stays.html" class="hover:underline">Stays</a>
      <span>/</span>
      <span class="text-charcoal font-semibold">${room.name}</span>
    </div>

    <!-- Title & Price Banner -->
    <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-sandSecondary pb-6">
      <div>
        <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Residential Homestay Inventory</span>
        <h1 class="font-serif text-3xl sm:text-5xl text-charcoal mt-1">${room.name}</h1>
        <p class="text-xs text-olive tracking-widest uppercase mt-2">${room.bedConfiguration} • Up to ${room.maxGuests} Guests • Ambamata Temple Area</p>
      </div>
      <div class="mt-4 md:mt-0 text-right">
        <span class="font-serif text-3xl text-terracotta font-bold">₹${room.pricePerNight}</span>
        <span class="text-xs text-olive block">per night (taxes included)</span>
      </div>
    </div>

    <!-- Photo Gallery -->
    <div class="space-y-4">
      <div class="h-[360px] sm:h-[500px] w-full overflow-hidden border border-[#DACBB7]">
        <img id="main-gallery-img" src="${room.images[0].replace('/images/', 'images/')}" alt="${room.name}" class="w-full h-full object-cover">
      </div>
      <div class="grid grid-cols-4 gap-3">
        ${room.images.map((img, idx) => `
        <div onclick="document.getElementById('main-gallery-img').src = '${img.replace('/images/', 'images/')}'" 
             class="h-24 sm:h-28 border border-[#DACBB7] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <img src="${img.replace('/images/', 'images/')}" alt="Angle ${idx + 1}" class="w-full h-full object-cover">
        </div>
        `).join('')}
      </div>
    </div>

    <!-- Description & Specs -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 space-y-8">
        <div class="space-y-3">
          <h2 class="font-serif text-2xl text-charcoal">About the Room</h2>
          <p class="text-sm text-charcoal/85 leading-relaxed font-light">${room.description}</p>
        </div>

        <div class="space-y-4 pt-4 border-t border-sandSecondary">
          <h2 class="font-serif text-2xl text-charcoal">Amenities & Features</h2>
          <div class="grid grid-cols-2 gap-3 text-xs text-charcoal/85">
            ${room.amenities.map(a => `<div class="flex items-center space-x-2"><span class="text-terracotta font-bold">✓</span><span>${a}</span></div>`).join('')}
          </div>
        </div>

        <div class="space-y-4 pt-4 border-t border-sandSecondary">
          <h2 class="font-serif text-2xl text-charcoal">House Rules & Neighborhood Care</h2>
          <ul class="space-y-2 text-xs text-charcoal/80 list-disc list-inside">
            ${room.houseRules.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div class="space-y-2 pt-4 border-t border-sandSecondary">
          <h2 class="font-serif text-2xl text-charcoal">Cancellation Policy</h2>
          <p class="text-xs text-charcoal/80 leading-relaxed">${room.cancellationPolicy}</p>
        </div>
      </div>

      <!-- Booking Card -->
      <div class="bg-white border border-[#DACBB7] p-6 space-y-6 self-start shadow-sm">
        <div>
          <span class="text-xs uppercase tracking-wider text-olive">Direct Booking</span>
          <h3 class="font-serif text-2xl text-charcoal">₹${room.pricePerNight} <span class="text-xs font-sans text-olive">/ night</span></h3>
          <p class="text-[11px] text-olive mt-1">Check-in: ${room.checkInTime} • Check-out: ${room.checkOutTime}</p>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="block text-olive uppercase font-medium mb-1">Check-in Date</label>
            <input type="date" id="detail-cin" class="w-full bg-sand border border-[#DACBB7] p-2 text-charcoal">
          </div>
          <div>
            <label class="block text-olive uppercase font-medium mb-1">Check-out Date</label>
            <input type="date" id="detail-cout" class="w-full bg-sand border border-[#DACBB7] p-2 text-charcoal">
          </div>
          <div>
            <label class="block text-olive uppercase font-medium mb-1">Number of Guests</label>
            <select id="detail-guests" class="w-full bg-sand border border-[#DACBB7] p-2 text-charcoal">
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests" selected>2 Guests</option>
            </select>
          </div>
        </div>

        <button onclick="sendRoomEnquiry('${room.name}')" class="w-full inline-flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracottaDark text-white py-3.5 text-xs uppercase tracking-widest font-semibold shadow">
          <span>Enquire on WhatsApp</span>
        </button>

        <p class="text-[11px] text-center text-olive leading-relaxed">
          This sends an instant availability enquiry directly to the property host. No payment is charged online.
        </p>
      </div>
    </div>
  </div>
</main>

<script>
  function sendRoomEnquiry(roomName) {
    const cin = document.getElementById('detail-cin').value || 'TBD';
    const cout = document.getElementById('detail-cout').value || 'TBD';
    const guests = document.getElementById('detail-guests').value;

    const msg = "Hi! I am interested in booking " + roomName + " at Udaipur Unfolded.\\n\\nCheck-in: " + cin + "\\nCheck-out: " + cout + "\\nGuests: " + guests + "\\n\\nPlease share availability and confirmation details.";
    window.open("https://wa.me/${siteSettings.whatsappNumber}?text=" + encodeURIComponent(msg), "_blank");
  }
</script>

${getFooter()}
`;
  fs.writeFileSync(path.join(OUT_DIR, `${room.slug}.html`), roomHtml);
});

// 4. GENERATE HOTELS.HTML
console.log('Generating hotels.html...');
const hotelsHtml = `
${getHead("Curated Hotel Directory", "A vetted selection of Udaipur heritage stays, boutique partner hotels, and budget accommodations.")}
${getHeader("hotels", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto space-y-12">
    <div class="border-b border-sandSecondary pb-6 space-y-2">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Udaipur Directory</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">Curated Hotels & Stays</h1>
      <p class="text-sm text-charcoal/80 max-w-2xl font-light">
        A transparently categorized directory distinguishing our own residential homestay from verified partner boutique properties and trusted third-party stays.
      </p>
    </div>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-2 text-xs">
      <button onclick="filterHotels('all')" class="hotel-filter-btn bg-charcoal text-white px-4 py-2 uppercase tracking-wider">All Stays</button>
      <button onclick="filterHotels('Heritage')" class="hotel-filter-btn bg-sand border border-[#DACBB7] text-charcoal px-4 py-2 uppercase tracking-wider hover:bg-sandSecondary">Heritage</button>
      <button onclick="filterHotels('Boutique')" class="hotel-filter-btn bg-sand border border-[#DACBB7] text-charcoal px-4 py-2 uppercase tracking-wider hover:bg-sandSecondary">Boutique</button>
      <button onclick="filterHotels('Budget')" class="hotel-filter-btn bg-sand border border-[#DACBB7] text-charcoal px-4 py-2 uppercase tracking-wider hover:bg-sandSecondary">Budget</button>
    </div>

    <!-- Hotel List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${hotelsData.map(h => `
      <div class="hotel-item bg-white border border-[#E0D7C7] overflow-hidden flex flex-col justify-between shadow-sm" data-category="${h.category}">
        <div>
          <div class="relative h-60 w-full overflow-hidden">
            <img src="${h.photos[0].replace('/images/', 'images/')}" alt="${h.name}" class="w-full h-full object-cover">
            <span class="absolute top-3 left-3 bg-charcoal/80 text-sand text-[10px] uppercase tracking-wider px-2.5 py-1">
              ${h.partnershipStatus}
            </span>
            <span class="absolute bottom-3 right-3 bg-terracotta text-white text-xs font-semibold px-2.5 py-1">
              ${h.indicativePriceRange}
            </span>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="font-serif text-2xl text-charcoal">${h.name}</h3>
            <p class="text-xs text-olive tracking-wider uppercase">${h.category} • ${h.location}</p>
            <p class="text-xs text-charcoal/80 leading-relaxed">${h.description}</p>
            
            <div class="flex flex-wrap gap-1.5 pt-2">
              ${h.amenities.map(a => `<span class="text-[10px] bg-sand px-2 py-0.5 text-charcoal/70 border border-sandSecondary">${a}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="p-6 pt-0 border-t border-sandSecondary mt-4">
          <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20am%20interested%20in%20partner%20booking%20enquiry%20for%20${encodeURIComponent(h.name)}." 
             target="_blank" 
             class="w-full inline-flex items-center justify-center space-x-2 bg-sand border border-[#DACBB7] hover:bg-sandSecondary text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium transition-colors">
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
</main>

<script>
  function filterHotels(cat) {
    const items = document.querySelectorAll('.hotel-item');
    const btns = document.querySelectorAll('.hotel-filter-btn');
    btns.forEach(b => {
      b.classList.remove('bg-charcoal', 'text-white');
      b.classList.add('bg-sand', 'text-charcoal');
    });
    event.target.classList.add('bg-charcoal', 'text-white');
    event.target.classList.remove('bg-sand', 'text-charcoal');

    items.forEach(it => {
      if (cat === 'all' || it.getAttribute('data-category') === cat) {
        it.classList.remove('hidden');
      } else {
        it.classList.add('hidden');
      }
    });
  }
</script>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'hotels.html'), hotelsHtml);

// 5. GENERATE PLACES-TO-VISIT.HTML
console.log('Generating places-to-visit.html...');
const placesHtml = `
${getHead("Places to Visit in Udaipur", "Complete editorial travel guide for 15 historic destinations, lakes, ghats, and palaces in Udaipur.")}
${getHeader("explore", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto space-y-12">
    <div class="border-b border-sandSecondary pb-6 space-y-2">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Destination Directory</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">Places to Visit in Udaipur</h1>
      <p class="text-sm text-charcoal/80 max-w-2xl font-light">
        15 verified destinations across Udaipur with realistic visit durations, best timings, entry fee guidelines, and local Mewari context.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      ${attractionsData.map(a => `
      <a href="attractions/${a.slug}.html" class="group bg-white border border-[#E0D7C7] overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
        <div class="relative h-60 w-full overflow-hidden">
          <img src="${a.heroImage.replace('/images/', 'images/')}" alt="${a.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <span class="absolute top-3 left-3 bg-charcoal/80 text-sand text-[10px] uppercase tracking-wider px-2.5 py-1">${a.category}</span>
        </div>
        <div class="p-6 flex flex-col justify-between flex-grow space-y-4">
          <div>
            <h3 class="font-serif text-2xl text-charcoal group-hover:text-terracotta transition-colors">${a.name}</h3>
            <p class="text-xs text-olive mt-1">${a.estimatedDuration} • ${a.location}</p>
            <p class="text-xs text-charcoal/80 mt-3 line-clamp-3 leading-relaxed">${a.shortDescription}</p>
          </div>
          <span class="text-xs text-terracotta uppercase tracking-wider font-semibold">Explore Guide →</span>
        </div>
      </a>
      `).join('')}
    </div>
  </div>
</main>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'places-to-visit.html'), placesHtml);

// 6. GENERATE INDIVIDUAL ATTRACTION PAGES (attractions/<slug>.html)
attractionsData.forEach(a => {
  console.log(`Generating attractions/${a.slug}.html...`);
  const attrHtml = `
${getHead(`${a.name} Udaipur — Timings, Fees & Visitor Guide`, a.shortDescription, '..')}
${getHeader("explore", false, '..')}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto space-y-10">
    <div class="text-xs text-olive flex items-center space-x-2">
      <a href="../index.html" class="hover:underline">Home</a>
      <span>/</span>
      <a href="../places-to-visit.html" class="hover:underline">Places to Visit</a>
      <span>/</span>
      <span class="text-charcoal font-semibold">${a.name}</span>
    </div>

    <div class="space-y-3 border-b border-sandSecondary pb-6">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">${a.category} • Udaipur</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal font-normal">${a.name}</h1>
      <p class="text-base text-charcoal/80 font-light leading-relaxed">${a.shortDescription}</p>
    </div>

    <!-- Hero Image -->
    <div class="h-[360px] sm:h-[500px] w-full border border-[#DACBB7] overflow-hidden">
      <img src="../${a.heroImage.replace('/images/', 'images/')}" alt="${a.name}" class="w-full h-full object-cover">
    </div>

    <!-- Content & Meta Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 space-y-8">
        <div class="space-y-4">
          <h2 class="font-serif text-2xl text-charcoal">About this Landmark</h2>
          <p class="text-sm text-charcoal/85 leading-relaxed font-light">${a.fullDescription}</p>
        </div>

        <div class="space-y-4 pt-6 border-t border-sandSecondary">
          <h2 class="font-serif text-2xl text-charcoal">Visitor Information</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="bg-white p-4 border border-[#DACBB7]">
              <span class="text-olive block uppercase font-medium">Estimated Duration</span>
              <span class="font-semibold text-charcoal text-sm mt-1 block">${a.estimatedDuration}</span>
            </div>
            <div class="bg-white p-4 border border-[#DACBB7]">
              <span class="text-olive block uppercase font-medium">Best Time to Visit</span>
              <span class="font-semibold text-charcoal text-sm mt-1 block">${a.suggestedTiming}</span>
            </div>
            <div class="bg-white p-4 border border-[#DACBB7]">
              <span class="text-olive block uppercase font-medium">Entry Fee</span>
              <span class="font-semibold text-charcoal text-sm mt-1 block">${a.verifiedEntryFee}</span>
            </div>
            <div class="bg-white p-4 border border-[#DACBB7]">
              <span class="text-olive block uppercase font-medium">Opening Hours</span>
              <span class="font-semibold text-charcoal text-sm mt-1 block">${a.verifiedOpeningHours}</span>
            </div>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="pt-4 border-t border-sandSecondary">
          <a href="${a.googleMapsUrl}" target="_blank" class="inline-flex items-center space-x-2 bg-sand border border-[#DACBB7] hover:bg-sandSecondary text-charcoal px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors">
            <span>📍 Open in Google Maps</span>
          </a>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <div class="bg-white border border-[#DACBB7] p-6 space-y-4">
          <h3 class="font-serif text-xl text-charcoal">Nearby Landmarks</h3>
          <ul class="space-y-2 text-xs text-charcoal/80">
            ${a.nearbyAttractions.map(n => `<li class="flex items-center space-x-2"><span class="text-terracotta">▪</span><span>${n}</span></li>`).join('')}
          </ul>
        </div>

        <div class="bg-sandSecondary/40 border border-[#DACBB7] p-6 space-y-4">
          <h3 class="font-serif text-xl text-charcoal">Need Travel Guidance?</h3>
          <p class="text-xs text-charcoal/80 leading-relaxed">Ask our local hosts for recommendations on routes, boat bookings, and quiet sunset vantage points.</p>
          <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20am%20visiting%20Udaipur%20and%20need%20travel%20advice%20for%20${encodeURIComponent(a.name)}." target="_blank" class="w-full inline-flex items-center justify-center bg-terracotta hover:bg-terracottaDark text-white py-3 text-xs uppercase tracking-widest font-semibold shadow">
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</main>

${getFooter('..')}
`;
  fs.writeFileSync(path.join(OUT_DIR, 'attractions', `${a.slug}.html`), attrHtml);
});

// 7. GENERATE ITINERARIES.HTML
console.log('Generating itineraries.html...');
const itinsHtml = `
${getHead("Curated Travel Itineraries", "Day-wise timeline trip plans for exploring Udaipur in 1, 2, or 3 days, plus couples and family routes.")}
${getHeader("itineraries", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto space-y-12">
    <div class="border-b border-sandSecondary pb-6 space-y-2">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Curated Travel Plans</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">Udaipur Itineraries</h1>
      <p class="text-sm text-charcoal/80 max-w-2xl font-light">
        Thoughtfully sequenced day-wise itineraries designed to minimize travel fatigue and maximize golden hour lake views.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${itinerariesData.map(it => `
      <a href="itineraries/${it.slug}.html" class="group bg-white border border-[#E0D7C7] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
        <div>
          <div class="relative h-64 w-full overflow-hidden">
            <img src="${it.coverImage.replace('/images/', 'images/')}" alt="${it.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 right-3 bg-terracotta text-white text-xs font-semibold px-3 py-1">${it.duration}</span>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="font-serif text-2xl text-charcoal group-hover:text-terracotta transition-colors">${it.title}</h3>
            <p class="text-xs text-charcoal/80 leading-relaxed line-clamp-3">${it.overview}</p>
          </div>
        </div>
        <div class="p-6 pt-0">
          <span class="text-xs text-terracotta uppercase tracking-widest font-semibold">View Day-by-Day Timeline →</span>
        </div>
      </a>
      `).join('')}
    </div>
  </div>
</main>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'itineraries.html'), itinsHtml);

// 8. GENERATE INDIVIDUAL ITINERARY PAGES (itineraries/<slug>.html)
itinerariesData.forEach(it => {
  console.log(`Generating itineraries/${it.slug}.html...`);
  const itDetailHtml = `
${getHead(`${it.title} — Day-by-Day Timeline Guide`, it.overview, '..')}
${getHeader("itineraries", false, '..')}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto space-y-10">
    <div class="text-xs text-olive flex items-center space-x-2">
      <a href="../index.html" class="hover:underline">Home</a>
      <span>/</span>
      <a href="../itineraries.html" class="hover:underline">Itineraries</a>
      <span>/</span>
      <span class="text-charcoal font-semibold">${it.title}</span>
    </div>

    <div class="space-y-3 border-b border-sandSecondary pb-6">
      <span class="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">${it.duration} Trip Plan</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">${it.title}</h1>
      <p class="text-base text-charcoal/80 font-light leading-relaxed">${it.overview}</p>
    </div>

    <div class="h-[360px] sm:h-[460px] w-full border border-[#DACBB7] overflow-hidden">
      <img src="../${it.coverImage.replace('/images/', 'images/')}" alt="${it.title}" class="w-full h-full object-cover">
    </div>

    <!-- Day Wise Timeline -->
    <div class="space-y-12">
      ${it.days.map(d => `
      <div class="space-y-6">
        <div class="bg-charcoal text-sand p-4 px-6 border-l-4 border-terracotta">
          <span class="text-xs tracking-widest uppercase font-semibold text-[#DACBB7]">Day ${d.dayNumber}</span>
          <h2 class="font-serif text-2xl text-white font-normal">${d.title}</h2>
        </div>

        <div class="space-y-6 border-l-2 border-sandSecondary ml-4 pl-6">
          ${d.stops.map(s => `
          <div class="relative space-y-2">
            <div class="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-terracotta border-2 border-sand"></div>
            <span class="text-xs font-semibold text-terracotta tracking-wider uppercase">${s.timeSlot}</span>
            <h3 class="font-serif text-xl text-charcoal">${s.destinationName}</h3>
            <p class="text-sm text-charcoal/85 leading-relaxed font-light">${s.description}</p>
            ${s.tips ? `<p class="text-xs text-olive italic mt-1">💡 Host tip: ${s.tips}</p>` : ''}
          </div>
          `).join('')}
        </div>
      </div>
      `).join('')}
    </div>

    <!-- Custom Enquiry CTA -->
    <div class="bg-sandSecondary/40 border border-[#DACBB7] p-8 text-center space-y-4">
      <h3 class="font-serif text-2xl text-charcoal">Want a Custom Tailored Itinerary?</h3>
      <p class="text-sm text-charcoal/80 max-w-xl mx-auto">We can adjust this timeline according to your travel dates, arrival time, and family size.</p>
      <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20would%20like%20to%20customize%20the%20${encodeURIComponent(it.title)}%20for%20my%20trip." target="_blank" class="inline-flex items-center space-x-2 bg-terracotta hover:bg-terracottaDark text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold shadow">
        <span>Chat with Host on WhatsApp</span>
      </a>
    </div>
  </div>
</main>

${getFooter('..')}
`;
  fs.writeFileSync(path.join(OUT_DIR, 'itineraries', `${it.slug}.html`), itDetailHtml);
});

// 9. GENERATE EXPERIENCES.HTML
console.log('Generating experiences.html...');
const expHtml = `
${getHead("Local Udaipur Experiences", "Food trails, rooftop dining, cultural performances, traditional bazaars, and sunset boat rides.")}
${getHeader("experiences", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto space-y-12">
    <div class="border-b border-sandSecondary pb-6 space-y-2">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Local Culture</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">Curated Local Experiences</h1>
      <p class="text-sm text-charcoal/80 max-w-2xl font-light">
        Immerse yourself in authentic Udaipur life — from morning street kachoris to private boat rides and dusk folk dance at Bagore Ki Haveli.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${experiencesData.map(e => `
      <div class="bg-white border border-[#E0D7C7] overflow-hidden flex flex-col justify-between shadow-sm">
        <div>
          <div class="relative h-60 w-full overflow-hidden">
            <img src="${e.image.replace('/images/', 'images/')}" alt="${e.title}" class="w-full h-full object-cover">
            <span class="absolute top-3 left-3 bg-charcoal/80 text-sand text-[10px] uppercase tracking-wider px-2.5 py-1">${e.category}</span>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="font-serif text-2xl text-charcoal">${e.title}</h3>
            <p class="text-xs text-olive uppercase tracking-wider">${e.location} • ${e.timing}</p>
            <p class="text-xs text-charcoal/80 leading-relaxed">${e.description}</p>
          </div>
        </div>
        <div class="p-6 pt-0">
          <a href="https://wa.me/${siteSettings.whatsappNumber}?text=Hi!%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(e.title)}%20experience." target="_blank" class="w-full inline-flex items-center justify-center bg-sand border border-[#DACBB7] hover:bg-sandSecondary text-charcoal py-2.5 text-xs uppercase tracking-widest font-semibold transition-colors">
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
</main>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'experiences.html'), expHtml);

// 10. GENERATE ABOUT.HTML
console.log('Generating about.html...');
const aboutHtml = `
${getHead("About Udaipur Unfolded", "The story of our local homestay and hospitality roots near Ambamata Temple, Udaipur.")}
${getHeader("about", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto space-y-12">
    <div class="border-b border-sandSecondary pb-6 space-y-2">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Our Roots</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">About Udaipur Unfolded</h1>
      <p class="text-base text-charcoal/80 font-light leading-relaxed">
        Stay closer. Explore deeper. Locally rooted hospitality born in the Ambamata neighborhood of Udaipur.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-7 space-y-6 text-sm text-charcoal/85 font-light leading-relaxed">
        <p>
          Udaipur Unfolded began as an intimate family homestay in a quiet residential area near the historic Ambamata Temple. Over decades of living in Udaipur, our family has experienced how this city reveals its soul when travelers slow down — greeting morning temple bells, enjoying freshly fried poha-kachori, and watching the evening sun cast liquid amber across Lake Pichola.
        </p>
        <p>
          Rather than building another generic commercial hotel, we opened two private rooms in our residential home to conscientious travelers who value genuine human connection, peaceful residential surroundings, and thoughtful local recommendations.
        </p>
        <p>
          Today, Udaipur Unfolded serves as both a primary homestay inventory and a curated discovery portal, featuring verified partner stays, comprehensive destination guides, and realistic day-wise itineraries.
        </p>
      </div>

      <div class="lg:col-span-5">
        <div class="border border-[#DACBB7] overflow-hidden shadow-md">
          <img src="images/lake-pichola.jpg" alt="Udaipur heritage view across Lake Pichola" class="w-full h-80 object-cover">
          <div class="bg-charcoal p-4 text-sand text-xs">
            <span class="font-serif font-bold block text-sm text-white">Ambamata Residential Homestay</span>
            <p class="text-[#DACBB7]">Near Ambamata Temple, Udaipur, Rajasthan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'about.html'), aboutHtml);

// 11. GENERATE CONTACT.HTML
console.log('Generating contact.html...');
const contactHtml = `
${getHead("Contact & Location", "Get in touch directly with our homestay hosts in Ambamata, Udaipur.")}
${getHeader("about", false)}

<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto space-y-12">
    <div class="border-b border-sandSecondary pb-6 space-y-2">
      <span class="text-xs uppercase tracking-[0.25em] text-olive font-medium">Get in Touch</span>
      <h1 class="font-serif text-4xl sm:text-5xl text-charcoal">Contact & Location</h1>
      <p class="text-sm text-charcoal/80 font-light">
        Reach our hosts directly via WhatsApp or email for bookings, guidance, or partnership enquiries.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="bg-white border border-[#DACBB7] p-8 space-y-6">
        <h2 class="font-serif text-2xl text-charcoal">Host Communication</h2>
        <div class="space-y-4 text-sm">
          <div>
            <span class="text-xs text-olive uppercase block font-medium">Primary WhatsApp Enquiry</span>
            <a href="https://wa.me/${siteSettings.whatsappNumber}" target="_blank" class="font-semibold text-terracotta text-lg hover:underline">+91 98765 43210</a>
          </div>
          <div>
            <span class="text-xs text-olive uppercase block font-medium">Direct Email</span>
            <a href="mailto:${siteSettings.email}" class="text-charcoal font-medium hover:underline">${siteSettings.email}</a>
          </div>
          <div>
            <span class="text-xs text-olive uppercase block font-medium">Instagram</span>
            <a href="https://instagram.com/udaipurunfolded" target="_blank" class="text-charcoal font-medium hover:underline">@udaipurunfolded</a>
          </div>
        </div>
      </div>

      <div class="bg-sandSecondary/40 border border-[#DACBB7] p-8 space-y-4">
        <h2 class="font-serif text-2xl text-charcoal">Location Proximity</h2>
        <p class="text-xs text-charcoal/80 leading-relaxed">
          Situated in a peaceful residential lane near Ambamata Temple. Exact street address is provided privately to confirmed guests to ensure privacy and tranquility.
        </p>
        <div class="space-y-2 text-xs pt-2">
          <div class="flex justify-between border-b border-[#DACBB7] pb-1">
            <span class="text-charcoal font-medium">Ambamata Temple</span>
            <span class="text-olive">~300 meters</span>
          </div>
          <div class="flex justify-between border-b border-[#DACBB7] pb-1">
            <span class="text-charcoal font-medium">Fateh Sagar Lake Paal</span>
            <span class="text-olive">~1.2 km (5 mins)</span>
          </div>
          <div class="flex justify-between border-b border-[#DACBB7] pb-1">
            <span class="text-charcoal font-medium">Old City / Chandpole Bridge</span>
            <span class="text-olive">~1.8 km (7 mins)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-charcoal font-medium">City Palace Complex</span>
            <span class="text-olive">~2.5 km (10 mins)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'contact.html'), contactHtml);

// 12. GENERATE PRIVACY.HTML & TERMS.HTML
console.log('Generating privacy.html & terms.html...');
const privacyHtml = `
${getHead("Privacy Policy", "Privacy and guest data confidentiality policy for Udaipur Unfolded.")}
${getHeader("", false)}
<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto space-y-6">
    <h1 class="font-serif text-4xl text-charcoal">Privacy Policy</h1>
    <p class="text-sm text-charcoal/80 leading-relaxed font-light">
      Udaipur Unfolded respects guest privacy. Any personal details, WhatsApp contact information, or arrival dates shared during enquiries are used solely for booking coordination and personalized travel advice. We do not sell or distribute personal data to third parties.
    </p>
  </div>
</main>
${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'privacy.html'), privacyHtml);

const termsHtml = `
${getHead("House Rules & Terms", "Residential guidelines and neighborhood quiet hours for Udaipur Unfolded.")}
${getHeader("", false)}
<main class="flex-grow py-14 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto space-y-6">
    <h1 class="font-serif text-4xl text-charcoal">House Rules & Terms</h1>
    <div class="space-y-4 text-sm text-charcoal/80 leading-relaxed font-light">
      <p>1. <strong>Quiet Hours:</strong> Respect neighborhood quiet hours between 10:00 PM and 7:00 AM as our property is in a peaceful residential family lane.</p>
      <p>2. <strong>Enquiries & Confirmation:</strong> All reservations are confirmed manually via WhatsApp after verifying identity and house rules agreement.</p>
      <p>3. <strong>Check-in & Check-out:</strong> Standard check-in is from 1:00 PM; check-out is by 11:00 AM.</p>
    </div>
  </div>
</main>
${getFooter()}
`;
fs.writeFileSync(path.join(OUT_DIR, 'terms.html'), termsHtml);

console.log('=== All static HTML files generated successfully in static-site/ ===');
