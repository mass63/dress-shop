import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: "prod-1",
    name: "Classic Cotton Printed Kurti",
    category: "Chudidars & Kurtis",
    price: 899,
    priceText: "₹899",
    isAvailable: true,
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breathable 100% pure cotton kurti with elegant hand-block floral print and detailed thread work on the neckline. Ideal for daily wear and office comfort.",
    fabric: "Pure Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Indigo Blue", "Maroon", "Mustard Yellow"],
    customizable: true,
    featured: true
  },
  {
    id: "prod-2",
    name: "Heavy Work Designer Silk Blouse",
    category: "Blouses",
    price: 1250,
    priceText: "₹1,250",
    isAvailable: true,
    stockStatus: "Made to Order",
    image: "https://images.unsplash.com/photo-1610030469829-1b392a831518?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Intricately stitched raw silk padded blouse with back neck dori tassel detail and zari piping. Stitched to your exact chest & armhole measurement.",
    fabric: "Raw Silk with Cotton Lining",
    sizes: ["Custom Measurement", "32", "34", "36", "38", "40"],
    colors: ["Deep Red", "Bottle Green", "Golden", "Royal Blue"],
    customizable: true,
    featured: true
  },
  {
    id: "prod-3",
    name: "Floral Anarkali Suit Set",
    category: "Ladies Wear",
    price: 1850,
    priceText: "₹1,850",
    isAvailable: true,
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Full flare Georgette Anarkali dress paired with matching pant and chiffon dupatta. Soft lining included for maximum skin comfort.",
    fabric: "Soft Georgette",
    sizes: ["M", "L", "XL"],
    colors: ["Dusty Pink", "Mint Green", "Peach"],
    customizable: true,
    featured: true
  },
  {
    id: "prod-4",
    name: "Traditional Kids Pavada & Lehenga",
    category: "Kids Wear",
    price: 950,
    priceText: "₹950",
    isAvailable: true,
    stockStatus: "Made to Order",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1621786030484-4c855eed69cd?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Vibrant art silk ethnic lehenga set for young girls (Ages 2 to 12). Tailored with soft internal canvas so it does not prick delicate skin.",
    fabric: "Art Silk & Cotton Lining",
    sizes: ["2-3 Yrs", "4-5 Yrs", "6-8 Yrs", "9-12 Yrs"],
    colors: ["Magenta & Gold", "Yellow & Teal"],
    customizable: true,
    featured: true
  },
  {
    id: "prod-5",
    name: "Handcrafted Embroidery Chudidar Set",
    category: "Chudidars & Kurtis",
    priceText: "Price on enquiry",
    isAvailable: true,
    stockStatus: "Made to Order",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Custom stitched Chudidar suit with detailed threadwork along the neckline and cuffs. Fabric can be provided by client or selected from shop catalog.",
    fabric: "Chanderi Silk / Pure Cotton",
    sizes: ["Tailored to Fit"],
    colors: ["Custom Choice"],
    customizable: true,
    featured: false
  },
  {
    id: "prod-6",
    name: "Custom Bridal Silk Blouse Work",
    category: "Custom Pieces",
    priceText: "Price on enquiry",
    isAvailable: true,
    stockStatus: "Made to Order",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1610030469829-1b392a831518?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Exclusive bridal blouse customization featuring heavy Maggam / Aari thread design, bead piping, and custom neck shapes.",
    fabric: "Silk / Raw Silk / Kanjeevaram",
    sizes: ["Personal Measurement"],
    colors: ["Custom Choice"],
    customizable: true,
    featured: true
  },
  {
    id: "prod-7",
    name: "Casual Printed Rayon Dress",
    category: "Ladies Wear",
    price: 750,
    priceText: "₹750",
    isAvailable: true,
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable knee-length printed rayon dress with gentle waist gathering. Easy maintenance and lightweight for hot summer days.",
    fabric: "Soft Rayon",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive Green", "Rust Red"],
    customizable: false,
    featured: false
  },
  {
    id: "prod-8",
    name: "Men's Kurta & Shirt Tailoring Material",
    category: "Men's Alteration",
    priceText: "Price on enquiry",
    isAvailable: true,
    stockStatus: "Made to Order",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Professional fitting for men's traditional kurtas, shirt sleeve adjustment, collar resizing, and trouser hem alterations.",
    fabric: "Cotton / Linen / Blend",
    sizes: ["Custom Fitting"],
    colors: ["Assorted"],
    customizable: true,
    featured: false
  }
];
