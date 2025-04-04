// data.js
import seventeen from './assets/Images/seventeen.jpeg';
import fifteen from './assets/Images/fifteen.jpeg';
import one from './assets/Images/one.jpeg';
import two from './assets/Images/two.jpeg';
import nine from './assets/Images/nine.jpeg';
import eleven from './assets/Images/eleven.jpeg';
import eighteen from './assets/Images/eighteen.jpeg';
import twentytwo from './assets/Images/twenty two.jpeg';
import twentysix from './assets/Images/twentysix.jpeg';
import ten from './assets/Images/ten.jpeg';
import twenty from './assets/Images/twenty.jpeg';
import twentyone from './assets/Images/twenty one.jpeg';
import fourteen from './assets/Images/fourteen.jpeg';
import thirteen from './assets/Images/thirteen.jpeg'; 
import twelve from './assets/Images/twelve.jpeg';
// import three from './assets/Images/three.jpeg';
import four from './assets/Images/four.jpeg';
// import five from './assets/Images/five.jpeg';
import six from './assets/Images/six.jpeg';
import seven from './assets/Images/seven.jpeg';
import eight from './assets/Images/eight.jpeg';
// import twentyfour from './assets/Images/twentyfour.jpeg';
// import twentyfive from './assets/Images/twentyfive.jpeg';


