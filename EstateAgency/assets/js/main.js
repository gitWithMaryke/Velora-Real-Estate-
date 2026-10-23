/**
* Template Name: EstateAgency
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Updated: Aug 09 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators and initialize Hero Carousel
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  const initHeroCarousel = () => {
    const heroCarousel = document.querySelector('#hero-carousel');
    if (heroCarousel && typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(heroCarousel, {
        interval: 5000,
        ride: 'carousel',
        pause: false,
        wrap: true,
        touch: true
      });
      carouselInstance.cycle();
    }
  };

  initHeroCarousel();
  window.addEventListener('load', initHeroCarousel);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      if (swiperElement.swiper) {
        try {
          swiperElement.swiper.destroy(true, true);
        } catch (e) {
          /* ignore */
        }
      }
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  const propertyDetails = {
    'westlands-amto-1bed': {
      title: '1 Bedroom Luxury Apartment in Westlands',
      location: 'Amto Residences, Westlands, Nairobi',
      type: 'Apartment in a luxury high-rise',
      status: 'For sale',
      price: 'KSh 8.4M',
      area: '68 m²',
      bedrooms: '1',
      bathrooms: '1',
      description: 'A premium 1-bedroom apartment in the heart of Westlands, Nairobi. Features modern open-plan living, designer finishes, heated rooftop swimming pool, fully equipped gym, high-speed lifts, and backup generator. Ideal for both owner-occupiers and high-yield buy-to-let investors.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'westlands-skyline-penthouse': {
      title: '3 Bedroom Panoramic Penthouse in Westlands',
      location: 'Skyline Towers, Muthithi Road, Westlands, Nairobi',
      type: 'Penthouse residence with skyline terrace',
      status: 'For sale',
      price: 'KSh 38M',
      area: '285 m²',
      bedrooms: '3',
      bathrooms: '3',
      description: 'Spectacular double-volume penthouse offering 360-degree views of the Nairobi skyline. Boasts floor-to-ceiling double-glazed windows, expansive entertainment terrace, private rooftop jacuzzi, Italian fitted kitchen, and full smart home automation.',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'fair-acres': {
      title: 'Fair Acres Country Homes Villa',
      location: 'Fair Acres Country Homes, Hekima Road, Karen, Nairobi',
      type: 'Villa in a gated residential estate',
      status: 'For sale',
      price: 'KSh 25M',
      area: '340 m²',
      bedrooms: '4',
      bathrooms: '3',
      description: 'A gracious country villa inside the Fair Acres gated estate in Karen. Surrounded by mature indigenous trees, expansive private garden, detached staff quarters, solar water heating, and dependable borehole supply.',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'fair-oaks': {
      title: 'Fair Oaks Villas',
      location: 'Fair Oaks Villas, Fair Acres Road, Karen, Nairobi',
      type: 'Villa in a gated community',
      status: 'For sale',
      price: 'KSh 15M',
      area: '180 m²',
      bedrooms: '3',
      bathrooms: '2',
      description: 'A charming 3-bedroom villa in a tranquil Karen gated community. Features hardwood flooring, open fireplace lounge, private garden patio, and 24-hour manned gate.',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'bogani-park': {
      title: 'Bogani Park Villa',
      location: 'Bogani Park, Bogani Road area, Karen, Nairobi',
      type: 'Villa in a gated residential development',
      status: 'For rent',
      price: 'KSh 650,000 per month',
      area: '260 m²',
      bedrooms: '4',
      bathrooms: '3',
      description: 'Luxurious Karen rental property set on half-acre landscaped gardens. Features all en-suite bedrooms, family TV room, covered verandah, and communal clubhouse amenities.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'amara-ridge': {
      title: 'Amara Ridge Villa',
      location: 'Amara Ridge, Forest Edge Road, Karen, Nairobi',
      type: 'Villa in a gated residential development',
      status: 'For rent',
      price: 'KSh 550,000 per month',
      area: '210 m²',
      bedrooms: '3',
      bathrooms: '2',
      description: 'Contemporary villa in prestigious Amara Ridge, steps away from forested walking paths. Features modern Scandinavian-inspired architecture, solar power, and double garage.',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'kilimani-executive-2bed': {
      title: '2 Bedroom Executive Apartment in Kilimani',
      location: 'Argwings Kodhek Road, Kilimani, Nairobi',
      type: 'Executive apartment in modern complex',
      status: 'For sale',
      price: 'KSh 12.5M',
      area: '98 m²',
      bedrooms: '2',
      bathrooms: '2',
      description: 'Stylishly appointed 2-bedroom en-suite residence in bustling Kilimani. Excellent rental demand with high Airbnb/short-let yields, fully equipped gym, backup power, and 24/7 security.',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'kilimani-urban-duplex': {
      title: '3 Bedroom Contemporary Duplex in Kilimani',
      location: 'Dennis Pritt Road, Kilimani, Nairobi',
      type: 'Duplex apartment with double-height ceiling',
      status: 'For sale',
      price: 'KSh 24M',
      area: '195 m²',
      bedrooms: '3',
      bathrooms: '3',
      description: 'Modern 3-bedroom duplex apartment on Dennis Pritt Road with double-height ceiling in the lounge, private balcony, fitted kitchen appliances, heated pool, and elevator access.',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'lavington-green-townhouse': {
      title: '4 Bedroom Elegant Townhouse in Lavington',
      location: 'Muringa Road, Lavington, Nairobi',
      type: 'Multi-level townhouse with private garden',
      status: 'For sale',
      price: 'KSh 48M',
      area: '320 m²',
      bedrooms: '4',
      bathrooms: '4',
      description: 'Exquisite 4-bedroom all en-suite townhouse in a gated court of only 6 units in Lavington. Features private garden, detached DSQ, family room, fitted kitchen, and solar heating.',
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'lavington-contemporary-villa': {
      title: '5 Bedroom Luxury Villa in Lavington',
      location: 'James Gichuru Road area, Lavington, Nairobi',
      type: 'Stand-alone luxury family villa',
      status: 'For sale',
      price: 'KSh 68M',
      area: '410 m²',
      bedrooms: '5',
      bathrooms: '5',
      description: 'Spectacular 5-bedroom luxury residence featuring expansive floor plans, manicured lawn, perimeter electric fencing, double carport, and high-end mahogany finishes throughout.',
      images: [
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'kileleshwa-sunlit-3bed': {
      title: '3 Bedroom Sunlit Apartment in Kileleshwa',
      location: 'Gatundu Road, Kileleshwa, Nairobi',
      type: 'Modern family apartment',
      status: 'For sale',
      price: 'KSh 18.5M',
      area: '155 m²',
      bedrooms: '3',
      bathrooms: '3',
      description: 'Spacious, light-filled 3-bedroom apartment on Gatundu Road, Kileleshwa. Featuring modern open-plan kitchen, large balcony overlooking greenery, backup generator, borehole, and 2 designated parking slots.',
      images: [
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'riverside-drive-residence': {
      title: 'Riverside Drive Executive 3-Bedroom Residence',
      location: 'Riverside Drive, Nairobi',
      type: 'Diplomatic riverfront residence',
      status: 'For sale',
      price: 'KSh 32M',
      area: '220 m²',
      bedrooms: '3',
      bathrooms: '3',
      description: 'Prestigious Riverside Drive address offering peaceful greenery and close proximity to Westlands. Features 3 en-suite bedrooms, high-speed elevators, residents gym and heated swimming pool.',
      images: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'runda-mimosa': {
      title: 'Runda Mimosa Home',
      location: 'Runda Mimosa, Runda, Nairobi',
      type: 'Residential home in a named estate',
      status: 'For rent',
      price: 'KSh 750,000 per month',
      area: '380 m²',
      bedrooms: '4',
      bathrooms: '4',
      description: 'Stately 4-bedroom residence in Runda Mimosa. Features half-acre manicured gardens, perimeter stone wall with razor wire, automated gate, mature fruit trees, and staff quarters.',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'runda-ambassadorial-villa': {
      title: '5 Bedroom Ambassadorial Villa in Runda',
      location: 'Runda Grove, Runda, Nairobi',
      type: 'Ambassadorial gated mansion',
      status: 'For sale',
      price: 'KSh 85M',
      area: '520 m²',
      bedrooms: '5',
      bathrooms: '5',
      description: 'Palatial diplomat-grade villa set on three-quarters of an acre in Runda. Grand entrance foyer, dual living rooms with fireplace, swimming pool, sauna, guard house, and state-of-the-art security.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'kitisuru-cascading-villa': {
      title: '5 Bedroom Valley View Villa with Pool in Kitisuru',
      location: 'Old Kitisuru, Kitisuru, Nairobi',
      type: 'Hillside architectural villa',
      status: 'For sale',
      price: 'KSh 95M',
      area: '580 m²',
      bedrooms: '5',
      bathrooms: '5',
      description: 'Architectural masterpiece nestled in the wooded hills of Old Kitisuru. Features infinity-edge swimming pool overlooking the valley, floor-to-ceiling glass walls, wine cellar, home cinema, and expansive outdoor terrace.',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'loresho-green-ridge-villa': {
      title: '4 Bedroom Garden Villa in Loresho',
      location: 'Kaptagat Road, Loresho, Nairobi',
      type: 'Country villa on private compound',
      status: 'For sale',
      price: 'KSh 45M',
      area: '310 m²',
      bedrooms: '4',
      bathrooms: '3',
      description: 'Charming 4-bedroom bungalow set on half-acre lush compound in serene Loresho. Features vaulted wooden ceilings, stone fireplace, spacious country kitchen, mature trees, and detached staff quarters.',
      images: [
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'nyali-oceanfront-villa': {
      title: 'Luxury Coastal Villa in Nyali, Mombasa',
      location: 'Links Road, Nyali, Mombasa',
      type: 'Coastal beachfront villa',
      status: 'For sale',
      price: 'KSh 52M',
      area: '390 m²',
      bedrooms: '4',
      bathrooms: '4',
      description: 'Breathtaking coastal residence in premier Nyali, moments from pristine white sandy beaches. Features private swimming pool surrounded by tropical palms, large open-air verandahs, coral stone detailing, and constant sea breezes.',
      images: [
        'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    'migaa': {
      title: 'Migaa Golf Estate Home',
      location: 'Migaa Golf Estate, Kiambu',
      type: 'Residential home in a golf estate',
      status: 'For sale',
      price: 'KSh 65M',
      area: '420 m²',
      bedrooms: '5',
      bathrooms: '3',
      description: 'Exquisite 5-bedroom home in Migaa Golf Estate, Kiambu. Overlooks the championship 18-hole golf course, with private clubhouse access, sports facilities, and serene green fairways.',
      images: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
      ]
    }
  };

  const propertyPage = document.querySelector('#property-page-title');
  if (propertyPage) {
    const requestedProperty = new URLSearchParams(window.location.search).get('property');
    const property = propertyDetails[requestedProperty] || propertyDetails['westlands-amto-1bed'];
    if (property) {
      const setText = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
      };

      setText('#property-page-title', property.title);
      setText('#property-breadcrumb', property.title);
      setText('#property-detail-heading', property.title);
      setText('#property-detail-description', property.description);
      setText('#property-location', property.location);
      setText('#property-type', property.type);
      setText('#property-status', property.status);
      setText('#property-price', property.price);
      setText('#property-area', property.area);
      setText('#property-bedrooms', property.bedrooms);
      setText('#property-bathrooms', property.bathrooms);
      document.title = `${property.title} | Velora Real Estate`;

      // Dynamically populate unique images in the Swiper Slider
      if (property.images && property.images.length > 0) {
        const swiperWrapper = document.querySelector('.portfolio-details-slider .swiper-wrapper');
        if (swiperWrapper) {
          swiperWrapper.innerHTML = property.images.map((img) => `
            <div class="swiper-slide">
              <img src="${img}" alt="${property.title}" loading="lazy">
            </div>
          `).join('');
          if (typeof initSwiper === 'function' && typeof Swiper !== 'undefined') {
            initSwiper();
          }
        }

        // Dynamically populate the Property Photos tab
        const photosTab = document.querySelector('#real-estate-2-tab1');
        if (photosTab) {
          const captions = ['Main Facade & Exterior', 'Living & Entertaining Lounge', 'Master Bedroom Suite', 'Designer Kitchen / Dining', 'Balcony / Garden Outlook'];
          photosTab.innerHTML = `
            <div class="property-photos-grid">
              ${property.images.map((img, idx) => `
                <div class="property-photo-card">
                  <img src="${img}" alt="${property.title} photo ${idx + 1}" loading="lazy">
                  <div class="photo-caption">${captions[idx] || `Property Photo ${idx + 1}`}</div>
                </div>
              `).join('')}
            </div>
          `;
        }
      }

      // Add WhatsApp direct inquiry button under Quick Summary
      const portfolioInfo = document.querySelector('.portfolio-info');
      if (portfolioInfo) {
        const existingCta = portfolioInfo.querySelector('.property-whatsapp-cta');
        if (!existingCta) {
          const waLink = document.createElement('a');
          waLink.className = 'property-whatsapp-cta';
          waLink.target = '_blank';
          waLink.rel = 'noopener noreferrer';
          const waMsg = `Hello Velora Real Estate, I am inquiring about "${property.title}" (${property.price}) located at ${property.location}. Please share availability and viewing details.`;
          waLink.href = `https://wa.me/254799902615?text=${encodeURIComponent(waMsg)}`;
          waLink.innerHTML = '<i class="bi bi-whatsapp me-2"></i> Enquire On WhatsApp';
          portfolioInfo.appendChild(waLink);
        }
      }

      const areaMap = document.querySelector('#property-area-map');
      if (areaMap) {
        areaMap.src = `https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`;
      }
    }
  }

  const propertyResultsGrid = document.querySelector('#property-results-grid');
  if (propertyResultsGrid) {
    const propertyCatalog = [
      // Westlands
      {
        id: 'westlands-amto-1bed',
        title: propertyDetails['westlands-amto-1bed'].title,
        location: 'Westlands, Nairobi',
        type: 'apartment',
        use: ['family-homes', 'investment'],
        style: 'simplex',
        status: 'For sale',
        price: propertyDetails['westlands-amto-1bed'].price,
        priceValue: 8400000,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'westlands-skyline-penthouse',
        title: propertyDetails['westlands-skyline-penthouse'].title,
        location: 'Westlands, Nairobi',
        type: 'apartment',
        use: ['family-homes', 'investment'],
        style: 'penthouses',
        status: 'For sale',
        price: propertyDetails['westlands-skyline-penthouse'].price,
        priceValue: 38000000,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
      },

      // Karen
      {
        id: 'fair-acres',
        title: propertyDetails['fair-acres'].title,
        location: 'Karen, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'triplex',
        status: 'For sale',
        price: propertyDetails['fair-acres'].price,
        priceValue: 25000000,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'fair-oaks',
        title: propertyDetails['fair-oaks'].title,
        location: 'Karen, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'duplex',
        status: 'For sale',
        price: propertyDetails['fair-oaks'].price,
        priceValue: 15000000,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'bogani-park',
        title: propertyDetails['bogani-park'].title,
        location: 'Karen, Nairobi',
        type: 'villa',
        use: ['family-homes'],
        style: 'triplex',
        status: 'For rent',
        price: propertyDetails['bogani-park'].price,
        priceValue: 650000,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'amara-ridge',
        title: propertyDetails['amara-ridge'].title,
        location: 'Karen, Nairobi',
        type: 'villa',
        use: ['family-homes'],
        style: 'simplex',
        status: 'For rent',
        price: propertyDetails['amara-ridge'].price,
        priceValue: 550000,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
      },

      // Kilimani
      {
        id: 'kilimani-executive-2bed',
        title: propertyDetails['kilimani-executive-2bed'].title,
        location: 'Kilimani, Nairobi',
        type: 'apartment',
        use: ['family-homes', 'investment'],
        style: 'simplex',
        status: 'For sale',
        price: propertyDetails['kilimani-executive-2bed'].price,
        priceValue: 12500000,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'kilimani-urban-duplex',
        title: propertyDetails['kilimani-urban-duplex'].title,
        location: 'Kilimani, Nairobi',
        type: 'apartment',
        use: ['family-homes', 'investment'],
        style: 'duplex',
        status: 'For sale',
        price: propertyDetails['kilimani-urban-duplex'].price,
        priceValue: 24000000,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
      },

      // Lavington
      {
        id: 'lavington-green-townhouse',
        title: propertyDetails['lavington-green-townhouse'].title,
        location: 'Lavington, Nairobi',
        type: 'townhouse',
        use: ['family-homes', 'investment'],
        style: 'triplex',
        status: 'For sale',
        price: propertyDetails['lavington-green-townhouse'].price,
        priceValue: 48000000,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'lavington-contemporary-villa',
        title: propertyDetails['lavington-contemporary-villa'].title,
        location: 'Lavington, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'duplex',
        status: 'For sale',
        price: propertyDetails['lavington-contemporary-villa'].price,
        priceValue: 68000000,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
      },

      // Kileleshwa
      {
        id: 'kileleshwa-sunlit-3bed',
        title: propertyDetails['kileleshwa-sunlit-3bed'].title,
        location: 'Kileleshwa, Nairobi',
        type: 'apartment',
        use: ['family-homes', 'investment'],
        style: 'simplex',
        status: 'For sale',
        price: propertyDetails['kileleshwa-sunlit-3bed'].price,
        priceValue: 18500000,
        image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
      },

      // Riverside
      {
        id: 'riverside-drive-residence',
        title: propertyDetails['riverside-drive-residence'].title,
        location: 'Riverside, Nairobi',
        type: 'apartment',
        use: ['family-homes', 'investment'],
        style: 'duplex',
        status: 'For sale',
        price: propertyDetails['riverside-drive-residence'].price,
        priceValue: 32000000,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
      },

      // Runda
      {
        id: 'runda-mimosa',
        title: propertyDetails['runda-mimosa'].title,
        location: 'Runda, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'simplex',
        status: 'For rent',
        price: propertyDetails['runda-mimosa'].price,
        priceValue: 750000,
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'runda-ambassadorial-villa',
        title: propertyDetails['runda-ambassadorial-villa'].title,
        location: 'Runda, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'triplex',
        status: 'For sale',
        price: propertyDetails['runda-ambassadorial-villa'].price,
        priceValue: 85000000,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
      },

      // Kitisuru
      {
        id: 'kitisuru-cascading-villa',
        title: propertyDetails['kitisuru-cascading-villa'].title,
        location: 'Kitisuru, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'triplex',
        status: 'For sale',
        price: propertyDetails['kitisuru-cascading-villa'].price,
        priceValue: 95000000,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      },

      // Loresho
      {
        id: 'loresho-green-ridge-villa',
        title: propertyDetails['loresho-green-ridge-villa'].title,
        location: 'Loresho, Nairobi',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'simplex',
        status: 'For sale',
        price: propertyDetails['loresho-green-ridge-villa'].price,
        priceValue: 45000000,
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
      },

      // Nyali
      {
        id: 'nyali-oceanfront-villa',
        title: propertyDetails['nyali-oceanfront-villa'].title,
        location: 'Nyali, Mombasa',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'duplex',
        status: 'For sale',
        price: propertyDetails['nyali-oceanfront-villa'].price,
        priceValue: 52000000,
        image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80'
      },

      // Kiambu / Migaa
      {
        id: 'migaa',
        title: propertyDetails.migaa.title,
        location: 'Migaa Golf Estate, Kiambu',
        type: 'villa',
        use: ['family-homes', 'investment'],
        style: 'duplex',
        status: 'For sale',
        price: propertyDetails.migaa.price,
        priceValue: 65000000,
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
      }
    ];

    const budgetRanges = {
      'below-10m': [0, 10000000],
      '10m-20m': [10000000, 20000000],
      '20m-30m': [20000000, 30000000],
      '30m-40m': [30000000, 40000000],
      '40m-50m': [40000000, 50000000],
      '50m-60m': [50000000, 60000000],
      '60m-70m': [60000000, 70000000],
      'above-70m': [70000000, Infinity]
    };
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');
    const requestedTitle = searchParams.get('title');
    const title = requestedTitle || 'Explore Velora properties';
    const locationSlugs = ['westlands', 'lavington', 'kilimani', 'kileleshwa', 'karen', 'riverside', 'runda', 'kitisuru', 'loresho', 'nyali'];
    const validSearch = (
      (category === 'location' && locationSlugs.includes(slug)) ||
      (category === 'use' && ['family-homes', 'investment'].includes(slug)) ||
      (category === 'style' && ['duplex', 'penthouses', 'simplex', 'triplex'].includes(slug)) ||
      (category === 'budget' && Object.prototype.hasOwnProperty.call(budgetRanges, slug)) ||
      (category === 'type' && ['apartment', 'townhouse', 'villa'].includes(slug)) ||
      (category === 'language' && ['fr', 'es', 'ar'].includes(slug))
    );

    const results = validSearch ? propertyCatalog.filter((property) => {
      if (category === 'location') {
        return property.location.toLowerCase().includes(slug);
      }
      if (category === 'use') {
        return property.use.includes(slug);
      }
      if (category === 'style') {
        return property.style === slug;
      }
      if (category === 'budget') {
        const [minimum, maximum] = budgetRanges[slug] || [0, Infinity];
        return property.priceValue >= minimum && property.priceValue < maximum;
      }
      if (category === 'type') {
        return property.type === slug;
      }
      return category === 'language' && property.location.includes('Nairobi');
    }) : [];

    const setText = (selector, text) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = text;
    };
    const searchDescription = category === 'location'
      ? `Explore properties in ${slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'your selected location'} through Velora Real Estate.`
      : category === 'use' && slug === 'family-homes'
        ? 'Browse family homes in Nairobi and find a place that fits the way you live.'
        : category === 'use'
          ? 'Explore Nairobi property opportunities selected for buyers and investors.'
          : category === 'budget'
            ? `Browse Velora properties in your selected budget: ${title}.`
            : category === 'language'
              ? 'Explore luxury real estate opportunities in Nairobi with Velora Real Estate.'
              : `Browse Velora properties by ${category || 'category'}: ${title}.`;

    setText('#property-search-title', title);
    setText('#property-search-breadcrumb', title);
    setText('#property-results-heading', title);
    setText('#property-search-description', searchDescription);
    setText('#property-results-count', `${results.length} ${results.length === 1 ? 'property' : 'properties'} found`);
    document.title = `${title} | Velora Real Estate`;

    results.forEach((property) => {
      const column = document.createElement('div');
      column.className = 'col-xl-4 col-md-6';

      const card = document.createElement('article');
      card.className = 'property-result-card';

      const imageLink = document.createElement('a');
      imageLink.className = 'property-result-image';
      imageLink.href = `property-single.html?property=${encodeURIComponent(property.id)}`;
      imageLink.setAttribute('aria-label', `View ${property.title}`);

      const image = document.createElement('img');
      image.src = property.image;
      image.alt = property.title;
      image.loading = 'lazy';
      imageLink.appendChild(image);

      const body = document.createElement('div');
      body.className = 'property-result-body';

      const status = document.createElement('span');
      status.className = 'property-result-status';
      status.textContent = property.status;

      const heading = document.createElement('h3');
      const titleLink = document.createElement('a');
      titleLink.href = imageLink.href;
      titleLink.textContent = property.title;
      heading.appendChild(titleLink);

      const location = document.createElement('p');
      location.className = 'property-result-location';
      const locationIcon = document.createElement('i');
      locationIcon.className = 'bi bi-geo-alt';
      locationIcon.setAttribute('aria-hidden', 'true');
      location.appendChild(locationIcon);
      location.appendChild(document.createTextNode(' '));
      location.appendChild(document.createTextNode(property.location));

      const footer = document.createElement('div');
      footer.className = 'property-result-footer';
      const price = document.createElement('strong');
      price.textContent = property.price;
      const details = document.createElement('a');
      details.href = imageLink.href;
      details.textContent = 'View details';
      details.setAttribute('aria-label', `View details for ${property.title}`);
      footer.append(price, details);

      body.append(status, heading, location, footer);
      card.append(imageLink, body);
      column.appendChild(card);
      propertyResultsGrid.appendChild(column);
    });

    const emptyState = document.querySelector('#property-results-empty');
    if (emptyState) emptyState.hidden = results.length > 0;
  }

  const serviceDetails = {
    sales: {
      title: 'Property Sales',
      intro: 'Local guidance for buying and selling homes and investment properties across Kenya.',
      heading: 'Buy or sell property with local guidance',
      description: 'Whether you are searching for a home or preparing to sell, we help you understand the process and explore suitable options across Kenya.',
      benefits: [
        'Explore homes and investment properties in locations that suit your needs.',
        'Get practical guidance through viewings, offers, and negotiations.',
        'For a purchase, consider independent legal and title due diligence before committing.'
      ],
      local: 'Explore property opportunities in Nairobi neighborhoods such as Karen, Westlands, and Parklands, as well as other areas across Kenya.',
      nextStep: 'Share your preferred location, budget, and property requirements with our team to get started.'
    },
    rentals: {
      title: 'Property Rentals',
      intro: 'Find a rental home or commercial space with support through the search and leasing process.',
      heading: 'Find a place to rent in Kenya',
      description: 'We help renters explore available homes and commercial spaces, arrange viewings, and understand the key terms to discuss before signing a lease.',
      benefits: [
        'Shortlist rental options by location, property type, and budget.',
        'Arrange viewings and ask questions about rent, deposits, and lease terms.',
        'Review the agreed terms carefully before signing or making payments.'
      ],
      local: 'Search in Nairobi areas including Karen, Westlands, and Parklands, or tell us which town or neighborhood works for you.',
      nextStep: 'Let us know your move-in timeframe and requirements so we can help narrow your search.'
    },
    management: {
      title: 'Property Management',
      intro: 'Practical support for landlords managing residential and commercial property in Kenya.',
      heading: 'Support for property owners and landlords',
      description: 'Property management can take time and coordination. We assist owners with tenant communication, rent administration, and arranging property maintenance.',
      benefits: [
        'Coordinate tenant enquiries and day-to-day communication.',
        'Support rent administration and tenancy records.',
        'Help arrange maintenance and keep owners informed.'
      ],
      local: 'Discuss your property and management needs with our team, whether it is in Nairobi or another location in Kenya.',
      nextStep: 'Contact us with the property location and type to discuss the support you need.'
    },
    valuation: {
      title: 'Property Valuation',
      intro: 'Get market-informed pricing guidance for a property sale, rental, or investment in Kenya.',
      heading: 'Understand your property’s market position',
      description: 'Location, property condition, comparable listings, and current demand can all influence a property asking price. We help you consider these factors when planning a sale or rental.',
      benefits: [
        'Discuss the property type, location, condition, and intended use.',
        'Consider comparable properties and local market context.',
        'For formal valuation needs, consult a registered valuation professional.'
      ],
      local: 'Market context varies between neighborhoods and towns. Share the property location so guidance can be relevant to its area.',
      nextStep: 'Contact us with the property details and whether you are considering a sale, rental, or purchase.'
    },
    investment: {
      title: 'Investment Guidance',
      intro: 'Explore Kenyan property locations and opportunities with a clearer view of your goals and budget.',
      heading: 'Plan your next property investment',
      description: 'We help you compare property options against your investment goals, preferred locations, budget, and intended time horizon.',
      benefits: [
        'Clarify your objectives, budget, and preferred property type.',
        'Compare locations and available property options.',
        'Carry out independent financial, legal, and property due diligence before investing.'
      ],
      local: 'Explore established and growing property markets in Nairobi and other parts of Kenya based on your investment priorities.',
      nextStep: 'Tell us what you hope to achieve and we can help you identify questions to consider as you explore options.'
    },
    relocation: {
      title: 'Relocation Support',
      intro: 'Find a home and neighborhood in Kenya that fit your household, commute, and budget.',
      heading: 'Make your move within Kenya easier',
      description: 'Whether you are moving to Nairobi or relocating to another town, we help you focus your home search around the practical details that matter to you.',
      benefits: [
        'Shortlist areas based on your work, school, transport, and lifestyle needs.',
        'Explore suitable rental or purchase options within your budget.',
        'Arrange viewings and get help understanding the next steps.'
      ],
      local: 'We can help you explore Nairobi neighborhoods such as Karen, Westlands, and Parklands, or discuss options in other Kenyan towns.',
      nextStep: 'Share where you are moving from, your target area, and when you need to move.'
    },
    search: {
      title: 'Curated Property Search',
      intro: 'Personalized property search and private viewing itineraries across Nairobi and Kenya.',
      heading: 'Find your ideal home or investment property',
      description: 'We clarify your lifestyle goals, space needs, and budget to present verified on- and off-market opportunities.',
      benefits: [
        'Access to prime on- and off-market residential listings in Westlands, Karen, Kilimani, and Runda.',
        'Private viewing itineraries scheduled around your convenience.',
        'Independent price guidance and neighbourhood lifestyle insights.'
      ],
      local: 'Focusing on prime Nairobi suburbs including Westlands, Karen, Kilimani, Lavington, Runda, and Mombasa coastal properties.',
      nextStep: 'Share your preferred location, budget, and requirements with our team to start your search.'
    },
    'due-diligence': {
      title: 'Title & Legal Due Diligence',
      intro: 'Protect your capital with rigorous title verification and transaction safety.',
      heading: 'Safe, verified property acquisition in Kenya',
      description: 'We guide you through land registry official searches, planning consents, beacon confirmation, and conveyancing legal coordination.',
      benefits: [
        'Official Ministry of Lands registry verification.',
        'Survey beacon inspection and planning compliance checks.',
        'Coordination with accredited conveyancing legal counsel.'
      ],
      local: 'Applicable for properties across Nairobi, Kiambu, Machakos, and the Kenyan coast.',
      nextStep: 'Contact us with the property title or parcel details to initiate the due diligence check.'
    },
    diaspora: {
      title: 'Diaspora Purchase Concierge',
      intro: 'End-to-end representation for overseas Kenyans and foreign investors.',
      heading: 'Invest with confidence from anywhere in the world',
      description: 'We conduct live video inspections, verify legal paperwork, facilitate diaspora bank mortgages, and guide escrow-secured closings.',
      benefits: [
        'Live 4K remote video walkthroughs and neighbourhood tours.',
        'Diaspora mortgage brokerage with leading Kenyan commercial banks.',
        'Power of attorney facilitation and secure escrow closings.'
      ],
      local: 'Serving clients in the UK, USA, Canada, Europe, Middle East, Australia, and across the globe.',
      nextStep: 'Connect directly with our Diaspora Desk on WhatsApp or schedule a video consultation.'
    }
  };

  const servicePage = document.querySelector('#service-page-title');
  if (servicePage) {
    const requestedService = new URLSearchParams(window.location.search).get('service');
    const service = serviceDetails[requestedService] || serviceDetails.sales;
    const setText = (selector, text) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = text;
    };

    setText('#service-page-title', service.title);
    setText('#service-breadcrumb', service.title);
    setText('#service-page-intro', service.intro);
    setText('#service-detail-heading', service.heading);
    setText('#service-detail-description', service.description);
    setText('#service-detail-local', service.local);
    setText('#service-detail-next-step', service.nextStep);
    document.title = `${service.title} | Velora Real Estate`;

    const benefitsList = document.querySelector('#service-detail-benefits');
    if (benefitsList) {
      benefitsList.replaceChildren(...service.benefits.map((benefit) => {
        const item = document.createElement('li');
        const icon = document.createElement('i');
        const text = document.createElement('span');
        icon.className = 'bi bi-check-circle';
        text.textContent = benefit;
        item.append(icon, text);
        return item;
      }));
    }

    document.querySelectorAll('[data-service-link]').forEach((link) => {
      const isActive = link.dataset.serviceLink === (requestedService || 'sales');
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  const contactRequestForm = document.querySelector('#contact-request-form');
  if (contactRequestForm) {
    const successAlert = document.querySelector('#form-success-alert');
    const whatsappBtn = document.querySelector('#btn-whatsapp-enquiry');
    const whatsappLink = document.querySelector('#contact-request-whatsapp');
    const requestModal = document.querySelector('#contact-request-modal');

    const buildWhatsAppMessage = () => {
      const formData = new FormData(contactRequestForm);
      const fullName = [formData.get('firstName'), formData.get('lastName')].filter(Boolean).join(' ') || formData.get('name') || 'Client';
      const phone = formData.get('phone') || '';
      const email = formData.get('email') || '';
      const use = formData.get('use') || formData.get('requestType') || 'Property Enquiry';
      const budget = formData.get('budget') || '';
      const date = formData.get('date') || '';
      const msg = formData.get('message') || '';

      return [
        'Velora Real Estate Property Enquiry',
        `• Name: ${fullName}`,
        `• Phone: ${phone}`,
        email ? `• Email: ${email}` : '',
        `• Property Use: ${use}`,
        budget ? `• Budget: ${budget}` : '',
        date ? `• Preferred Viewing Date: ${date}` : '',
        `• Message: ${msg}`
      ].filter(Boolean).join('\n');
    };

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        if (!contactRequestForm.reportValidity()) return;
        const text = buildWhatsAppMessage();
        window.open(`https://wa.me/254799902615?text=${encodeURIComponent(text)}`, '_blank');
      });
    }

    contactRequestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactRequestForm.reportValidity()) return;

      const text = buildWhatsAppMessage();
      if (whatsappLink) {
        whatsappLink.href = `https://wa.me/254799902615?text=${encodeURIComponent(text)}`;
      }

      if (successAlert) {
        successAlert.classList.remove('d-none');
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      if (requestModal && window.bootstrap && typeof window.bootstrap.Modal !== 'undefined') {
        window.bootstrap.Modal.getOrCreateInstance(requestModal).show();
      }
    });
  }

})();