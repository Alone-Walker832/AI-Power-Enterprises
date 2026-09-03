# AI Power Enterprises Hub

Create a modern, ultra-professional responsive Next.js 14 static website template for "AI Power Enterprises - IT Services".

Requirements:
1. Tech Stack: Next.js (App Router), Tailwind CSS, Shadcn UI components, Lucide icons, Framer Motion animations.
2. Dark / Light Mode: Included via next-themes with a sleek toggle button in the Header.
3. Folder Structure (Developer Friendly):
   - app/ (layout.tsx, page.tsx, services/page.tsx, clients/page.tsx, contact/page.tsx)
   - components/ (Navbar.tsx, Footer.tsx, Hero.tsx, ServicesSection.tsx, SLASection.tsx, PartnersSection.tsx, ClientsSection.tsx, ContactSection.tsx, AIChatbot.tsx, WhatsAppBtn.tsx)
   - data/ (companyData.ts)

4. Global Header / Navbar:
   - Sticky blur background (backdrop-blur-md).
   - Brand Logo: "AI POWER ENTERPRISES" with tagline "IT Services" in navy blue & electric blue glow.
   - Nav Links: Home, Services & SLA, Strategic Partners, Clients, Nationwide Coverage, Contact Us.
   - Action Buttons: "Request Quote" (scrolls/links to contact) & Dark/Light Mode Switcher.
   - Mobile Responsive Hamburger Menu with smooth drawer.

5. Global Footer:
   - 4-column layout:
     - Col 1: Company Profile snippet ("Technology that works. Support that lasts.") [cite: 128], Address: Office #516, Anum Blessings, Plot No. ZCC KECHSU Block 7/8, Shahrah-e-Faisal, Karachi, Pakistan[cite: 127].
     - Col 2: Quick Links (All pages).
     - Col 3: Core Expertise (Servers & Blade, IP CCTV, SLA Support, Network Infrastructure, Data Centre Solutions)[cite: 41, 63, 95, 425, 448].
     - Col 4: Contact Info (info@aipowerent.net, sales@aipowerent.net) [cite: 127] with clickable mailto links.
   - Bottom bar: Copyright & SEO links.

6. Floating Widgets:
   - WhatsApp Direct Floating Button (bottom right): Pre-filled link to message team on WhatsApp with tooltip.
   - AI Chatbot Widget (bottom left): A static interactive modal drawer featuring automated smart replies for FAQ about SLA response time (30 min response) [cite: 449], CCTV setup, Server hardware, and office location (Karachi)[cite: 127].

Make all components 100% accessible, responsive, smooth-scrolling, and fast-loading with strict TypeScript types.

Build a high-converting, dynamic Home Page (app/page.tsx) using Framer Motion for AI Power Enterprises based on our uploaded PDF profile.

Home Page Sections:

1. Hero Section:

   - Headline: "Enterprise IT Infrastructure, Managed Services & 24/7 SLA Technical Support"[cite: 140, 142, 448].

   - Sub-headline: "Providing nationwide IT solutions across Pakistan & remote international support with 100+ skilled professionals." [cite: 144, 145, 146]

   - CTA Buttons: "Explore Services" (Primary) & "Get SLA Consultation" (Secondary Outline).

   - Animated Background: Subtle grid pattern with glowing blue network nodes.

2. Key Metrics Counter (Glassmorphism Cards):

   - "100+ Skilled IT Professionals" [cite: 144]

   - "8 Major Hubs" (Karachi, Islamabad, Lahore, Multan, Faisalabad, Peshawar, Gilgit, Quetta) [cite: 145]

   - "30 Mins" SLA Response Time Commitment [cite: 449]

   - "24/7 x 365" Mission-Critical Coverage [cite: 449]

3. Our 5 Core Pillars (Interactive Hover Grid):

   - 01 Infrastructure: Enterprise infrastructure & core tech platforms[cite: 156].

   - 02 Integration: Connected environments built for speed and reliability[cite: 156].

   - 03 Licensing: Structured software procurement & renewals (Microsoft, Red Hat)[cite: 109, 110, 156].

   - 04 Support: Managed services, preventive maintenance & SLA support[cite: 156].

   - 05 Consultancy: Technical advice, architecture planning & knowledge transfer[cite: 156].

4. Strategic Technology Partners Carousel:

   - Infinite logo marquee featuring Microsoft, Red Hat, HPE (Hewlett Packard Enterprise), Dell Technologies, Cisco Systems [cite: 172-178].

5. Our 6-Step Implementation Approach:

   - Step Cards: 01 Assess -> 02 Design -> 03 Deploy -> 04 Integrate -> 05 Support -> 06 Improve [cite: 119-124].

Ensure smooth scroll triggers, modern gradient text effects, and full responsiveness.

Build a comprehensive Services & SLA Page (app/services/page.tsx) with detailed sub-sections and filterable tabbed view for AI Power Enterprises.

Content Details to Include:

1. SLA & Managed IT Services Framework (Top Priority):

   - Service Parameter Table / Interactive Cards:

     * Coverage: 24/7 x 365 [cite: 449]

     * Initial Response Commitment: Within 30 minutes [cite: 449]

     * Part Replacement Commitment: Within 4 working hours [cite: 449]

     * Intervention: Onsite support with spare parts availability [cite: 449]

     * Models: Mission-Critical (24/7 support) [cite: 451] & Business-Critical (8/5 support)[cite: 452].

   - Core Deliverables: 24/7 Call Management, Problem Diagnosis, Onsite Hardware Intervention, Spare Parts Provision, Preventive Maintenance, Quarterly Reporting [cite: 441-449].

