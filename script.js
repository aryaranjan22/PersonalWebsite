const carData = {
     porsche: {
    title: "Porsche 911 GT3 RS",
    tag: "ATMOSPHERIC V6",
    img: "images/porsche.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
    desc: "Built for ultimate motorsport aerodynamics with active wing drag reduction system (DRS).",
    power: 525,
    speed: 296,
    downforce: 860,
    accel: "3.2s"
  },
  "amg-one": {
    title: "Mercedes-AMG ONE",
    tag: "FORMULA 1 HYBRID",
    img: "images/amg-one.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    desc: "Direct Formula 1 technology transferred to the street featuring a 1.6-liter V6 turbocharged hybrid.",
    power: 1063,
    speed: 352,
    downforce: 700,
    accel: "2.9s"
  },
  ferrari: {
    title: "Ferrari SF90",
    tag: "TWIN-TURBO V8 PHEV",
    img: "images/ferrari.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
    desc: "Marantello's flagship plug-in hybrid hypercar combining three electric motors with a twin-turbo V8.",
    power: 1000,
    speed: 340,
    downforce: 390,
    accel: "2.5s"
  },
  valkyrie: {
    title: "Aston Martin Valkyrie",
    tag: "COSOWORTH V12",
    img: "images/valkyrie.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    desc: "An uncompromising hypercar sculpted by Adrian Newey featuring extreme ground-effect aerodynamics.",
    power: 1160,
    speed: 355,
    downforce: 1100,
    accel: "2.6s"
  },
  jesko: {
    title: "Koenigsegg Jesko",
    tag: "LST TRANSMISSION",
    img: "images/jesko.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
    desc: "Equipped with the 9-speed Light Speed Transmission (LST) and a twin-turbo V8.",
    power: 1600,
    speed: 480,
    downforce: 1400,
    accel: "2.5s"
  },
  bmw: {
    title: "BMW M4 GT3",
    tag: "PURE RACE SPEC",
    img: "images/bmw.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    desc: "The customer racing benchmark featuring a 3.0L twin-turbo inline 6-cylinder engine.",
    power: 590,
    speed: 290,
    downforce: 950,
    accel: "3.0s"
  },
  detomaso: {
    title: "De Tomaso",
    tag: "MID-ENGINE V8",
    img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=800&q=80",
    desc: "A modern Italian icon blending long-hood proportions with a lightweight carbon structure and serious aero efficiency.",
    power: 760,
    speed: 320,
    downforce: 620,
    accel: "3.0s"
  },
  "spania-gta": {
    title: "Spania GTA",
    tag: "TWIN-TURBO V8",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    desc: "Spanish performance engineering focused on razor-sharp balance, low drag, and high-speed confidence.",
    power: 880,
    speed: 340,
    downforce: 710,
    accel: "2.8s"
  }
};
const canvas = document.getElementById('constellationCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
    }
    update() {
     this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
    }
  }
  for (let i = 0; i < 70; i++) particles.push(new Particle());

  function animateConstellation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 62, 62, ${0.25 - dist / 520})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateConstellation);
  }
  animateConstellation();
}
const scrollElements = document.querySelectorAll('.scroll-reveal');
if (scrollElements.length >0) {
    const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  scrollElements.forEach((el) => observer.observe(el));
}
const modal = document.getElementById('carModal');
const modalClose = document.getElementById('modalClose');

if (modal) {
  document.querySelectorAll('.car-card').forEach((card) => {
    card.addEventListener('click', () => {
      const carKey = card.getAttribute('data-car');
      const data = carData[carKey];
      if (data) {
        document.getElementById('modalImg').src = data.img;
        document.getElementById('modalImg').onerror = () => { document.getElementById('modalImg').src = data.fallbackImg; };
        document.getElementById('modalTag').innerText = data.tag;
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalDesc').innerText = data.desc;
        document.getElementById('modalPower').innerText = data.power + " HP";
        document.getElementById('modalAccel').innerText = data.accel;
        document.getElementById('modalSpeed').innerText = data.speed + " km/h";
        document.getElementById('modalDownforce').innerText = data.downforce + " kg";
        modal.classList.add('active');
      }
    });
  });

  const closeModal = () => modal.classList.remove('active');
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}

const car1Select = document.getElementById('car1Select');
const car2Select = document.getElementById('car2Select');

if (car1Select && car2Select) {
  function updateComparisonSide(carKey, side) {
    const data = carData[carKey];
    if (!data) return;

    const imgEl = document.getElementById(`img${side}`);
    imgEl.src = data.img;
    imgEl.onerror = () => { imgEl.src = data.fallbackImg; };

    document.getElementById(`title${side}`).innerText = data.title;
    document.getElementById(`tag${side}`).innerText = data.tag;

    document.getElementById(`powerVal${side}`).innerText = data.power;
    document.getElementById(`speedVal${side}`).innerText = data.speed;
    document.getElementById(`dfVal${side}`).innerText = data.downforce;

    // Bar percentages relative to maximum hypercar specs
    document.getElementById(`powerBar${side}`).style.width = `${(data.power / 1600) * 100}%`;
    document.getElementById(`speedBar${side}`).style.width = `${(data.speed / 500) * 100}%`;
    document.getElementById(`dfBar${side}`).style.width = `${(data.downforce / 1500) * 100}%`;
  }

  function refreshComparison() {
    updateComparisonSide(car1Select.value, 'A');
    updateComparisonSide(car2Select.value, 'B');
  }

  car1Select.addEventListener('change', refreshComparison);
  car2Select.addEventListener('change', refreshComparison);
  refreshComparison(); // Initial call
}
const btnBase = document.getElementById('btnBase');
const btnTrack = document.getElementById('btnTrack');
const priceCells = document.querySelectorAll('.price-cell');
if (btnBase && btnTrack) {
  btnBase.addEventListener('click', () => {
    btnBase.classList.add('active');
    btnTrack.classList.remove('active');
    priceCells.forEach(cell => { cell.innerText = cell.getAttribute('data-base'); });
  });

  btnTrack.addEventListener('click', () => {
    btnTrack.classList.add('active');
    btnBase.classList.remove('active');
    priceCells.forEach(cell => { cell.innerText = cell.getAttribute('data-track'); });
  });
}