export const fragranceFamilies = [
  { id: 'all', name: 'All Fragrances' },
  { id: 'lavender', name: 'Lavender' },
  { id: 'cedar', name: 'Cedar' },
  { id: 'tobacco', name: 'Tobacco' },
  { id: 'cinnamon', name: 'Cinnamon' },
  { id: 'vanilla', name: 'Vanilla' },
  { id: 'amber', name: 'Amber' },
  { id: 'woody', name: 'Woody' },
  { id: 'floral', name: 'Floral' },
  { id: 'bergamot', name: 'Bergamot' },
  { id: 'grapefruit', name: 'Grapefruit' },
  { id: 'warm-spicy', name: 'Warm Spicy' }, // Standardized id
  { id: 'rose', name: 'Rose' },
  { id: 'cardamom', name: 'Cardamom' },
];

  
  export const heroSlides = [
    {
      image: eighteen,
      title: 'Discover Your Signature Scent',
      subtitle: 'Luxury Fragrances for the Distinguished',
      description: 'Experience the art of perfumery with our exclusive collection of premium fragrances.',
    },
    {
      image: twentytwo,
      title: 'The Essence of Luxury',
      subtitle: 'Crafted for Perfection',
      description: 'Each fragrance tells a unique story, carefully composed by master perfumers.',
    },
    {
      image: twentysix,
      title: 'The Soul of Elegance',
      subtitle: 'Sculpted in Scent',
      description:'Every note weaves an exquisite tale, artfully blended by the world’s finest perfumers',






    },
  ];
  
  export const categories = [
    {
      title: "Perfumes",
      image: "https://public.readdy.ai/ai/img_res/0a3432c9f07ba26a4eb1fc5fa96495f7.jpg",
      description: "Premium Fragrances",
    },
    {
      title: "Perfume Oils",
      image: "https://public.readdy.ai/ai/img_res/6dfff8f62cf4ff811ab28645f9ac92c4.jpg",
      description: "Concentrated Essences",
    },
    {
      title: "Diffusers",
      image: "https://public.readdy.ai/ai/img_res/13f4a0fd04887897530e870d57066212.jpg",
      description: "Ambient Fragrances",
    },
    
  ];
  
 
  

  export const featuredProducts = [
    {
      id: 'fp1', // Unique ID
      name: 'Golden Allure 70ml',
      price: '₦210,000',
      family: ['floral', 'amber', 'grapefruit'],
      image: seventeen,
    },
    {
      id: 'fp2', // Unique ID
      name: 'Wild Elegance 50ml',
      price: '₦254,000',
      family: ['bergamot', 'woody', 'warm-spicy'],
      image: fifteen,
    },
    {
      id: 'fp3', // Unique ID
      name: 'Classic Charm 50ml',
      price: '₦193,000',
      family: ['amber', 'vanilla', 'rose'],
      image: one,
    },
    {
      id: 'fp4', // Unique ID
      name: 'Zesty Allure 50ml',
      price: '₦200,000',
      family: ['warm-spicy', 'woody', 'grapefruit'],
      image: nine,
    },
    {
      id: 'fp5', // Unique ID
      name: 'Eternal Dusk 60ml',
      price: '₦320,000',
      family: ['woody', 'amber', 'cardamom'],
      image: eleven,
    },
  ];
  
  export const modalPerfumeProducts = [
    {
      id: 'fp1', // Matches featuredProducts ID
      name: 'Golden Allure 70ml', // Optional: Keep if needed in modal/cart
      price: '₦210,000',         // Optional: Keep if needed in modal/cart
      family: ['floral', 'amber', 'grapefruit'], // Optional: Keep if needed
      images: [seventeen, thirteen, twelve], // Correct syntax: images array
      description:'Bold and glamorous fragrance designed for women who want to make a statement.'
    },
    {
      id: 'fp2', // Matches featuredProducts ID
      name: 'Wild Elegance 50ml',
      price: '₦254,000',
      family: ['bergamot', 'woody', 'warm-spicy'],
      images: [fifteen, eighteen], // Correct syntax: images array
      description:'Unique and captivating scent, perfect for men who want a fragrance thats both masculine and sophisticated.'
    },
    {
      id: 'fp3', // Matches featuredProducts ID
      name: 'Classic Charm 50ml',
      price: '₦193,000',
      family: ['amber', 'vanilla', 'rose'],
      images: [one, two, eight], // Correct syntax: images array
      description:'Timeless choice for women who appreciate classic elegance.'
    },
    {
      id: 'fp4', // Matches featuredProducts ID
      name: 'Zesty Allure 50ml',
      price: '₦200,000',
      family: ['warm-spicy', 'woody', 'grapefruit'],
      images: [nine, seven], // Correct syntax: images array
      description:'Fresh and vibrant fragrance that captures the energy and spirit of a sporty lifestyle.'
    },
    {
      id: 'fp5', // Matches featuredProducts ID
      name: 'Eternal Dusk 60ml',
      price: '₦320,000',
      family: ['woody', 'amber', 'cardamom'],
      images: [eleven, four, six], // Correct syntax: images array
      description:'Luxurious and sensual fragrance for men who want a scent thats both powerful and elegant.'
    },
  ];
  export const diffuserProducts = [
    {
      name: "Lavender Mist Diffuser",
      price: 79.99,
      scent: "lavender",
      image: "https://public.readdy.ai/ai/img_res/13f4a0fd04887897530e870d57066212.jpg",
    },
    {
      name: "Cedar Breeze Diffuser",
      price: 89.99,
      scent: "cedar",
      image: "https://public.readdy.ai/ai/img_res/1a29ebdfe7e85ca42749ecafd0e0da89.jpg",
    },
    {
      name: "Vanilla Glow Diffuser",
      price: 69.99,
      scent: "vanilla",
      image: "https://public.readdy.ai/ai/img_res/afe5eebe00396db2e7f67d236dd268eb.jpg",
    },
    {
      name: "Amber Harmony Diffuser",
      price: 99.99,
      scent: "amber",
      image: "https://public.readdy.ai/ai/img_res/3757e884b2f131230af5fd3a5653789f.jpg",
    },
  ];
  // New data for Perfume Oils
// New data for Perfume Oils with real AI-like images from Pexels
export const oilFragranceFamilies = [
  { id: "all", name: "All" },
  { id: "amber", name: "Amber" },
  { id: "sandalwood", name: "Sandalwood" },
  { id: "floral", name: "Floral" },
  { id: "oud", name: "Oud" },
];

export const featuredOilProducts = [
  {
    name: "Amber Bliss",
    image: ten,
    price: 15000,
    family: "amber",
  },
  {
    name: "Sandalwood Dream",
    image: twenty,
    price: 15000,
    family: "sandalwood",
  },
  {
    name: "Rose Elixir",
    image: twentyone,
    price: 20000,
    family: "floral",
  },
  {
    name: "Oud Majesty",
    image: fourteen,
    price: 20000,
    family: "oud",
  },
];