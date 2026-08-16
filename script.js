/**
 * Kavita Patel Portfolio Interactive Script
 */

/* ============================================================================
   PROJECT SCREENSHOTS — yahi ek jagah edit karni hai
   ============================================================================
   Har project ke screenshots `assets/images/<folder>/` me daalein, phir unke
   filenames yahan list kar dein (jis order me dikhane hain).

   Do tarike chalenge:
     'screen-1.jpg'                                  → label apne aap "Screen 1"
     { file: 'screen-1.jpg', label: 'Home & Kundli' } → apna caption

   List khaali chhodne par us project ka branded placeholder tile dikhta rahega.
   Koi bhi image format chalega (.jpg / .png / .webp) — bas naam sahi likhein.
   ========================================================================== */
const PROJECT_SCREENS = {

  quicoo: [
    { file: '1.webp', label: 'One App Does It All' },
    { file: '2.webp', label: 'Book a Ride & Destination Search' },
    { file: '3.webp', label: 'Schedule Rides in Advance' },
    { file: '4.webp', label: 'Hourly Packages by Time & Distance' },
    { file: '5.webp', label: 'Unlimited Stops' },
    { file: '6.webp', label: 'Ride Tiers & Upfront Fares' },
    { file: '7.webp', label: 'Q-Parcel — Local Delivery' },
    { file: '8.webp', label: 'Safety Centre — SOS & Trip Sharing' },
  ],

  wradio: [
    { file: '1.webp', label: 'Onboarding — Let\'s Get Started' },
    { file: '2.webp', label: 'Home — Search, Recently Played & Trends' },
    { file: '4.webp', label: 'Radio Stations & Favourites' },
    { file: '5.webp', label: 'Now Playing — Waveform Player' },
    { file: '3.webp', label: 'Videos Feed' },
    { file: '6.webp', label: 'In-App Chat' },
    { file: 'android/3.webp', label: 'Live Stream — Costa Blanca Zuid FM' },
    { file: 'android/4.webp', label: 'Songs — Coming Up Next' },
    { file: 'android/5.webp', label: 'Profile & Streaming Settings' },
  ],

  layerscart: [
    { file: '1.webp', label: 'Layers Cart — E-Commerce Marketplace' },
    { file: '8.webp', label: 'Category Browsing' },
    { file: '3.webp', label: 'Product Listing, Wishlist & Offers' },
    { file: '6.webp', label: 'Cart, Shipping & Checkout' },
    { file: '5.webp', label: 'Account Hub — Orders, Coupons, Refer & Earn' },
    { file: '7.webp', label: 'Men\'s Wear Catalogue' },
    { file: '4.webp', label: 'Profile & Account Management' },
    { file: '2.webp', label: 'Contact & Support Request' },
  ],

  hubspoke: [
    // 8–13.webp are byte-identical copies of 2–7 — only the unique set is listed.
    { file: '1.webp', label: 'Secure Login — Facility & Role Based' },
    { file: '3.webp', label: 'Patient Registration' },
    { file: '2.webp', label: 'UHID Patient Search' },
    { file: '4.webp', label: 'Lab Test Booking (OPD / IPD / ANC)' },
    { file: '5.webp', label: 'Sample Collection Tracking' },
    { file: '6.webp', label: 'View, Share & Download Reports' },
  ],

  scottish: [
    { file: '1.webp', label: 'Secure Login & Session Selection' },
    { file: '2.webp', label: 'Module Dashboard' },
    { file: '3.webp', label: 'School & Student Circulars' },
    { file: '4.webp', label: 'Student Details & Fee Ledger' },
    { file: '5.webp', label: 'Class-wise Student List' },
  ],

  radhakrishan: [
    { file: '1.webp', label: 'Welcome & Onboarding' },
    { file: '2.webp', label: 'Role-Based Login — Student, Teacher, Admin' },
    { file: '5.webp', label: 'Admin Dashboard & Analytics' },
    { file: '3.webp', label: 'Searchable Fee Reports Suite' },
    { file: '4.webp', label: 'AI Support Assistant' },
  ],

  pds: [
    { file: '1.webp', label: 'Secure Login & Session Selection' },
    { file: '2.webp', label: 'Module Dashboard — 22 Modules' },
    { file: '3.webp', label: 'Daily Collections & Activity Feed' },
    { file: '4.webp', label: 'Fee Reports Hub' },
    { file: '5.webp', label: 'Expense Management' },
  ],

  astrosane: [
    { file: 'screen-1.jpg', label: 'Services & Kundli Hub' },
    { file: 'screen-2.jpg', label: 'Astrologer Directory' },
    { file: 'screen-3.jpg', label: 'Puja Booking & Samagri' },
    { file: 'screen-4.jpg', label: 'Jaap, Katha & Path' },
    { file: 'screen-5.jpg', label: 'Live Video & Chat' },
  ],

  astroganga: [
    { file: '1.webp', label: 'User & Astrologer Login (OTP)' },
    { file: '2.webp', label: 'Astrologer Discovery & Categories' },
    { file: '3.webp', label: 'Astrologer Profile & Skills' },
    { file: '5.webp', label: 'Wallet Recharge & Secure Payment' },
    { file: '6.webp', label: 'Kundli, Puja & Chat History' },
    { file: '8.webp', label: 'Filters — Skill, Language & Price' },
    { file: '7.webp', label: 'Learn Astrology Levels' },
    { file: '4.webp', label: 'Gemstone & Rudraksh Enquiry' },
  ],

  'dhakad-employee': [
    { file: '2.webp', label: 'Field Representative Dashboard' },
    { file: '5.webp', label: 'Add New Contractor' },
    { file: '6.webp', label: 'Protsahan Gift Catalogue' },
    { file: '3.webp', label: 'Products Catalogue' },
    { file: '7.webp', label: 'Quick Links Drawer' },
    { file: '4.webp', label: 'Edit Profile' },
    { file: '8.webp', label: 'Settings & Account' },
    { file: '1.webp', label: 'Welcome Screen' },
  ],

  'dhakad-contractor': [
    { file: '11.webp', label: 'Dashboard & Points Balance' },
    { file: '9.webp', label: 'Gift Catalogue & Redemption' },
    { file: '10.webp', label: 'Points History' },
    { file: '6.webp', label: 'Login by Mobile Number' },
    { file: '7.webp', label: 'OTP Verification' },
    { file: '12.webp', label: 'Settings & Policies' },
  ],

  btown: [
    // btown-splash.jpg is a byte-identical copy of this file — listing only one.
    { file: 'btown.jpg', label: 'B Town — Connecting Businesses' },
  ],

};

