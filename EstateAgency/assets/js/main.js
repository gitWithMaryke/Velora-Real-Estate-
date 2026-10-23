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
   * Auto generate the carousel indicators
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

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
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
    'fair-acres': {
      title: 'Fair Acres Family Home',
      location: 'Fair Acres, Karen, Nairobi',
      type: 'Detached family home',
      status: 'For sale',
      price: 'KSh 25M',
      area: '340 m²',
      bedrooms: '4',
      bathrooms: '3',
      description: 'A spacious family home in the Fair Acres area of Karen, Nairobi. Contact our team to confirm the property details, current availability, and viewing arrangements.'
    },
    parklands: {
      title: 'Parklands Apartment',
      location: 'Parklands, Nairobi',
      type: 'Apartment',
      status: 'For sale',
      price: 'KSh 15M',
      area: '180 m²',
      bedrooms: '3',
      bathrooms: '2',
      description: 'An apartment listing in Parklands, Nairobi. Contact our team to confirm the property details, current availability, and viewing arrangements.'
    },
    westlands: {
      title: 'Westlands Townhouse',
      location: 'Westlands, Nairobi',
      type: 'Townhouse',
      status: 'For rent',
      price: 'KSh 650,000 per month',
      area: '260 m²',
      bedrooms: '4',
      bathrooms: '2',
      description: 'A townhouse listing in Westlands, Nairobi. Contact our team to confirm the property details, current availability, and viewing arrangements.'
    },
    kilimani: {
      title: 'Kilimani Apartment',
      location: 'Kilimani, Nairobi',
      type: 'Apartment',
      status: 'For rent',
      price: 'KSh 550,000 per month',
      area: '145 m²',
      bedrooms: '3',
      bathrooms: '2',
      description: 'A rental apartment listing in Kilimani, Nairobi. Contact our team to confirm the property details, current availability, lease terms, and viewing arrangements.'
    },
    nyali: {
      title: 'Nyali Coastal Apartment',
      location: 'Nyali, Mombasa',
      type: 'Apartment',
      status: 'For rent',
      price: 'KSh 750,000 per month',
      area: '125 m²',
      bedrooms: '2',
      bathrooms: '2',
      description: 'A coastal rental apartment listing in Nyali, Mombasa. Contact our team to confirm the property details, current availability, lease terms, and viewing arrangements.'
    },
    runda: {
      title: 'Runda Standalone Home',
      location: 'Runda, Nairobi',
      type: 'Standalone home',
      status: 'For sale',
      price: 'KSh 65M',
      area: '420 m²',
      bedrooms: '5',
      bathrooms: '3',
      description: 'A standalone home listing in Runda, Nairobi. Contact our team to confirm the property details, current availability, and viewing arrangements.'
    }
  };

  const propertyPage = document.querySelector('#property-page-title');
  if (propertyPage) {
    const requestedProperty = new URLSearchParams(window.location.search).get('property');
    const property = propertyDetails[requestedProperty] || null;
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

      const areaMap = document.querySelector('#property-area-map');
      if (areaMap) {
        areaMap.src = `https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`;
      }
    }
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
    const requestType = contactRequestForm.querySelector('[name="requestType"]');
    const appointmentDate = contactRequestForm.querySelector('[name="date"]');
    const appointmentTime = contactRequestForm.querySelector('[name="time"]');
    const whatsappLink = document.querySelector('#contact-request-whatsapp');
    const requestModal = document.querySelector('#contact-request-modal');

    const updateAppointmentRequirements = () => {
      const isAppointment = requestType.value === 'Book an appointment or viewing';
      appointmentDate.required = isAppointment;
      appointmentTime.required = isAppointment;
    };

    const localToday = new Date();
    localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
    appointmentDate.min = localToday.toISOString().slice(0, 10);
    requestType.addEventListener('change', updateAppointmentRequirements);
    updateAppointmentRequirements();

    contactRequestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactRequestForm.reportValidity()) return;

      const formData = new FormData(contactRequestForm);
      const message = [
        'Velora Real Estate enquiry',
        `Name: ${formData.get('name')}`,
        `Phone: ${formData.get('phone')}`,
        formData.get('email') ? `Email: ${formData.get('email')}` : '',
        `Request: ${formData.get('requestType')}`,
        formData.get('date') ? `Preferred date: ${formData.get('date')}` : '',
        formData.get('time') ? `Preferred time: ${formData.get('time')}` : '',
        `Message: ${formData.get('message')}`
      ].filter(Boolean).join('\n');

      whatsappLink.href = `https://wa.me/254799902615?text=${encodeURIComponent(message)}`;
      bootstrap.Modal.getOrCreateInstance(requestModal).show();
    });
  }

})();