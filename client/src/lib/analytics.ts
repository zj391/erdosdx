/**
 * Google Analytics 4 Configuration
 * 
 * 使用方法：
 * 1. 在 Google Analytics 中创建账户并获取 Measurement ID (G-XXXXXXXXXX)
 * 2. 将 Measurement ID 替换为实际的 ID
 * 3. 在需要的地方导入并调用 trackEvent() 函数
 */

// GA4 Measurement ID - 需要替换为实际的 ID
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // 替换为您的 Measurement ID

/**
 * 初始化 Google Analytics 4
 */
export function initializeGA4() {
  if (typeof window === 'undefined') return;

  // 添加 gtag 脚本
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // 初始化 gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    page_title: document.title,
  });

  (window as any).gtag = gtag;
}

/**
 * 跟踪自定义事件
 * @param eventName - 事件名称
 * @param eventData - 事件数据
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;

  (window as any).gtag('event', eventName, eventData || {});
}

/**
 * 跟踪页面浏览
 * @param pagePath - 页面路径
 * @param pageTitle - 页面标题
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * 跟踪表单提交
 * @param formName - 表单名称
 * @param formData - 表单数据
 */
export function trackFormSubmit(formName: string, formData?: Record<string, any>) {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
}

/**
 * 跟踪产品查看
 * @param productId - 产品 ID
 * @param productName - 产品名称
 * @param productCategory - 产品分类
 * @param productPrice - 产品价格
 */
export function trackProductView(
  productId: string,
  productName: string,
  productCategory?: string,
  productPrice?: number
) {
  trackEvent('view_item', {
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: productCategory,
        price: productPrice,
      },
    ],
  });
}

/**
 * 跟踪联系我们点击
 * @param contactMethod - 联系方式 (whatsapp, email, form)
 */
export function trackContactClick(contactMethod: string) {
  trackEvent('contact_click', {
    contact_method: contactMethod,
  });
}

/**
 * 跟踪外部链接点击
 * @param linkUrl - 链接 URL
 * @param linkText - 链接文本
 */
export function trackExternalLinkClick(linkUrl: string, linkText?: string) {
  trackEvent('external_link_click', {
    link_url: linkUrl,
    link_text: linkText,
  });
}

/**
 * 跟踪社媒分享
 * @param platform - 社媒平台 (facebook, twitter, linkedin, whatsapp, email)
 * @param contentTitle - 内容标题
 */
export function trackSocialShare(platform: string, contentTitle?: string) {
  trackEvent('social_share', {
    platform,
    content_title: contentTitle,
  });
}

/**
 * 跟踪语言切换
 * @param language - 语言代码 (en, zh, ja, ko, fr, de, es)
 */
export function trackLanguageChange(language: string) {
  trackEvent('language_change', {
    language,
  });
}

/**
 * 跟踪聊天工具打开
 */
export function trackChatOpen() {
  trackEvent('chat_open', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * 跟踪下载或文件点击
 * @param fileName - 文件名
 * @param fileType - 文件类型
 */
export function trackFileDownload(fileName: string, fileType?: string) {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
}

// 扩展 Window 类型以支持 gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
