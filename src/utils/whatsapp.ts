import { shopConfig } from '../config/shopConfig';

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${shopConfig.whatsappNumber}?text=${encoded}`;
}

export function buildProductEnquiryMessage(productName: string, category: string, priceText?: string): string {
  return `Hello ${shopConfig.shopName}, I saw your website and would like to enquire about:

📌 *Product:* ${productName}
🏷️ *Category:* ${category}
${priceText ? `💰 *Price:* ${priceText}\n` : ''}
Could you please share availability or details on visiting your shop? Thank you!`;
}

export function buildTailoringEnquiryMessage(serviceTitle: string, userNote?: string): string {
  let msg = `Hello ${shopConfig.shopName}, I would like to enquire about tailoring service:

✂️ *Service:* ${serviceTitle}`;
  if (userNote) {
    msg += `\n💬 *Note/Requirement:* ${userNote}`;
  }
  msg += `\n\nWhen can I visit your shop for measurement/fitting?`;
  return msg;
}

export function buildEstimatorMessage(service: string, fabricSource: string, urgency: string, notes?: string): string {
  let msg = `Hello ${shopConfig.shopName}, I used your website Estimator and would like a price quote:

✂️ *Service:* ${service}
🧵 *Fabric Source:* ${fabricSource}
⏱️ *Urgency:* ${urgency}`;
  if (notes) {
    msg += `\n📝 *Additional Detail:* ${notes}`;
  }
  msg += `\n\nPlease let me know the estimated cost & time to complete. Thanks!`;
  return msg;
}

export function buildGeneralContactMessage(name: string, phone: string, serviceInterest: string, userMsg: string): string {
  return `Hello ${shopConfig.shopName}, my name is ${name} (${phone}).

📍 *Interest:* ${serviceInterest}
💬 *Message:* ${userMsg}`;
}
