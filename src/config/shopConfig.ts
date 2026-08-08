import { ShopConfig } from '../types';

export const shopConfig: ShopConfig = {
  shopName: "Kandan Dress Shop & Tailors",
  tagline: "Style That Fits You Perfectly",
  subtitle: "Quality handcrafted dresses & personalized precision tailoring made with care for every customer.",
  ownerName: "Shri Kandan",
  tailorTitle: "Master Tailor & Founder",
  experienceYears: "30+ Years",
  phoneNumber: "+919876543210",
  displayPhone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  displayWhatsapp: "+91 98765 43210",
  email: "kandantailors.local@gmail.com",
  address: {
    street: "Shop No. 4, Main Market Road, Near City Bus Stand",
    landmark: "Opposite State Bank Branch",
    city: "Local Market Town",
    state: "State",
    pincode: "110001",
    fullAddress: "Shop No. 4, Main Market Road, Near City Bus Stand, Opposite State Bank Branch, Local Market Town - 110001"
  },
  // Embed map placeholder (standard embed iframe src)
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.213233177726!2d77.227221!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM2JzUwLjIiTiA3N8KwMTMnMzguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  googleMapsDirectionUrl: "https://maps.google.com/?q=Local+Main+Market+Dress+Shop",
  openingHours: [
    { day: "Monday", open: "10:00 AM", close: "08:30 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "08:30 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "08:30 PM" },
    { day: "Thursday", open: "10:00 AM", close: "08:30 PM" },
    { day: "Friday", open: "10:00 AM", close: "08:30 PM" },
    { day: "Saturday", open: "10:00 AM", close: "08:30 PM" },
    { day: "Sunday", open: "11:00 AM", close: "04:00 PM" }
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  },
  specialties: [
    "Designer Blouse Stitching & Piping",
    "Chudidar, Anarkali & Salwar Suits",
    "Precision Alterations & Fitting",
    "Kids Ethnic Wear Stitching",
    "Gents Shirt & Pant Alterations",
    "Pallu Pico, Fall & Edge Work"
  ],
  businessValues: [
    {
      title: "Personal Attention",
      desc: "Every garment is measured and discussed personally with the tailor to match your fit.",
      icon: "UserCheck"
    },
    {
      title: "Custom Fitting Guarantee",
      desc: "If the fit needs minor adjustment after trial, we re-stitch it for free until you are happy.",
      icon: "Scissors"
    },
    {
      title: "Quality Stitching & Thread",
      desc: "Reinforced double seams, neat inner overlocking, and high-tensile color-matched threads.",
      icon: "Sparkles"
    },
    {
      title: "Honest Local Pricing",
      desc: "Transparent rates without hidden fees. Quality craftsmanship made accessible to all.",
      icon: "ShieldCheck"
    }
  ]
};
