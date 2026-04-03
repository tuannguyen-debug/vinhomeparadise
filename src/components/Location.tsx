import { motion } from 'motion/react';
import { Navigation, Compass, Map } from 'lucide-react';

export default function Location() {
  return (
    <section id="vi-tri" className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold-500"></div>
              <span className="text-gold-400 font-medium uppercase tracking-widest text-sm">Vị trí độc tôn</span>
              <div className="h-[1px] w-8 bg-gold-500"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Tâm Điểm Kết Nối <br/>
              <span className="text-gold-500">Giao Thương & Du Lịch</span>
            </h2>
            <p className="text-gray-300 text-lg font-light">
              Tọa lạc tại xã Long Hòa và thị trấn Cần Thạnh, Cần Giờ - huyện duy nhất của TP.HCM giáp biển. Vinhomes Green Paradise sở hữu vị thế "tựa sơn hướng thủy", mang lại vượng khí và tài lộc.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-emerald-900/50 border border-emerald-800 p-8 hover:border-gold-500/50 transition-colors duration-300"
          >
            <Navigation className="w-10 h-10 text-gold-400 mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Kết nối trung tâm</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Cách trung tâm TP.HCM khoảng 50km. Tương lai di chuyển cực kỳ thuận tiện khi Cầu Cần Giờ (thay thế phà Bình Khánh) hoàn thành, rút ngắn thời gian chỉ còn khoảng 40 phút.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-emerald-900/50 border border-emerald-800 p-8 hover:border-gold-500/50 transition-colors duration-300"
          >
            <Map className="w-10 h-10 text-gold-400 mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Hạ tầng bứt phá</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Hưởng lợi từ quy hoạch nâng cấp đường Rừng Sác, tuyến phà biển Cần Giờ - Vũng Tàu, và dự án Cảng trung chuyển quốc tế Cần Giờ, tạo động lực tăng giá mạnh mẽ.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-emerald-900/50 border border-emerald-800 p-8 hover:border-gold-500/50 transition-colors duration-300"
          >
            <Compass className="w-10 h-10 text-gold-400 mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Phong thủy vượng khí</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Sở hữu đường bờ biển dài, bao bọc bởi hệ sinh thái rừng ngập mặn Cần Giờ (Khu dự trữ sinh quyển thế giới), mang đến không gian sống trong lành, tốt cho sức khỏe.
            </p>
          </motion.div>
        </div>

        {/* Map Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[500px] w-full border border-emerald-800/50 p-2 bg-emerald-900/30"
        >
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Bản đồ vị trí Vinhomes Cần Giờ" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-emerald-950/80 backdrop-blur-sm px-8 py-4 border border-gold-500/30 text-center">
              <p className="text-gold-400 font-serif text-xl">Bản đồ vị trí dự án</p>
              <p className="text-sm text-gray-400 mt-2">Vinhomes Green Paradise</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
