import type { Locale } from "./locales";

type ServiceCopy = {
  n: string;
  title: string;
  desc: string;
  points: string[];
  cta: string;
};

type FleetCopy = {
  labels: {
    all: string;
    seats: string;
    confirmSeats: string;
    displayReference: string;
    displayReferenceAlt: string;
    price: string;
    from: string;
    requestQuotation: string;
    confirmAvailability: string;
    taxIncluded: string;
    upTo12Hours: string;
    actualPhotosCta: string;
    disclaimerTitle: string;
    disclaimer: string;
  };
  categories: Record<string, string>;
  names: string[];
  uses: string[];
};

type RecommendationInput = {
  guests: string;
  luggage: string;
  service: string;
  color: string;
};

export type PageCopy = {
  nav: string[];
  cta: string;
  wa: {
    main: string;
    president: string;
    recommendation: (input: RecommendationInput) => string;
    fleet: (name: string) => string;
    notSelected: string;
    noPreference: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    primary: string;
    secondary: string;
    proof: string[];
  };
  finder: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    trust: string[];
    legends: string[];
    guests: string[];
    luggage: string[];
    services: string[];
    colors: string[];
    submit: string;
    helper: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    benefits: [string, string, string][];
    note: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    emphasis: string;
    items: ServiceCopy[];
  };
  fleetSection: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    filterAria: string;
    items: FleetCopy;
  };
  guidance: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    cta: string;
    checklist: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    emphasis: string;
    items: [string, string][];
  };
  destinations: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    items: [string, string, string][];
    note: string;
  };
  details: {
    eyebrow: string;
    title: string;
    emphasis: string;
    includedTitle: string;
    included: string[];
    includedNote: string;
    costsTitle: string;
    costs: string[];
    charges: [string, string, string?][];
    chargeNote: string;
  };
  policy: {
    eyebrow: string;
    title: string;
    emphasis: string;
    items: [string, string][];
  };
  reviews: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    ratingLabel: string;
    ratingAria: string;
    businessName: string;
    body: string;
    facts: string[];
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    cta: string;
    items: [string, string][];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    emphasis: string;
    copy: string;
    cta: string;
  };
  footer: {
    copy: string;
    explore: string;
    contact: string;
    hours: string;
    privacy: string;
    bookingPolicy: string;
    floating: string;
    floatingAria: string;
  };
  seoDescription: string;
};

const serviceNumbers = ["01", "02", "03", "04"];
const fleetUseCount = 14;

const buildServices = (
  items: Omit<ServiceCopy, "n">[],
): ServiceCopy[] => items.map((item, index) => ({ n: serviceNumbers[index], ...item }));

const buildFleetUses = (...uses: string[]) => {
  if (uses.length !== fleetUseCount) {
    throw new Error("Fleet copy must match fleet item count.");
  }
  return uses;
};