// Display names used for image alt text (accessibility + SEO)
const PROJECT_NAMES = {
  'quicoo': 'Quicoo',
  'wradio': 'Wradio.be',
  'hubspoke': 'Hub & Spoke',
  'layerscart': 'LayerCart',
  'scottish': 'Scottish Convent School',
  'radhakrishan': 'Dr. Radhakrishnan School',
  'pds': 'P.D.S. School',
  'astrosane': 'AstroSane',
  'astroganga': 'AstroGanga',
  'dhakad-employee': 'Dhakad Protsahan Employee',
  'dhakad-contractor': 'Dhakad Protsahan Contractor',
  'btown': 'B Town',
};

// Work cards stay readable with ~5 screens; case-study modals show the full set.
const CARD_SCREEN_LIMIT = 5;

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     0. Inject Project Screenshots (runs before every slider is initialised)
     ========================================================================== */
  const getScreens = (slug) => (PROJECT_SCREENS[slug] || [])
    .map(entry => (typeof entry === 'string' ? { file: entry, label: '' } : entry))
    .filter(entry => entry && entry.file);

  const screenSrc = (slug, entry) => `assets/images/${slug}/${entry.file}`;
  const screenAlt = (slug, entry, i) =>
    `${PROJECT_NAMES[slug] || slug} — ${entry.label || `Screen ${i + 1}`}`;

  // Hero phone carousel: show the first screenshot of each project
  document.querySelectorAll('.hero-phone-slide[data-screens]').forEach(slide => {
    const slug = slide.dataset.screens;
    const screens = getScreens(slug);
    if (!screens.length) return;

    const img = document.createElement('img');
    img.src = screenSrc(slug, screens[0]);
    img.alt = screenAlt(slug, screens[0], 0);
    img.className = 'hero-phone-shot';
    img.loading = 'lazy';
    slide.replaceChildren(img);
  });

  // Work cards: rebuild the phone slider, screen-count badge and arrow controls
  document.querySelectorAll('.work-card-media[data-screens]').forEach(media => {
    const slug = media.dataset.screens;
    const allScreens = getScreens(slug);
    const screens = allScreens.slice(0, CARD_SCREEN_LIMIT);
    const slider = media.querySelector('.card-phone-slider');
    if (!screens.length || !slider) return;

    slider.replaceChildren(...screens.map((entry, i) => {
      const slide = document.createElement('div');
      slide.className = i === 0 ? 'card-phone-slide active' : 'card-phone-slide';

      const img = document.createElement('img');
      img.src = screenSrc(slug, entry);
      img.alt = screenAlt(slug, entry, i);
      img.className = 'card-phone-img';
      img.loading = 'lazy';

      slide.appendChild(img);
      return slide;
    }));

    if (!media.querySelector('.card-screen-badge')) {
      const badge = document.createElement('div');
      badge.className = 'card-screen-badge';
      badge.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${allScreens.length} Screen${allScreens.length > 1 ? 's' : ''}`;
      media.prepend(badge);
    }

    if (screens.length > 1 && !media.querySelector('.card-slider-controls')) {
      const controls = document.createElement('div');
      controls.className = 'card-slider-controls';
      controls.innerHTML =
        `<button class="card-slider-btn prev" aria-label="Previous screenshot"><i class="fa-solid fa-chevron-left"></i></button>` +
        `<div class="card-slider-dots">` +
        screens.map((entry, i) =>
          `<span class="card-slider-dot${i === 0 ? ' active' : ''}" aria-label="Screen ${i + 1}"></span>`
        ).join('') +
        `</div>` +
        `<button class="card-slider-btn next" aria-label="Next screenshot"><i class="fa-solid fa-chevron-right"></i></button>`;

      // Keep clicks on the controls from opening the case-study modal
      controls.addEventListener('click', (e) => e.stopPropagation());
      media.appendChild(controls);
    }
  });

  // Case-study modals: build the "Live Production Screens" gallery
  document.querySelectorAll('[data-screens-modal]').forEach(host => {
    const slug = host.dataset.screensModal;
    const screens = getScreens(slug);
    if (!screens.length) return;

    const section = document.createElement('div');
    section.className = 'modal-section';
    section.innerHTML =
      `<h4>Live Production Screens</h4>` +
      `<div class="modal-screens-preview">` +
      screens.map((entry, i) =>
        `<div class="modal-screen-item">` +
        `<div class="modal-screen-frame">` +
        `<img src="${screenSrc(slug, entry)}" alt="${screenAlt(slug, entry, i)}" class="modal-screen-img" loading="lazy">` +
        `</div>` +
        `<span class="modal-screen-label"><i class="fa-solid fa-mobile-screen"></i> ${entry.label || `Screen ${i + 1}`}</span>` +
        `</div>`
      ).join('') +
      `</div>`;

    host.replaceWith(section);
  });

  /* ==========================================================================
     1. Navigation and Header Logic
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Navbar sticky scroll background transition
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run initially
  
  // Mobile Nav Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('active');
      
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });
  }

  // Close mobile nav when clicking a link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  });

  // Active section highlights on scroll
  const sections = document.querySelectorAll('section[id]');
  const highlightActiveLink = () => {
    const scrollPosition = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        links.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${sectionId}`) {
            a.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', highlightActiveLink);

  /* ==========================================================================
     2. Hero Phone Screenshot Slideshow (Carousel)
     ========================================================================== */
  const phoneCarousel = document.querySelector('.hero-phone-carousel');
  const phoneSlides = document.querySelectorAll('.hero-phone-slide');
  const phoneDots = document.querySelectorAll('.hero-phone-dot');
  const phoneCaption = document.getElementById('phone-slide-caption');

  // Captions keyed by slide order (must match the .hero-phone-slide order in index.html)
  const slidesInfo = [
    { caption: "Quicoo — One App Does It All · Ride Booking & Delivery (quicoo.com)" },
    { caption: "Wradio.be — Live Radio, Videos & Music Streaming (Belgium & Spain)" },
    { caption: "AstroSane — Astrology Consultation, Kundli & Book Pandit Ji" },
    { caption: "AstroGanga — Astrology Consultation via Chat, Call & Video (astroganga.in)" },
    { caption: "Dhakad Protsahan — Field-Force & Contractor Loyalty Platform" }
  ];

  // Track width is derived from the slide count, so adding/removing a hero slide
  // needs no CSS change — just keep slidesInfo and the dots in index.html in sync.
  if (phoneCarousel && phoneSlides.length) {
    phoneCarousel.style.width = `${phoneSlides.length * 100}%`;
    phoneSlides.forEach(slide => { slide.style.width = `${100 / phoneSlides.length}%`; });
  }

  let currentSlideIndex = 0;
  let carouselInterval;

  const updatePhoneCarousel = (index) => {
    if (!phoneCarousel) return;

    currentSlideIndex = index;

    // Shift track: translate by index * -(100 / count)%
    const count = phoneSlides.length || slidesInfo.length;
    const percentage = index * -(100 / count);
    phoneCarousel.style.transform = `translateX(${percentage}%)`;
    
    // Update active tab dot
    phoneDots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
    
    // Update caption smoothly
    if (phoneCaption) {
      phoneCaption.style.opacity = '0';
      setTimeout(() => {
        phoneCaption.innerText = slidesInfo[index]?.caption || '';
        phoneCaption.style.opacity = '1';
      }, 150);
    }
  };
  
  const startCarouselAutoSlide = () => {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      let nextIndex = (currentSlideIndex + 1) % (phoneSlides.length || slidesInfo.length);
      updatePhoneCarousel(nextIndex);
    }, 4500);
  };
  
  if (phoneCarousel && phoneDots.length > 0) {
    // Add click listeners to dots
    phoneDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updatePhoneCarousel(index);
        startCarouselAutoSlide(); // Reset timer on click
      });
    });
    
    // Setup transition fade for caption initial styles
    if (phoneCaption) {
      phoneCaption.style.transition = 'opacity 0.2s ease-in-out';
    }
    
    // Start automated cycle
    startCarouselAutoSlide();
  }

  /* ==========================================================================
     3. Case Study Details Modals
     ========================================================================== */
  const workCards = document.querySelectorAll('.work-card');
  const modals = document.querySelectorAll('.modal-overlay');
  
  const openModal = (modalId) => {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
      
      // Focus on Close Button for accessibility
      const closeBtn = targetModal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }
  };
  
  const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scroll
  };
  
  // Attach listeners to trigger cards
  workCards.forEach(card => {
    const modalId = card.getAttribute('data-modal');
    
    card.addEventListener('click', () => openModal(modalId));
    
    // Allow keyboard activation (Enter key)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        openModal(modalId);
      }
    });
  });
  
  // Close buttons and backdrop click behavior
  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
  
  // Close open modal via Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) closeModal(activeModal);
    }
  });

  /* ==========================================================================
     4. FAQ Accordions (Smooth Height Animations)
     ========================================================================== */
  const faqCards = document.querySelectorAll('.faq-card');
  
  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    const body = card.querySelector('.faq-body');
    const icon = card.querySelector('.faq-icon i');
    
    if (header && body) {
      header.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        
        // Collapse all other active FAQs first for a clean look
        faqCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
            const otherHeader = otherCard.querySelector('.faq-header');
            const otherBody = otherCard.querySelector('.faq-body');
            const otherIcon = otherCard.querySelector('.faq-icon i');
            
            if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
            if (otherBody) otherBody.style.maxHeight = '0';
            if (otherBody) otherBody.style.opacity = '0';
            if (otherIcon) otherIcon.className = 'fa-solid fa-plus';
          }
        });
        
        // Toggle the clicked FAQ state
        if (isActive) {
          card.classList.remove('active');
          header.setAttribute('aria-expanded', 'false');
          body.style.maxHeight = '0';
          body.style.opacity = '0';
          if (icon) icon.className = 'fa-solid fa-plus';
        } else {
          card.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
          body.style.opacity = '1';
          if (icon) icon.className = 'fa-solid fa-plus'; // Rotated via CSS transition on .faq-icon
        }
      });
    }
  });

  /* ==========================================================================
     5. Contact Form Submissions (Direct Email to patel.kavitavist@gmail.com)
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('btn-submit-contact');
      if (!submitBtn) return;
      
      const btnSpan = submitBtn.querySelector('span');
      const btnIcon = submitBtn.querySelector('i');
      
      const name = document.getElementById('contact-name')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const phone = document.getElementById('contact-phone')?.value || '';
      const subject = document.getElementById('contact-subject')?.value || 'Portfolio Inquiry';
      const message = document.getElementById('contact-message')?.value || '';
      
      // Store original contents
      const originalText = btnSpan ? btnSpan.innerText : 'Send message';
      const originalIconClass = btnIcon ? btnIcon.className : 'fa-solid fa-paper-plane';
      
      // Update state to loading
      submitBtn.disabled = true;
      if (btnSpan) btnSpan.innerText = 'Sending to Kavita...';
      if (btnIcon) btnIcon.className = 'fa-solid fa-circle-notch fa-spin';
      
      // Send real email to Kavita's inbox via FormSubmit AJAX
      fetch("https://formsubmit.co/ajax/patel.kavitavist@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
          _subject: `🚀 New Project Inquiry from ${name}: ${subject}`,
          _template: "table"
        })
      })
      .then(response => response.json())
      .then(data => {
        showToast("✓ Thank you! Your inquiry was sent directly to Kavita's inbox.");
        contactForm.reset();
        
        submitBtn.disabled = false;
        if (btnSpan) btnSpan.innerText = 'Message Sent ✓';
        if (btnIcon) btnIcon.className = 'fa-solid fa-check';
        
        setTimeout(() => {
          if (btnSpan) btnSpan.innerText = originalText;
          if (btnIcon) btnIcon.className = originalIconClass;
        }, 4000);
      })
      .catch(error => {
        // Fallback mailto trigger
        showToast("✓ Opening your email client to send message to Kavita...");
        const messageInput = document.getElementById('contact-message')?.value?.trim();
        const mailBody = messageInput ? `Hi Kavita\n\n${messageInput}` : 'Hi Kavita';
        const mailSubject = subject && subject !== 'Portfolio Inquiry' ? subject : 'Hi Kavita';
        window.location.href = `mailto:patel.kavitavist@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
        
        submitBtn.disabled = false;
        if (btnSpan) btnSpan.innerText = originalText;
        if (btnIcon) btnIcon.className = originalIconClass;
      });
    });

    // WhatsApp Direct Send Button Handler
    const whatsappBtn = document.getElementById('btn-whatsapp-contact');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        const messageInput = document.getElementById('contact-message')?.value?.trim();
        const text = messageInput ? `Hi Kavita\n\n${messageInput}` : 'Hi Kavita';
        const waUrl = `https://wa.me/918319226402?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
      });
    }
  }

  /* ==========================================================================
     6. Work Card Phone Sliders (Multi-Screen Navigation)
     ========================================================================== */
  const cardMediaElements = document.querySelectorAll('.work-card-media');

  cardMediaElements.forEach(media => {
    const slides = media.querySelectorAll('.card-phone-slide');
    const dots = media.querySelectorAll('.card-slider-dot');
    const prevBtn = media.querySelector('.card-slider-btn.prev');
    const nextBtn = media.querySelector('.card-slider-btn.next');
    let currentIndex = 0;

    if (slides.length <= 1) return;

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentIndex + 1);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(i);
      });
    });
  });

  /* ==========================================================================
     7. Card Mouse Spotlight Glow Effect (Linear/Vercel Aesthetic)
     ========================================================================== */
  const glowCards = document.querySelectorAll('.work-card, .skill-category-card, .why-hire-card, .exp-card-body, .skills-spec-sheet');
  
  glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* ==========================================================================
     8. Work Category Filter Buttons
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

});

/* ==========================================================================
   8. Global 1-Click Copy & Toast Notification Utility
   ========================================================================== */
window.copyToClipboard = (text, label) => {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`✓ Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`✓ ${label}: ${text}`);
  });
};

function showToast(message) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #38bdf8;"></i> ${message}`;
  toast.className = 'show';
  setTimeout(() => {
    toast.className = '';
  }, 2500);
}


