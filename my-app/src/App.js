import logo from './logo.svg';
import './App.css';
import { CSVLink } from 'react-csv'
import AN from './json/AN.json'
// const an = {
//   "priceboard_total_value_foreign_buy": "Khối ngoại mua",
//   "priceboard_total_value_foreign_sell": "Khối ngoại bán",
//   "liquidity": "Thanh khoản",
//   "watchlists": "Danh mục",
//   "foreigner_trade_short": "Khối ngoại",
//   "head_current_right": "Giá hiện tại",
//   "max_buy_qty":"Mua tối đa",
//   "max_sell_qty":"Bán tối đa",
//   "switch_priceboard": "Bảng giá xoay ngang",
//   "avg_5days_trading_value": "Trung bình lịch sử giao dịch 5 phiên gần nhất",
//   "title_liquidity_trading_value": "Giá trị giao dịch",
//   "unit_thousand": " Nghìn",
//   "unit_millions": " Triệu",
//   "unit_billions": " Tỷ",
//   "unit_trilions": " Nghìn tỷ",
//   "asset_weight": "Tỉ trọng tài sản theo ngày",
//   "statictis": "Thống kê lời/lỗ",
//   "profit_or_loss_ratio": "% Lời/Lỗ",
//   "ratio_index": "Tỉ lệ chỉ số",
//   "absolute_efficiency": "Hiệu quả tuyệt đối",
//   "compare_vnindex": "So sánh với VNINDEX",
//   "title_assets": "Tài sản",
//   "target_price": "Giá mục tiêu",
//   "recomment_price": "Giá K.Nghị",
//   "notify_market_closed_you_want_to_switch_advance_order": "Thị trường đang ở trạng thái đóng cửa. Quý khách có muốn đặt lệnh cho ngày giao dịch tiếp theo hay không?",
//   "payment_instructions": "Hướng dẫn nộp tiền",
//   "choose_account_trading": "Nhập số tài khoản (VD: 357)",
//   "password_trading": "Mật khẩu giao dịch",
//   "search_with": "Tìm kiếm theo",
//   "warning_account_is_empty": "Quý khách lưu ý: Vui lòng chọn tài khoản giao dịch",
//   "bank_acccount_link": "T.Khoản ngân hàng",
//   "connect_to_shinhan_bank": "Liên kết với TK NH Shinhan",
//   "other_bank": "Đăng ký TK chuyển tiền",
//   "warning_bank_acc_number_is_empty": "Quý khách lưu ý: Vui lòng nhập số tài khoản ngân hàng",
//   "input_bank_acc_number": "Số tài khoản ngân hàng",
//   "shinhan_bank": "Ngân hàng Shinhan",
//   "bank_info": "Thông tin ngân hàng",
//   "room_buy": "NN Mua",
//   "room_sell": "NN Bán",
//   "asset_ratio": "Tỉ trọng",
//   "message_note_for_iotp": "Để đảm bảo an toàn tài khoản của quý khách, TUYỆT ĐỐI KHÔNG tiết lộ cho bất kỳ ai hoặc nhập thông tin: Tên truy cập/Mật khẩu/ Mã kích hoạt OTP vào các website hoặc ứng dụng không phải của chúng tôi. ",
//   "user_manual_iotp": "Xem hướng dẫn sử dụng iOTP",
//   "user_argee_to": "Tôi đã đọc và đồng ý với ",
//   "term_condition_iotp": "Điều khoản và điều kiện iOTP",
//   "total_buy_match_total": "GT khớp mua",
//   "total_sell_match_total": "GT khớp bán",
//   "network_disconnected_please_check_network_try_again": "Đã mất kết nối mạng. Vui lòng kiểm tra mạng và thử lại!",
//   "abort_iotp": "Hủy iOTP",
//   "notify_user_register_iotp": "Bạn có muốn đăng ký iOTP để xác thực giao dịch trực tuyến không?",
//   "notify_deactive_iotp": "Bạn có chắc muốn HỦY liên kết tính năng iOTP trên thiết bị này không?",
//   "ending_value": "Giá trị cuối kỳ",
//   "total_revenue": "Tổng doanh thu",
//   "gross_profit": "Lợi nhuận gộp",
//   "operating_income": "Thu nhập kinh doanh",
//   "net_income": "Thu nhập ròng",
//   "gross_margin": "Lãi gộp",
//   "operating_margin": "Lãi gộp kinh doanh",
//   "net_profit_margin": "Hệ số biên lợi nhuận ròng",
//   "return_on_investment": "Thu nhập trên đầu tư",
//   "quick_payout_ratio": "Hệ số thanh toán nhanh",
//   "current_ratio": "Tỷ số thanh toán hiện thời",
//   "long_term_debt_to_equity": "Nợ trên vốn cổ phần dài hạn",
//   "total_debt_to_equity": "Tổng nợ trên vốn cổ phần",
//   "total_liabilities": "Tổng nợ phải trả",
//   "total_equity": "Tổng vốn sở hữu",
//   "cash_from_operating_activities": "Tiền mặt từ hoạt động kinh doanh",
//   "cash_from_investing_activities": "Tiền mặt từ hoạt động đầu tư",
//   "cash_from_finance_activities": "Tiền mặt từ hoạt động tài chính",
//   "net_change_in_cash": "Thay đổi tiền mặt ròng",
//   "cash_flow_share": "Dòng tiền/Cổ phần",
//   "revenue_share": "Doanh thu/Cổ phần",
//   "operating_cash_flow": "Dòng tiền kinh doanh",
//   "income_statement": "Bảng báo cáo thu nhập",
//   "balance_sheet": "Bảng cân đối kế toán",
//   "cash_flow": "Báo cáo lưu chuyển tiền tệ",
//   "period": "Khoảng thời gian",
//   "quarterly": "Hàng Quý",
//   "annual": "Hàng Năm",
//   "div_wait_comeback": "Tiền cổ tức chờ về",
//   "service_is_not_available": "Chưa đăng ký dịch vụ",
//   "service_is_not_available_note": "Quý khách lưu ý: Bạn chưa đăng ký dịch vụ này. Vui lòng liên hiện nhân viên chăm sóc để được hỗ trợ",
//   "title_new_updates": "Cập nhật mới!"
// }
function App() {
  const ankey = [ 
    { label: 'key', key: 'key' },
    { label: 'value', key: 'value' }]

const anex = ()=>{
    const xuatDataAn = []
    Object.keys(AN).forEach((key)=>{
        xuatDataAn.push({key:key,value:AN[key]})
    })
    return xuatDataAn
}
  return (
    <>
    <CSVLink filename={'xuatexl.csv'} data={anex()} headers={ankey} target="_blank">
        <span>
            Xuất csv
        </span>
    </CSVLink>

    <ul>Hướng dẫn sử dụng: Để export 1 đoạn json thành 1 file csv bạn làm theo cách sau
      <li>Định dạng file json</li>
      <li>Vào đường dẫn: ./json/AN.json copy đoạn json cần export vào</li>
    </ul>
    </>
  );
}

export default App;
