import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LeWs1P1JL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="October Elf 6 Pairs Adult Christmas Holiday Socks Warm Winter Cozy Socks Fuzzy Socks With Plus Size And Anti-Slip Bottom"
            price={18.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61jSiNpo1yL._AC_SY328_.jpg"
            alt=""
          />

          <Product
            id="12321345"
            title="FANYE 2 Pieces Cushions Sectional Include 3 Seater Loveseat, Sofa & Couch W/Nailhead Decor for Home Office..."
            price={499.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71DcAw6QZtL._AC_SL1200_.jpg"
            alt=""
          />

          <Product
            id="3254354345"
            title="Soft Skills: The Software Developer's Life Manual"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61x1jpBFvZL._AC_SL1500_.jpg"
            alt=""
          />

          <Product
            id="3254354377"
            title=" TUMI AWAKEN Distilled Extrait De Parfum 3.4 Fl Oz (100 ml)            "
            price={155}
            rating={4}
            image="https://m.media-amazon.com/images/I/71h22ien8KL._AC_SL1500_.jpg"
            alt=""
          />
        </div>

        <div className="home_row">
          <Product
            id="23445930"
            title="Amazon Fire 7 Kids tablet, ages 3-7. Top-selling 7 kids tablet on Amazon ad-free content with parental controls included Battrey"
            price={94.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/511Psmb8PWL._AC_SY780_.jpg"
            alt=""
          />
          <Product
            id="49538094"
            title="Amazon Echo Dot (5th Gen) with clock  Glacier White"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/511BZJP+53L._AC_SY780_.jpg"
            alt=""
          />
          <Product
            id="49538099"
            title="All-new Echo Show 5 (3rd Gen, 2023 release) | Smart display with 2x the bass and clearer sound | Charcoal"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ItbuDZ6nL._AC_SY300_SX300_.jpg"
            alt=""
          />
          <Product
            id="49538444"
            title="Amazon Essentials Men's Full-Zip Fleece Mock Neck Sweatshir"
            price={19}
            rating={3}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91RpBgF6ZxL._AC_SY550_.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id="23445976"
            title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming"
            price={94.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
            alt=""
          />
          <Product
            id="49538094"
            title="ASUS ROG Strix G15 (2022) Gaming Laptop, 15” 16:10 FHD 144Hz, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11                         "
            price={848}
            rating={4}
            image="https://m.media-amazon.com/images/I/71OyrTkxpGL._AC_SL1500_.jpg"
            alt=""
          />
          <Product
            id="49538090"
            title="The Children's Place…"
            price={24}
            rating={4}
            image="https://m.media-amazon.com/images/I/51zs-g25QZL._SR290,290_.jpg"
            alt=""
          />
          <Product
            id="49538127"
            title="MP3 Player with Bluetooth and WiFi, Music Player with Spotify,Spotify Kids,Amazon Music, 4 inch Full Touch Screen16GB MP3 MP4 Player (Grey)"
            price={75.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71AgufoD9HL._AC_UF894,1000_QL80_FMwebp_.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id="49538098"
            title="Keurig K-Compact Single-Serve K-Cup Pod Coffee Maker, Black (Packaging May Vary)"
            price={50}
            rating={4}
            image="https://m.media-amazon.com/images/I/6134AqFiL3L._AC_SL1500_.jpg"
            alt=""
          />
          <Product
            id="49538098"
            title="KitchenAid KSMSFTAQ Sifter + Scale Attachment, White"
            price={169.94}
            rating={5}
            image="https://m.media-amazon.com/images/I/71rbaVQDjdL._AC_UF894,1000_QL80_FMwebp_.jpg"
            alt=""
          />
          <Product
            id="49538098"
            title="Aboosam Baby Toys 6 to 12 Months - Musical Learning Infant Toys  - Babies Ocean Rotating Light Up Toys Gifts"
            price={169.94}
            rating={5}
            image="https://m.media-amazon.com/images/I/718uGZMrfuL._AC_UF894,1000_QL80_FMwebp_.jpg"
            alt=""
          />
          <Product
            id="49587977"
            title="Lancôme Lashes For Every Occasion Mascara Holiday Gift Set - Limited Edition Full Size 3-Piece Makeup Gift Set"
            price={50}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RrfzUfgmL._AC_UF1000,1000_QL80_FMwebp_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
