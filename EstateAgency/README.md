# Velora Real Estate 🏡

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap%205-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Responsive](https://img.shields.io/badge/Design-Responsive-success)](#)

A modern, responsive real estate web application designed for luxury property sales, rentals, and investment advisory in Nairobi, Kenya and surrounding prime suburbs.

---

## 👥 Project Team

| Name | Role / Contribution |
| :--- | :--- |
| **Dorren** | Project Team Member |
| **Fresher** | Project Team Member |
| **Belvick** | Project Team Member |
| **Florence** | Project Team Member |
| **Mary** | Project Team Member |

---

## 🌟 Key Features

### 1. 🌆 Nairobi Suburbs & Property Catalog
- **Curated Neighborhoods**: Showcases premier suburbs including Westlands, Karen, Kilimani, Lavington, Kileleshwa, Riverside, Runda, Kitisuru, Loresho, and Nyali.
- **Dynamic Single Property Viewer (`property-single.html`)**:
  - Dynamically loads unique high-resolution galleries (exterior facade, living room, master bedroom, chef's kitchen, balcony).
  - URL parameter mapping (`?id=westlands-amto-1bed`, `?id=karen-muringa-5bed`, etc.) to show distinct, authentic photos per property with zero repeated placeholder images.
  - Comprehensive listing details: price, location, bedrooms, bathrooms, square footage, amenities, floor plans, and video preview tabs.

### 2. 🎬 Smooth 5-Second Hero Slideshow (`index.html`)
- High-definition photography auto-advancing every 5 seconds.
- Smooth Ken-Burns zoom and fade transitions.
- Quick navigation pills linked directly to properties and suburbs.
- Clean design with numbering removed from slide indicators for a minimalist look.

### 3. 🤝 Real Estate Support Pillars & Services (`services.html`)
- Dedicated sections representing our core real estate support services:
  1. **Curated Property Search** – Verified residential and commercial listings.
  2. **Title & Legal Due Diligence** – Search confirmations, Land Registry verifications, and compliance.
  3. **Rentals & Expat Lettings** – High-yield executive rentals and embassy-standard leases.
  4. **Full-Cycle Property Management** – Tenant screening, rent collection, and facility maintenance.
  5. **Valuation & Yield Analysis** – ROI projections, rental yield estimates, and asset assessments.
  6. **Diaspora Investment Desk** – Remote investor support, virtual tours, and escrow facilitation.
- Seamless linking from homepage support cards directly to detailed service specifications.

### 4. 📝 Realty Boris–Style Inquiry Desk (`contact.html`)
- High-converting property inquiry form with:
  - First and Last Name
  - Phone Number with international helper format
  - Email Address
  - Property Use dropdown (Personal Residence, Buy-to-Let / Investment, Holiday Home, Commercial)
  - Target Budget Range selector
  - Preferred Viewing Date & Time picker
  - Detailed Message textarea
- **Direct 1-Click WhatsApp Integration**: Allows clients to initiate instant chats with pre-filled inquiries.

---

## 📁 Project Structure

```text
EstateAgency/
├── assets/
│   ├── css/
│   │   └── main.css            # Custom styles, responsive tweaks, and hero animations
│   ├── js/
│   │   └── main.js             # Swiper sliders, dynamic property routing, form handlers
│   ├── img/                    # Logos, icons, and local media assets
│   ├── scss/                   # SASS source stylesheets
│   └── vendor/                 # Bootstrap, AOS, GLightbox, Swiper, PureCounter
├── forms/
│   └── contact.php             # Contact form submission endpoint
├── index.html                  # Homepage (Hero, Support Pillars, Featured, Agents)
├── properties.html             # Suburbs showcase & active property listings
├── property-single.html        # Dynamic property detail view with photo gallery
├── property-search.html        # Property search and filter interface
├── services.html               # 6 Real estate support pillars and service breakdowns
├── service-details.html        # Dedicated single-service overview
├── about.html                  # Company story, mission, and leadership team
├── agents.html                 # Certified property consultants directory
├── contact.html                # Realty Boris-style inquiry desk & WhatsApp CTA
└── Readme.txt                  # Original template license notice
```

---

## 🚀 Getting Started

No build tools or package managers are required to run this project.

### Option 1: Direct File Open
1. Navigate into the `EstateAgency` folder.
2. Double-click [`index.html`](file:///C:/Users/User/Desktop/EstateAgency/EstateAgency/index.html) to open the website in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)

Using **VS Code Live Server**:
1. Open the project folder in VS Code.
2. Right-click [`index.html`](file:///C:/Users/User/Desktop/EstateAgency/EstateAgency/index.html) and select **"Open with Live Server"**.

Using **Python**:
```bash
# Start a local HTTP server
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using **Node.js**:
```bash
npx serve .
```

---

## 🛠️ Built With

- **HTML5 & CSS3** – Semantic markup and modern design.
- **JavaScript (ES6+)** – Dynamic gallery injection, URL query routing, and interaction logic.
- **[Bootstrap v5](https://getbootstrap.com/)** – Responsive grid and component framework.
- **[Swiper.js](https://swiperjs.com/)** – Touch-friendly slider and testimonial carousel.
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** – Smooth viewport scroll animations.
- **[GLightbox](https://biati-digital.github.io/glightbox/)** – High-resolution responsive image popups.
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** – Clean, modern iconography.

---

## 📜 Credits & Acknowledgments

- Base template design adapted from [BootstrapMade](https://bootstrapmade.com/real-estate-agency-bootstrap-template/).
- High-resolution architectural and suburb imagery sourced via [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com).
- Form structure and inquiry workflow inspired by [Realty Boris](https://realtyboris.com).

---

## 📄 License

This project is customized under the terms of the BootstrapMade template license. All original attribution comments and copyright notices are preserved.
