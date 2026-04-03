import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Vinhomes Paradise Cần Giờ"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-950/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-gold-400 font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4">
            Siêu dự án sinh thái lấn biển
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
            VINHOMES <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              PARADISE CẦN GIỜ
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Tuyệt tác không gian sống sinh thái đẳng cấp bậc nhất tại "Hòn ngọc" Cần Giờ. Nơi giao hòa giữa thiên nhiên nguyên sơ và tiện ích thượng lưu.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tong-quan"
              className="px-8 py-4 bg-gold-500 text-white font-medium uppercase tracking-wider hover:bg-gold-600 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Khám phá dự án
            </a>
            <a
              href="#lien-he"
              className="px-8 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-wider hover:bg-white hover:text-emerald-900 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Tải bảng giá & CSBH
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#tong-quan" className="text-white/70 hover:text-gold-400 transition-colors">
          <div className="w-[30px] h-[50px] border-2 border-current rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
