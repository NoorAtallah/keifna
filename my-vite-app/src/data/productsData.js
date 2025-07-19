// products-data.js
import img from '../assets/8.jpg'
import img2 from '../assets/6.jpeg'
import img3 from '../assets/9.jpeg'
import img4 from '../assets/10.jpeg'
import img5 from '../assets/11.jpeg'
import img6 from '../assets/3.jpeg'
import img7 from '../assets/12.jpeg'
import img8 from '../assets/13.jpeg'
import img9 from '../assets/14.jpeg'
import img10 from '../assets/15.jpeg'
import img11 from '../assets/16.jpeg'

export const productsData = {
  pastry: {
    id: 'pastry',
    title: "Pastry",
    subtitle: "Artisan Collection",
    description: "Premium quality pastry products crafted with traditional methods and finest ingredients for exceptional taste.",
    mainImage: img6,
    badge: "Best Seller",
    color: "#E8B4A0",
    products: [
      {
        id: 'pan-cake',
        name: 'Pan Cake',
        nameArabic: 'بان كيك',
        description: 'Fluffy pancakes made with premium ingredients',
        image: 'https://www.bhg.com/thmb/B1Mbx1q9AgIEJ8PbQpPq0QPs820=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-pancakes-waffles-pancakes-Hero-01-372c4cad318d4373b6288e993a60ca62.jpg',
        price: 'JD 3.50',
        features: ['Fresh Daily', 'Fluffy Texture', 'Multiple Toppings']
      },
      {
        id: 'waffle',
        name: 'Waffle',
        nameArabic: 'وافل',
        description: 'Crispy golden waffles with perfect texture',
        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/True-Belgian-Waffles_EXPS_FT24_4869_JR_0214_3.jpg',
        price: 'JD 4.00',
        features: ['Golden Crispy', 'Fresh Made', 'Sweet & Savory Options']
      },
      {
        id: 'crepe',
        name: 'Crêpe',
        nameArabic: 'كريب',
        description: 'Thin delicate crêpes with various fillings',
        image: 'https://www.kimscravings.com/wp-content/uploads/2021/02/how-to-make-crepes-8.jpg',
        price: 'JD 3.00',
        features: ['Thin & Delicate', 'Various Fillings', 'Sweet & Savory']
      },
      {
        id: 'bubbles',
        name: 'Bubbles',
        nameArabic: 'فشافيش',
        description: 'Light and airy bubble pastries',
        image: 'https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638805496044048707',
        price: 'JD 2.50',
        features: ['Light & Airy', 'Unique Texture', 'Fresh Made']
      },
      {
        id: 'sponge-cake',
        name: 'Sponge Cake',
        nameArabic: 'سبونج كيك',
        description: 'Soft sponge cake in multiple flavors',
        image: 'https://thescranline.com/wp-content/uploads/2023/07/VICTORIAN-SPONGE-CAKE-S-05.jpg',
        price: 'JD 5.00',
        features: ['Soft Texture', 'Multiple Flavors', 'Fresh Baked'],
        flavors: ['Strawberry', 'Chocolate', 'Vanilla']
      },
      {
        id: 'muffin-cake',
        name: 'Muffin Cake',
        nameArabic: 'مافن كيك',
        description: 'Individual portion muffin cakes',
        image: 'https://cakesbymk.com/wp-content/uploads/2024/06/Template-Size-for-Blog-Photos-85.jpg',
        price: 'JD 2.00',
        features: ['Individual Portions', 'Various Flavors', 'Perfect Size']
      },
      {
        id: 'qatayef',
        name: 'Qatayef',
        nameArabic: 'قطايف',
        description: 'Traditional Middle Eastern pancakes',
        image: 'https://cookingorgeous.com/wp-content/uploads/2024/06/qatayef-middle-eastern-stuffed-pancakes-13.jpg',
        price: 'JD 4.50',
        features: ['Traditional Recipe', 'Authentic Taste', 'Seasonal Special']
      },
      {
        id: 'awameh',
        name: 'Awameh',
        nameArabic: 'عوامة',
        description: 'Sweet fried dough balls in syrup',
        image: 'https://falasteenifoodie.com/wp-content/uploads/2023/04/DSC09152.jpg',
        price: 'JD 3.50',
        features: ['Sweet Syrup', 'Traditional', 'Crispy Outside']
      },
      {
        id: 'umm-ali',
        name: 'Umm Ali',
        nameArabic: 'ام علي',
        description: 'Traditional Middle Eastern bread pudding',
        image: 'https://cleobuttera.com/wp-content/uploads/2015/07/no-nuts-wl.jpg',
        price: 'JD 5.50',
        features: ['Traditional Recipe', 'Warm Served', 'Rich & Creamy']
      },
      {
        id: 'custom-blends',
        name: 'Custom Blends',
        nameArabic: 'خلطات حسب الطلب',
        description: 'Custom blends for factories and commercial clients',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUm38Bsu679oUQJez20Y0PRNg2gq6QtemoQ&s',
        price: 'Contact for pricing',
        features: ['Custom Development', 'Commercial Scale', 'Quality Assured']
      }
    ]
  },

  karakTea: {
    id: 'karak-tea',
    title: "Karak Tea",
    subtitle: "Heritage Blend",
    description: "Authentic Jordanian Karak tea with rich spices and traditional brewing methods for the perfect cup.",
    mainImage: img,
    badge: "Traditional",
    color: "#DDB892",
    products: [
      {
        id: 'karak-tea-original',
        name: 'Karak Tea',
        nameArabic: 'شاي كرك',
        description: 'Traditional karak tea with perfect spice blend',
        image: 'https://everylittlecrumb.com/wp-content/uploads/karakchai-7-scaled.jpg',
        price: 'JD 2.00',
        features: ['Traditional Spices', 'Rich Flavor', 'Authentic Recipe']
      },
      {
        id: 'karak-saffron',
        name: 'Karak Tea with Saffron',
        nameArabic: 'شاي كرك بالزعفران',
        description: 'Premium karak tea enhanced with saffron',
        image: 'https://kitchen.sayidaty.net/uploads/small/9b/9b9a5cc31eb3e17b597f06fdde97d64c_w750_h500.jpg',
        price: 'JD 3.50',
        features: ['Premium Saffron', 'Luxury Taste', 'Traditional Blend']
      },
      {
        id: 'karak-cardamom',
        name: 'Karak Tea with Cardamom',
        nameArabic: 'شاي كرك بالهيل',
        description: 'Aromatic karak tea with cardamom',
        image: 'https://images.immediate.co.uk/production/volatile/sites/2/2022/11/Karak-Chai-4c79786.jpg?quality=90&resize=900,1350',
        price: 'JD 2.50',
        features: ['Fresh Cardamom', 'Aromatic', 'Traditional Method']
      },
      {
        id: 'karak-ginger',
        name: 'Karak Tea with Ginger',
        nameArabic: 'شاي كرك بالزنجبيل',
        description: 'Warming karak tea with fresh ginger',
        image: 'https://kitchen.sayidaty.net/uploads/small/5c/5c53b7430adc885f2b5b41a29269d556_w750_h750.jpg',
        price: 'JD 2.25',
        features: ['Fresh Ginger', 'Warming', 'Health Benefits']
      },
      {
        id: 'karak-sugar-free',
        name: 'Karak Tea without Sugar',
        nameArabic: 'شاي كرك بدون سكر',
        description: 'Sugar-free karak tea for health-conscious customers',
        image: 'https://moribyan.com/wp-content/uploads/2024/11/IMG_9952-784x1024.jpg',
        price: 'JD 2.00',
        features: ['No Sugar', 'Health Conscious', 'Full Flavor']
      },
      {
        id: 'matcha-tea',
        name: 'Matcha Tea',
        nameArabic: 'شاي الماتشا',
        description: 'Premium Japanese matcha tea',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/04/matcha.jpg',
        price: 'JD 4.00',
        features: ['Premium Quality', 'Antioxidants', 'Traditional Preparation']
      },
      {
        id: 'green-tea',
        name: 'Green Tea',
        nameArabic: 'شاي اخضر',
        description: 'Fresh green tea with natural benefits',
        image: 'https://www.news-medical.net/image-handler/picture/2021/9/shutterstock_251566309.jpg',
        price: 'JD 2.50',
        features: ['Natural Benefits', 'Fresh Leaves', 'Light Taste']
      }
    ]
  },

  hotDrinks: {
    id: 'hot-drinks',
    title: "Hot Drinks",
    subtitle: "Warming Collection",
    description: "Comforting hot beverages that warm the soul, crafted with premium ingredients and traditional methods.",
    mainImage: img4,
    badge: "Comfort",
    color: "#CD853F",
    products: [
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        nameArabic: 'شوكولاتة ساخنة',
        description: 'Rich and creamy hot chocolate',
        image: 'https://hips.hearstapps.com/hmg-prod/images/hot-chocolate-index-675c61bc88ba1.jpg?crop=0.6664128273469561xw:1xh;center,top&resize=1200:*',
        price: 'JD 3.00',
        features: ['Rich & Creamy', 'Premium Cocoa', 'Warming']
      },
      {
        id: 'hot-chocolate-hazelnut',
        name: 'Hot Chocolate with Hazelnut',
        nameArabic: 'شوكولاتة ساخنة بالبندق',
        description: 'Creamy hot chocolate with hazelnut flavor',
        image: 'https://www.atipsygiraffe.com/wp-content/uploads/2018/01/hazelnut-italian-hot-chocolate-cioccolata-calda-alla-nocciola-7-sq.jpg',
        price: 'JD 3.50',
        features: ['Hazelnut Flavor', 'Creamy Texture', 'Premium Quality']
      },
      {
        id: 'hot-chocolate-vanilla',
        name: 'Hot Chocolate with Vanilla',
        nameArabic: 'شوكولاتة ساخنة بالفانيلا',
        description: 'Smooth hot chocolate with vanilla essence',
        image: 'https://www.midwestliving.com/thmb/O5JMXuYnQoErlHJ9KUsH7uPOe10=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/p_R130452-6a785cca89244961af5a06e9cc14fab3.jpg',
        price: 'JD 3.25',
        features: ['Vanilla Essence', 'Smooth Taste', 'Comforting']
      },
      {
        id: 'mochaccino',
        name: 'Mochaccino',
        nameArabic: 'موكاتشينو',
        description: 'Perfect blend of coffee and chocolate',
        image: 'https://www.eatingwell.com/thmb/5mw7QpRjwOl3X9eZj9CHZx_V50Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7892165-b2f4e35924d14c229db4145f5500537e.jpg',
        price: 'JD 3.75',
        features: ['Coffee & Chocolate', 'Perfect Balance', 'Energizing']
      },
      {
        id: 'fabrichino',
        name: 'Fabrichino',
        nameArabic: 'فابرشينو',
        description: 'Specialty hot drink with unique flavor',
        image: 'https://www.starbucks.com.jo/sites/starbucks-jo-pwa/files/styles/c04_image_text_grid_600x600/public/2021-04/Espresso_Frappuccino_01%20%281%29.jpg.webp?itok=6LxC5DC6',
        price: 'JD 4.00',
        features: ['Unique Flavor', 'Specialty Blend', 'Signature Drink']
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        nameArabic: 'كابتشينو',
        description: 'Classic cappuccino with perfect foam',
        image: 'https://www.nescafe.com/nz/sites/default/files/2023-09/NESCAF%C3%89%20Cappuccino.jpg',
        price: 'JD 3.50',
        features: ['Perfect Foam', 'Classic Recipe', 'Rich Taste']
      },
      {
        id: 'cappuccino-hazelnut',
        name: 'Cappuccino with Hazelnut',
        nameArabic: 'كابتشينو بالبندق',
        description: 'Cappuccino enhanced with hazelnut flavor',
        image: 'https://www.wixysoap.com/cdn/shop/products/hazelnut-cappuccino-fragrance-oil-473004.jpg?v=1658808343&width=1946',
        price: 'JD 4.00',
        features: ['Hazelnut Flavor', 'Premium Coffee', 'Perfect Foam']
      },
      {
        id: 'hot-strawberry',
        name: 'Hot Strawberry',
        nameArabic: 'فراولة ساخنة',
        description: 'Warm strawberry drink for fruit lovers',
        image: 'https://theorganicdietitian.com/wp-content/uploads/2016/02/Strawberry-White-Hot-Chocolate-664x1024-1-500x500.jpg',
        price: 'JD 3.25',
        features: ['Fruity Taste', 'Warming', 'Natural Flavor']
      },
      {
        id: 'sahlab',
        name: 'Sahlab',
        nameArabic: 'سحلب',
        description: 'Traditional Middle Eastern hot drink',
        image: 'https://family-friends-food.com/wp-content/uploads/2016/02/sahlab-3.jpg',
        price: 'JD 3.00',
        features: ['Traditional Recipe', 'Creamy Texture', 'Authentic Taste']
      },
      {
        id: 'lentil',
        name: 'Lentil',
        nameArabic: 'عدس',
        description: 'Nutritious hot lentil soup',
        image: 'https://loveandgoodstuff.com/wp-content/uploads/2019/02/moroccan_lentil_soup-2.jpg',
        price: 'JD 2.75',
        features: ['Nutritious', 'Hearty', 'Healthy Choice']
      },
      {
        id: 'ginger-milk',
        name: 'Ginger with Milk',
        nameArabic: 'زنجبيل بالحليب',
        description: 'Warming ginger drink with milk',
        image: 'https://cornercoffeestore.com/wp-content/uploads/2022/07/ginger-milk-tea_Ninetechno_Shutterstock.jpg',
        price: 'JD 2.50',
        features: ['Warming Ginger', 'Health Benefits', 'Creamy Milk']
      }
    ]
  },

