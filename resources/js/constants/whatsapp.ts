export const WHATSAPP_NUMBER = "6281394450370";

const DEFAULT_MESSAGE = "Halo, saya tertarik dengan layanan BALISERENE TOURS.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