export const pageCopy: Record<Locale, PageCopy> = {
  en: {
    nav: ["Home", "Services", "Fleet", "How It Works", "Policies", "FAQ"],
    cta: "Plan My Bali Trip",
    wa: {
      main: "Hi Premium Bali Travel, I am planning a Bali trip and need transportation assistance.\n\nTravel dates:\nNumber of guests:\nLuggage:\nHotel or area:\nService needed:",
      president: "Hi, I am interested in the President Suite Hiace. Please send me the capacity, luggage allowance, price and availability.",
      recommendation: ({ guests, luggage, service, color }) =>
        `Hi Premium Bali Travel, I need a vehicle recommendation.\n\nGuests: ${guests}\nLuggage: ${luggage}\nService: ${service}\nPreferred color: ${color}\nTravel date:\nPickup area:\nDestination or hotel:\n\nPlease send actual vehicle photos, available colors, vehicle year, interior configuration and quotation.`,
      fleet: (name) =>
        `Hi Premium Bali Travel, I am interested in the ${name}.\n\nTravel date:\nGuests:\nLuggage:\nPreferred color:\nService needed:\n\nPlease send actual unit photos, available colors, vehicle year, interior configuration, price and availability.`,
      notSelected: "Not selected",
      noPreference: "No preference",
    },
    hero: {
      eyebrow: "Premium Bali transport for families & groups",
      title: "Your Bali Driver,",
      emphasis: "Matched to Your Group",
      copy: "Private transportation for families and groups of up to 15 guests. Tell us your group size, luggage and plans-we will recommend a suitable vehicle and send actual unit photos through WhatsApp.",
      primary: "Find My Vehicle",
      secondary: "View Fleet & Prices",
      proof: ["Actual photos before booking", "Vehicle matched to luggage", "24/7 WhatsApp assistance"],
    },
    finder: {
      eyebrow: "Free vehicle consultation",
      title: "Find the right vehicle",
      emphasis: "for your Bali group.",
      copy: "Our niche is private transportation for families and groups who need comfortable seating, the right luggage capacity and clear assistance before arrival.",
      trust: ["No booking required", "Actual unit photos via WhatsApp", "Color and year confirmed before payment"],
      legends: ["1. How many guests?", "2. How much luggage?", "3. What service do you need?", "4. Preferred vehicle color"],
      guests: ["1-4 guests", "5-7 guests", "8-10 guests", "11-15 guests"],
      luggage: ["Light luggage", "Medium luggage", "Many suitcases"],
      services: ["Airport transfer", "Bali day tour", "Private driver", "Multi-day travel"],
      colors: ["White", "Black", "Silver", "No preference"],
      submit: "Get Recommendation & Actual Photos",
      helper: "Your selections will be included automatically in the WhatsApp message.",
    },
    intro: {
      eyebrow: "Why Premium Bali Travel",
      title: "A better way to",
      emphasis: "move through Bali.",
      copy: "Thoughtful transportation, shaped around your group and your plans-not the other way around.",
      benefits: [
        ["route", "Flexible Destinations", "Plan your route around the places you want to experience."],
        ["vehicle", "The Right Vehicle", "Share your group and luggage details, and we will recommend a suitable vehicle."],
        ["support", "Local Assistance", "Receive WhatsApp assistance before and during your Bali journey."],
      ],
      note: "We work with trusted local transportation partners to provide carefully selected vehicles for your Bali journey.",
    },
    servicesSection: {
      eyebrow: "What we arrange",
      title: "Four simple ways to",
      emphasis: "travel comfortably.",
      items: buildServices([
        { title: "Private Car With Driver", desc: "Travel around Bali in a private vehicle with a dedicated professional driver.", points: ["Up to 12 hours of use", "Flexible Bali routes", "Vehicle selected for your group", "Quotation through WhatsApp"], cta: "Ask About a Private Driver" },
        { title: "Airport Transfer", desc: "Private arrival or departure transportation between Bali airport and your accommodation.", points: ["Arrival or departure transfer", "Vehicle based on passengers and luggage", "Private transportation", "Quotation through WhatsApp"], cta: "Arrange an Airport Transfer" },
        { title: "Custom Bali Day Tour", desc: "Create a flexible day journey based on the Bali destinations you want to visit.", points: ["Flexible itinerary", "Dedicated driver", "Vehicle options", "Up to 12 hours of use"], cta: "Plan a Custom Day Tour" },
        { title: "Multi-Day Transportation", desc: "Arrange one transportation plan for several days of your Bali holiday.", points: ["Suitable for extended stays", "Vehicle options", "Consistent travel assistance", "Customized quotation"], cta: "Discuss a Multi-Day Journey" },
      ]),
    },
    fleetSection: {
      eyebrow: "Private family & group fleet",
      title: "Comfort matched",
      emphasis: "to your group.",
      copy: "Catalogue images are display references only. Actual unit photos, available colors, year and interior are sent through WhatsApp.",
      filterAria: "Filter vehicles",
      items: {
        labels: {
          all: "All",
          seats: "seats",
          confirmSeats: "Confirm with our team",
          displayReference: "Display reference",
          displayReferenceAlt: "catalogue display reference",
          price: "Price",
          from: "From",
          requestQuotation: "Request quotation",
          confirmAvailability: "Confirm availability",
          taxIncluded: "Tax-buffered display price",
          upTo12Hours: "Up to 12 hours",
          actualPhotosCta: "Get Actual Photos & Availability",
          disclaimerTitle: "Catalogue display notice:",
          disclaimer: "Vehicle images are illustrative references only. Actual vehicle photos, available colors, production year, exterior, interior, seating configuration and availability will be sent and confirmed through WhatsApp before booking or payment.",
        },
        categories: { luxury: "Premium Cars", van: "Group Vans", bus: "Microbus", mpv: "Family MPV", suv: "SUV" },
        names: [
          "Toyota Alphard Luxury MPV",
          "Toyota Alphard Executive MPV",
          "Toyota Hiace Premio Premium Van",
          "Toyota Hiace President Suite",
          "Toyota Hiace Luxury Commuter Van",
          "Toyota Hiace Premio Standard Van",
          "Toyota Hiace Commuter Standard Van",
          "Isuzu ELF Short Microbus",
          "Toyota Innova Zenix Family MPV",
          "Toyota Innova Zenix Hybrid Premium MPV",
          "Toyota Innova Reborn Family MPV",
          "Toyota Fortuner SUV",
          "Mitsubishi Pajero Sport SUV",
          "Toyota Avanza / Daihatsu Xenia Compact MPV",
        ],
        uses: buildFleetUses(
          "Premium private journeys for couples, families or executive travel.",
          "Comfortable premium travel with added privacy.",
          "Premium group transportation.",
          "Premium Hiace suite transportation. Contact our team for capacity, luggage allowance, pricing and availability.",
          "Comfortable private group journeys.",
          "Families and medium-sized private groups.",
          "Large private groups.",
          "Medium-sized groups and coordinated transportation.",
          "Comfortable family and private travel.",
          "Premium family and private travel.",
          "Comfortable day tours and family travel.",
          "Private journeys requiring a spacious SUV.",
          "Private journeys requiring a spacious SUV.",
          "Practical private day travel.",
        ),
      },
    },
    guidance: {
      eyebrow: "Vehicle guidance",
      title: "Not sure which vehicle",
      emphasis: "fits your group?",
      copy: "Seat count is not always the same as comfortable capacity with luggage. Share your passenger count, suitcase count and suitcase size through WhatsApp, and we will recommend an appropriate vehicle.",
      cta: "Get a Vehicle Recommendation",
      checklist: ["Number of passengers", "Number of suitcases", "Suitcase sizes", "Travel dates", "Pickup area", "Preferred destinations"],
    },
    process: {
      eyebrow: "A simple process",
      title: "From first message",
      emphasis: "to your journey.",
      items: [
        ["Tell Us About Your Trip", "Share your dates, group size, luggage, pickup area and travel requirements through WhatsApp."],
        ["Receive a Recommendation", "We will recommend a suitable vehicle and travel arrangement."],
        ["Review Your Quotation", "Receive a written quotation showing the price, duration, inclusions, exclusions and deposit."],
        ["Confirm and Travel", "Secure the reservation with the required deposit and receive your booking details."],
      ],
    },
    destinations: {
      eyebrow: "Bali inspiration",
      title: "A journey shaped",
      emphasis: "around you.",
      copy: "Each image below has been matched to its actual Bali location. Tell us what you want to experience and we will help arrange a suitable private route.",
      items: [
        ["Ubud Rice Terraces", "Tegallalang's iconic green terraces", "https://images.unsplash.com/photo-1531662439848-a7ed93c51468?auto=format&fit=crop&w=1400&q=82"],
        ["Uluwatu Temple", "Clifftop temple above the Indian Ocean", "https://images.unsplash.com/photo-1752153417364-2e41ffac2db3?auto=format&fit=crop&w=1400&q=82"],
        ["Kintamani & Mount Batur", "Volcanic landscape viewed from Kintamani", "https://images.unsplash.com/photo-1658924066392-63cc6f531475?auto=format&fit=crop&w=1400&q=82"],
        ["Jimbaran Sunset", "Golden-hour coastline at Jimbaran Beach", "https://images.unsplash.com/photo-1575573331674-f55d59d79086?auto=format&fit=crop&w=1400&q=82"],
      ],
      note: "Destination images represent the named locations. Routes and visit timing remain subject to your itinerary, road conditions and confirmed service duration.",
    },
    details: {
      eyebrow: "Transparent details",
      title: "Know what's included",
      emphasis: "before you travel.",
      includedTitle: "What your private journey includes",
      included: ["Professional driver", "Fuel", "Air-conditioned vehicle", "Complimentary mineral water", "Up to 12 hours of use", "Standard Bali routes", "24/7 WhatsApp assistance"],
      includedNote: "Standard routes may include Ubud, Kintamani, Tanah Lot and Bedugul.",
      costsTitle: "Additional costs to consider",
      costs: ["Toll charges", "Parking fees", "Entrance tickets", "Meals", "Personal expenses", "Additional hours", "Services not written in the confirmed quotation"],
      charges: [["Overtime", "10% of the daily rate", "Per additional hour"], ["Karangasem", "+ IDR 200,000"], ["Singaraja / North Bali", "+ IDR 200,000"], ["Jembrana / West Bali", "+ IDR 200,000"]],
      chargeNote: "Extended-distance charges are subject to final route confirmation.",
    },
    policy: {
      eyebrow: "Clear terms",
      title: "Simple booking",
      emphasis: "and cancellation.",
      items: [
        ["Booking Confirmation", "A 30% deposit of the total booking value is required to secure the selected vehicle and date. The reservation is confirmed after the deposit has been received."],
        ["Cancellation at Least 24 Hours Before Service", "Customers who notify Premium Bali Travel at least 24 hours before the scheduled service are eligible for a full refund of their deposit."],
        ["Cancellation Less Than 24 Hours Before Service", "The 30% deposit is non-refundable when cancellation is made less than 24 hours before the scheduled service."],
      ],
    },
    reviews: {
      eyebrow: "Google reviews",
      title: "Guest feedback",
      emphasis: "from Google Maps.",
      copy: "Reviews are linked directly to the verified Google Maps listing for Khas Bali - Luxury Car Rental & Premium Transport Service.",
      ratingLabel: "Rating shown on Google Maps",
      ratingAria: "4.7 out of 5 stars",
      businessName: "Khas Bali - Luxury Car Rental & Premium Transport Service",
      body: "See recent verified guest reviews, photos and business details directly on Google Maps.",
      facts: ["Car rental agency in Kuta, Bali", "Open 24 hours", "Jl. LBC Sunset No.17A, Kuta, Badung"],
      cta: "Read Reviews on Google",
    },
    faq: {
      eyebrow: "Good to know",
      title: "Frequently asked",
      emphasis: "questions.",
      copy: "Still unsure? Send us a message and we will help you choose.",
      cta: "Chat on WhatsApp",
      items: [
        ["How do I make a booking?", "Contact Premium Bali Travel through WhatsApp with your travel dates, passenger count, luggage, pickup area and service requirements. We will recommend a suitable vehicle and send a quotation."],
        ["Is a deposit required?", "Yes. A 30% deposit is required to secure the selected vehicle and date."],
        ["How long can I use the vehicle?", "Published daily rates cover up to 12 hours. Additional hours are charged at 10% of the daily vehicle rate per hour."],
        ["What is included in the daily rate?", "The daily rate includes a professional driver, fuel, an air-conditioned vehicle, mineral water and up to 12 hours of use."],
        ["What is not included?", "Toll charges, parking fees, entrance tickets, meals, personal expenses, additional hours and services not stated in the confirmed quotation are not included."],
        ["Can you recommend a vehicle for my luggage?", "Yes. Share the number of passengers, suitcases and suitcase sizes through WhatsApp, and we will recommend an appropriate vehicle."],
        ["Are there additional charges for distant areas?", "Karangasem, Singaraja/North Bali and Jembrana/West Bali may have an additional charge of IDR 200,000 per region, subject to final route confirmation."],
        ["What is the cancellation policy?", "Notify us at least 24 hours before the scheduled service to receive a full deposit refund. The deposit is non-refundable for cancellations made less than 24 hours before service."],
        ["Is assistance available at any time?", "Yes. Premium Bali Travel provides 24/7 WhatsApp assistance."],
      ],
    },
    finalCta: {
      eyebrow: "Premium transport for families & groups",
      title: "See the actual vehicle",
      emphasis: "before you book.",
      copy: "Share your group, luggage and color preference. We will send a recommendation, actual unit photos and a clear quotation through WhatsApp.",
      cta: "Help Me Choose a Vehicle",
    },
    footer: {
      copy: "Private Bali transportation and flexible journeys arranged through one simple WhatsApp conversation.",
      explore: "Explore",
      contact: "Contact",
      hours: "24 hours, seven days a week",
      privacy: "Privacy Policy",
      bookingPolicy: "Booking and Cancellation Policy",
      floating: "Chat on WhatsApp",
      floatingAria: "Chat with Premium Bali Travel on WhatsApp",
    },
    seoDescription: "Private Bali transportation and car rental with driver for families and groups.",
  },
  id: {
    nav: ["Beranda", "Layanan", "Armada", "Cara Kerja", "Kebijakan", "FAQ"],
    cta: "Rencanakan Trip Bali",
    wa: {
      main: "Halo Premium Bali Travel, saya sedang merencanakan perjalanan ke Bali dan membutuhkan bantuan transportasi.\n\nTanggal perjalanan:\nJumlah tamu:\nBagasi:\nHotel atau area:\nLayanan yang dibutuhkan:",
      president: "Halo, saya tertarik dengan President Suite Hiace. Mohon kirim kapasitas, kapasitas bagasi, harga, dan ketersediaannya.",
      recommendation: ({ guests, luggage, service, color }) =>
        `Halo Premium Bali Travel, saya membutuhkan rekomendasi kendaraan.\n\nTamu: ${guests}\nBagasi: ${luggage}\nLayanan: ${service}\nWarna pilihan: ${color}\nTanggal perjalanan:\nArea penjemputan:\nDestinasi atau hotel:\n\nMohon kirim foto kendaraan aktual, warna tersedia, tahun kendaraan, konfigurasi interior, dan penawaran harga.`,
      fleet: (name) =>
        `Halo Premium Bali Travel, saya tertarik dengan ${name}.\n\nTanggal perjalanan:\nTamu:\nBagasi:\nWarna pilihan:\nLayanan yang dibutuhkan:\n\nMohon kirim foto unit aktual, warna tersedia, tahun kendaraan, konfigurasi interior, harga, dan ketersediaan.`,
      notSelected: "Belum dipilih",
      noPreference: "Tidak ada preferensi",
    },
    hero: {
      eyebrow: "Transportasi premium Bali untuk keluarga & rombongan",
      title: "Driver Bali Anda,",
      emphasis: "Disesuaikan untuk Grup",
      copy: "Transportasi pribadi untuk keluarga dan rombongan hingga 15 tamu. Beri tahu jumlah tamu, bagasi, dan rencana perjalanan-kami rekomendasikan kendaraan yang sesuai dan kirim foto unit aktual via WhatsApp.",
      primary: "Cari Kendaraan",
      secondary: "Lihat Armada & Harga",
      proof: ["Foto aktual sebelum booking", "Kendaraan sesuai bagasi", "Bantuan WhatsApp 24/7"],
    },
    finder: {
      eyebrow: "Konsultasi kendaraan gratis",
      title: "Temukan kendaraan terbaik",
      emphasis: "untuk grup Anda di Bali.",
      copy: "Kami fokus pada transportasi pribadi untuk keluarga dan rombongan yang membutuhkan kursi nyaman, kapasitas bagasi tepat, dan bantuan jelas sebelum tiba.",
      trust: ["Tanpa kewajiban booking", "Foto unit aktual via WhatsApp", "Warna dan tahun dikonfirmasi sebelum pembayaran"],
      legends: ["1. Berapa jumlah tamu?", "2. Berapa banyak bagasi?", "3. Layanan apa yang dibutuhkan?", "4. Warna kendaraan pilihan"],
      guests: ["1-4 tamu", "5-7 tamu", "8-10 tamu", "11-15 tamu"],
      luggage: ["Bagasi ringan", "Bagasi sedang", "Banyak koper"],
      services: ["Transfer bandara", "Tur harian Bali", "Driver pribadi", "Perjalanan beberapa hari"],
      colors: ["Putih", "Hitam", "Silver", "Tidak ada preferensi"],
      submit: "Dapatkan Rekomendasi & Foto Aktual",
      helper: "Pilihan Anda akan otomatis masuk ke pesan WhatsApp.",
    },
    intro: {
      eyebrow: "Kenapa Premium Bali Travel",
      title: "Cara yang lebih baik",
      emphasis: "untuk berkeliling Bali.",
      copy: "Transportasi yang dipikirkan sesuai grup dan rencana perjalanan Anda.",
      benefits: [
        ["route", "Destinasi Fleksibel", "Susun rute sesuai tempat yang ingin Anda kunjungi."],
        ["vehicle", "Kendaraan yang Tepat", "Bagikan detail grup dan bagasi, kami rekomendasikan kendaraan yang sesuai."],
        ["support", "Bantuan Lokal", "Dapatkan bantuan WhatsApp sebelum dan selama perjalanan di Bali."],
      ],
      note: "Kami bekerja dengan partner transportasi lokal tepercaya untuk menyediakan kendaraan pilihan bagi perjalanan Anda.",
    },
    servicesSection: {
      eyebrow: "Yang kami atur",
      title: "Empat cara mudah",
      emphasis: "untuk bepergian nyaman.",
      items: buildServices([
        { title: "Mobil Pribadi dengan Driver", desc: "Keliling Bali dengan kendaraan pribadi dan driver profesional khusus untuk Anda.", points: ["Pemakaian hingga 12 jam", "Rute Bali fleksibel", "Kendaraan dipilih sesuai grup", "Penawaran melalui WhatsApp"], cta: "Tanya Mobil dengan Driver" },
        { title: "Transfer Bandara", desc: "Transportasi pribadi kedatangan atau keberangkatan antara bandara Bali dan akomodasi Anda.", points: ["Transfer kedatangan atau keberangkatan", "Kendaraan sesuai penumpang dan bagasi", "Transportasi pribadi", "Penawaran melalui WhatsApp"], cta: "Atur Transfer Bandara" },
        { title: "Tur Harian Bali Custom", desc: "Buat perjalanan harian fleksibel berdasarkan destinasi Bali yang ingin dikunjungi.", points: ["Itinerary fleksibel", "Driver khusus", "Pilihan kendaraan", "Pemakaian hingga 12 jam"], cta: "Rencanakan Tur Harian" },
        { title: "Transportasi Multi-Hari", desc: "Atur satu rencana transportasi untuk beberapa hari liburan di Bali.", points: ["Cocok untuk menginap lebih lama", "Pilihan kendaraan", "Bantuan perjalanan konsisten", "Penawaran khusus"], cta: "Diskusikan Perjalanan Multi-Hari" },
      ]),
    },
    fleetSection: {
      eyebrow: "Armada keluarga & rombongan",
      title: "Kenyamanan sesuai",
      emphasis: "kebutuhan grup.",
      copy: "Gambar katalog hanya referensi tampilan. Foto unit aktual, warna tersedia, tahun, dan interior dikirim melalui WhatsApp.",
      filterAria: "Filter kendaraan",
      items: {
        labels: {
          all: "Semua",
          seats: "kursi",
          confirmSeats: "Konfirmasi dengan tim kami",
          displayReference: "Referensi tampilan",
          displayReferenceAlt: "referensi tampilan katalog",
          price: "Harga",
          from: "Mulai",
          requestQuotation: "Minta penawaran",
          confirmAvailability: "Konfirmasi ketersediaan",
          taxIncluded: "Harga dasar IDR",
          upTo12Hours: "Hingga 12 jam",
          actualPhotosCta: "Dapatkan Foto Aktual & Ketersediaan",
          disclaimerTitle: "Catatan tampilan katalog:",
          disclaimer: "Gambar kendaraan hanya referensi ilustrasi. Foto kendaraan aktual, warna tersedia, tahun produksi, eksterior, interior, konfigurasi kursi, dan ketersediaan akan dikirim dan dikonfirmasi melalui WhatsApp sebelum booking atau pembayaran.",
        },
        categories: { luxury: "Mobil Premium", van: "Van Rombongan", bus: "Microbus", mpv: "MPV Keluarga", suv: "SUV" },
        names: [
          "Toyota Alphard MPV Mewah",
          "Toyota Alphard Transformer Executive",
          "Toyota Hiace Premio Premium",
          "Toyota Hiace President Suite",
          "Toyota Hiace Commuter Luxury",
          "Toyota Hiace Premio Standard",
          "Toyota Hiace Commuter Standard",
          "Isuzu ELF Microbus Short",
          "Toyota Innova Zenix MPV Keluarga",
          "Toyota Innova Zenix Hybrid Premium",
          "Toyota Innova Reborn MPV Keluarga",
          "Toyota Fortuner SUV",
          "Mitsubishi Pajero Sport SUV",
          "Toyota Avanza / Daihatsu Xenia MPV Compact",
        ],
        uses: buildFleetUses(
          "Perjalanan pribadi premium untuk pasangan, keluarga, atau perjalanan eksekutif.",
          "Perjalanan premium nyaman dengan privasi lebih.",
          "Transportasi rombongan premium.",
          "Transportasi suite Hiace premium. Hubungi tim kami untuk kapasitas, bagasi, harga, dan ketersediaan.",
          "Perjalanan rombongan pribadi yang nyaman.",
          "Untuk keluarga dan rombongan ukuran sedang.",
          "Untuk rombongan pribadi besar.",
          "Untuk grup sedang dan transportasi terkoordinasi.",
          "Perjalanan keluarga dan pribadi yang nyaman.",
          "Perjalanan keluarga dan pribadi premium.",
          "Nyaman untuk tur harian dan perjalanan keluarga.",
          "Perjalanan pribadi yang membutuhkan SUV lapang.",
          "Perjalanan pribadi yang membutuhkan SUV lapang.",
          "Perjalanan harian pribadi yang praktis.",
        ),
      },
    },
    guidance: {
      eyebrow: "Panduan kendaraan",
      title: "Belum yakin kendaraan mana",
      emphasis: "yang cocok untuk grup Anda?",
      copy: "Jumlah kursi tidak selalu sama dengan kapasitas nyaman saat membawa bagasi. Bagikan jumlah penumpang, jumlah koper, dan ukuran koper melalui WhatsApp, lalu kami rekomendasikan kendaraan yang sesuai.",
      cta: "Dapatkan Rekomendasi Kendaraan",
      checklist: ["Jumlah penumpang", "Jumlah koper", "Ukuran koper", "Tanggal perjalanan", "Area penjemputan", "Destinasi pilihan"],
    },
    process: {
      eyebrow: "Proses sederhana",
      title: "Dari pesan pertama",
      emphasis: "hingga perjalanan.",
      items: [
        ["Ceritakan Perjalanan Anda", "Bagikan tanggal, jumlah grup, bagasi, area penjemputan, dan kebutuhan perjalanan melalui WhatsApp."],
        ["Terima Rekomendasi", "Kami akan merekomendasikan kendaraan dan pengaturan perjalanan yang sesuai."],
        ["Tinjau Penawaran", "Terima penawaran tertulis berisi harga, durasi, inklusi, eksklusi, dan deposit."],
        ["Konfirmasi dan Berangkat", "Amankan reservasi dengan deposit yang diperlukan dan terima detail booking Anda."],
      ],
    },
    destinations: {
      eyebrow: "Inspirasi Bali",
      title: "Perjalanan yang dibentuk",
      emphasis: "sesuai keinginan Anda.",
      copy: "Setiap gambar di bawah disesuaikan dengan lokasi Bali sebenarnya. Ceritakan pengalaman yang Anda inginkan, kami bantu atur rute pribadi yang sesuai.",
      items: [
        ["Teras Sawah Ubud", "Teras hijau ikonik Tegallalang", "https://images.unsplash.com/photo-1531662439848-a7ed93c51468?auto=format&fit=crop&w=1400&q=82"],
        ["Pura Uluwatu", "Pura tebing di atas Samudra Hindia", "https://images.unsplash.com/photo-1752153417364-2e41ffac2db3?auto=format&fit=crop&w=1400&q=82"],
        ["Kintamani & Gunung Batur", "Lanskap vulkanik dari Kintamani", "https://images.unsplash.com/photo-1658924066392-63cc6f531475?auto=format&fit=crop&w=1400&q=82"],
        ["Senja Jimbaran", "Pantai Jimbaran saat golden hour", "https://images.unsplash.com/photo-1575573331674-f55d59d79086?auto=format&fit=crop&w=1400&q=82"],
      ],
      note: "Gambar destinasi mewakili lokasi yang disebutkan. Rute dan waktu kunjungan tetap mengikuti itinerary, kondisi jalan, dan durasi layanan yang dikonfirmasi.",
    },
    details: {
      eyebrow: "Detail transparan",
      title: "Ketahui yang termasuk",
      emphasis: "sebelum berangkat.",
      includedTitle: "Yang termasuk dalam perjalanan pribadi Anda",
      included: ["Driver profesional", "BBM", "Kendaraan ber-AC", "Air mineral gratis", "Pemakaian hingga 12 jam", "Rute standar Bali", "Bantuan WhatsApp 24/7"],
      includedNote: "Rute standar dapat mencakup Ubud, Kintamani, Tanah Lot, dan Bedugul.",
      costsTitle: "Biaya tambahan yang perlu dipertimbangkan",
      costs: ["Biaya tol", "Parkir", "Tiket masuk", "Makan", "Pengeluaran pribadi", "Jam tambahan", "Layanan yang tidak tertulis dalam penawaran terkonfirmasi"],
      charges: [["Overtime", "10% dari tarif harian", "Per jam tambahan"], ["Karangasem", "+ IDR 200,000"], ["Singaraja / Bali Utara", "+ IDR 200,000"], ["Jembrana / Bali Barat", "+ IDR 200,000"]],
      chargeNote: "Biaya area jauh mengikuti konfirmasi rute akhir.",
    },
    policy: {
      eyebrow: "Ketentuan jelas",
      title: "Booking dan pembatalan",
      emphasis: "yang sederhana.",
      items: [
        ["Konfirmasi Booking", "Deposit 30% dari total booking diperlukan untuk mengamankan kendaraan dan tanggal pilihan. Reservasi terkonfirmasi setelah deposit diterima."],
        ["Pembatalan Minimal 24 Jam Sebelum Layanan", "Pelanggan yang memberi tahu Premium Bali Travel minimal 24 jam sebelum layanan berhak mendapatkan pengembalian penuh deposit."],
        ["Pembatalan Kurang dari 24 Jam", "Deposit 30% tidak dapat dikembalikan jika pembatalan dilakukan kurang dari 24 jam sebelum jadwal layanan."],
      ],
    },
    reviews: {
      eyebrow: "Ulasan Google",
      title: "Masukan tamu",
      emphasis: "dari Google Maps.",
      copy: "Ulasan terhubung langsung ke listing Google Maps terverifikasi Khas Bali - Luxury Car Rental & Premium Transport Service.",
      ratingLabel: "Rating yang tampil di Google Maps",
      ratingAria: "4.7 dari 5 bintang",
      businessName: "Khas Bali - Luxury Car Rental & Premium Transport Service",
      body: "Lihat ulasan tamu terbaru yang terverifikasi, foto, dan detail bisnis langsung di Google Maps.",
      facts: ["Agen rental mobil di Kuta, Bali", "Buka 24 jam", "Jl. LBC Sunset No.17A, Kuta, Badung"],
      cta: "Baca Ulasan di Google",
    },
    faq: {
      eyebrow: "Perlu diketahui",
      title: "Pertanyaan yang sering",
      emphasis: "ditanyakan.",
      copy: "Masih ragu? Kirim pesan dan kami bantu memilih.",
      cta: "Chat di WhatsApp",
      items: [
        ["Bagaimana cara booking?", "Hubungi Premium Bali Travel melalui WhatsApp dengan tanggal perjalanan, jumlah penumpang, bagasi, area penjemputan, dan kebutuhan layanan. Kami akan merekomendasikan kendaraan dan mengirim penawaran."],
        ["Apakah perlu deposit?", "Ya. Deposit 30% diperlukan untuk mengamankan kendaraan dan tanggal pilihan."],
        ["Berapa lama kendaraan bisa digunakan?", "Tarif harian yang dipublikasikan mencakup hingga 12 jam. Jam tambahan dikenakan 10% dari tarif harian kendaraan per jam."],
        ["Apa saja yang termasuk dalam tarif harian?", "Tarif harian termasuk driver profesional, BBM, kendaraan ber-AC, air mineral, dan pemakaian hingga 12 jam."],
        ["Apa yang tidak termasuk?", "Biaya tol, parkir, tiket masuk, makan, pengeluaran pribadi, jam tambahan, dan layanan yang tidak tertulis dalam penawaran terkonfirmasi tidak termasuk."],
        ["Bisakah merekomendasikan kendaraan untuk bagasi saya?", "Bisa. Bagikan jumlah penumpang, jumlah koper, dan ukuran koper melalui WhatsApp, lalu kami rekomendasikan kendaraan yang sesuai."],
        ["Apakah ada biaya tambahan untuk area jauh?", "Karangasem, Singaraja/Bali Utara, dan Jembrana/Bali Barat dapat dikenakan tambahan IDR 200,000 per wilayah, mengikuti konfirmasi rute akhir."],
        ["Bagaimana kebijakan pembatalan?", "Beri tahu kami minimal 24 jam sebelum layanan untuk pengembalian penuh deposit. Deposit tidak dapat dikembalikan untuk pembatalan kurang dari 24 jam sebelum layanan."],
        ["Apakah bantuan tersedia kapan saja?", "Ya. Premium Bali Travel menyediakan bantuan WhatsApp 24/7."],
      ],
    },
    finalCta: {
      eyebrow: "Transport premium untuk keluarga & rombongan",
      title: "Lihat kendaraan aktual",
      emphasis: "sebelum booking.",
      copy: "Bagikan jumlah grup, bagasi, dan warna pilihan. Kami akan mengirim rekomendasi, foto unit aktual, dan penawaran jelas melalui WhatsApp.",
      cta: "Bantu Saya Pilih Kendaraan",
    },
    footer: {
      copy: "Transportasi pribadi Bali dan perjalanan fleksibel yang diatur melalui satu percakapan WhatsApp sederhana.",
      explore: "Jelajahi",
      contact: "Kontak",
      hours: "24 jam, tujuh hari seminggu",
      privacy: "Kebijakan Privasi",
      bookingPolicy: "Kebijakan Booking dan Pembatalan",
      floating: "Chat di WhatsApp",
      floatingAria: "Chat dengan Premium Bali Travel di WhatsApp",
    },
    seoDescription: "Transportasi pribadi dan sewa mobil dengan sopir di Bali untuk keluarga dan rombongan.",
  },
  ja: {} as PageCopy,
  ko: {} as PageCopy,
  zh: {} as PageCopy,
};

