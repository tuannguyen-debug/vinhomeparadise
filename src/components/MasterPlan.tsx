import { motion } from 'motion/react';

const zones = [
  {
    name: "Phân khu Heartbreak",
    desc: "Trung tâm giải trí sôi động với các tuyến phố thương mại sầm uất.",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Phân khu La Casa",
    desc: "Khu biệt thự nghỉ dưỡng riêng tư, yên tĩnh ven biển.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Phân khu The Bay",
    desc: "Tổ hợp Condotel và khách sạn 5 sao tầm nhìn panorama.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function MasterPlan() {
  return (
    <section id="mat-bang" className="py-24 bg-white">
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
              <span className="text-emerald-900 font-medium uppercase tracking-widest text-sm">Quy hoạch tổng thể</span>
              <div className="h-[1px] w-8 bg-gold-500"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">
              Mặt Bằng & <br/>
              <span className="text-gold-500">Thiết Kế Phân Khu</span>
            </h2>
            <p className="text-gray-600 text-lg font-light">
              Dự án được chia thành nhiều phân khu với các chức năng riêng biệt, từ nghỉ dưỡng yên tĩnh đến giải trí sôi động, đáp ứng đa dạng nhu cầu của khách hàng.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden mb-6">
                <img 
                  src={zone.image} 
                  alt={zone.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-emerald-950/90 to-transparent">
                  <h3 className="text-xl font-serif font-bold text-white">{zone.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 font-light leading-relaxed px-2">
                {zone.desc}
              </p>
              <div className="px-2 mt-4">
                <span className="text-gold-600 font-medium text-sm uppercase tracking-wider group-hover:text-emerald-900 transition-colors flex items-center gap-2">
                  Xem chi tiết <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