iceCream: {
  id: 'ice-cream',
  title: "Ice Cream",
  subtitle: "Luxury Series",
  description: "Creamy perfection made with the finest ingredients, delivering an unforgettable taste experience.",
  mainImage: img2,
  badge: "Premium",
  color: "#A8C8EC",
  products: [
    // Existing products
    {
      id: 'soft-ice-cream-pistachio',
      name: 'Soft Ice Cream - Pistachio',
      nameArabic: 'آيس كريم طري - فستق',
      description: 'Creamy pistachio soft serve ice cream',
      image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/09/Pistachio-ice-cream-hero-04.jpg',
      price: 'JD 3.50',
      features: ['Natural Pistachio', 'Soft Serve', 'Premium Quality']
    },
    {
      id: 'soft-ice-cream-vanilla',
      name: 'Soft Ice Cream - Vanilla',
      nameArabic: 'آيس كريم طري - فانيلا',
      description: 'Classic vanilla soft serve ice cream',
      image: 'https://whippeditup.com/wp-content/uploads/2020/06/Coconut-Cashew-Vanilla-Ice-Cream-17.jpg',
      price: 'JD 3.00',
      features: ['Classic Vanilla', 'Smooth Texture', 'All-Time Favorite']
    },
    {
      id: 'soft-ice-cream-chocolate',
      name: 'Soft Ice Cream - Chocolate',
      nameArabic: 'آيس كريم طري - شوكولاتة',
      description: 'Rich chocolate soft serve ice cream',
      image: 'https://feastingonfruit.com/wp-content/uploads/2021/07/Homemade-Vegan-Chocolate-Soft-Serve-10.jpg',
      price: 'JD 3.25',
      features: ['Rich Chocolate', 'Soft Serve', 'Indulgent']
    },
    {
      id: 'soft-ice-cream-strawberry',
      name: 'Soft Ice Cream - Strawberry',
      nameArabic: 'آيس كريم طري - فراولة',
      description: 'Fresh strawberry soft serve ice cream',
      image: 'https://i2.wp.com/lmld.org/wp-content/uploads/2018/07/Strawberry-Ice-Cream-10.jpg',
      price: 'JD 3.25',
      features: ['Fresh Strawberry', 'Natural Flavor', 'Refreshing']
    },
    {
      id: 'natural-ice-cream-coconut',
      name: 'Natural Ice Cream - Coconut',
      nameArabic: 'آيس كريم طبيعي - جوز الهند',
      description: 'Natural coconut ice cream',
      image: 'https://tenina.imgix.net/uploads/recipe-images/Coconut-Cream-Ice-Cream.jpg?w=1200&fit=max&auto=compress',
      price: 'JD 4.00',
      features: ['Natural Coconut', 'Tropical Taste', 'Refreshing']
    },
    {
      id: 'ice-cream-bubbles-candy',
      name: 'Ice Cream - Bubbles Candy',
      nameArabic: 'آيس كريم - حلوى الفقاعات',
      description: 'Fun ice cream with bubble candy',
      image: 'https://icecreamfromscratch.com/wp-content/uploads/2021/12/Bubblegum-Ice-Cream-1.2.jpg',
      price: 'JD 3.75',
      features: ['Fun Texture', 'Candy Mix', 'Kid Favorite']
    },
    {
      id: 'sugar-free-ice-cream',
      name: 'Sugar-Free Ice Cream',
      nameArabic: 'آيس كريم بدون سكر',
      description: 'Healthy sugar-free ice cream options',
      image: 'https://publish.purewow.net/wp-content/uploads/sites/2/2023/03/best-low-sugar-ice-cream_universal.jpg',
      price: 'JD 4.50',
      features: ['No Sugar', 'Health Conscious', 'Full Flavor']
    },
    {
      id: 'fat-free-ice-cream',
      name: 'Fat-Free Ice Cream',
      nameArabic: 'آيس كريم خالي الدسم',
      description: 'Low-fat ice cream for health-conscious customers',
      image: 'https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-10.jpg',
      price: 'JD 4.25',
      features: ['Fat-Free', 'Healthy Option', 'Light Taste']
    },

    // NEW MISSING FLAVORS ADDED BELOW
    {
      id: 'soft-ice-cream-hazelnut',
      name: 'Soft Ice Cream - Hazelnut',
      nameArabic: 'آيس كريم طري - بندق',
      description: 'Rich hazelnut soft serve ice cream',
      image: 'https://www.elmundoeats.com/wp-content/uploads/2023/07/Ice-cream-cone-laying-flat-on-a-table.jpg',
      price: 'JD 3.75',
      features: ['Rich Hazelnut', 'Nutty Flavor', 'Premium Quality']
    },
    {
      id: 'soft-ice-cream-mango',
      name: 'Soft Ice Cream - Mango',
      nameArabic: 'آيس كريم طري - مانجو',
      description: 'Tropical mango soft serve ice cream',
      image: 'https://www.pineappleandcoconut.com/wp-content/uploads/2021/06/Mango-Ice-Cream-9.jpg',
      price: 'JD 3.50',
      features: ['Tropical Mango', 'Natural Fruit', 'Refreshing']
    },
    {
      id: 'soft-ice-cream-coffee',
      name: 'Soft Ice Cream - Coffee',
      nameArabic: 'آيس كريم طري - قهوة',
      description: 'Rich coffee flavored soft serve ice cream',
      image: 'https://murphysicecream.ie/cdn/shop/articles/Irish_coffee_cropped_3832x.jpg?v=1638532820',
      price: 'JD 3.75',
      features: ['Rich Coffee', 'Energizing', 'Premium Beans']
    },
    {
      id: 'soft-ice-cream-red-velvet',
      name: 'Soft Ice Cream - Red Velvet',
      nameArabic: 'آيس كريم طري - ريد فيلفيت',
      description: 'Luxurious red velvet soft serve ice cream',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4NQUxEVNz-myRNBaAPQkSY0_tBOI4vZCxQ&s',
      price: 'JD 4.25',
      features: ['Red Velvet Flavor', 'Luxurious', 'Special Occasion']
    },
  
    {
      id: 'soft-ice-cream-peach',
      name: 'Soft Ice Cream - Peach',
      nameArabic: 'آيس كريم طري - خوخ',
      description: 'Sweet peach soft serve ice cream',
      image: 'https://www.savingdessert.com/wp-content/uploads/2023/08/Peach-Ice-Cream-8.jpg',
      price: 'JD 3.50',
      features: ['Sweet Peach', 'Summer Flavor', 'Natural Fruit']
    },
    {
      id: 'ice-cream-arabia',
      name: 'Ice Cream - Arabia',
      nameArabic: 'آيس كريم - عربي',
      description: 'Traditional Arabic flavored ice cream',
      image: 'https://preview.redd.it/homemade-arabic-ice-cream-roll-topped-with-arabian-cotton-v0-eg9f72jdftkd1.jpeg?width=1080&crop=smart&auto=webp&s=b1496e3c9141af8c041be665fb70508637138af4',
      price: 'JD 4.00',
      features: ['Traditional Arabic', 'Cultural Taste', 'Authentic Recipe']
    },
    {
      id: 'ice-cream-yogurt',
      name: 'Ice Cream - Yogurt',
      nameArabic: 'آيس كريم - زبادي',
      description: 'Healthy yogurt based ice cream',
      image: 'https://easyrecipes.tv/wp-content/uploads/2023/11/Yogurt-ice-cream-recipe-FroYo-SC1_100019EN.jpg',
      price: 'JD 3.75',
      features: ['Healthy Yogurt', 'Probiotics', 'Light & Creamy']
    },
    {
      id: 'ice-cream-passion-fruit',
      name: 'Ice Cream - Passion Fruit',
      nameArabic: 'آيس كريم - فاكهة العاطفة',
      description: 'Exotic passion fruit ice cream',
      image: 'https://www.sidechef.com/recipe/5133fecd-f4cc-4bd2-b6a2-6863f56bddc6.jpg?d=1408x1120',
      price: 'JD 4.25',
      features: ['Exotic Passion Fruit', 'Tropical', 'Unique Flavor']
    },
    {
      id: 'ice-cream-dragon-fruit',
      name: 'Ice Cream - Dragon Fruit',
      nameArabic: 'آيس كريم - فاكهة التنين',
      description: 'Unique dragon fruit flavored ice cream',
      image: 'https://images.squarespace-cdn.com/content/v1/56ed128307eaa0e20bf6a67b/1470863167202-YA7C61MQVEQWEMZ9IMR8/dragon+fruit+raspberry+coconut++ice+cream',
      price: 'JD 4.50',
      features: ['Dragon Fruit', 'Exotic Taste', 'Natural Color']
    },
    {
      id: 'ice-cream-honey',
      name: 'Ice Cream - Honey',
      nameArabic: 'آيس كريم - عسل',
      description: 'Natural honey flavored ice cream',
      image: 'https://images.ctfassets.net/6eymjp4akvqs/5UyiLRst1zZsR0SAqE4yEX/fd2d0555feeb09f94aa3a609264b365d/Honey_Ice_Cream.webp',
      price: 'JD 4.00',
      features: ['Pure Honey', 'Natural Sweetener', 'Healthy Choice']
    },
    {
      id: 'natural-ice-cream-variety',
      name: 'Natural Ice Cream',
      nameArabic: 'آيس كريم طبيعي',
      description: 'Premium natural ice cream with no artificial additives',
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/11/full/20230711175258.jpg',
      price: 'JD 4.25',
      features: ['All Natural', 'No Additives', 'Premium Quality']
    },
    {
      id: 'ice-cream-toffee',
      name: 'Ice Cream - Toffee',
      nameArabic: 'آيس كريم - توفي',
      description: 'Rich toffee flavored ice cream',
      image: 'https://cupcakesandcouscous.com/wp-content/uploads/2017/03/d1311-salted2bcaramel2bice2bcream2b72bof2b7.jpg',
      price: 'JD 4.00',
      features: ['Rich Toffee', 'Caramel Notes', 'Indulgent']
    },
    {
      id: 'ice-cream-mochaccino',
      name: 'Ice Cream - Mochaccino',
      nameArabic: 'آيس كريم - موكاتشينو',
      description: 'Coffee and chocolate blend ice cream',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QE6LdoTTWLoitO1DejuwM-30vQ2CMbaxSQ&s',
      price: 'JD 4.25',
      features: ['Coffee & Chocolate', 'Perfect Blend', 'Rich Flavor']
    },
    {
      id: 'ice-cream-mint',
      name: 'Ice Cream - Mint',
      nameArabic: 'آيس كريم - نعناع',
      description: 'Refreshing mint flavored ice cream',
      image: 'https://www.thespruceeats.com/thmb/kACdn8Fk6qzXXme-xKeSocvfvZw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MintIceCreamHERO-color-corrected-df1d9b72aaeb41d38502f435fe99f65d.jpg',
      price: 'JD 3.50',
      features: ['Fresh Mint', 'Cooling Effect', 'Refreshing']
    },
    {
      id: 'ice-cream-blue-bubbles',
      name: 'Ice Cream - Blue Bubbles',
      nameArabic: 'آيس كريم - فقاعات زرقاء',
      description: 'Fun blue colored ice cream with bubble candy',
      image: 'https://thegirlinspired.com/wp-content/uploads/2020/07/Bubble-Gum-Ice-Cream-22-scaled.jpg',
      price: 'JD 4.00',
      features: ['Blue Color', 'Bubble Candy', 'Fun & Colorful']
    },
    {
      id: 'ice-cream-orange',
      name: 'Ice Cream - Orange',
      nameArabic: 'آيس كريم - برتقال',
      description: 'Citrusy orange flavored ice cream',
      image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/07/Orange-Ice-Cream-5.jpg',
      price: 'JD 3.50',
      features: ['Citrus Orange', 'Vitamin C', 'Refreshing']
    },

    // BASE ICE CREAM PRODUCTS (for commercial/wholesale)
    {
      id: 'base-ice-cream-50',
      name: 'Base Ice Cream 50',
      nameArabic: 'قاعدة آيس كريم 50',
      description: '50-unit base ice cream for commercial use',
      image: 'https://www.mec3.com/Media/prodottigelato-basi/fiordilatte/base_006.jpg',
      price: 'Contact for pricing',
      features: ['Commercial Grade', 'Bulk Quantity', 'Professional Use']
    },
    {
      id: 'base-ice-cream-100',
      name: 'Base Ice Cream 100',
      nameArabic: 'قاعدة آيس كريم 100',
      description: '100-unit base ice cream for large operations',
      image: 'https://gelq-1fb55.kxcdn.com/554-large_default/rubicone-base-100-dairycream.jpg',
      price: 'Contact for pricing',
      features: ['Large Scale', 'Industrial Grade', 'Bulk Operations']
    },
    {
      id: 'fruit-base-ice-cream-250',
      name: 'Fruit Base Ice Cream 250',
      nameArabic: 'قاعدة آيس كريم فواكه 250',
      description: '250-unit fruit base ice cream for commercial production',
      image: 'https://gelq-1fb55.kxcdn.com/2659-large_default/leagel-base-fruit-50-ice-cream-master-school.jpg',
      price: 'Contact for pricing',
      features: ['Fruit Base', 'Large Quantity', 'Commercial Production']
    },
    {
      id: 'base-ice-cream-10',
      name: 'Base Ice Cream 10',
      nameArabic: 'قاعدة آيس كريم 10',
      description: '10-unit base ice cream for small businesses',
      image: 'https://www.planetglace.com/client/cache/rubrique/600_600____1__base-1-003-copia_35352_36233.jpg',
      price: 'Contact for pricing',
      features: ['Small Business', 'Starter Pack', 'Quality Base']
    }
  ]
},
baseGelato: {
  id: 'base-gelato',
  title: "Base Gelato",
  subtitle: "Professional Foundation",
  description: "Premium gelato bases for commercial production, providing the perfect foundation for authentic Italian gelato.",
  mainImage: "https://www.mec3.com/Media/prodottigelato-basi/kit_base_gelato_perfettp.png",
  badge: "Professional",
  color: "#D4A574",
  products: [
    {
      id: 'milk-base-50',
      name: 'Milk Base 50',
      nameArabic: 'قاعدة حليب 50',
      description: '50-unit milk base for creamy gelato production',
      image: img8,
      price: 'Contact for pricing',
      features: ['Milk Base', 'Commercial Grade', '50 Unit Pack']
    },
    {
      id: 'base-milkshake',
      name: 'Base Milkshake',
      nameArabic: 'قاعدة ميلك شيك',
      description: 'Specialized milkshake base for smooth gelato texture',
      image: img9,
      price: 'Contact for pricing',
      features: ['Milkshake Base', 'Smooth Texture', 'Professional Quality']
    },
    {
      id: 'base-fruit',
      name: 'Base Fruit',
      nameArabic: 'قاعدة فواكه',
      description: 'Fruit base for natural and vibrant fruit gelato flavors',
      image: 'https://www.pernigottigelatieri.com/Media/Prodotti/base_fruit_50_f.jpg',
      price: 'Contact for pricing',
      features: ['Fruit Base', 'Natural Flavors', 'Vibrant Colors']
    },
    {
      id: 'base-coffee',
      name: 'Base Coffee',
      nameArabic: 'قاعدة قهوة',
      description: 'Coffee base for rich and aromatic coffee gelato',
      image: img7,
      price: 'Contact for pricing',
      features: ['Coffee Base', 'Rich Aroma', 'Authentic Taste']
    },
 
  
  ]
},