pageCopy.ja = {
  ...pageCopy.en,
  nav: ["ホーム", "サービス", "車両", "流れ", "規約", "FAQ"],
  cta: "バリ旅行を相談",
  hero: {
    eyebrow: "ご家族・グループ向けバリ島プレミアム送迎",
    title: "バリ島の専用ドライバーを",
    emphasis: "人数に合わせて手配",
    copy: "最大15名までのご家族・グループ向けプライベート送迎。人数、荷物、予定をお知らせください。最適な車両をご提案し、実車写真をWhatsAppでお送りします。",
    primary: "車両を探す",
    secondary: "車両と料金を見る",
    proof: ["予約前に実車写真", "荷物に合う車両", "24時間WhatsApp対応"],
  },
  finder: {
    eyebrow: "無料車両相談",
    title: "最適な車両を見つける",
    emphasis: "バリ島のグループ旅行に。",
    copy: "快適な座席、適切な荷物容量、到着前の明確なサポートが必要なご家族・グループ向けのプライベート送迎です。",
    trust: ["予約義務なし", "実車写真をWhatsAppで送付", "支払い前に色と年式を確認"],
    legends: ["1. 人数は？", "2. 荷物の量は？", "3. 必要なサービスは？", "4. 希望の車両カラー"],
    guests: ["1-4名", "5-7名", "8-10名", "11-15名"],
    luggage: ["少なめ", "普通", "スーツケース多め"],
    services: ["空港送迎", "バリ島日帰りツアー", "専用ドライバー", "複数日利用"],
    colors: ["白", "黒", "シルバー", "希望なし"],
    submit: "おすすめ車両と実車写真を受け取る",
    helper: "選択内容はWhatsAppメッセージに自動で入ります。",
  },
  intro: {
    eyebrow: "Premium Bali Travelが選ばれる理由",
    title: "バリ島をもっと快適に",
    emphasis: "移動する方法。",
    copy: "グループ人数と旅程に合わせた、無理のない移動プランをご提案します。",
    benefits: [
      ["route", "柔軟な目的地", "行きたい場所に合わせてルートを組み立てられます。"],
      ["vehicle", "最適な車両", "人数と荷物を共有いただければ、合う車両をご提案します。"],
      ["support", "現地サポート", "旅行前から滞在中までWhatsAppでサポートします。"],
    ],
    note: "信頼できる現地交通パートナーと連携し、バリ島旅行に合う車両を手配します。",
  },
  servicesSection: {
    eyebrow: "手配できるサービス",
    title: "快適に移動する",
    emphasis: "4つの方法。",
    items: buildServices([
      { title: "ドライバー付き専用車", desc: "専用車とプロドライバーでバリ島を快適に移動できます。", points: ["最大12時間利用", "柔軟なバリ島ルート", "人数に合う車両選定", "WhatsAppでお見積り"], cta: "専用車を相談" },
      { title: "空港送迎", desc: "バリ空港と宿泊先間の到着・出発送迎を専用車で手配します。", points: ["到着または出発送迎", "人数と荷物に合う車両", "プライベート送迎", "WhatsAppでお見積り"], cta: "空港送迎を手配" },
      { title: "カスタム日帰りツアー", desc: "訪れたいバリ島の目的地に合わせて柔軟な日帰りルートを作れます。", points: ["柔軟な旅程", "専用ドライバー", "車両オプション", "最大12時間利用"], cta: "日帰りツアーを相談" },
      { title: "複数日送迎", desc: "数日間のバリ滞在に合わせた交通プランをまとめて手配します。", points: ["長期滞在に適合", "車両オプション", "継続的なサポート", "カスタム見積り"], cta: "複数日利用を相談" },
    ]),
  },
  fleetSection: {
    ...pageCopy.en.fleetSection,
    eyebrow: "家族・グループ向け車両",
    title: "人数に合わせた",
    emphasis: "快適な車両。",
    copy: "掲載画像は参考です。実車写真、利用可能カラー、年式、内装はWhatsAppでお送りします。",
    filterAria: "車両を絞り込む",
    items: {
      ...pageCopy.en.fleetSection.items,
      labels: {
        ...pageCopy.en.fleetSection.items.labels,
        all: "すべて",
        seats: "席",
        confirmSeats: "チームに確認",
        displayReference: "参考画像",
        displayReferenceAlt: "カタログ参考画像",
        price: "料金",
        from: "から",
        requestQuotation: "見積り依頼",
        confirmAvailability: "空き状況確認",
        taxIncluded: "税金バッファ込み表示価格",
        upTo12Hours: "最大12時間",
        actualPhotosCta: "実車写真と空き状況を見る",
        disclaimerTitle: "カタログ画像について:",
        disclaimer: "車両画像は参考イメージです。実際の車両写真、カラー、年式、外装、内装、座席配置、空き状況は予約または支払い前にWhatsAppで確認します。",
      },
      categories: { luxury: "高級車", van: "グループバン", bus: "マイクロバス", mpv: "ファミリーMPV", suv: "SUV" },
      names: [
        "トヨタ アルファード 高級MPV",
        "トヨタ アルファード エグゼクティブMPV",
        "トヨタ ハイエース プレミオ プレミアムバン",
        "トヨタ ハイエース プレジデントスイート",
        "トヨタ ハイエース ラグジュアリーコミューター",
        "トヨタ ハイエース プレミオ スタンダード",
        "トヨタ ハイエース コミューター スタンダード",
        "いすゞ エルフ ショートマイクロバス",
        "トヨタ イノーバ ゼニックス ファミリーMPV",
        "トヨタ イノーバ ゼニックス ハイブリッド",
        "トヨタ イノーバ リボーン ファミリーMPV",
        "トヨタ フォーチュナー SUV",
        "三菱 パジェロスポーツ SUV",
        "トヨタ アバンザ / ダイハツ セニア コンパクトMPV",
      ],
      uses: buildFleetUses(
        "カップル、家族、エグゼクティブ移動向けのプレミアム専用車。",
        "プライバシーを高めた快適なプレミアム移動。",
        "グループ向けプレミアム送迎。",
        "プレミアムHiaceスイート送迎。人数、荷物、料金、空き状況はお問い合わせください。",
        "快適なグループ専用移動。",
        "家族や中規模グループ向け。",
        "大人数のプライベートグループ向け。",
        "中規模グループと調整された移動向け。",
        "家族やプライベート移動に快適。",
        "家族やプライベート移動にプレミアムな選択。",
        "日帰りツアーや家族旅行に快適。",
        "広いSUVが必要なプライベート移動向け。",
        "広いSUVが必要なプライベート移動向け。",
        "実用的なプライベート日帰り移動。",
      ),
    },
  },
  guidance: {
    eyebrow: "車両選びのサポート",
    title: "どの車両が合うか",
    emphasis: "迷っていますか？",
    copy: "座席数と荷物を含めた快適な人数は同じではありません。人数、スーツケース数、サイズをWhatsAppで共有いただければ、適切な車両をご提案します。",
    cta: "車両相談をする",
    checklist: ["人数", "スーツケース数", "スーツケースサイズ", "旅行日程", "お迎えエリア", "希望目的地"],
  },
  process: {
    eyebrow: "簡単な流れ",
    title: "最初のメッセージから",
    emphasis: "旅の当日まで。",
    items: [
      ["旅程を共有", "日程、人数、荷物、お迎えエリア、必要なサービスをWhatsAppで共有してください。"],
      ["おすすめを受け取る", "適切な車両と移動プランをご提案します。"],
      ["見積りを確認", "料金、時間、含まれる内容、含まれない内容、デポジットを記載した見積りを受け取ります。"],
      ["予約して出発", "必要なデポジットで予約を確定し、予約詳細を受け取ります。"],
    ],
  },
  destinations: {
    ...pageCopy.en.destinations,
    eyebrow: "バリ島インスピレーション",
    title: "あなたに合わせた",
    emphasis: "旅のルート。",
    copy: "下の画像は実際のバリ島の場所に合わせています。体験したい内容をお知らせください。適切な専用ルートをご提案します。",
    items: [
      ["ウブドの棚田", "テガラランの象徴的な緑の棚田", pageCopy.en.destinations.items[0][2]],
      ["ウルワツ寺院", "インド洋を望む崖上の寺院", pageCopy.en.destinations.items[1][2]],
      ["キンタマーニ & バトゥール山", "キンタマーニから望む火山の景色", pageCopy.en.destinations.items[2][2]],
      ["ジンバランの夕日", "ジンバランビーチの黄金色の時間", pageCopy.en.destinations.items[3][2]],
    ],
    note: "目的地画像は該当する場所を表しています。ルートと訪問時間は旅程、道路状況、確定したサービス時間により変わります。",
  },
  details: {
    ...pageCopy.en.details,
    eyebrow: "明確な内容",
    title: "出発前に",
    emphasis: "含まれる内容を確認。",
    includedTitle: "専用移動に含まれる内容",
    included: ["プロドライバー", "燃料", "エアコン付き車両", "無料ミネラルウォーター", "最大12時間利用", "標準バリ島ルート", "24時間WhatsAppサポート"],
    includedNote: "標準ルートにはウブド、キンタマーニ、タナロット、ブドゥグルなどが含まれる場合があります。",
    costsTitle: "追加費用の例",
    costs: ["高速料金", "駐車料金", "入場券", "食事", "個人費用", "延長時間", "確定見積りに記載されていないサービス"],
    charges: [["延長時間", "日額料金の10%", "1時間ごと"], ["カランガスム", "+ IDR 200,000"], ["シンガラジャ / 北バリ", "+ IDR 200,000"], ["ジュンブラナ / 西バリ", "+ IDR 200,000"]],
    chargeNote: "遠方エリア追加料金は最終ルート確認によります。",
  },
  policy: {
    eyebrow: "明確な条件",
    title: "予約とキャンセルを",
    emphasis: "シンプルに。",
    items: [
      ["予約確定", "選択した車両と日程を確保するため、総額の30%のデポジットが必要です。デポジット確認後に予約確定となります。"],
      ["24時間以上前のキャンセル", "サービス予定時刻の24時間以上前にご連絡いただいた場合、デポジットは全額返金対象です。"],
      ["24時間未満のキャンセル", "サービス予定時刻の24時間未満のキャンセルでは、30%のデポジットは返金不可です。"],
    ],
  },
  reviews: {
    ...pageCopy.en.reviews,
    eyebrow: "Googleレビュー",
    title: "ゲストの声",
    emphasis: "Google Mapsより。",
    copy: "レビューはKhas Bali - Luxury Car Rental & Premium Transport ServiceのGoogle Maps公式リスティングに直接リンクしています。",
    ratingLabel: "Google Mapsに表示されている評価",
    ratingAria: "5点満点中4.7",
    body: "最新の確認済みレビュー、写真、ビジネス情報をGoogle Mapsで直接ご覧ください。",
    facts: ["バリ・クタのレンタカー会社", "24時間営業", "Jl. LBC Sunset No.17A, Kuta, Badung"],
    cta: "Googleでレビューを見る",
  },
  faq: {
    ...pageCopy.en.faq,
    eyebrow: "知っておきたいこと",
    title: "よくある",
    emphasis: "質問。",
    copy: "迷っている場合はメッセージをお送りください。車両選びをお手伝いします。",
    cta: "WhatsAppで相談",
    items: [
      ["予約方法は？", "旅行日程、人数、荷物、お迎えエリア、必要なサービスをWhatsAppでPremium Bali Travelへお送りください。適切な車両をご提案し、お見積りをお送りします。"],
      ["デポジットは必要ですか？", "はい。選択した車両と日程を確保するため、30%のデポジットが必要です。"],
      ["車両は何時間利用できますか？", "掲載の日額料金は最大12時間まで含まれます。延長時間は車両の日額料金の10%を1時間ごとに頂戴します。"],
      ["日額料金には何が含まれますか？", "日額料金にはプロドライバー、燃料、エアコン付き車両、ミネラルウォーター、最大12時間の利用が含まれます。"],
      ["何が含まれていませんか？", "高速料金、駐車料金、入場券、食事、個人費用、延長時間、確定見積りに記載されていないサービスは含まれません。"],
      ["荷物に合う車両を提案できますか？", "はい。人数、スーツケース数、サイズをWhatsAppで共有いただければ、適切な車両をご提案します。"],
      ["遠方エリアの追加料金はありますか？", "カランガスム、シンガラジャ/北バリ、ジュンブラナ/西バリは、最終ルート確認によりエリアごとにIDR 200,000の追加料金が発生する場合があります。"],
      ["キャンセルポリシーは？", "サービス予定時刻の24時間以上前にご連絡いただいた場合、デポジットは全額返金対象です。24時間未満のキャンセルではデポジットは返金不可です。"],
      ["いつでもサポートを受けられますか？", "はい。Premium Bali Travelは24時間WhatsAppサポートを提供しています。"],
    ],
  },
  finalCta: {
    eyebrow: "ご家族・グループ向けプレミアム送迎",
    title: "予約前に",
    emphasis: "実車を確認。",
    copy: "人数、荷物、希望カラーを共有してください。おすすめ車両、実車写真、明確なお見積りをWhatsAppでお送りします。",
    cta: "車両選びを相談",
  },
  footer: {
    copy: "WhatsAppのシンプルなやり取りで手配できる、バリ島のプライベート送迎と柔軟な旅。",
    explore: "見る",
    contact: "連絡先",
    hours: "24時間・毎日対応",
    privacy: "プライバシーポリシー",
    bookingPolicy: "予約・キャンセルポリシー",
    floating: "WhatsAppで相談",
    floatingAria: "Premium Bali TravelにWhatsAppで相談",
  },
  seoDescription: "ご家族やグループ向けのバリ島プライベート送迎・ドライバー付き車両手配。",
};

