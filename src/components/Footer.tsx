export default function Footer() {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-900 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white mb-6 block">
              VINHOMES <br/><span className="text-gold-500">CẦN GIỜ</span>
            </a>
            <p className="text-sm font-light leading-relaxed mb-6">
              Siêu dự án khu đô thị lấn biển, kết hợp du lịch sinh thái nghỉ dưỡng quy mô bậc nhất Việt Nam.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 uppercase tracking-wider text-sm">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#tong-quan" className="hover:text-gold-400 transition-colors">Tổng quan dự án</a></li>
              <li><a href="#vi-tri" className="hover:text-gold-400 transition-colors">Vị trí đắc địa</a></li>
              <li><a href="#tien-ich" className="hover:text-gold-400 transition-colors">Hệ thống tiện ích</a></li>
              <li><a href="#mat-bang" className="hover:text-gold-400 transition-colors">Mặt bằng phân khu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 uppercase tracking-wider text-sm">Loại hình SP</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Biệt thự đơn lập</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Biệt thự song lập</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Shophouse</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Condotel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 uppercase tracking-wider text-sm">Thông tin</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Chính sách bán hàng</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Tiến độ thanh toán</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Tin tức dự án</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Vinhomes Paradise Cần Giờ. All rights reserved.</p>
          <p>
            * Thông tin trên website chỉ mang tính chất tham khảo, có thể được điều chỉnh bởi chủ đầu tư.
          </p>
        </div>
      </div>
    </footer>
  );
}
