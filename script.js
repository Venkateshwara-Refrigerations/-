/**
 * ============================================================================
 * VENKATESHWARA REFRIGERATIONS AND AIR CONDITIONER SERVICE CENTER
 * Animation Controller: script.js
 * Matches User Reference Layout & Sequential Top-Down Descent Timing
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // DOM Elements
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');
  const sacredSymbols = document.getElementById('sacred-symbols');
  const swamiWrapper = document.getElementById('swami-wrapper');
  const swamiHalo = document.getElementById('swami-halo');
  const titleSection = document.getElementById('title-section');
  const loaderWrap = document.getElementById('loader-wrap');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-percentage');
  const statusText = document.getElementById('status-text');
  const btnReplay = document.getElementById('btn-replay');

  // Progressive status messages reflecting spirituality + AC/refrigeration precision
  const statusUpdates = [
    { at: 10, text: "Invoking divine blessings..." },
    { at: 35, text: "Preparing cooling diagnostics..." },
    { at: 65, text: "Calibrating refrigeration precision..." },
    { at: 88, text: "Setting optimal cooling comfort..." },
    { at: 100, text: "Welcome to Venkateshwara Refrigerations!" }
  ];

  /* --------------------------------------------------------------------------
     1. AMBIENT SPARKLES CANVAS (Warm Gold & Divine Dust)
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('ambient-particles');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];
  let animFrameId;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  if (canvas && ctx) {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedY = -(Math.random() * 0.35 + 0.12); // Float gently upward
        this.speedX = (Math.random() - 0.5) * 0.22;
        this.alpha = Math.random() * 0.55 + 0.15;
        
        // Colors: Golden dust, warm amber, and soft frost cyan
        const roll = Math.random();
        if (roll > 0.6) {
          this.color = `rgba(212, 165, 32, ${this.alpha})`;       // Gold
          this.shadow = 'rgba(212, 165, 32, 0.6)';
        } else if (roll > 0.25) {
          this.color = `rgba(245, 201, 83, ${this.alpha * 0.8})`;  // Soft warm amber
          this.shadow = 'rgba(245, 201, 83, 0.5)';
        } else {
          this.color = `rgba(82, 181, 216, ${this.alpha * 0.65})`; // Cooling cyan
          this.shadow = 'rgba(82, 181, 216, 0.4)';
        }
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.shadow;
        ctx.shadowBlur = 5;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(window.innerWidth / 18, 50);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }
    initParticles();

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animFrameId = requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* --------------------------------------------------------------------------
     2. MASTER TIMELINE SEQUENCE (Self-Contained & Smooth Offline Execution)
     Requirement:
     - Image descends SLOWLY from top of screen
     - Once image settles in the center, title appears underneath
     - Progress bar fills smoothly and preloader fades out
     -------------------------------------------------------------------------- */
  let preloaderInterval = null;
  let preloaderSafetyTimer = null;

  function runPreloaderAnimation() {
    if (preloaderInterval) clearInterval(preloaderInterval);
    if (preloaderSafetyTimer) clearTimeout(preloaderSafetyTimer);

    // Reset view states
    if (preloader) {
      preloader.classList.remove('loaded');
      preloader.style.opacity = '1';
      preloader.style.visibility = 'visible';
      preloader.style.pointerEvents = 'auto';
      preloader.style.transform = 'scale(1)';
    }
    if (mainContent) {
      mainContent.classList.remove('visible');
    }
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0%';
    if (statusText) statusText.textContent = 'Invoking divine blessings...';

    // Reset initial element transforms & opacities
    if (sacredSymbols) {
      sacredSymbols.style.transition = 'none';
      sacredSymbols.style.opacity = '0';
      sacredSymbols.style.transform = 'translateY(-22px)';
    }
    if (swamiWrapper) {
      swamiWrapper.style.transition = 'none';
      swamiWrapper.style.opacity = '0';
      swamiWrapper.style.transform = 'translateY(-110vh)';
    }
    if (swamiHalo) {
      swamiHalo.style.transition = 'none';
      swamiHalo.style.opacity = '0';
      swamiHalo.style.transform = 'translate(-50%, -50%) scale(0.35)';
    }
    if (titleSection) {
      titleSection.style.transition = 'none';
      titleSection.style.opacity = '0';
      titleSection.style.transform = 'translateY(32px)';
    }
    if (loaderWrap) {
      loaderWrap.style.transition = 'none';
      loaderWrap.style.opacity = '0';
      loaderWrap.style.transform = 'translateY(22px)';
    }

    // Force browser DOM reflow to guarantee CSS transitions take effect cleanly
    if (swamiWrapper) void swamiWrapper.offsetHeight;

    // STEP 1: Sacred Namam/Chakra/Shankha symbols fade in at top
    setTimeout(() => {
      if (sacredSymbols) {
        sacredSymbols.style.transition = 'opacity 0.85s ease, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)';
        sacredSymbols.style.opacity = '1';
        sacredSymbols.style.transform = 'translateY(0)';
      }
    }, 60);

    // STEP 2: Sri Venkateshwara Swami image descends SLOWLY from top of screen into center
    setTimeout(() => {
      if (swamiWrapper) {
        swamiWrapper.style.transition = 'transform 1.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.4s ease';
        swamiWrapper.style.transform = 'translateY(0)';
        swamiWrapper.style.opacity = '1';
      }
      if (swamiHalo) {
        swamiHalo.style.transition = 'opacity 1.1s ease 0.75s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.75s';
        swamiHalo.style.opacity = '1';
        swamiHalo.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    }, 380);

    // STEP 3: TITLE REVEAL & CAPSULE LOADER — triggers AFTER deity settles
    setTimeout(() => {
      if (titleSection) {
        titleSection.style.transition = 'transform 1.05s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.05s ease';
        titleSection.style.transform = 'translateY(0)';
        titleSection.style.opacity = '1';
      }
      if (loaderWrap) {
        loaderWrap.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease';
        loaderWrap.style.transform = 'translateY(0)';
        loaderWrap.style.opacity = '1';
      }

      // STEP 4: Smooth capsule progress bar fill (0% -> 100%)
      let progress = 0;
      preloaderInterval = setInterval(() => {
        progress += 2;
        if (progress > 100) progress = 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${progress}%`;

        // Update progressive spiritual & technical status text
        const currentStatus = statusUpdates.slice().reverse().find(s => progress >= s.at);
        if (currentStatus && statusText) {
          statusText.textContent = currentStatus.text;
        }

        // STEP 5: Loading finished — smoothly fade out preloader & reveal website
        if (progress >= 100) {
          clearInterval(preloaderInterval);
          setTimeout(() => {
            if (preloader) {
              preloader.style.transition = 'opacity 0.7s cubic-bezier(0.7, 0, 0.3, 1), transform 0.7s cubic-bezier(0.7, 0, 0.3, 1)';
              preloader.style.opacity = '0';
              preloader.style.transform = 'scale(1.02)';
              setTimeout(() => {
                preloader.classList.add('loaded');
                preloader.style.display = 'none';
                if (mainContent) mainContent.classList.add('visible');
                document.body.style.overflowY = 'auto';
              }, 700);
            }
          }, 350);
        }
      }, 36);
    }, 2100);

    // Safety fallback: ensure preloader never hangs under any circumstance
    preloaderSafetyTimer = setTimeout(() => {
      dismissPreloaderImmediately();
    }, 5000);
  }

  // Instant dismissal helper: lets users jump straight to content and scroll immediately
  const btnSkipPreloader = document.getElementById('btn-skip-preloader');

  function dismissPreloaderImmediately() {
    if (preloaderInterval) clearInterval(preloaderInterval);
    if (preloaderSafetyTimer) clearTimeout(preloaderSafetyTimer);
    if (preloader) {
      preloader.classList.add('loaded');
      preloader.style.display = 'none';
    }
    if (mainContent) {
      mainContent.classList.add('visible');
    }
    document.body.style.overflowY = 'auto';
  }

  if (btnSkipPreloader) {
    btnSkipPreloader.addEventListener('click', dismissPreloaderImmediately);
  }

  // Allow scrolling or pressing down/escape to instantly reveal website
  if (preloader) {
    preloader.addEventListener('wheel', (e) => {
      if (e.deltaY > 15) dismissPreloaderImmediately();
    }, { passive: true });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'ArrowDown' || e.key === 'PageDown') {
      dismissPreloaderImmediately();
    }
  });

  // Trigger initial animation
  runPreloaderAnimation();

  // Replay Button Event Listener
  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      if (preloader) preloader.style.display = 'flex';
      runPreloaderAnimation();
    });
  }

  /* --------------------------------------------------------------------------
     3. HEADER NAVIGATION ACTIVE LINK SPY & SMOOTH SCROLL + SCROLLED ELEVATION
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  const siteHeader = document.querySelector('.home-header');

  window.addEventListener('scroll', () => {
    // Dynamic Header Scrolled Elevation
    if (siteHeader) {
      if (window.scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     4. BILINGUAL LANGUAGE TOGGLE (ENGLISH <-> TELUGU)
     -------------------------------------------------------------------------- */
  const btnLangEn = document.getElementById('btn-lang-en');
  const btnLangTe = document.getElementById('btn-lang-te');

  function setLanguage(lang) {
    if (lang === 'te') {
      document.body.classList.remove('lang-en');
      document.body.classList.add('lang-te');
      if (btnLangTe) btnLangTe.classList.add('active');
      if (btnLangEn) btnLangEn.classList.remove('active');
      localStorage.setItem('venkateshwara_lang', 'te');
    } else {
      document.body.classList.remove('lang-te');
      document.body.classList.add('lang-en');
      if (btnLangEn) btnLangEn.classList.add('active');
      if (btnLangTe) btnLangTe.classList.remove('active');
      localStorage.setItem('venkateshwara_lang', 'en');
    }
  }

  // Load saved language preference or default to English
  const savedLang = localStorage.getItem('venkateshwara_lang') || 'en';
  setLanguage(savedLang);

  if (btnLangEn) {
    btnLangEn.addEventListener('click', () => setLanguage('en'));
  }
  if (btnLangTe) {
    btnLangTe.addEventListener('click', () => setLanguage('te'));
  }

  /* --------------------------------------------------------------------------
     5. APPLIANCE MEDIA PLAYER CONTROLLER (Videos in images/ folder)
     -------------------------------------------------------------------------- */
  const videoCollection = [
    {
      src: 'images/work-video-1.mp4',
      poster: 'images/poster-work-1.jpg'
    },
    {
      src: 'images/work-video-2.mp4',
      poster: 'images/poster-work-2.jpg'
    },
    {
      src: 'images/work-video-3.mp4',
      poster: 'images/poster-work-3.jpg'
    }
  ];

  let activeVideoIndex = 0;
  const playerVideo = document.getElementById('appliance-video-player');
  const counterText = document.getElementById('counter-text');
  const btnMediaNext = document.getElementById('btn-media-next');
  const btnMediaPrev = document.getElementById('btn-media-prev');

  function switchVideo(index, playNow = true) {
    if (!playerVideo) return;
    activeVideoIndex = (index + videoCollection.length) % videoCollection.length;
    const v = videoCollection[activeVideoIndex];

    playerVideo.pause();
    playerVideo.src = v.src;
    playerVideo.poster = v.poster;
    playerVideo.load();
    if (playNow) {
      playerVideo.play().catch(() => {});
    }

    if (counterText) {
      counterText.textContent = `Video ${activeVideoIndex + 1} of ${videoCollection.length}`;
    }
  }

  if (btnMediaNext) {
    btnMediaNext.addEventListener('click', () => {
      switchVideo(activeVideoIndex + 1, true);
    });
  }

  if (btnMediaPrev) {
    btnMediaPrev.addEventListener('click', () => {
      switchVideo(activeVideoIndex - 1, true);
    });
  }

  if (playerVideo) {
    playerVideo.addEventListener('ended', () => {
      switchVideo(activeVideoIndex + 1, true);
    });
  }

  /* --------------------------------------------------------------------------
     6. BOOKING FORM CONTROLLER (Name, Mobile, Appliance Dropdown -> WhatsApp + Email)
     -------------------------------------------------------------------------- */
  const bookingForm = document.getElementById('service-booking-form');
  const bookingStatus = document.getElementById('booking-status-msg');
  const bookSubmitBtn = document.getElementById('btn-book-service');

  function showBookingStatus(msg, type) {
    if (!bookingStatus) return;
    bookingStatus.innerHTML = msg;
    bookingStatus.className = `booking-status-msg ${type}`;
    bookingStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      const nameInput = document.getElementById('cust-name');
      const mobileInput = document.getElementById('cust-mobile');
      const applianceInput = document.getElementById('cust-appliance');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const mobileVal = mobileInput ? mobileInput.value.trim() : '';
      const applianceVal = applianceInput ? applianceInput.value : '';

      const isTelugu = document.body.classList.contains('lang-te');

      // Validation
      if (!nameVal) {
        e.preventDefault();
        showBookingStatus(
          isTelugu ? 'దయచేసి మీ పేరు నమోదు చేయండి.' : 'Please enter your name.',
          'error'
        );
        if (nameInput) nameInput.focus();
        return;
      }

      const mobileDigits = mobileVal.replace(/\D/g, '');
      if (mobileDigits.length !== 10) {
        e.preventDefault();
        showBookingStatus(
          isTelugu ? 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.' : 'Please enter a valid 10-digit mobile number.',
          'error'
        );
        if (mobileInput) mobileInput.focus();
        return;
      }

      if (!applianceVal) {
        e.preventDefault();
        showBookingStatus(
          isTelugu ? 'దయచేసి రిపేర్ చేయాల్సిన అప్లయన్స్‌ని ఎంచుకోండి.' : 'Please select an appliance from the dropdown.',
          'error'
        );
        if (applianceInput) applianceInput.focus();
        return;
      }

      // Valid: Native POST silently submits into hidden iframe (zero intrusive tabs/popups)
      if (bookSubmitBtn) {
        bookSubmitBtn.disabled = true;
        bookSubmitBtn.innerHTML = isTelugu 
          ? '<span class="btn-icon">⏳</span><span>బుకింగ్ నమోదవుతోంది...</span>'
          : '<span class="btn-icon">⏳</span><span>Booking in progress...</span>';
      }

      showBookingStatus(
        isTelugu 
          ? `✅ మీ బుకింగ్ వివరాలు నమోదయ్యాయి! తక్షణ నిర్ధారణ కోసం వెంకటేష్ రెడ్డి గారి వాట్సాప్ ఓపెన్ అవుతోంది...`
          : `✅ Booking received! Connecting directly with Venkatesh Reddy on WhatsApp for instant confirmation...`,
        'success'
      );

      // Prepare WhatsApp message
      const textMsg = `Hi Venkatesh garu, I want to book a doorstep service in Chennur:
*Customer Name:* ${nameVal}
*Mobile Number:* ${mobileDigits}
*Appliance:* ${applianceVal}`;

      const waUrl = `https://wa.me/919014483921?text=${encodeURIComponent(textMsg)}`;

      // Open WhatsApp automatically
      setTimeout(() => {
        window.open(waUrl, '_blank');
        if (bookSubmitBtn) {
          bookSubmitBtn.disabled = false;
          bookSubmitBtn.innerHTML = `
            <span class="btn-icon">⚡</span>
            <span class="lang-en">Book Service</span>
            <span class="lang-te">సర్వీస్ బుక్ చేయండి</span>
          `;
        }
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     7. CORE SERVICES "BOOK SERVICE" BUTTONS -> SCROLL & AUTO-SELECT APPLIANCE
     -------------------------------------------------------------------------- */
  const serviceBookButtons = document.querySelectorAll('.btn-service-book');
  const applianceSelect = document.getElementById('cust-appliance');
  const nameInputField = document.getElementById('cust-name');

  serviceBookButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceTarget = btn.getAttribute('data-service');
      const contactSec = document.getElementById('contact');

      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }

      if (serviceTarget && applianceSelect) {
        for (let i = 0; i < applianceSelect.options.length; i++) {
          if (applianceSelect.options[i].value.toLowerCase().includes(serviceTarget.toLowerCase())) {
            applianceSelect.selectedIndex = i;
            break;
          }
        }
      }

      setTimeout(() => {
        if (nameInputField) nameInputField.focus();
      }, 650);
    });
  });

  /* --------------------------------------------------------------------------
     8. HERO & ABOUT "BOOK SERVICE" BUTTONS -> SMOOTH SCROLL TO FORM & FOCUS
     -------------------------------------------------------------------------- */
  const directBookButtons = document.querySelectorAll('.btn-hero-book, .btn-about-book');
  directBookButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        const nameField = document.getElementById('cust-name');
        if (nameField) nameField.focus();
      }, 650);
    });
  });

  /* --------------------------------------------------------------------------
     9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

});