pageCopy.ko = {
  ...pageCopy.ja,
  nav: ["홈", "서비스", "차량", "이용 방법", "정책", "FAQ"],
  cta: "발리 여행 상담",
  hero: {
    eyebrow: "가족과 단체를 위한 발리 프리미엄 교통",
    title: "발리 전용 드라이버,",
    emphasis: "그룹에 맞게 추천",
    copy: "최대 15명까지 가족과 단체를 위한 프라이빗 교통 서비스입니다. 인원, 짐, 일정을 알려주시면 적합한 차량을 추천하고 실제 차량 사진을 WhatsApp으로 보내드립니다.",
    primary: "차량 찾기",
    secondary: "차량 & 가격 보기",
    proof: ["예약 전 실제 사진", "짐에 맞는 차량", "24/7 WhatsApp 지원"],
  },
  finder: {
    eyebrow: "무료 차량 상담",
    title: "알맞은 차량 찾기",
    emphasis: "발리 그룹 여행을 위해.",
    copy: "편안한 좌석, 충분한 짐 공간, 도착 전 명확한 안내가 필요한 가족과 단체 여행객을 위한 프라이빗 교통 서비스입니다.",
    trust: ["예약 의무 없음", "WhatsApp으로 실제 차량 사진 제공", "결제 전 색상과 연식 확인"],
    legends: ["1. 인원은 몇 명인가요?", "2. 짐은 얼마나 있나요?", "3. 필요한 서비스는 무엇인가요?", "4. 선호 차량 색상"],
    guests: ["1-4명", "5-7명", "8-10명", "11-15명"],
    luggage: ["짐 적음", "보통 짐", "캐리어 많음"],
    services: ["공항 픽업", "발리 일일 투어", "프라이빗 드라이버", "여러 날 이용"],
    colors: ["흰색", "검정", "실버", "상관없음"],
    submit: "추천 차량 & 실제 사진 받기",
    helper: "선택 내용은 WhatsApp 메시지에 자동 포함됩니다.",
  },
  intro: {
    eyebrow: "Premium Bali Travel을 선택하는 이유",
    title: "발리를 더 편하게",
    emphasis: "이동하는 방법.",
    copy: "그룹 인원과 일정에 맞춰 세심하게 구성한 교통 서비스입니다.",
    benefits: [
      ["route", "유연한 목적지", "방문하고 싶은 장소에 맞춰 경로를 계획할 수 있습니다."],
      ["vehicle", "알맞은 차량", "인원과 짐 정보를 알려주시면 적합한 차량을 추천합니다."],
      ["support", "현지 지원", "여행 전과 여행 중 WhatsApp으로 지원을 받을 수 있습니다."],
    ],
    note: "신뢰할 수 있는 현지 교통 파트너와 함께 발리 여행에 맞는 차량을 제공합니다.",
  },
  seoDescription: "가족과 단체를 위한 발리 프라이빗 차량 및 기사 포함 교통 서비스.",
};

