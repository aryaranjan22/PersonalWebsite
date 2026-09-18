# AERO Hypercar Architecture (Updated it now Mr.Reviewer)

A lightweight, front-end web application for exploring telemetry data, aerodynamic specs, and eye-watering market allocations for hypercars. Built with modern HTML, CSS, and vanilla JavaScript—zero external frameworks, zero bloated `node_modules` folders heavier than a V12 engine, and zero patience for lag.

---

## Core Features

* **Fleet Collection:** Browse hypercar models with interactive modal overlays displaying peak power, acceleration, top speed, and downforce telemetry.
* **Telemetry Comparison:** Compare two hypercars side-by-side with dynamic animated performance bar charts. Excellent for settling internet arguments about which multimillion-dollar machine gets you to the grocery store faster.
* **Valuation Matrix:** Interactive pricing schedule with a live toggle between standard MSRP and track pack options. For when standard multi-million-dollar pricing just isn't draining your bank account fast enough.
* **Constellation Background:** Custom HTML5 canvas particle system with dynamic node connections. Floating mathematical geometry that instantly makes the app look 400% more expensive.
* **Responsive Design:** Dark glassmorphic interface with scroll reveal effects and clean mobile support, so you can check downforce figures on your phone while waiting for your valet.

---

## File Architecture

| File | Role & Functionality |
| :--- | :--- |
| `index.html` | Primary landing page showcasing the hypercar collection grid and specification modals. |
| `compare.html` | Dual-vehicle comparison interface powered by dynamic spec meters. |
| `pricing.html` | Interactive price chart featuring the track package pricing toggle. |
| `style.css` | Custom styling, glassmorphism UI, CSS Grid layouts, and central design variables. |
| `script.js` | Dynamic modal logic, comparison bar math, price toggles, and particle canvas animations. |

---

## Tech Stack

* **Markup:** `HTML5` (Semantic structure)
* **Styling:** `CSS3` (Flexbox, CSS Grid, Custom Variables, Glassmorphism)
* **Scripting:** `Vanilla JavaScript` (ES6+, HTML5 Canvas API, **0** npm dependencies)

---

## Quickstart Guide

> **Note:** No build steps, no package installations, no Docker containers, and no framework existential crises required.

1. **Clone or download** this repository.
2. **Open** `index.html` in any modern web browser.
3. **Explore** the telemetry.
