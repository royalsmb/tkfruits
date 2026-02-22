import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Truck, ShieldCheck, Star, Package, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1920&h=1080&fit=crop&q=80"
            alt="Fresh tropical fruits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/50 to-zinc-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-bold tracking-wider uppercase mb-6 border border-primary-500/30 backdrop-blur-sm">
              Fresh from The Gambia
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Nature's Best,{' '}
              <br />
              <span className="font-display italic text-primary-400">Delivered Fresh</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-lg">
              Experience the vibrant flavors of West Africa. We source the finest fruits and vegetables directly from local Gambian farmers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/catalog"
                className="bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-600 transition-all flex items-center gap-2 group shadow-lg shadow-primary-500/30"
              >
                Explore Catalog
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="text-primary-500" size={28} />,
                title: "100% Organic",
                desc: "Our produce is grown using traditional, natural methods without harmful chemicals."
              },
              {
                icon: <Truck className="text-primary-500" size={28} />,
                title: "Fast Delivery",
                desc: "We ensure your order reaches you at the peak of freshness, straight from the farm."
              },
              {
                icon: <ShieldCheck className="text-primary-500" size={28} />,
                title: "Quality Guaranteed",
                desc: "Every fruit and vegetable is hand-picked and inspected for the highest quality."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-5 p-8 rounded-2xl hover:bg-primary-50/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">What we offer</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Browse by Category</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">From sweet tropical fruits to farm-fresh vegetables, discover the best of Gambian produce.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tropical Fruits",
                desc: "Mangoes, papayas, bananas, watermelons and more",
                image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=400&fit=crop",
                link: "/catalog?cat=Fruit"
              },
              {
                title: "Fresh Vegetables",
                desc: "Tomatoes, okra, peppers, sweet potatoes and more",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
                link: "/catalog?cat=Vegetable"
              },
              {
                title: "Seasonal Specials",
                desc: "Limited-time produce at the peak of freshness",
                image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop",
                link: "/catalog"
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link to={cat.link} className="group block">
                  <div className="relative aspect-[3/2] rounded-3xl overflow-hidden mb-5">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                      <p className="text-white/80 text-sm">{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">Hand-picked for you</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Seasonal Favorites</h2>
              <p className="text-zinc-500">Currently in peak season and ready for your table.</p>
            </div>
            <Link to="/catalog" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all shrink-0">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-5 bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-900">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-zinc-400">{product.origin}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-primary-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">Simple process</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">How It Works</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">Getting fresh Gambian produce to your door has never been easier.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Browse", desc: "Explore our catalog of fresh fruits and vegetables", icon: Package },
              { step: "02", title: "Order", desc: "Place your order via phone, WhatsApp, or our form", icon: Star },
              { step: "03", title: "We Harvest", desc: "Your produce is freshly picked from local farms", icon: Leaf },
              { step: "04", title: "Delivered", desc: "Receive your order at peak freshness", icon: Truck }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-primary-500/20">
                  <item.icon size={28} />
                </div>
                <span className="text-primary-500/30 text-5xl font-black absolute top-0 right-1/4 -translate-y-2">{item.step}</span>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-primary-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-300 font-bold text-sm uppercase tracking-wider">Our story</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8 leading-tight">
              Rooted in Gambian{' '}
              <span className="font-display italic text-primary-400">Agricultural Heritage</span>
            </h2>
            <p className="text-lg text-primary-100/70 mb-8 leading-relaxed">
              TK Fruits was founded with a simple mission: to bridge the gap between hard-working Gambian farmers and families looking for the freshest produce. We believe in sustainable farming and supporting our local community.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Direct farm-to-table sourcing",
                "Supporting 50+ local smallholder farmers",
                "Eco-friendly packaging and logistics"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="text-primary-100/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 border-2 border-primary-400 text-primary-300 px-8 py-3 rounded-full font-bold hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all">
              Learn Our Story <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary-500/20">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=800&fit=crop"
                alt="Fresh produce from Gambian farms"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-zinc-900 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Users className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-zinc-500">Local Farmers</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">What people say</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Customer Reviews</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fatou Jallow",
                role: "Restaurant Owner, Banjul",
                text: "TK Fruits has been our go-to supplier for over two years. The quality of their mangoes and tomatoes is unmatched in The Gambia.",
                rating: 5
              },
              {
                name: "Amadou Ceesay",
                role: "Home Chef",
                text: "I love how fresh everything is. You can really taste the difference compared to what you find at regular markets. Their okra is always so tender!",
                rating: 5
              },
              {
                name: "Marie Njie",
                role: "Hotel Manager, Kololi",
                text: "Reliable delivery and consistent quality. Our guests always compliment the freshness of our fruit platters. Thank you TK Fruits!",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{review.name}</p>
                  <p className="text-sm text-zinc-400">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&h=600&fit=crop"
            alt="Fresh produce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/90" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to taste the difference?</h2>
            <p className="text-xl text-primary-100/70 mb-10">
              Contact us today for bulk orders, home delivery, or to visit us at Serrekunda Market.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-400 transition-all shadow-lg shadow-primary-500/30"
              >
                Get in Touch
              </Link>
              <Link
                to="/catalog"
                className="bg-white/10 backdrop-blur text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