pageCopy.zh = {
  ...pageCopy.ja,
  nav: ["首页", "服务", "车队", "流程", "政策", "FAQ"],
  cta: "规划巴厘岛行程",
  hero: {
    eyebrow: "适合家庭与团体的巴厘岛高端交通",
    title: "您的巴厘岛司机，",
    emphasis: "按团队需求匹配",
    copy: "为最多15人的家庭和团体提供私人交通。告诉我们人数、行李和行程，我们会推荐合适车辆，并通过WhatsApp发送实际车辆照片。",
    primary: "查找车辆",
    secondary: "查看车队与价格",
    proof: ["预订前查看实车照片", "车辆匹配行李", "24/7 WhatsApp 协助"],
  },
  finder: {
    eyebrow: "免费车辆咨询",
    title: "找到合适车辆",
    emphasis: "适合您的巴厘岛团队。",
    copy: "我们专注于为家庭和团体提供私人交通，兼顾舒适座位、合适行李空间和抵达前清晰协助。",
    trust: ["无需立即预订", "通过WhatsApp发送实车照片", "付款前确认颜色和年份"],
    legends: ["1. 有多少位客人？", "2. 行李多少？", "3. 需要什么服务？", "4. 偏好车辆颜色"],
    guests: ["1-4位", "5-7位", "8-10位", "11-15位"],
    luggage: ["轻量行李", "中等行李", "很多行李箱"],
    services: ["机场接送", "巴厘岛一日游", "私人司机", "多日交通"],
    colors: ["白色", "黑色", "银色", "无偏好"],
    submit: "获取推荐与实车照片",
    helper: "您的选择会自动加入WhatsApp消息。",
  },
  intro: {
    eyebrow: "为什么选择 Premium Bali Travel",
    title: "更舒适的方式",
    emphasis: "畅游巴厘岛。",
    copy: "根据您的团队和行程安排交通，而不是让行程迁就车辆。",
    benefits: [
      ["route", "灵活目的地", "根据您想体验的地点规划路线。"],
      ["vehicle", "合适车辆", "分享团队和行李信息，我们会推荐合适车型。"],
      ["support", "本地协助", "行前和旅途中都可通过WhatsApp获得协助。"],
    ],
    note: "我们与可信赖的本地交通伙伴合作，为您的巴厘岛行程提供精选车辆。",
  },
  seoDescription: "面向家庭和团体的巴厘岛私人交通与带司机包车服务。",
};

