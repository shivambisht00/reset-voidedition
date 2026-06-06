export interface Product {
    id: number;
    name: string;
    char: string;
    desc: string;
    price: number;
    oldPrice: number | null;
    category: string;
    badge: string;
    image: string;
    color: string;
    rating: string;
}

export const products: Product[] = [
    {
      id: 1, name: 'INFINITE VOID TEE', char: 'GOJO SATORU',
      desc: 'Oversized heavyweight cotton, front domain print',
      price: 1299, oldPrice: 1899, category: 'tshirt',
      badge: 'limited', 
      image: '/images/WhatsApp Image 2026-06-01 at 11.35.07.jpeg',
      color: 'radial-gradient(ellipse at 30% 40%, rgba(123,47,255,0.35) 0%, rgba(6,6,8,0.95) 70%)',
      rating: '★★★★★ (142)'
    },
    {
      id: 2, name: ' CURSED JEANS', char: 'RYOMEN SUKUNA',
      desc: 'Slim fit distressed denim, cursed mark embroidery',
      price: 2499, oldPrice: null, category: 'jeans',
      badge: 'new', 
      image: '/images/WhatsApp Image 2026-06-01 at 11.35.29.jpeg',
      color: 'radial-gradient(ellipse at 70% 60%, rgba(204,0,34,0.3) 0%, rgba(6,6,8,0.95) 70%)',
      rating: '★★★★★ (89)'
    },
    {
      id: 3, name: 'HOODIE', char: 'GOJO SATORU', 
      desc: 'Pullover fleece, six eyes back graphic, dropped shoulder',
      price: 2199, oldPrice: 2799, category: 'hoodie',
      badge: 'new', 
      image: '/images/s-l1200.jpg',
      color: 'radial-gradient(ellipse at 50% 30%, rgba(68,0,187,0.4) 0%, rgba(6,6,8,0.95) 65%)',
      rating: '★★★★★ (203)'
    },
    {
      id: 4, name: 'TEN SHADOWS KICKS', char: 'FUSHIGURO MEGUMI',
      desc: 'High-top canvas, shadow technique sole print',
      price: 3499, oldPrice: null, category: 'shoes',
      badge: 'new', 
      image: '/images/images-6.jpeg',
      color: 'radial-gradient(ellipse at 30% 70%, rgba(0,68,204,0.3) 0%, rgba(6,6,8,0.95) 65%)',
      rating: '★★★★☆ (67)'
    },
    {
      id: 5, name: 'DIVERGENT FIST TEE', char: 'YUJI ITADORI',
      desc: 'Regular fit, impact print, premium cotton blend',
      price: 999, oldPrice: 1499, category: 'tshirt',
      badge: 'new', 
      image: '/images/WhatsApp Image 2026-06-01 at 11.35.06.jpeg',
      color: 'radial-gradient(ellipse at 60% 40%, rgba(200,80,0,0.3) 0%, rgba(6,6,8,0.95) 70%)',
      rating: '★★★★☆ (118)'
    },
    {
      id: 6, name: 'CURSED SEAL JEANS', char: 'GOJO SATORU',
      desc: 'Wide leg, washed black, purple seal embroidery at hem',
      price: 2799, oldPrice: null, category: 'jeans',
      badge: 'new', 
      image: '/images/WhatsApp Image 2026-06-01 at 11.35.29 (1).jpeg',
      color: 'radial-gradient(ellipse at 40% 50%, rgba(123,47,255,0.25) 0%, rgba(6,6,8,0.95) 70%)',
      rating: '★★★★★ (54)'
    }
];