iceDrinks: {
  id: 'ice-drinks',
  title: "Ice Drinks",
  subtitle: "Refreshing Choice",
  description: "Cool and refreshing beverages perfect for any occasion, made with quality ingredients.",
  mainImage: img3,
  badge: "Cool",
  color: "#87CEEB",
  products: [
    // Slush Drinks
    {
      id: 'slush-strawberry',
      name: 'Slush - Strawberry',
      nameArabic: 'مثلج - فراولة',
      description: 'Refreshing strawberry slush',
      image: 'https://thatgirlcookshealthy.com/wp-content/uploads/2014/05/frozen-strawberry-slushie.jpg',
      price: 'JD 2.50',
      features: ['Fresh Strawberry', 'Crushed Ice', 'Refreshing']
    },
    {
      id: 'slush-orange',
      name: 'Slush - Orange',
      nameArabic: 'مثلج - برتقال',
      description: 'Zesty orange slush drink',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBq50ODEKRyhiQZBqk7Qty43oXj-8SVmtJvA&s',
      price: 'JD 2.50',
      features: ['Zesty Orange', 'Vitamin C', 'Energizing']
    },
    {
      id: 'slush-mango',
      name: 'Slush - Mango',
      nameArabic: 'مثلج - مانجو',
      description: 'Tropical mango slush',
      image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/mango-slush.jpg?im=AspectCrop=(16,9);',
      price: 'JD 2.75',
      features: ['Tropical Mango', 'Sweet & Tangy', 'Refreshing']
    },
    {
      id: 'slush-peach',
      name: 'Slush - Peach',
      nameArabic: 'مثلج - خوخ',
      description: 'Sweet peach slush drink',
      image: 'https://spicysouthernkitchen.com/wp-content/uploads/Peach-Wine-Slushies-Feature.jpg',
      price: 'JD 2.75',
      features: ['Sweet Peach', 'Refreshing', 'Natural Flavor']
    },
    {
      id: 'slush-raspberry',
      name: 'Slush - Raspberry',
      nameArabic: 'مثلج - توت العليق',
      description: 'Tangy raspberry slush',
      image: 'https://easygoodideas.com/wp-content/uploads/2021/09/Raspberry-Vodka-Slushy-1.jpg',
      price: 'JD 2.75',
      features: ['Tangy Raspberry', 'Antioxidants', 'Refreshing']
    },
    {
      id: 'slush-passion-fruit',
      name: 'Slush - Passion Fruit',
      nameArabic: 'مثلج - فاكهة العاطفة',
      description: 'Exotic passion fruit slush',
      image: 'https://makeitskinnyplease.com/wp-content/uploads/2022/08/passion-fruit-wine-slushy-mango-in-front.jpg',
      price: 'JD 3.00',
      features: ['Exotic Flavor', 'Tropical Taste', 'Vitamin Rich']
    },
    {
      id: 'slush-green-apple',
      name: 'Slush - Green Apple',
      nameArabic: 'مثلج - تفاح أخضر',
      description: 'Crisp green apple slush',
      image: 'https://www.margaritaman.com/wp-content/uploads/Sour-Green-Apple-MMHQ.png',
      price: 'JD 2.50',
      features: ['Crisp Apple', 'Refreshing', 'Natural Sweetness']
    },
    {
      id: 'slush-kiwi',
      name: 'Slush - Kiwi',
      nameArabic: 'مثلج - كيوي',
      description: 'Tangy kiwi slush drink',
      image: 'https://cdn.shopify.com/s/files/1/0189/8074/files/Shopify_Resize_10_480x480.png?v=1725045389',
      price: 'JD 2.75',
      features: ['Tangy Kiwi', 'Vitamin C', 'Exotic Taste']
    },
    {
      id: 'slush-lemon',
      name: 'Slush - Lemon',
      nameArabic: 'مثلج - ليمون',
      description: 'Zesty lemon slush',
      image: 'https://makeandtakes.com/wp-content/uploads/pineapple-lemonade-slushie-in-a-glass.jpg',
      price: 'JD 2.25',
      features: ['Zesty Lemon', 'Refreshing', 'Citrus Boost']
    },
    {
      id: 'slush-lemon-mint',
      name: 'Slush - Lemon and Mint',
      nameArabic: 'مثلج - ليمون ونعناع',
      description: 'Refreshing lemon mint slush',
      image: 'https://boulderlocavore.com/wp-content/uploads/2021/07/tall-glasses-of-limonana-side-sq.jpg',
      price: 'JD 2.50',
      features: ['Lemon & Mint', 'Super Refreshing', 'Cool & Zesty']
    },
    {
      id: 'slush-grape',
      name: 'Slush - Grape',
      nameArabic: 'مثلج - عنب',
      description: 'Sweet grape slush drink',
      image: 'https://www.togethertoeat.com/wp-content/uploads/2024/06/Frozen-Grape-Slushies-Grape-Slushie.jpg',
      price: 'JD 2.50',
      features: ['Sweet Grape', 'Natural Flavor', 'Refreshing']
    },
    {
      id: 'slush-melon',
      name: 'Slush - Melon',
      nameArabic: 'مثلج - شمام',
      description: 'Sweet melon slush',
      image: 'https://www.joyousapron.com/wp-content/uploads/2021/08/Watermelon-Slush-Sq-Pic.jpg',
      price: 'JD 2.75',
      features: ['Sweet Melon', 'Hydrating', 'Light Taste']
    },
    {
      id: 'slush-lambada',
      name: 'Slush - Lambada',
      nameArabic: 'مثلج - لامبادا',
      description: 'Special Lambada flavor slush',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/AvWA719VuOId8NGJ1NMgYA/348s.jpg',
      price: 'JD 3.00',
      features: ['Unique Flavor', 'Tropical Mix', 'Signature Drink']
    },

    // Ice Teas
    {
      id: 'ice-tea-matcha',
      name: 'Ice Tea - Matcha',
      nameArabic: 'شاي مثلج - ماتشا',
      description: 'Refreshing matcha iced tea',
      image: 'https://www.acozykitchen.com/wp-content/uploads/2017/04/IcedMatchaLatte-1.jpg',
      price: 'JD 3.50',
      features: ['Premium Matcha', 'Antioxidants', 'Energizing']
    },
    {
      id: 'ice-tea-peach',
      name: 'Ice Tea - Peach',
      nameArabic: 'شاي مثلج - خوخ',
      description: 'Refreshing peach iced tea',
      image: 'https://www.dessertfortwo.com/wp-content/uploads/2012/04/peach-iced-tea-3.jpg',
      price: 'JD 3.00',
      features: ['Peach Flavor', 'Refreshing Tea', 'Cold Brew']
    },
    {
      id: 'ice-tea-lemon',
      name: 'Ice Tea - Lemon',
      nameArabic: 'شاي مثلج - ليمون',
      description: 'Classic lemon iced tea',
      image: 'https://shwetainthekitchen.com/wp-content/uploads/2023/07/lemon-iced-tea.jpg',
      price: 'JD 2.75',
      features: ['Classic Lemon', 'Refreshing', 'Traditional']
    },
    {
      id: 'ice-tea-melon',
      name: 'Ice Tea - Melon',
      nameArabic: 'شاي مثلج - شمام',
      description: 'Sweet melon iced tea',
      image: 'https://kitchenconfidante.com/wp-content/uploads/2023/06/Watermelon-Sweet-Tea-kitchenconfidante.com-5747.jpg',
      price: 'JD 3.00',
      features: ['Sweet Melon', 'Light Flavor', 'Hydrating']
    },
    {
      id: 'ice-tea-orange',
      name: 'Ice Tea - Orange',
      nameArabic: 'شاي مثلج - برتقال',
      description: 'Citrusy orange iced tea',
      image: 'https://i0.wp.com/portandfin.com/wp-content/uploads/2016/08/IcedTea7.jpg',
      price: 'JD 2.75',
      features: ['Citrus Orange', 'Vitamin C', 'Energizing']
    },

    // Milkshakes
    {
      id: 'milkshake-nutella',
      name: 'Milkshake - Nutella',
      nameArabic: 'ميلك شيك - نوتيلا',
      description: 'Creamy Nutella milkshake',
      image: 'https://yummynotes.net/wp-content/uploads/2021/10/Nutella-Milkshake-Recipe.jpg',
      price: 'JD 4.50',
      features: ['Creamy Nutella', 'Rich Taste', 'Indulgent']
    },
    {
      id: 'milkshake-yogurt',
      name: 'Milkshake - Yogurt',
      nameArabic: 'ميلك شيك - زبادي',
      description: 'Healthy yogurt milkshake',
      image: 'https://www.oliviascuisine.com/wp-content/uploads/2017/03/salted-caramel-frozen-yogurt-milkshake.jpg',
      price: 'JD 3.50',
      features: ['Healthy Yogurt', 'Probiotics', 'Creamy']
    },
    {
      id: 'milkshake-strawberry',
      name: 'Milkshake - Strawberry',
      nameArabic: 'ميلك شيك - فراولة',
      description: 'Fresh strawberry milkshake',
      image: 'https://www.butteredsideupblog.com/wp-content/uploads/2023/06/How-to-Make-a-Strawberry-Milkshake-Without-Ice-Cream-17-scaled.jpg',
      price: 'JD 3.75',
      features: ['Fresh Strawberry', 'Creamy', 'Natural Flavor']
    },
    {
      id: 'milkshake-chocolate',
      name: 'Milkshake - Chocolate',
      nameArabic: 'ميلك شيك - شوكولاتة',
      description: 'Rich chocolate milkshake',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-220524-chocolate-milkshake-001-ab-web-1654180529.jpg',
      price: 'JD 3.75',
      features: ['Rich Chocolate', 'Creamy', 'Indulgent']
    },
    {
      id: 'milkshake-bounty',
      name: 'Milkshake - Bounty',
      nameArabic: 'ميلك شيك - باونتي',
      description: 'Coconut Bounty flavored milkshake',
      image: 'https://jackslobodian.com/wp-content/uploads/2023/06/Bounty-Milkshake-9.jpg',
      price: 'JD 4.25',
      features: ['Coconut Flavor', 'Chocolate', 'Tropical']
    },
    {
      id: 'milkshake-kitkat',
      name: 'Milkshake - KitKat',
      nameArabic: 'ميلك شيك - كيت كات',
      description: 'Crunchy KitKat milkshake',
      image: 'https://funmoneymom.com/wp-content/uploads/2024/12/Kit-Kat-Milkshake-14.jpg',
      price: 'JD 4.25',
      features: ['Crunchy Texture', 'Chocolate Wafer', 'Popular Choice']
    },
    {
      id: 'milkshake-ferrero',
      name: 'Milkshake - Ferrero Rocher',
      nameArabic: 'ميلك شيك - فيريرو روشيه',
      description: 'Luxurious Ferrero Rocher milkshake',
      image: 'https://yummynotes.net/wp-content/uploads/2024/02/Ferrero-Rocher-Milkshake-Recipe.jpg',
      price: 'JD 5.00',
      features: ['Hazelnut Chocolate', 'Luxury Taste', 'Premium']
    },
    {
      id: 'milkshake-galaxy',
      name: 'Milkshake - Galaxy',
      nameArabic: 'ميلك شيك - جالاكسي',
      description: 'Smooth Galaxy chocolate milkshake',
      image: 'https://funmoneymom.com/wp-content/uploads/2021/03/Classic-chocolate-milkshake-feature.jpg',
      price: 'JD 4.00',
      features: ['Smooth Chocolate', 'Creamy', 'Rich Taste']
    },
    {
      id: 'milkshake-oreo',
      name: 'Milkshake - Oreo',
      nameArabic: 'ميلك شيك - أوريو',
      description: 'Cookies and cream Oreo milkshake',
      image: 'https://www.allrecipes.com/thmb/3ce4xfQEXz7vzjbrPqM-qaZh-OY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228324oreo-milkshakeFranceC4x3-8a55db984bf84d27bb3f5a4feab4ea20.jpg',
      price: 'JD 4.00',
      features: ['Cookies & Cream', 'Crunchy Pieces', 'Popular']
    },
    {
      id: 'milkshake-arabia-yogurt',
      name: 'Milkshake - Arabia Yogurt',
      nameArabic: 'ميلك شيك - زبادي عربي',
      description: 'Traditional Arabic yogurt milkshake',
      image: 'https://www.shutterstock.com/image-photo/white-banana-coconut-pineapple-smoothie-600nw-2430843857.jpg',
      price: 'JD 3.75',
      features: ['Traditional', 'Healthy', 'Authentic Taste']
    },
    {
      id: 'milkshake-passion-fruit',
      name: 'Milkshake - Passion Fruit',
      nameArabic: 'ميلك شيك - فاكهة العاطفة',
      description: 'Exotic passion fruit milkshake',
      image: 'https://carresfutes.fr/wp-content/uploads/2023/08/milkshake-passion-1-scaled-1-1200x900.jpg',
      price: 'JD 4.25',
      features: ['Exotic Flavor', 'Tropical', 'Unique Taste']
    },
    {
      id: 'milkshake-avocado',
      name: 'Milkshake - Avocado',
      nameArabic: 'ميلك شيك - أفوكادو',
      description: 'Healthy avocado milkshake',
      image: 'https://storage.googleapis.com/fitia_public_images/recipes%2FGR-R-V-00011123_bswdxiszsllbg2q38nuldtj6_large.jpg',
      price: 'JD 4.50',
      features: ['Healthy Fats', 'Creamy Texture', 'Nutritious']
    },
    {
      id: 'milkshake-snickers',
      name: 'Milkshake - Snickers',
      nameArabic: 'ميلك شيك - سنيكرز',
      description: 'Peanut caramel Snickers milkshake',
      image: 'https://www.yummology.com/upload/image/w5/rz/w5rzl5jiye-4x3-xl.jpg',
      price: 'JD 4.50',
      features: ['Peanut Caramel', 'Rich Flavor', 'Satisfying']
    },
    {
      id: 'milkshake-mars',
      name: 'Milkshake - Mars',
      nameArabic: 'ميلك شيك - مارس',
      description: 'Caramel Mars bar milkshake',
      image: 'https://jackslobodian.com/wp-content/uploads/2023/06/Mars-Milkshake-13.jpg',
      price: 'JD 4.25',
      features: ['Caramel Flavor', 'Sweet', 'Popular Choice']
    },

    // Milkshake Fruits
    {
      id: 'milkshake-lemon',
      name: 'Milkshake - Lemon',
      nameArabic: 'ميلك شيك - ليمون',
      description: 'Citrusy lemon milkshake',
      image: 'https://new.milk.org/wp-content/uploads/2023/12/Lemonade-Milkshake-1.jpg',
      price: 'JD 3.50',
      features: ['Citrus Fresh', 'Tangy', 'Refreshing']
    },
    {
      id: 'milkshake-peach',
      name: 'Milkshake - Peach',
      nameArabic: 'ميلك شيك - خوخ',
      description: 'Sweet peach milkshake',
      image: 'https://afullliving.com/wp-content/uploads/2024/08/Peach-Milkshake-1200-x-1200.jpg',
      price: 'JD 3.75',
      features: ['Sweet Peach', 'Creamy', 'Natural']
    },
    {
      id: 'milkshake-green-apple',
      name: 'Milkshake - Green Apple',
      nameArabic: 'ميلك شيك - تفاح أخضر',
      description: 'Crisp green apple milkshake',
      image: 'https://i.imgur.com/Ybd3wO1.jpg',
      price: 'JD 3.50',
      features: ['Crisp Apple', 'Fresh', 'Natural Sweetness']
    },
    {
      id: 'milkshake-kiwi',
      name: 'Milkshake - Kiwi',
      nameArabic: 'ميلك شيك - كيوي',
      description: 'Tangy kiwi milkshake',
      image: 'https://www.spendwithpennies.com/wp-content/uploads/2021/07/Kiwi-Smoothie-SpendWithPennies-5.jpg',
      price: 'JD 3.75',
      features: ['Tangy Kiwi', 'Vitamin Rich', 'Exotic']
    },
    {
      id: 'milkshake-mango',
      name: 'Milkshake - Mango',
      nameArabic: 'ميلك شيك - مانجو',
      description: 'Tropical mango milkshake',
      image: 'https://i.pinimg.com/736x/aa/c8/e7/aac8e7495442ea137e4b6d81354d4876.jpg',
      price: 'JD 4.00',
      features: ['Tropical Mango', 'Creamy', 'Sweet']
    },
    {
      id: 'milkshake-orange',
      name: 'Milkshake - Orange',
      nameArabic: 'ميلك شيك - برتقال',
      description: 'Citrusy orange milkshake',
      image: 'https://funmoneymom.com/wp-content/uploads/2018/06/Orange-creamsicle-milkshakes-with-garnish.jpg',
      price: 'JD 3.50',
      features: ['Citrus Orange', 'Vitamin C', 'Refreshing']
    },
    {
      id: 'milkshake-raspberry',
      name: 'Milkshake - Raspberry',
      nameArabic: 'ميلك شيك - توت العليق',
      description: 'Tangy raspberry milkshake',
      image: 'https://theprettybee.com/wp-content/uploads/2017/01/dairy-free-raspberry-milkshake-recipe.jpg',
      price: 'JD 3.75',
      features: ['Tangy Raspberry', 'Antioxidants', 'Berry Flavor']
    },

    // Ice Coffee Drinks
    {
      id: 'ice-coffee',
      name: 'Ice Coffee',
      nameArabic: 'قهوة مثلجة',
      description: 'Cold brew coffee served over ice',
      image: 'https://www.eatingbirdfood.com/wp-content/uploads/2025/06/iced-coffee-hero-new.jpg',
      price: 'JD 3.50',
      features: ['Cold Brew', 'Rich Coffee', 'Energizing']
    },
    {
      id: 'ice-mocha',
      name: 'Ice Mocha',
      nameArabic: 'موكا مثلجة',
      description: 'Iced mocha with chocolate and coffee',
      image: 'https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-image-square.jpg',
      price: 'JD 4.00',
      features: ['Coffee & Chocolate', 'Cold Served', 'Perfect Balance']
    },
    {
      id: 'ice-chocolate',
      name: 'Ice Chocolate',
      nameArabic: 'شوكولاتة مثلجة',
      description: 'Cold chocolate drink',
      image: 'https://thegreencreator.com/wp-content/uploads/EASY-Iced-Chocolate-Drink-Vegan-Cold-incredibly-delicious-and-SO-comforting-TheGreenCreator-recipe-chocolatedrink-glutenfree-icedchocolatedrink-1.jpg',
      price: 'JD 3.50',
      features: ['Rich Chocolate', 'Cold Served', 'Refreshing']
    },
    {
      id: 'ice-fabrassiono',
      name: 'Ice Fabrassiono',
      nameArabic: 'فابراسيونو مثلج',
      description: 'Special iced Fabrassiono drink',
      image: 'https://kahwate.com/wp-content/uploads/2021/06/%D9%81%D8%B1%D8%A7%D8%A8%D8%AA%D8%B4%D9%8A%D9%86%D9%88-2021-scaled.jpg',
      price: 'JD 4.25',
      features: ['Signature Drink', 'Coffee Blend', 'Unique Flavor']
    }
  ]

  },

  coffee: {
    id: 'coffee',
    title: "Coffee",
    subtitle: "Premium Roast",
    description: "From traditional Arabic coffee to modern blends, discover authentic flavors and rich heritage.",
    mainImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
    badge: "Premium",
    color: "#8B4513",
    products: [
      {
        id: 'turkish-coffee',
        name: 'Turkish Coffee',
        nameArabic: 'قهوة تركية',
        description: 'Traditional Turkish coffee preparation',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg',
        price: 'JD 3.00',
        features: ['Traditional Method', 'Rich Flavor', 'Cultural Heritage']
      },
      {
        id: 'espresso',
        name: 'Italian Espresso',
        nameArabic: 'إسبريسو إيطالي',
        description: 'Authentic Italian espresso',
        image: 'https://majestycoffee.com/cdn/shop/articles/How_Much_Caffeine_in_Italian_Espresso__A_Quick_Guide.jpg?v=1694737687',
        price: 'JD 2.75',
        features: ['Italian Style', 'Strong & Rich', 'Premium Beans']
      },
      {
        id: 'american-coffee',
        name: 'American Coffee',
        nameArabic: 'قهوة أمريكية',
        description: 'Classic American style coffee',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9TfIFqT5Np6d9CSiJB0QdXnOGE2NPaOXGQ&s',
        price: 'JD 2.50',
        features: ['Smooth Taste', 'Medium Roast', 'Classic Blend']
      },
      {
        id: 'gulf-coffee',
        name: 'Gulf Coffee',
        nameArabic: 'قهوة خليجية',
        description: 'Traditional Gulf coffee with cardamom',
        image: 'https://charismagoods.com/cdn/shop/products/33_1024x1024.jpg?v=1681720714',
        price: 'JD 3.25',
        features: ['Cardamom Flavor', 'Traditional Preparation', 'Cultural Taste']
      },
      {
        id: 'saudi-coffee',
        name: 'Saudi Coffee',
        nameArabic: 'قهوة سعودية',
        description: 'Authentic Saudi coffee blend',
        image: 'https://images.archanaskitchen.com/images/recipes/drink-recipes/chocolate-coffee-tea-drink-recipes/Qahwa_c1719955f8.jpg',
        price: 'JD 3.50',
        features: ['Authentic Blend', 'Traditional Roast', 'Regional Specialty']
      },
      {
        id: 'french-coffee',
        name: 'French Coffee',
        nameArabic: 'قهوة فرنسية',
        description: 'French roast coffee with distinct flavor',
        image: 'https://cornercoffeestore.com/wp-content/uploads/2020/11/French-coffee.jpg',
        price: 'JD 3.75',
        features: ['French Roast', 'Bold Flavor', 'Premium Quality']
      },
      {
        id: 'jordan-coffee',
        name: 'Jordan Coffee',
        nameArabic: 'قهوة أردنية',
        description: 'Local Jordanian coffee blend',
        image: 'https://jordan-travel.com/wp-content/uploads/2022/04/What-makes-Arabic-coffee-unique.jpg',
        price: 'JD 3.00',
        features: ['Local Blend', 'Traditional Taste', 'Jordanian Heritage']
      }
    ]
  },

  paste: {
    id: 'paste',
    title: "Paste",
    subtitle: "Culinary Base",
    description: "High-quality paste products for culinary excellence, ensuring consistency and exceptional taste.",
    mainImage: img5,
    badge: "Essential",
    color: "#B8860B",
    products: [
      {
        id: 'pistachio-paste',
        name: 'Pistachio Paste',
        nameArabic: 'عجينة البستاشيو',
        description: 'Premium pistachio paste for desserts and pastries',
        image: img5,
        price: 'JD 8.50',
        features: ['100% Natural', 'Premium Quality', 'Versatile Use']
      },
      {
        id: 'lotus-paste',
        name: 'Lotus Paste',
        nameArabic: 'عجينة اللوتس',
        description: 'Rich lotus biscuit paste for confections',
        image: 'https://blackgoldfoods.mv/cdn/shop/products/71RZ50WjwXL._AC_SL1451_1200x1200.jpg?v=1664437412',
        price: 'JD 7.00',
        features: ['Lotus Flavor', 'Smooth Texture', 'Popular Choice']
      },
      {
        id: 'chocolate-paste',
        name: 'Chocolate Paste',
        nameArabic: 'عجينه الشكولاته',
        description: 'Rich chocolate paste for various applications',
        image: img11,
        price: 'JD 6.50',
        features: ['Rich Chocolate', 'Smooth Consistency', 'Professional Grade']
      },
      {
        id: 'chantilly-cream',
        name: 'Chantilly Cream',
        nameArabic: 'كريمه شانتيه',
        description: 'Light and airy whipped cream',
        image: img10,
        price: 'JD 5.00',
        features: ['Light & Airy', 'Perfect Texture', 'Versatile']
      },
      {
        id: 'foam-cream',
        name: 'Foam Cream',
        nameArabic: 'كريمة فوم',
        description: 'Stable foam cream for professional use',
        image: 'https://www.budgetbytes.com/wp-content/uploads/2023/10/Sweet-Cream-Cold-Foam-V1.jpg',
        price: 'JD 4.50',
        features: ['Stable Foam', 'Professional Grade', 'Long Lasting']
      }
    ]
  }
};

// Quality Assurance Information
export const qualityAssurance = {
  title: "Quality Assurance",
  description: "We are proud to cooperate with the largest distribution companies in the world, cafes and supermarkets in the Middle East.",
  certifications: [
    "International Quality Standards",
    "Food Safety Certification",
    "Halal Certified",
    "ISO Standards Compliance"
  ],
  partnerships: [
    "Major Distribution Companies",
    "Leading Cafes",
    "Supermarket Chains",
    "Middle East Market Leaders"
  ]
};