pageCopy.ja.wa = {
  main: "こんにちは Premium Bali Travel。バリ島旅行を計画しており、送迎の相談をしたいです。\n\n旅行日程:\n人数:\n荷物:\nホテルまたはエリア:\n必要なサービス:",
  president: "こんにちは。President Suite Hiaceに興味があります。定員、荷物容量、料金、空き状況を教えてください。",
  recommendation: ({ guests, luggage, service, color }: RecommendationInput) =>
    `こんにちは Premium Bali Travel。車両のおすすめをお願いします。\n\n人数: ${guests}\n荷物: ${luggage}\nサービス: ${service}\n希望カラー: ${color}\n旅行日:\nお迎えエリア:\n目的地またはホテル:\n\n実車写真、利用可能カラー、車両年式、内装構成、見積りを送ってください。`,
  fleet: (name: string) =>
    `こんにちは Premium Bali Travel。${name}に興味があります。\n\n旅行日:\n人数:\n荷物:\n希望カラー:\n必要なサービス:\n\n実車写真、利用可能カラー、車両年式、内装構成、料金、空き状況を送ってください。`,
  notSelected: "未選択",
  noPreference: "希望なし",
};

Object.assign(pageCopy.ko, {
  wa: {
    main: "안녕하세요 Premium Bali Travel, 발리 여행을 계획 중이며 교통 도움이 필요합니다.\n\n여행 날짜:\n인원:\n짐:\n호텔 또는 지역:\n필요한 서비스:",
    president: "안녕하세요. President Suite Hiace에 관심 있습니다. 탑승 가능 인원, 짐 허용량, 가격, 가능 여부를 보내주세요.",
    recommendation: ({ guests, luggage, service, color }: RecommendationInput) =>
      `안녕하세요 Premium Bali Travel, 차량 추천이 필요합니다.\n\n인원: ${guests}\n짐: ${luggage}\n서비스: ${service}\n선호 색상: ${color}\n여행 날짜:\n픽업 지역:\n목적지 또는 호텔:\n\n실제 차량 사진, 가능한 색상, 차량 연식, 내부 구성, 견적을 보내주세요.`,
    fleet: (name: string) =>
      `안녕하세요 Premium Bali Travel, ${name}에 관심 있습니다.\n\n여행 날짜:\n인원:\n짐:\n선호 색상:\n필요한 서비스:\n\n실제 차량 사진, 가능한 색상, 차량 연식, 내부 구성, 가격, 가능 여부를 보내주세요.`,
    notSelected: "선택 안 함",
    noPreference: "상관없음",
  },
  servicesSection: {
    eyebrow: "준비 가능한 서비스",
    title: "편안하게 이동하는",
    emphasis: "네 가지 방법.",
    items: buildServices([
      { title: "기사 포함 전용 차량", desc: "전문 드라이버가 운전하는 전용 차량으로 발리를 이동하세요.", points: ["최대 12시간 이용", "유연한 발리 경로", "그룹에 맞는 차량 선택", "WhatsApp 견적"], cta: "전용 차량 문의" },
      { title: "공항 픽업/샌딩", desc: "발리 공항과 숙소 사이의 도착 또는 출발 이동을 전용 차량으로 제공합니다.", points: ["도착 또는 출발 이동", "인원과 짐에 맞는 차량", "프라이빗 교통", "WhatsApp 견적"], cta: "공항 이동 예약" },
      { title: "맞춤 발리 일일 투어", desc: "방문하고 싶은 발리 목적지에 맞춰 유연한 하루 일정을 만듭니다.", points: ["유연한 일정", "전담 드라이버", "차량 옵션", "최대 12시간 이용"], cta: "일일 투어 상담" },
      { title: "여러 날 교통", desc: "발리 휴가 여러 날에 맞춘 하나의 교통 계획을 준비합니다.", points: ["장기 숙박에 적합", "차량 옵션", "지속적인 이동 지원", "맞춤 견적"], cta: "여러 날 이용 상담" },
    ]),
  },
  fleetSection: {
    ...pageCopy.ko.fleetSection,
    eyebrow: "가족 & 단체 차량",
    title: "그룹에 맞춘",
    emphasis: "편안한 차량.",
    copy: "카탈로그 이미지는 참고용입니다. 실제 차량 사진, 가능한 색상, 연식, 내부는 WhatsApp으로 보내드립니다.",
    filterAria: "차량 필터",
    items: {
      ...pageCopy.ko.fleetSection.items,
      labels: {
        ...pageCopy.ko.fleetSection.items.labels,
        all: "전체",
        seats: "석",
        confirmSeats: "팀에 확인",
        displayReference: "참고 이미지",
        displayReferenceAlt: "카탈로그 참고 이미지",
        price: "가격",
        from: "시작가",
        requestQuotation: "견적 요청",
        confirmAvailability: "가능 여부 확인",
        taxIncluded: "세금 버퍼 포함 표시가",
        upTo12Hours: "최대 12시간",
        actualPhotosCta: "실제 사진 & 가능 여부 받기",
        disclaimerTitle: "카탈로그 이미지 안내:",
        disclaimer: "차량 이미지는 참고용입니다. 실제 차량 사진, 가능한 색상, 제작 연도, 외관, 내부, 좌석 구성, 가능 여부는 예약 또는 결제 전에 WhatsApp으로 확인됩니다.",
      },
      categories: { luxury: "프리미엄 차량", van: "단체 밴", bus: "마이크로버스", mpv: "패밀리 MPV", suv: "SUV" },
      names: [
        "토요타 알파드 럭셔리 MPV",
        "토요타 알파드 이그제큐티브 MPV",
        "토요타 하이에이스 프레미오 프리미엄 밴",
        "토요타 하이에이스 프레지던트 스위트",
        "토요타 하이에이스 럭셔리 커뮤터",
        "토요타 하이에이스 프레미오 스탠다드",
        "토요타 하이에이스 커뮤터 스탠다드",
        "이스즈 ELF 숏 마이크로버스",
        "토요타 이노바 제닉스 패밀리 MPV",
        "토요타 이노바 제닉스 하이브리드",
        "토요타 이노바 리본 패밀리 MPV",
        "토요타 포튜너 SUV",
        "미쓰비시 파제로 스포츠 SUV",
        "토요타 아반자 / 다이하츠 제니아 컴팩트 MPV",
      ],
      uses: buildFleetUses(
        "커플, 가족, 비즈니스 이동을 위한 프리미엄 전용 차량.",
        "더 높은 프라이버시가 있는 편안한 프리미엄 이동.",
        "프리미엄 단체 교통.",
        "프리미엄 Hiace 스위트 교통. 인원, 짐, 가격, 가능 여부는 팀에 문의하세요.",
        "편안한 프라이빗 단체 이동.",
        "가족과 중형 단체에 적합.",
        "대형 프라이빗 단체에 적합.",
        "중형 그룹과 조율된 이동에 적합.",
        "가족 및 프라이빗 이동에 편안함.",
        "가족 및 프라이빗 이동을 위한 프리미엄 선택.",
        "일일 투어와 가족 여행에 편안함.",
        "넓은 SUV가 필요한 프라이빗 이동.",
        "넓은 SUV가 필요한 프라이빗 이동.",
        "실용적인 프라이빗 일일 이동.",
      ),
    },
  },
  guidance: {
    eyebrow: "차량 안내",
    title: "어떤 차량이 맞는지",
    emphasis: "잘 모르시나요?",
    copy: "좌석 수와 짐을 포함한 실제 편안한 수용 인원은 다를 수 있습니다. 인원, 캐리어 개수와 크기를 WhatsApp으로 알려주시면 적합한 차량을 추천합니다.",
    cta: "차량 추천 받기",
    checklist: ["승객 수", "캐리어 수", "캐리어 크기", "여행 날짜", "픽업 지역", "선호 목적지"],
  },
  process: {
    eyebrow: "간단한 절차",
    title: "첫 메시지부터",
    emphasis: "여행까지.",
    items: [
      ["여행 정보 공유", "날짜, 인원, 짐, 픽업 지역, 필요한 서비스를 WhatsApp으로 알려주세요."],
      ["추천 받기", "적합한 차량과 이동 계획을 추천해드립니다."],
      ["견적 확인", "가격, 시간, 포함/불포함 사항, 보증금이 적힌 견적을 받습니다."],
      ["확정 후 이동", "필요한 보증금으로 예약을 확정하고 예약 상세를 받습니다."],
    ],
  },
  destinations: {
    ...pageCopy.ko.destinations,
    eyebrow: "발리 여행 영감",
    title: "당신에게 맞춘",
    emphasis: "여정.",
    copy: "아래 이미지는 실제 발리 장소와 연결되어 있습니다. 원하는 경험을 알려주시면 적합한 프라이빗 경로를 도와드립니다.",
    items: [
      ["우붓 계단식 논", "뜨갈랄랑의 상징적인 초록 계단식 논", pageCopy.en.destinations.items[0][2]],
      ["울루와뚜 사원", "인도양 위 절벽 사원", pageCopy.en.destinations.items[1][2]],
      ["킨타마니 & 바투르 산", "킨타마니에서 바라보는 화산 풍경", pageCopy.en.destinations.items[2][2]],
      ["짐바란 선셋", "짐바란 해변의 황금빛 시간", pageCopy.en.destinations.items[3][2]],
    ],
    note: "목적지 이미지는 해당 장소를 나타냅니다. 경로와 방문 시간은 일정, 도로 상황, 확정된 서비스 시간에 따라 달라집니다.",
  },
  details: {
    ...pageCopy.ko.details,
    eyebrow: "투명한 세부사항",
    title: "출발 전 포함 사항을",
    emphasis: "확인하세요.",
    includedTitle: "프라이빗 이동에 포함되는 것",
    included: ["전문 드라이버", "연료", "에어컨 차량", "무료 생수", "최대 12시간 이용", "표준 발리 경로", "24/7 WhatsApp 지원"],
    includedNote: "표준 경로에는 우붓, 킨타마니, 타나롯, 브두굴 등이 포함될 수 있습니다.",
    costsTitle: "고려할 추가 비용",
    costs: ["통행료", "주차비", "입장권", "식사", "개인 비용", "추가 시간", "확정 견적에 없는 서비스"],
    charges: [["초과 시간", "일일 요금의 10%", "추가 1시간당"], ["Karangasem", "+ IDR 200,000"], ["Singaraja / 북부 발리", "+ IDR 200,000"], ["Jembrana / 서부 발리", "+ IDR 200,000"]],
    chargeNote: "장거리 지역 추가 요금은 최종 경로 확인에 따라 달라집니다.",
  },
  policy: {
    eyebrow: "명확한 조건",
    title: "간단한 예약",
    emphasis: "및 취소.",
    items: [
      ["예약 확정", "선택한 차량과 날짜를 확보하려면 총 예약 금액의 30% 보증금이 필요합니다. 보증금 수령 후 예약이 확정됩니다."],
      ["서비스 24시간 전 취소", "예정 서비스 24시간 전까지 Premium Bali Travel에 알리면 보증금 전액 환불 대상입니다."],
      ["서비스 24시간 이내 취소", "서비스 24시간 이내 취소 시 30% 보증금은 환불되지 않습니다."],
    ],
  },
  reviews: {
    ...pageCopy.ko.reviews,
    eyebrow: "Google 리뷰",
    title: "고객 후기",
    emphasis: "Google Maps에서.",
    copy: "리뷰는 Khas Bali - Luxury Car Rental & Premium Transport Service의 검증된 Google Maps 목록으로 직접 연결됩니다.",
    ratingLabel: "Google Maps에 표시된 평점",
    ratingAria: "5점 만점에 4.7점",
    body: "최근 검증된 고객 리뷰, 사진, 비즈니스 정보를 Google Maps에서 직접 확인하세요.",
    facts: ["발리 쿠타의 렌터카 업체", "24시간 영업", "Jl. LBC Sunset No.17A, Kuta, Badung"],
    cta: "Google 리뷰 보기",
  },
  faq: {
    ...pageCopy.ko.faq,
    eyebrow: "알아두면 좋은 점",
    title: "자주 묻는",
    emphasis: "질문.",
    copy: "아직 고민되시나요? 메시지를 보내주시면 선택을 도와드립니다.",
    cta: "WhatsApp 상담",
    items: [
      ["예약은 어떻게 하나요?", "여행 날짜, 승객 수, 짐, 픽업 지역, 필요한 서비스를 WhatsApp으로 Premium Bali Travel에 보내주세요. 적합한 차량을 추천하고 견적을 보내드립니다."],
      ["보증금이 필요한가요?", "네. 선택한 차량과 날짜를 확보하려면 30% 보증금이 필요합니다."],
      ["차량은 몇 시간 이용할 수 있나요?", "표시된 일일 요금은 최대 12시간 이용을 포함합니다. 추가 시간은 차량 일일 요금의 10%가 시간당 부과됩니다."],
      ["일일 요금에는 무엇이 포함되나요?", "일일 요금에는 전문 드라이버, 연료, 에어컨 차량, 생수, 최대 12시간 이용이 포함됩니다."],
      ["무엇이 포함되지 않나요?", "통행료, 주차비, 입장권, 식사, 개인 비용, 추가 시간, 확정 견적에 적히지 않은 서비스는 포함되지 않습니다."],
      ["짐에 맞는 차량을 추천해줄 수 있나요?", "네. 승객 수, 캐리어 개수와 크기를 WhatsApp으로 알려주시면 적합한 차량을 추천합니다."],
      ["먼 지역은 추가 요금이 있나요?", "Karangasem, Singaraja/북부 발리, Jembrana/서부 발리는 최종 경로 확인에 따라 지역당 IDR 200,000 추가 요금이 발생할 수 있습니다."],
      ["취소 정책은 어떻게 되나요?", "서비스 예정 시간 최소 24시간 전까지 알려주시면 보증금 전액 환불이 가능합니다. 24시간 이내 취소 시 보증금은 환불되지 않습니다."],
      ["언제든지 도움을 받을 수 있나요?", "네. Premium Bali Travel은 24/7 WhatsApp 지원을 제공합니다."],
    ],
  },
  finalCta: {
    eyebrow: "가족과 단체를 위한 프리미엄 교통",
    title: "예약 전 실제 차량을",
    emphasis: "확인하세요.",
    copy: "인원, 짐, 선호 색상을 알려주세요. 추천 차량, 실제 차량 사진, 명확한 견적을 WhatsApp으로 보내드립니다.",
    cta: "차량 선택 도움받기",
  },
  footer: {
    copy: "간단한 WhatsApp 대화로 준비되는 발리 프라이빗 교통과 유연한 여행.",
    explore: "탐색",
    contact: "연락처",
    hours: "24시간, 주 7일",
    privacy: "개인정보 처리방침",
    bookingPolicy: "예약 및 취소 정책",
    floating: "WhatsApp 상담",
    floatingAria: "Premium Bali Travel에 WhatsApp으로 상담",
  },
});

