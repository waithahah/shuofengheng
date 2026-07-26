import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.garbotableware.com';

const imagesToDownload = [
  // Logo
  '/themes/simplebootx/jiabao/image2/logo.png',
  
  // Hero Banners
  '/themes/simplebootx/picbanners/banner/tableware-new-item4.jpg',
  '/themes/simplebootx/picbanners/banner/tableware-new-item1.jpg',
  '/themes/simplebootx/picbanners/banner/tableware-new-item2.jpg',
  '/themes/simplebootx/picbanners/banner/tableware-new-item3.jpg',
  
  // Categories
  '/themes/simplebootx/jiabao/image2/cate1.jpg',
  '/themes/simplebootx/jiabao/image2/indexcutlery.jpg',
  '/themes/simplebootx/jiabao/image2/tableware-kitchenware.jpg',
  '/themes/simplebootx/jiabao/image2/plsticware.jpg',
  '/themes/simplebootx/jiabao/image2/opal-tableware.jpg',
  '/themes/simplebootx/jiabao/image2/indexglass.jpg',

  // About Swiper
  '/themes/simplebootx/jiabao/image2/main-about1.jpg',
  '/themes/simplebootx/jiabao/image2/main-about2.jpg',
  '/themes/simplebootx/jiabao/image2/main-about3.jpg',

  // Top Products
  'https://www.garbotableware.com/data/watermark/20240511/663f5861a2399.jpg',
  'https://www.garbotableware.com/data/watermark/20240125/65b22d23ba4ae.jpg',
  'https://www.garbotableware.com/data/watermark/20231125/6561d7893b792.jpg',
  'https://www.garbotableware.com/data/watermark/20230701/649fe08d238c3.jpg',
  'https://www.garbotableware.com/wp-content/uploads/2022/07/SL090210D-1-350x350.jpg',
  'https://www.garbotableware.com/wp-content/uploads/2023/03/SL13G001150B-1-350x350.jpg',
  'https://www.garbotableware.com/wp-content/uploads/2020/07/SM084-350x350.jpg',
  'https://www.garbotableware.com/data/watermark/20240511/663ee60c2764b.jpg'
];

const publicDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function download() {
  console.log('Downloading website assets...');
  for (let i = 0; i < imagesToDownload.length; i++) {
    const imgUrl = imagesToDownload[i].startsWith('http') ? imagesToDownload[i] : `${BASE_URL}${imagesToDownload[i]}`;
    const filename = `img_${i + 1}_${path.basename(imagesToDownload[i].split('?')[0])}`;
    const destPath = path.join(publicDir, filename);

    try {
      const res = await fetch(imgUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`Saved: ${filename}`);
      } else {
        console.warn(`Failed (${res.status}): ${imgUrl}`);
      }
    } catch (err) {
      console.error(`Error downloading ${imgUrl}:`, err.message);
    }
  }
}

download();
