// تكوين API الخاص بـ OOP AI
// أنواع إدخال مفتاح API (اختر واحداً):
// 1. عدل هذا الملف واضف المفتاح مباشرة (للاستخدام المحلي)
// 2. استخدم ?key=YOUR_API_KEY في رابط URL (للاختبار السريع)
// 3. أضف المفتاح عند فتح الصفحة

const OOP_CONFIG = {
  // الخيار 1: أضف المفتاح هنا مباشرة (اختياري)
  // احصل على مفتاح مجاني من: https://platform.deepseek.com/
  DEEPSEEK_API_KEY: '', // اتركه فارغاً إذا تريد إدخاله يدوياً
  
  // لا تغير هذا
  DEEPSEEK_BASE_URL: 'https://api.deepseek.com'
};

// الخيار 2: قراءة المفتاح من URL (?key=sk-...)
const urlParams = new URLSearchParams(window.location.search);
const urlKey = urlParams.get('key');

// استخدم المفتاح من URL أو من الإعدادات
window.DEEPSEEK_API_KEY = urlKey || OOP_CONFIG.DEEPSEEK_API_KEY || '';
window.DEEPSEEK_BASE_URL = OOP_CONFIG.DEEPSEEK_BASE_URL;

// إذا لا يوجد مفتاح، سيتم طلبه عند الإرسال
