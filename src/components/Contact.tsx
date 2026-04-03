import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

// NOTE: Replace this URL with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGTXU0Ssund0ApzYf59WNV_J5SwggQOIUL9Bnx_OqeG5m9Fe0s0rAS6GRLRVj2VETW/exec';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    demand: 'Biệt thự nghỉ dưỡng'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setError('Vui lòng điền đầy đủ Họ tên và Số điện thoại.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // We use no-cors mode or standard fetch depending on how the Apps Script is deployed.
      // Standard fetch with JSON body:
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Using text/plain avoids CORS preflight issues with Apps Script
        }
      });

      // Even with no-cors or standard, if it doesn't throw, we assume success for this demo
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', demand: 'Biệt thự nghỉ dưỡng' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Lỗi khi gửi form:', err);
      setError('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lien-he" className="py-24 bg-emerald-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/30 transform skew-x-12 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 text-white"
          >
            <div className="mb-2 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold-500"></div>
              <span className="text-gold-400 font-medium uppercase tracking-widest text-sm">Liên hệ tư vấn</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Nhận Thông Tin <br/>
              <span className="text-gold-500">Dự Án Mới Nhất</span>
            </h2>
            <p className="text-gray-300 font-light mb-12 leading-relaxed">
              Đăng ký ngay để nhận bảng giá chi tiết, chính sách bán hàng ưu đãi và hỗ trợ tư vấn chọn căn đẹp nhất từ chủ đầu tư.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Hotline</p>
                  <p className="text-xl font-serif font-bold text-white">0915 827 887</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg font-light text-white">info@vinhomes-cangio.vn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Văn phòng giao dịch</p>
                  <div className="text-base font-light text-white leading-relaxed">
                    <p className="font-medium text-gold-400">SÀN GIAO DỊCH DỰ ÁN AQUA CITY</p>
                    <p>Bis NTMK, Đa Kao, Q1, HCM</p>
                    <p>Sàn BDS Aqua City, Biên Hòa, Đồng Nai</p>
                    <p>65 Nguyễn Du, Bến Nghé, Q1, HCM1</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">Đăng ký nhận báo giá</h3>
              
              {isSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-sm flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  <p className="font-medium text-lg">Đăng ký thành công!</p>
                  <p className="text-sm">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
                        placeholder="Nhập họ tên của bạn"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
                        placeholder="Nhập số điện thoại"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
                      placeholder="Nhập địa chỉ email"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nhu cầu quan tâm</label>
                    <select 
                      name="demand"
                      value={formData.demand}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors text-gray-600"
                      disabled={isSubmitting}
                    >
                      <option value="Biệt thự nghỉ dưỡng">Biệt thự nghỉ dưỡng</option>
                      <option value="Shophouse thương mại">Shophouse thương mại</option>
                      <option value="Condotel">Condotel</option>
                      <option value="Boutique Hotel">Boutique Hotel</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-emerald-900 text-white font-medium uppercase tracking-wider hover:bg-emerald-800 transition-colors duration-300 mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      'Gửi yêu cầu tư vấn'
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Thông tin của quý khách được bảo mật tuyệt đối.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
