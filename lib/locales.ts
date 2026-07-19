export const locales = ["en", "id", "ja", "ko", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  id: "Indonesia",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  id: "id_ID",
  ja: "ja_JP",
  ko: "ko_KR",
  zh: "zh_CN",
};

export const seoByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  en: {
    title: "Premium Bali Travel | Private Bali Transportation",
    description:
      "Premium private Bali transportation for families and groups, with vehicle recommendations based on guests, luggage, color preference and travel plans.",
    keywords: [
      "Bali private driver",
      "Bali car rental with driver",
      "Bali airport transfer",
      "Bali Hiace rental",
      "Bali family transport",
      "premium Bali transport",
    ],
  },
  id: {
    title: "Premium Bali Travel | Transportasi Pribadi di Bali",
    description:
      "Transportasi pribadi premium di Bali untuk keluarga dan rombongan, dengan rekomendasi kendaraan berdasarkan jumlah tamu, bagasi, warna, dan rencana perjalanan.",
    keywords: [
      "sewa mobil Bali dengan sopir",
      "driver pribadi Bali",
      "antar jemput bandara Bali",
      "sewa Hiace Bali",
      "transport keluarga Bali",
      "transport premium Bali",
    ],
  },
  ja: {
    title: "Premium Bali Travel | バリ島プライベート送迎",
    description:
      "ご家族やグループ向けのバリ島プライベート送迎。人数、荷物、希望車両、旅程に合わせて最適な車両をご提案します。",
    keywords: [
      "バリ島 プライベートドライバー",
      "バリ島 車 チャーター",
      "バリ島 空港送迎",
      "バリ島 ハイエース",
      "バリ島 家族 送迎",
      "バリ島 高級送迎",
    ],
  },
  ko: {
    title: "Premium Bali Travel | 발리 프라이빗 차량 서비스",
    description:
      "가족과 단체 여행객을 위한 발리 프리미엄 프라이빗 차량 서비스. 인원, 짐, 차량 선호도와 일정에 맞춰 차량을 추천합니다.",
    keywords: [
      "발리 프라이빗 드라이버",
      "발리 렌터카 기사 포함",
      "발리 공항 픽업",
      "발리 하이에이스 렌트",
      "발리 가족 교통",
      "발리 프리미엄 차량",
    ],
  },
  zh: {
    title: "Premium Bali Travel | 巴厘岛私人包车服务",
    description:
      "为家庭和团体提供巴厘岛高端私人交通服务，根据人数、行李、车辆偏好和行程推荐合适车辆。",
    keywords: [
      "巴厘岛私人司机",
      "巴厘岛包车",
      "巴厘岛机场接送",
      "巴厘岛 Hiace 租车",
      "巴厘岛家庭交通",
      "巴厘岛高端交通",
    ],
  },
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const languageAlternates = (basePath = "") =>
  Object.fromEntries(locales.map((locale) => [locale, `/${locale}${basePath}`]));
