// =====================================================
// INFORMAÇÕES DO ESTABELECIMENTO
// Edite facilmente os dados abaixo com as informações reais.
// =====================================================

export const RESTAURANT_INFO = {
  name: 'Pastelão Sabor Brasileiro',
  slogan: 'Seu sabor, do nosso jeito.',
  whatsapp: '5566984527373',
  whatsappDisplay: '66 98452-7373',
  address: 'Rua das Pitangas, 270',
  city: 'Ipiranga do Norte - MT',
  addressLink: 'https://www.google.com/maps/search/?api=1&query=Rua+das+Pitangas+270+Ipiranga+do+Norte+MT',
  radio: {
    name: 'Rádio Imigrantes FM',
    frequency: '87,9',
    stream: 'https://stream.splug.com.br:8443/Radio111',
  },
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
  },
};

// =====================================================
// HORÁRIO DE FUNCIONAMENTO
// 
// =====================================================

export const BUSINESS_HOURS = [
  { days: 'Segunda a Sábado', hours: '15:00 às 22:00', open: true },
  { days: 'Domingo', hours: '15:00 às 22:00', open: true },
];

export function isCurrentlyOpen(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentMinutes = hour * 60 + minutes;

  if (day === 0) {
    return currentMinutes >= 18 * 60 && currentMinutes <= 22 * 60 + 30;
  }
  return currentMinutes >= 18 * 60 && currentMinutes <= 23 * 60;
}

export function buildWhatsAppLink(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${RESTAURANT_INFO.whatsapp}${text}`;
}