Object.assign(pageCopy.zh, {
  wa: {
    main: "您好 Premium Bali Travel，我正在计划巴厘岛旅行，需要交通协助。\n\n旅行日期:\n客人人数:\n行李:\n酒店或区域:\n所需服务:",
    president: "您好，我对 President Suite Hiace 感兴趣。请发送载客人数、行李容量、价格和可用情况。",
    recommendation: ({ guests, luggage, service, color }: RecommendationInput) =>
      `您好 Premium Bali Travel，我需要车辆推荐。\n\n客人: ${guests}\n行李: ${luggage}\n服务: ${service}\n偏好颜色: ${color}\n旅行日期:\n接送区域:\n目的地或酒店:\n\n请发送实际车辆照片、可选颜色、车辆年份、内饰配置和报价。`,
    fleet: (name: string) =>
      `您好 Premium Bali Travel，我对 ${name} 感兴趣。\n\n旅行日期:\n客人:\n行李:\n偏好颜色:\n所需服务:\n\n请发送实际车辆照片、可选颜色、车辆年份、内饰配置、价格和可用情况。`,
    notSelected: "未选择",
    noPreference: "无偏好",
  },
  servicesSection: {
    eyebrow: "我们可安排",
    title: "四种简单方式",
    emphasis: "舒适出行。",
    items: buildServices([
      { title: "带司机私人用车", desc: "乘坐私人车辆并由专业司机服务，轻松游览巴厘岛。", points: ["最多使用12小时", "灵活巴厘岛路线", "按团队选择车辆", "通过WhatsApp报价"], cta: "咨询私人司机" },
      { title: "机场接送", desc: "巴厘岛机场与酒店之间的抵达或离境私人交通。", points: ["抵达或离境接送", "车辆匹配乘客和行李", "私人交通", "通过WhatsApp报价"], cta: "安排机场接送" },
      { title: "定制巴厘岛一日游", desc: "根据您想去的巴厘岛目的地，打造灵活的一日行程。", points: ["灵活行程", "专属司机", "车辆选择", "最多使用12小时"], cta: "规划一日游" },
      { title: "多日交通服务", desc: "为多天巴厘岛假期安排统一交通计划。", points: ["适合长期停留", "车辆选择", "持续交通协助", "定制报价"], cta: "咨询多日行程" },
    ]),
  },
  fleetSection: {
    ...pageCopy.zh.fleetSection,
    eyebrow: "家庭与团体车队",
    title: "舒适车辆",
    emphasis: "匹配您的团队。",
    copy: "车辆图片仅作展示参考。实际车辆照片、可选颜色、年份和内饰将通过WhatsApp发送。",
    filterAria: "筛选车辆",
    items: {
      ...pageCopy.zh.fleetSection.items,
      labels: {
        ...pageCopy.zh.fleetSection.items.labels,
        all: "全部",
        seats: "座",
        confirmSeats: "请与团队确认",
        displayReference: "展示参考",
        displayReferenceAlt: "目录展示参考",
        price: "价格",
        from: "起",
        requestQuotation: "请求报价",
        confirmAvailability: "确认可用情况",
        taxIncluded: "显示价已含税费缓冲",
        upTo12Hours: "最多12小时",
        actualPhotosCta: "获取实车照片与可用情况",
        disclaimerTitle: "目录展示说明:",
        disclaimer: "车辆图片仅为参考示意。实际车辆照片、可用颜色、生产年份、外观、内饰、座椅配置和可用情况将在预订或付款前通过WhatsApp发送并确认。",
      },
      categories: { luxury: "高端车型", van: "团体商务车", bus: "小巴", mpv: "家庭MPV", suv: "SUV" },
      names: [
        "丰田埃尔法豪华MPV",
        "丰田埃尔法行政MPV",
        "丰田海狮 Premio 高端商务车",
        "丰田海狮总统套房",
        "丰田海狮豪华通勤车",
        "丰田海狮 Premio 标准版",
        "丰田海狮 Commuter 标准版",
        "五十铃 ELF 短轴小巴",
        "丰田 Innova Zenix 家庭MPV",
        "丰田 Innova Zenix 混动高端MPV",
        "丰田 Innova Reborn 家庭MPV",
        "丰田 Fortuner SUV",
        "三菱帕杰罗 Sport SUV",
        "丰田 Avanza / 大发 Xenia 紧凑MPV",
      ],
      uses: buildFleetUses(
        "适合情侣、家庭或商务出行的高端私人车辆。",
        "更具隐私感的舒适高端出行。",
        "高端团体交通。",
        "高端 Hiace 套房交通。请联系我们确认容量、行李、价格和可用情况。",
        "舒适的私人团体出行。",
        "适合家庭和中型私人团体。",
        "适合大型私人团体。",
        "适合中型团体和协调交通。",
        "舒适的家庭和私人出行。",
        "高端家庭和私人出行选择。",
        "适合一日游和家庭旅行。",
        "适合需要宽敞SUV的私人出行。",
        "适合需要宽敞SUV的私人出行。",
        "实用的私人一日出行。",
      ),
    },
  },
  guidance: {
    eyebrow: "车辆建议",
    title: "不确定哪辆车",
    emphasis: "适合您的团队？",
    copy: "座位数不一定等于携带行李时的舒适容量。请通过WhatsApp告知乘客人数、行李箱数量和尺寸，我们会推荐合适车辆。",
    cta: "获取车辆推荐",
    checklist: ["乘客人数", "行李箱数量", "行李箱尺寸", "旅行日期", "接送区域", "偏好目的地"],
  },
  process: {
    eyebrow: "简单流程",
    title: "从第一条消息",
    emphasis: "到您的旅程。",
    items: [
      ["告诉我们您的行程", "通过WhatsApp分享日期、团队人数、行李、接送区域和服务需求。"],
      ["收到推荐", "我们会推荐合适车辆和交通安排。"],
      ["查看报价", "收到包含价格、时长、包含项目、不包含项目和定金的书面报价。"],
      ["确认并出行", "支付所需定金确认预订，并收到预订详情。"],
    ],
  },
  destinations: {
    ...pageCopy.zh.destinations,
    eyebrow: "巴厘岛灵感",
    title: "为您定制的",
    emphasis: "旅程。",
    copy: "以下每张图片都对应真实的巴厘岛地点。告诉我们您想体验什么，我们会协助安排合适的私人路线。",
    items: [
      ["乌布稻田梯田", "德格拉朗标志性的绿色梯田", pageCopy.en.destinations.items[0][2]],
      ["乌鲁瓦图寺", "印度洋上方的悬崖寺庙", pageCopy.en.destinations.items[1][2]],
      ["金塔马尼与巴atur火山", "从金塔马尼眺望火山景观", pageCopy.en.destinations.items[2][2]],
      ["金巴兰日落", "金巴兰海滩的金色时刻", pageCopy.en.destinations.items[3][2]],
    ],
    note: "目的地图片代表所列地点。路线和参观时间取决于您的行程、道路情况和确认的服务时长。",
  },
  details: {
    ...pageCopy.zh.details,
    eyebrow: "透明细节",
    title: "出发前了解",
    emphasis: "包含内容。",
    includedTitle: "您的私人行程包含",
    included: ["专业司机", "燃油", "空调车辆", "免费矿泉水", "最多使用12小时", "标准巴厘岛路线", "24/7 WhatsApp 协助"],
    includedNote: "标准路线可能包括乌布、金塔马尼、海神庙和贝都古。",
    costsTitle: "需要考虑的额外费用",
    costs: ["过路费", "停车费", "门票", "餐食", "个人消费", "超时费用", "确认报价中未列出的服务"],
    charges: [["超时", "日租价格的10%", "每额外一小时"], ["Karangasem", "+ IDR 200,000"], ["Singaraja / 北巴厘", "+ IDR 200,000"], ["Jembrana / 西巴厘", "+ IDR 200,000"]],
    chargeNote: "远距离区域附加费以最终路线确认为准。",
  },
  policy: {
    eyebrow: "清晰条款",
    title: "简单预订",
    emphasis: "与取消。",
    items: [
      ["预订确认", "需支付总预订金额30%的定金，以保留所选车辆和日期。收到定金后预订即确认。"],
      ["服务前至少24小时取消", "客户在服务前至少24小时通知 Premium Bali Travel，可获得定金全额退款。"],
      ["服务前少于24小时取消", "若在服务前少于24小时取消，30%定金不予退还。"],
    ],
  },
  reviews: {
    ...pageCopy.zh.reviews,
    eyebrow: "Google 评价",
    title: "客人反馈",
    emphasis: "来自 Google Maps。",
    copy: "评价直接链接到 Khas Bali - Luxury Car Rental & Premium Transport Service 的 Google Maps 认证商家页面。",
    ratingLabel: "Google Maps 显示的评分",
    ratingAria: "4.7星，共5星",
    body: "直接在 Google Maps 查看近期认证客人评价、照片和商家详情。",
    facts: ["巴厘岛库塔租车机构", "24小时营业", "Jl. LBC Sunset No.17A, Kuta, Badung"],
    cta: "在 Google 查看评价",
  },
  faq: {
    ...pageCopy.zh.faq,
    eyebrow: "须知",
    title: "常见",
    emphasis: "问题。",
    copy: "还不确定？给我们发消息，我们会帮助您选择。",
    cta: "WhatsApp 咨询",
    items: [
      ["如何预订？", "请通过WhatsApp联系 Premium Bali Travel，并发送旅行日期、乘客人数、行李、接送区域和服务需求。我们会推荐合适车辆并发送报价。"],
      ["需要支付定金吗？", "是的。需要支付30%定金以保留所选车辆和日期。"],
      ["车辆可以使用多久？", "公布的日租价格包含最多12小时使用。额外时间按车辆日租价格的10%每小时收取。"],
      ["日租价格包含什么？", "日租价格包含专业司机、燃油、空调车辆、矿泉水以及最多12小时使用。"],
      ["不包含什么？", "过路费、停车费、门票、餐食、个人消费、额外时间以及确认报价中未列出的服务不包含在内。"],
      ["可以根据我的行李推荐车辆吗？", "可以。请通过WhatsApp发送乘客人数、行李箱数量和尺寸，我们会推荐合适车辆。"],
      ["远距离区域有附加费吗？", "Karangasem、Singaraja/北巴厘和Jembrana/西巴厘可能按最终路线确认，每个区域加收IDR 200,000。"],
      ["取消政策是什么？", "若在服务前至少24小时通知我们，可全额退还定金。服务前少于24小时取消，定金不予退还。"],
      ["是否随时提供协助？", "是的。Premium Bali Travel 提供24/7 WhatsApp协助。"],
    ],
  },
  finalCta: {
    eyebrow: "适合家庭与团体的高端交通",
    title: "预订前查看",
    emphasis: "实际车辆。",
    copy: "分享您的团队人数、行李和颜色偏好。我们会通过WhatsApp发送推荐、实际车辆照片和清晰报价。",
    cta: "帮我选择车辆",
  },
  footer: {
    copy: "通过一次简单的WhatsApp对话，安排巴厘岛私人交通和灵活行程。",
    explore: "浏览",
    contact: "联系",
    hours: "全天24小时，每周7天",
    privacy: "隐私政策",
    bookingPolicy: "预订与取消政策",
    floating: "WhatsApp 咨询",
    floatingAria: "通过WhatsApp联系 Premium Bali Travel",
  },
});
