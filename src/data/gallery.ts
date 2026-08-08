import { GalleryItem, Testimonial } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Handcrafted Zari Blouse Finishing",
    category: "Tailoring Work",
    image: "https://images.unsplash.com/photo-1610030469829-1b392a831518?auto=format&fit=crop&w=800&q=80",
    description: "Close up view of clean piping, dori tassels, and double stitching on raw silk."
  },
  {
    id: "gal-2",
    title: "Tailor Measuring & Fabric Cutting",
    category: "Shop & Craft",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    description: "Precision measurements and chalk marking for custom dress tailoring."
  },
  {
    id: "gal-3",
    title: "Designer Kurti Display in Shop",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    description: "Selection of ready-to-wear printed cotton kurtis available at our local store."
  },
  {
    id: "gal-4",
    title: "Custom Anarkali Flare Stitching",
    category: "Blouses & Ethnic",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    description: "Completed Georgette Anarkali dress with overlocked interior seams."
  },
  {
    id: "gal-5",
    title: "Master Tailor Workstation",
    category: "Shop & Craft",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Our heavy-duty industrial sewing machine and color-matched thread spools."
  },
  {
    id: "gal-6",
    title: "Festive Kids Lehenga Outfit",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted kids traditional wear with soft cotton inner lining."
  }
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sunita Sharma",
    location: "Local Resident",
    comment: "Rameshwar Ji has been stitching my blouses for over 10 years! The shoulder fitting never slips, and the necklines are always crisp. Very trustworthy shop.",
    rating: 5,
    serviceUsed: "Custom Blouse Stitching",
    date: "12 Feb 2026"
  },
  {
    id: "test-2",
    name: "Pooja & Ankit",
    location: "Main Market Town",
    comment: "Got an emergency alteration done for a wedding dress bought online. He fixed the waist and hem within 3 hours. Saved my event! Highly recommended.",
    rating: 5,
    serviceUsed: "Express Alterations",
    date: "28 Jan 2026"
  },
  {
    id: "test-3",
    name: "Meenakshi V.",
    location: "Colony Phase 2",
    comment: "Bought two pure cotton kurtis and had them altered on the spot. Great prices and very polite personal service.",
    rating: 5,
    serviceUsed: "Shop Dress Purchase + Fitting",
    date: "05 Feb 2026"
  }
];
