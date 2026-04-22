import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
  // Hero section animations
  gsap.from('.hero-title', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
  });

  gsap.from('.hero-cta', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
  });

  // Scroll-triggered animations for sections
  gsap.utils.toArray('.section-fade-in').forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Skill bars animation
  gsap.utils.toArray('.skill-bar').forEach((bar) => {
    gsap.from(bar, {
      width: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project cards hover effect
  gsap.utils.toArray('.project-card').forEach((card) => {
    const image = card.querySelector('.project-image');
    const overlay = card.querySelector('.project-overlay');

    card.addEventListener('mouseenter', () => {
      gsap.to(image, { scale: 1.1, duration: 0.3 });
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(image, { scale: 1, duration: 0.3 });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
    });
  });

  // Floating elements animation
  gsap.to('.floating-element', {
    y: '+=20',
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });
};

export const animateOnScroll = (element, animation) => {
  gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};