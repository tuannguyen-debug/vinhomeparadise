import { motion } from 'motion/react';
import { Waves, Trees, ShoppingBag, Ship, Palmtree, Utensils } from 'lucide-react';

const amenities = [
  {
    icon: <Waves className="w-6 h-6" />,
    title: "Biển nhân tạo",
    desc: "Hệ thống biển hồ nước mặn nhân tạo quy mô lớn, mang đến trải nghiệm nghỉ dưỡng biển ngay trước thềm nhà."
  },
  {
    icon: <Palmtree className="w-6 h-6" />,
    title: "VinWonders & Safari",
    desc: "Tổ hợp vui chơi giải trí đẳng cấp quốc tế và công viên bảo tồn động vật bán hoang dã."
  },
  {
    icon: <Ship className="w-6 h-6" />,
    title: "Bến du thuyền",
    desc: "Bến du thuyền sang trọng dành riêng cho giới thượng lưu, kết nối giao thông đường thủy thuận tiện."
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: "Sân Golf 27 lỗ",
    desc: "Sân Golf tiêu chuẩn quốc tế, thiết kế hài hòa với cảnh quan thiên nhiên sinh thái Cần Giờ."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Vincom Mega Mall",
    desc: "Trung tâm thương mại sầm uất quy tụ hàng trăm thương hiệu nổi tiếng thế giới."
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Nhà hàng 5 sao",
    desc: "Hệ thống nhà hàng ẩm thực đa dạng, sang trọng với tầm nhìn hướng biển tuyệt đẹp."
  }
];

export default function Amenities() {
  return (
    <section id="tien-ich" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold-500"></div>
              <span className="text-emerald-900 font-medium uppercase tracking-widest text-sm">Hệ sinh thái All-in-one</span>
              <div className="h-[1px] w-8 bg-gold-500"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">
              Đặc Quyền Tiện Ích <br/>
              <span className="text-gold-500">Thượng Lưu</span>
            </h2>
            <p className="text-gray-600 text-lg font-light">
              Trải nghiệm cuộc sống nghỉ dưỡng 365 ngày với hệ thống tiện ích đẳng cấp mang thương hiệu Vingroup, đáp ứng mọi nhu cầu từ giải trí, mua sắm đến chăm sóc sức khỏe.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-900 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-emerald-950 mb-3">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Large Image Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative h-[500px] w-full overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Tiện ích nghỉ dưỡng" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent flex items-end">
            <div className="p-8 md:p-12 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Sống trọn từng khoảnh khắc</h3>
              <p className="text-gray-300 font-light">Mỗi ngày tại Vinhomes Paradise Cần Giờ là một kỳ nghỉ dưỡng hoàn hảo, nơi bạn và gia đình tận hưởng những giá trị sống đích thực.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
