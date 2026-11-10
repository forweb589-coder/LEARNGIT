// ========================================
// BIRUK TAMRAT — MULTILINGUAL PORTFOLIO
// English | Amharic | Arabic
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. MOBILE NAVIGATION
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("open");
      });
    });
  }

  // 2. TRANSLATIONS
  const translations = {
    en: {
      home: "Home", about: "About", skills: "Skills", projects: "Projects",
      contact: "Contact", navContact: "Contact Me", status: "CREATIVE DESIGNER",
      intro: "HELLO, I'M", imA: "I'm a", heroDescription: "A creative high school student passionate about technology, web development and digital design. I love transforming ideas into beautiful digital experiences.",
      exploreWork: "Explore My Work ↗", contactMe: "Contact Me", viewRepository: "VIEW REPOSITORY ↗", exploreMore: "EXPLORE MORE ↗", github: "GITHUB ↗", emailLabel: "EMAIL",
      digitalWorld: "MY DIGITAL WORLD", creativeMind: "CREATIVE MIND.", buildingFuture: "BUILDING THE FUTURE WITH CODE.",
      aboutLabel: "01 / ABOUT ME", aboutHeading: "Who <span>Am I?</span>", aboutTagline: "Student by day.<br><span>Creator by passion.</span>",
      aboutP1: "My name is Biruk Tamrat. I am a Grade 11B high school student at Kings Academy.",
      aboutP2: "I am passionate about technology and creativity. My interests include building websites with HTML and CSS, programming with Java, and creating attractive graphics.",
      aboutP3: "My goal is to keep learning, improve my skills and create digital experiences that make a difference.",
      nameLabel: "NAME", schoolLabel: "SCHOOL", gradeLabel: "GRADE", fieldLabel: "FIELD", fieldValue: "Natural Science",
      skillsLabel: "02 / MY EXPERTISE", skillsHeading: "My <span>Skills.</span>", skillsDescription: "Technologies and projects I work with.",
      htmlDescription: "Building structured and meaningful web pages.", webDevelopment: "WEB DEVELOPMENT",
      cssDescription: "Designing modern, responsive and beautiful interfaces.", webDesign: "WEB DESIGN",
      javaDescription: "Exploring programming and software development.", programming: "PROGRAMMING",
      designDescription: "Creating visual designs and digital creativity.", creativeDesign: "CREATIVE DESIGN",
      workLabel: "03 / MY WORK", projectsHeading: "Featured <span>Projects.</span>", projectsDescription: "Some of my coding and creative work.",
      projectVisual1: "WEB<br>DEVELOPMENT", projectVisual2: "JAVA<br>PROGRAMMING", projectVisual3: "DIGITAL<br>CREATIVITY",
      creativeWebsites: "Creative Websites", creativeWebsitesDesc: "Modern website development and interface design.",
      programmingJourney: "Programming Journey", programmingJourneyDesc: "Learning programming concepts and building projects.",
      visualDesigns: "Visual Designs", visualDesignsDesc: "Exploring visual communication and creative design.",
      contactLabel: "04 / GET IN TOUCH", contactHeading: "Let's Create <span>Together.</span>",
      contactDescription: "Have an idea or a project? Feel free to reach out.",
      contactTagline: "Let's talk about<br><span>your next idea.</span>", phoneLabel: "PHONE", githubLabel: "GITHUB",
      yourName: "Your Name", namePlaceholder: "Enter your name", yourEmail: "Your Email", emailPlaceholder: "Enter your email",
      yourMessage: "Your Message", messagePlaceholder: "Tell me about your idea...", sendMessage: "Send Message ↗",
      footerCredit: "Designed & Built by Biruk Tamrat.", rights: "All rights reserved.", backToTop: "BACK TO TOP ↑",
      alertRequired: "Please complete all fields!", alertThanks: "Thanks for reaching out, ", alertMore: "! Please connect with me using my contact details."
    },
    am: {
      home: "መነሻ", about: "ስለ እኔ", skills: "ችሎታዎቼ", projects: "ፕሮጀክቶች", contact: "አግኙኝ", navContact: "አግኙኝ",
      status: "የፈጠራ ዲዛይነር", intro: "ሰላም፣ እኔ", imA: "እኔ", heroDescription: "ለቴክኖሎጂ፣ ለድረ-ገጽ ልማት እና ለዲጂታል ዲዛይን ፍላጎት ያለኝ የሁለተኛ ደረጃ ተማሪ ነኝ። ሀሳቦችን ወደ ውብ ዲጂታል ልምዶች መቀየር እወዳለሁ።",
      exploreWork: "ስራዎቼን ይመልከቱ ↗", contactMe: "አግኙኝ", viewRepository: "ማከማቻውን ይመልከቱ ↗", exploreMore: "ተጨማሪ ይመልከቱ ↗", github: "GITHUB ↗", emailLabel: "ኢሜይል",
      digitalWorld: "የእኔ ዲጂታል ዓለም", creativeMind: "ፈጠራ ያለው አእምሮ።", buildingFuture: "ወደፊቱን በኮድ እገነባለሁ።",
      aboutLabel: "01 / ስለ እኔ", aboutHeading: "እኔ <span>ማን ነኝ?</span>", aboutTagline: "በቀን ተማሪ።<br><span>በፍላጎት ፈጣሪ።</span>",
      aboutP1: "ስሜ ብሩክ ታምራት ነው። በኪንግስ አካዳሚ የ11ኛ ክፍል B ተማሪ ነኝ።",
      aboutP2: "ለቴክኖሎጂ እና ለፈጠራ ፍላጎት አለኝ። HTML እና CSS በመጠቀም ድረ-ገጾችን መገንባት፣ በJava ፕሮግራም ማድረግ እና ማራኪ ግራፊክስ መፍጠር እወዳለሁ።",
      aboutP3: "ግቤ መማሬን መቀጠል፣ ችሎታዎቼን ማሻሻል እና ለውጥ የሚያመጡ ዲጂታል ልምዶችን መፍጠር ነው።",
      nameLabel: "ስም", schoolLabel: "ትምህርት ቤት", gradeLabel: "ክፍል", fieldLabel: "ዘርፍ", fieldValue: "የተፈጥሮ ሳይንስ",
      skillsLabel: "02 / ችሎታዎቼ", skillsHeading: "የእኔ <span>ችሎታዎች።</span>", skillsDescription: "የምጠቀምባቸው ቴክኖሎጂዎች እና ፕሮጀክቶች።",
      htmlDescription: "የተደራጁ እና ጠቃሚ የድረ-ገጽ ገጾችን መገንባት።", webDevelopment: "የድረ-ገጽ ልማት",
      cssDescription: "ዘመናዊ፣ ለሁሉም ስክሪኖች የሚስማሙ እና ውብ አቀማመጦችን መንደፍ።", webDesign: "የድረ-ገጽ ዲዛይን",
      javaDescription: "የፕሮግራሚንግ እና የሶፍትዌር ልማት መርሆችን መማር።", programming: "ፕሮግራሚንግ",
      designDescription: "የእይታ ዲዛይኖችን እና ዲጂታል ፈጠራን መፍጠር።", creativeDesign: "የፈጠራ ዲዛይን",
      workLabel: "03 / ስራዎቼ", projectsHeading: "የተመረጡ <span>ፕሮጀክቶች።</span>", projectsDescription: "ከኮድ እና ከፈጠራ ስራዎቼ ጥቂቶቹ።",
      projectVisual1: "የድረ-ገጽ<br>ልማት", projectVisual2: "JAVA<br>ፕሮግራሚንግ", projectVisual3: "ዲጂታል<br>ፈጠራ",
      creativeWebsites: "የፈጠራ ድረ-ገጾች", creativeWebsitesDesc: "ዘመናዊ የድረ-ገጽ ልማት እና የበይነገጽ ዲዛይን።",
      programmingJourney: "የፕሮግራሚንግ ጉዞ", programmingJourneyDesc: "የፕሮግራሚንግ መርሆችን መማር እና ፕሮጀክቶችን መገንባት።",
      visualDesigns: "የእይታ ዲዛይኖች", visualDesignsDesc: "የእይታ ግንኙነትን እና የፈጠራ ዲዛይንን ማሰስ።",
      contactLabel: "04 / እንገናኝ", contactHeading: "አብረን <span>እንፍጠር።</span>", contactDescription: "ሀሳብ ወይም ፕሮጀክት አለዎት? እባክዎ ያግኙኝ።",
      contactTagline: "ስለ <br><span>ቀጣዩ ሀሳብዎ እንነጋገር።</span>", phoneLabel: "ስልክ", githubLabel: "GITHUB",
      yourName: "ስምዎ", namePlaceholder: "ስምዎን ያስገቡ", yourEmail: "ኢሜይልዎ", emailPlaceholder: "ኢሜይልዎን ያስገቡ",
      yourMessage: "መልዕክትዎ", messagePlaceholder: "ስለ ሀሳብዎ ይንገሩኝ...", sendMessage: "መልዕክት ላክ ↗",
      footerCredit: "በብሩክ ታምራት የተነደፈ እና የተገነባ።", rights: "መብቱ በሕግ የተጠበቀ ነው።", backToTop: "ወደ ላይ ↑",
      alertRequired: "እባክዎ ሁሉንም ቦታዎች ይሙሉ!", alertThanks: "ስለ መልዕክትዎ እናመሰግናለን፣ ", alertMore: "! እባክዎ በእኔ የመገኛ መረጃ ያግኙኝ።"
    },
    ar: {
      home: "الرئيسية", about: "من أنا", skills: "مهاراتي", projects: "مشاريعي", contact: "اتصل بي", navContact: "تواصل معي",
      status: "مصمم مبدع", intro: "مرحباً، أنا", imA: "أنا", heroDescription: "أنا طالب في المرحلة الثانوية شغوف بالتكنولوجيا وتطوير الويب والتصميم الرقمي. أحب تحويل الأفكار إلى تجارب رقمية جميلة.",
      exploreWork: "استكشف أعمالي ↗", contactMe: "تواصل معي", viewRepository: "عرض المستودع ↗", exploreMore: "استكشف المزيد ↗", github: "جيت هب ↗", emailLabel: "البريد الإلكتروني",
      digitalWorld: "عالمي الرقمي", creativeMind: "عقل مبدع.", buildingFuture: "أبني المستقبل باستخدام البرمجة.",
      aboutLabel: "01 / نبذة عني", aboutHeading: "من <span>أنا؟</span>", aboutTagline: "طالب في النهار.<br><span>ومبدع بشغف.</span>",
      aboutP1: "اسمي بيروك تامرات. أنا طالب في الصف الحادي عشر B في أكاديمية كينغز.",
      aboutP2: "أنا شغوف بالتكنولوجيا والإبداع. تشمل اهتماماتي إنشاء مواقع الويب باستخدام HTML وCSS، والبرمجة بلغة Java، وتصميم الرسومات الجذابة.",
      aboutP3: "هدفي هو مواصلة التعلم وتطوير مهاراتي وإنشاء تجارب رقمية تُحدث فرقاً.",
      nameLabel: "الاسم", schoolLabel: "المدرسة", gradeLabel: "الصف", fieldLabel: "المجال", fieldValue: "العلوم الطبيعية",
      skillsLabel: "02 / خبراتي", skillsHeading: "<span>مهاراتي.</span>", skillsDescription: "التقنيات والمشاريع التي أعمل بها.",
      htmlDescription: "إنشاء صفحات ويب منظمة وذات معنى.", webDevelopment: "تطوير الويب",
      cssDescription: "تصميم واجهات عصرية ومتجاوبة وجميلة.", webDesign: "تصميم الويب",
      javaDescription: "استكشاف البرمجة وتطوير البرمجيات.", programming: "البرمجة",
      designDescription: "إنشاء تصاميم مرئية وأعمال إبداعية رقمية.", creativeDesign: "التصميم الإبداعي",
      workLabel: "03 / أعمالي", projectsHeading: "<span>مشاريع مميزة.</span>", projectsDescription: "بعض أعمالي في البرمجة والتصميم الإبداعي.",
      projectVisual1: "تطوير<br>الويب", projectVisual2: "برمجة<br>JAVA", projectVisual3: "الإبداع<br>الرقمي",
      creativeWebsites: "مواقع إبداعية", creativeWebsitesDesc: "تطوير مواقع حديثة وتصميم واجهات المستخدم.",
      programmingJourney: "رحلة البرمجة", programmingJourneyDesc: "تعلم مفاهيم البرمجة وبناء المشاريع.",
      visualDesigns: "تصاميم مرئية", visualDesignsDesc: "استكشاف التواصل البصري والتصميم الإبداعي.",
      contactLabel: "04 / تواصل معي", contactHeading: "لنبدع <span>معاً.</span>", contactDescription: "هل لديك فكرة أو مشروع؟ لا تتردد في التواصل معي.",
      contactTagline: "لنتحدث عن<br><span>فكرتك القادمة.</span>", phoneLabel: "الهاتف", githubLabel: "جيت هب",
      yourName: "اسمك", namePlaceholder: "أدخل اسمك", yourEmail: "بريدك الإلكتروني", emailPlaceholder: "أدخل بريدك الإلكتروني",
      yourMessage: "رسالتك", messagePlaceholder: "أخبرني عن فكرتك...", sendMessage: "إرسال الرسالة ↗",
      footerCredit: "تصميم وتطوير بيروك تامرات.", rights: "جميع الحقوق محفوظة.", backToTop: "العودة للأعلى ↑",
      alertRequired: "يرجى ملء جميع الحقول!", alertThanks: "شكراً لتواصلك، ", alertMore: "! يرجى التواصل معي باستخدام بيانات الاتصال الخاصة بي."
    }
  };

  // 3. TYPING ANIMATION (changes with selected language)
  const typingElement = document.querySelector(".typing");
  const typingWords = {
    en: ["Web Developer", "HTML & CSS Developer", "Java Programmer", "Graphic Designer", "Creative Student"],
    am: ["የድረ-ገጽ አበልጻጊ", "HTML እና CSS አበልጻጊ", "የJava ፕሮግራመር", "ግራፊክ ዲዛይነር", "ፈጠራ ያለው ተማሪ"],
    ar: ["مطور ويب", "مطور HTML وCSS", "مبرمج Java", "مصمم جرافيك", "طالب مبدع"]
  };
  let currentLanguage = "en";
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let typingTimer;

  function typeEffect() {
    if (!typingElement) return;
    const words = typingWords[currentLanguage];
    const currentWord = words[wordIndex];
    typingElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
      charIndex++;
      if (charIndex > currentWord.length) {
        deleting = true;
        typingTimer = setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    typingTimer = setTimeout(typeEffect, deleting ? 45 : 90);
  }

  function restartTyping() {
    if (!typingElement) return;
    clearTimeout(typingTimer);
    wordIndex = 0;
    charIndex = 0;
    deleting = false;
    typingElement.textContent = "";
    typeEffect();
  }

  // 4. APPLY SELECTED LANGUAGE
  const languageSwitcher = document.getElementById("languageSwitcher");

  function changeLanguage(language) {
    if (!translations[language]) language = "en";
    currentLanguage = language;
    const dictionary = translations[language];

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (dictionary[key] !== undefined) element.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(element => {
      const key = element.dataset.i18nHtml;
      if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.dataset.i18nPlaceholder;
      if (dictionary[key] !== undefined) element.placeholder = dictionary[key];
    });

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("arabic", language === "ar");
    document.title = language === "en" ? "Biruk Tamrat | Portfolio" :
      language === "am" ? "ብሩክ ታምራት | ፖርትፎሊዮ" : "بيروك تامرات | معرض الأعمال";

    if (languageSwitcher) languageSwitcher.value = language;
    try { localStorage.setItem("portfolioLanguage", language); } catch (error) {}
    restartTyping();
  }

  if (languageSwitcher) {
    languageSwitcher.addEventListener("change", event => changeLanguage(event.target.value));
  }

  let savedLanguage = "en";
  try { savedLanguage = localStorage.getItem("portfolioLanguage") || "en"; } catch (error) {}
  changeLanguage(savedLanguage);

  // 5. SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll(".reveal, .project-card, .skill-card");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("show"));
  }

  // 6. NAVBAR SCROLL EFFECT
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // 7. SCROLL PROGRESS BAR
  const progressBar = document.querySelector(".scroll-progress");
  window.addEventListener("scroll", () => {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = progress + "%";
  });

  // 8. ACTIVE NAVIGATION LINK
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 150) current = section.id;
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  });

  // 9. PROJECT CARD MOUSE EFFECT
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    });
  });

  // 10. CONTACT FORM (front-end demo; it does not send an email)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();
      const dictionary = translations[currentLanguage];
      if (!name || !email || !message) {
        alert(dictionary.alertRequired);
        return;
      }
      alert(dictionary.alertThanks + name + dictionary.alertMore);
      contactForm.reset();
    });
  }

  // 11. CURRENT YEAR
  const yearElement = document.querySelector("#year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // 12. BACK TO TOP BUTTON
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 400);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  console.log("Biruk Tamrat Portfolio Loaded Successfully!");
});
