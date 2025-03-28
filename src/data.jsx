// data.js
import seventeen from './assets/Images/seventeen.jpeg';
import eighteen from './assets/Images/eighteen.jpeg';
import twentytwo from './assets/Images/twenty two.jpeg';
import twentysix from './assets/Images/twentysix.jpeg';
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
    { id: 'warm spicy', name: 'Warm Spicy' },
    { id: 'rose', name: 'Rose' },
    { id: 'cardamom', name: 'Cardamom' }
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
    {
      title: "Body Sprays",
      image: "https://public.readdy.ai/ai/img_res/457a07b469de974c45aae6a55ef27c0e.jpg",
      description: "Refreshing Mist",
    },
  ];
  
 
  export const featuredProducts = [
    {
      name: 'Golden Allure 70ml',
      price: '₦210,000',
      family: ['Floral', 'Amber', 'Grapefruit'],
      image: {seventeen}
    },
    {
      name: 'Wild elegance 50ml',
      price: '₦254,000',
      family: ['Bergamot', 'Woody', 'Warm Spicy'],
      image: 'src/assets/Images/fifteen.jpeg',
    },
    {
      name: 'Classic Charm 50ml',
      price: '₦193,000',
      family: ['Amber', 'Vanilla', 'Rose'],
      image: 'src/assets/Images/one.jpeg',
    },
    {
      name: 'Zesty Allure 50ml',
      price: '₦200,000',
      family: ['Warm Spicy', 'Woody', 'Grapefruit'],
      image: 'src/assets/Images/nine.jpeg',
    },
    {
      name: 'Eternal Dusk 60ml',
      price: '₦320,000',
      family: ['Woody', 'Amber', 'Cardamom'],
      image: 'src/assets/Images/eleven.jpeg',
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
    image: "https://public.readdy.ai/ai/img_res/3757e884b2f131230af5fd3a5653789f.jpg",
    price: 45,
    family: "amber",
  },
  {
    name: "Sandalwood Dream",
    image: 'https://public.readdy.ai/ai/img_res/c5cdc596794835ab5dbade7bc8ae446f.jpg',
    price: 50,
    family: "sandalwood",
  },
  {
    name: "Rose Elixir",
    image: 'https://public.readdy.ai/ai/img_res/c5cdc596794835ab5dbade7bc8ae446f.jpg',
    price: 40,
    family: "floral",
  },
  {
    name: "Oud Majesty",
    image: 'https://public.readdy.ai/ai/img_res/4dfd88b715ede772e147271f0bd70507.jpg',
    price: 60,
    family: "oud",
  },
];