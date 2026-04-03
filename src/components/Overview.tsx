import { motion } from 'motion/react';
import { MapPin, Home, Maximize, Calendar } from 'lucide-react';

const overviewData = [
  {
    icon: <MapPin className="w-8 h-8 text-gold-500" />,
    title: "Vị trí",
    desc: "Xã Long Hòa & TT Cần Thạnh, Huyện Cần Giờ, TP.HCM"
  },
  {
    icon: <Maximize className="w-8 h-8 text-gold-500" />,
    title: "Quy mô",
    desc: "2.870 ha (Khu đô thị lấn biển lớn nhất Việt Nam)"
  },
  {
    icon: <Home className="w-8 h-8 text-gold-500" />,
    title: "Loại hình",
    desc: "Biệt thự nghỉ dưỡng, Shophouse, Condotel, Boutique Hotel"
  },
  {
    icon: <Calendar className="w-8 h-8 text-gold-500" />,
    title: "Khởi công",
    desc: "Dự kiến 2025"
  }
];

export default function Overview() {
  return (
    <section id="tong-quan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Tổng quan Vinhomes Cần Giờ" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 border border-gold-500/30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-900/5 -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-2 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold-500"></div>
              <span className="text-gold-600 font-medium uppercase tracking-widest text-sm">Tổng quan dự án</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-6 leading-tight">
              Biểu Tượng Sống Sinh Thái <br/>
              <span className="text-gold-500">Đẳng Cấp Quốc Tế</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vinhomes Paradise Cần Giờ (Vinhomes Cần Giờ) là siêu dự án khu đô thị lấn biển, kết hợp du lịch sinh thái nghỉ dưỡng quy mô bậc nhất Việt Nam do Tập đoàn Vingroup làm chủ đầu tư. Dự án hứa hẹn mang đến một không gian sống hoàn mỹ, hòa quyện giữa thiên nhiên nguyên sơ của khu dự trữ sinh quyển thế giới và hệ thống tiện ích "All-in-one" thượng lưu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {overviewData.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 bg-emerald-50 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-emerald-950 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
