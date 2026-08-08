import { TailoringService } from '../types';

export const tailoringServices: TailoringService[] = [
  {
    id: "serv-1",
    title: "Custom Blouse Stitching",
    category: "Stitching",
    shortDescription: "Get blouses tailored with perfect shoulder fit, padded or unpadded cups, custom necklines & piping.",
    fullDescription: "Our specialty service! Handled personally by our master tailor with 30+ years experience. Choose your preferred neck shape (U, V, Boat, Deep neck, High neck), sleeve length, back opening with hooks/dori, and contrast piping.",
    startingPrice: "Starts from ₹250",
    turnaroundTime: "2-4 Days",
    iconName: "Scissors",
    image: "https://images.unsplash.com/photo-1610030469829-1b392a831518?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Padded or Non-padded options",
      "Exact shoulder line fitting (No slipping straps)",
      "Inner lining with overlock finishing",
      "Designer back hooks, zip or tassel dori"
    ],
    popular: true
  },
  {
    id: "serv-2",
    title: "Chudidar, Salwar & Kurti Stitching",
    category: "Stitching",
    shortDescription: "Tailored Punjabi suits, Straight pants, Anarkalis & Patiyalas from your unstitched dress material.",
    fullDescription: "Bring us your unstitched dress material or suit set. We measure carefully to craft comfortable side slits, precise chest fittings, and custom pant bottoms (Patiyala, Palazzo, Straight Pants, or Chudidar).",
    startingPrice: "Starts from ₹350",
    turnaroundTime: "3-5 Days",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Custom neckline styling",
      "Reinforced side slit stitching",
      "Comfortable elastic or drawstring waistbands",
      "Matching dupatta edging/interlock"
    ],
    popular: true
  },
  {
    id: "serv-3",
    title: "Express Alterations & Fitting",
    category: "Alteration",
    shortDescription: "Quick waist tightening, hem shortening, sleeve adjustment & fitting fix for ready-made dresses.",
    fullDescription: "Bought a dress online or from a mall that doesn't fit right? Bring it to our shop! We perform seamless length shortening, waist tapering, shoulder adjustment, and zip replacements.",
    startingPrice: "Starts from ₹50",
    turnaroundTime: "Same Day / 24 Hours",
    iconName: "CheckCircle2",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Same-day express service available",
      "Original hem matching",
      "Jeans, trousers & dress fitting",
      "Zip & hook repair"
    ],
    popular: true
  },
  {
    id: "serv-4",
    title: "Saree Fall, Pico & Edge Work",
    category: "Custom Design",
    shortDescription: "High-grade cotton saree fall stitching, zig-zag pico edging, and tassel knots.",
    fullDescription: "Keep your precious sarees drape-ready. We attach color-matched pre-shrunk cotton falls with invisible stitching and perform clean zig-zag pico edging along both ends.",
    startingPrice: "Starts from ₹80",
    turnaroundTime: "1-2 Days",
    iconName: "Feather",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Color-matched cotton fall",
      "Neat pico zig-zag machine edging",
      "Hand tassel/latkan work available",
      "Careful iron finishing included"
    ],
    popular: false
  },
  {
    id: "serv-5",
    title: "Kids Ethnic Wear Stitching",
    category: "Stitching",
    shortDescription: "Comfortable, itch-free festive lehengas, frocks, and kurti sets for young boys and girls.",
    fullDescription: "We understand children need skin-safe internal linings! We stitch cute, colorful kids outfits with soft inner cotton linings so they can play and celebrate comfortably without itching.",
    startingPrice: "Starts from ₹300",
    turnaroundTime: "3-5 Days",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Ultra-soft cotton inner lining",
      "Growth margins left inside for future expansion",
      "Cute custom trims & bows",
      "Scratch-free zips & soft elastics"
    ],
    popular: false
  },
  {
    id: "serv-6",
    title: "Gents Shirt & Trouser Alteration",
    category: "Alteration",
    shortDescription: "Precision alteration for men's formal shirts, trousers, jeans, and traditional kurtas.",
    fullDescription: "Get crisp, tailored fitting for gentlemen's formal shirts and trousers. From sleeve length shortening to waist adjustment and taper fitting.",
    startingPrice: "Starts from ₹70",
    turnaroundTime: "1-2 Days",
    iconName: "Ruler",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Crisp taper fitting",
      "Trouser length hem with original stitch",
      "Collar & cuff adjustments",
      "Kurta side slit & fitting"
    ],
    popular: false
  }
];
