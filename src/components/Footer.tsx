import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-primary-950 text-zinc-400">
      {/* Newsletter Banner */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Stay Fresh with TK Fruits</h3>
            <p className="text-primary-100">Get updates on seasonal produce, special offers, and farming news.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 w-full md:w-80"
            />
            <button className="bg-white text-primary-700 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors flex items-center gap-2 shrink-0">
              <Send size={16} />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                <ShoppingBasket size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TK <span className="text-primary-400">FRUITS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Providing the finest selection of tropical fruits and fresh vegetables from the heart of The Gambia. Quality you can taste, freshness you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="hover:text-primary-400 transition-colors">Our Products</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/catalog?cat=Fruit" className="hover:text-primary-400 transition-colors">Tropical Fruits</Link></li>
              <li><Link to="/catalog?cat=Vegetable" className="hover:text-primary-400 transition-colors">Fresh Vegetables</Link></li>
              <li><Link to="/catalog" className="hover:text-primary-400 transition-colors">Seasonal Specials</Link></li>
              <li><Link to="/catalog" className="hover:text-primary-400 transition-colors">Bulk Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span>Serrekunda Market, The Gambia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 shrink-0" />
                <span>+220 712 1486</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400 shrink-0" />
                <span>hello@tkfruits.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} TK Fruits Gambia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