2. High-Performance Servers & Computing:

   - Enterprise High-End Servers & Blades [cite: 432]

   - Engineered Systems & Unified Compute Platforms [cite: 431, 433]

   - SAN & NAS Enterprise Storage Solutions [cite: 434]

   - Backup & Recovery Infrastructure [cite: 435]

3. CCTV & Enterprise Security Surveillance Solutions:

   - IP CCTV Surveillance Design & Site Assessment [cite: 96, 97]

   - Network-Based Video Transmission & Storage Infrastructure [cite: 98, 100]

   - Centralized Surveillance Management & Command Rooms [cite: 99]

   - Ongoing CCTV Preventive Maintenance & Support [cite: 101]

4. Network Passive & Active Infrastructure:

   - Structured Cabling (Cat6, Cat6A, High-Speed Fibre-Optic) [cite: 85]

   - Data Centre Server Racks & Cable Containment Systems [cite: 86, 87]

   - Enterprise Routing, Core Switching & Wireless AP Controllers [cite: 90, 91]

   - Next-Gen Firewalls, VPN Gateways & Network Security [cite: 92]

5. Enterprise Software Licensing & Virtualization:

   - Microsoft Windows Server, Azure, M365, SQL Server [cite: 109]

   - Red Hat Enterprise Linux (RHEL), OpenShift, Ansible [cite: 110]

   - VMware Virtualization & Enterprise Applications (ERP, CRM, BI, FMS) [cite: 64]

Use tabbed UI or sticky side-navigation for switching between SLA, Servers, CCTV, Network, and Licensing sections easily.

Create an interactive Clients & Strategic Partners Page (app/clients/page.tsx) displaying the enterprise trust and portfolio of AI Power Enterprises.

Requirements:

1. Header: "Trusted by Leading Enterprises Across Pakistan & Global Markets"[cite: 142, 180].

2. Strategic Partners Grid:

   - Modern cards for official partners: Microsoft, Red Hat, Cisco, HPE, Dell Technologies [cite: 172-178].

   - Display partner badges, certifications, and core integrated technologies.

3. Selected Clientele Directory (Filterable Category Tabs with Badges):

   - Tab 1: Banking & Financial Services (BFSI)

     * Logos / Cards: Habib Bank Limited (HBL), United Bank Limited (UBL), MCB Bank, Meezan Bank, Bank of Punjab (BOP), Standard Chartered Bank, Askari Bank, Allied Bank, Bank Alfalah, Faysal Bank, National Bank of Pakistan (NBP), Dubai Islamic Bank, Citibank N.A., Bank of China, Easypaisa, JazzCash[cite: 189, 194, 219, 222, 224, 226, 229, 232, 235, 244, 246, 248, 254, 258, 267, 271, 276, 277].

   - Tab 2: Industrial, Oil & Gas, FMCG & Commercial

     * Logos / Cards: Fauji Fertilizer (FFC), Fatima Group, MOL Group, DG Cement, Lucky Cement, OGDCL, PPL, Pakistan State Oil (PSO), Packages Limited, Nishat Group, Systems Limited, NetSol Technologies, Interloop, Indus Motor Company (IMC), Unilever Pakistan, Nestlé Pakistan, Coca-Cola, PepsiCo[cite: 286, 294, 297, 300, 303, 305, 308, 315, 320, 321, 326, 333, 336, 348, 350, 354, 357, 362, 364].

   - Tab 3: Healthcare, Education & Telecommunications

     * Logos / Cards: Aga Khan University Hospital, Indus Hospital, Liaquat National Hospital, LUMS, NUST, IBA Karachi, COMSATS, Jazz, Ufone, Zong 4G, PTCL[cite: 189, 375, 377, 380, 382, 389, 391, 402, 405, 408].

4. Nationwide Footprint Map Component:

   - Interactive card grid highlighting branch presence: Karachi (HQ), Islamabad, Lahore, Multan, Faisalabad, Peshawar, Gilgit, Quetta[cite: 127, 145].

Add client search filter bar and smooth filter transition animations.


Build a clean, high-converting Contact Us Page (app/contact/page.tsx) with instant direct communication tools for AI Power Enterprises.

Page Elements:
1. Contact Information Cards:
   - Headquarters: Office #516, Anum Blessings, Plot No. ZCC KECHSU Block 7/8, Shahrah-e-Faisal, Karachi, Pakistan[cite: 127].
   - Official Email: info@aipowerent.net [cite: 127]
   - Sales Email: sales@aipowerent.net [cite: 127]
   - Coverage: Nationwide Service Coverage (8 Regional Technical Hubs) & Overseas Remote Support[cite: 145, 146].

2. Interactive Service Request / Lead Capture Form:
   - Fields: Full Name, Company / Organization, Official Email, Phone / WhatsApp Number, Service Priority (SLA Support, CCTV Systems, Server Hardware, Data Centre, Network Cabling), Message.
   - Real-time client-side validation with instant success alert state.

3. Quick Action CTA Buttons:
   - "Chat on WhatsApp Now" (Opens WhatsApp direct chat).
   - "Call 24/7 SLA Desk" (Triggers direct call action).

4. Location Map Mockup:
   - Integrated styled map container showing Karachi Shahrah-e-Faisal location with directions button[cite: 127].

Ensure modern UI spacing, clean dark/light mode form inputs, and fast loading.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4b4378d3-d0f0-4c5b-977c-939bbf3102d6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
