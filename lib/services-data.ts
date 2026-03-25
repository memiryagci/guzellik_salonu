export interface ServiceData {
  slug: string
  title: string
  description: string
  image: string
  fullDescription: string
  benefits: string[]
  howItWorks: string[]
  whoIsItFor: string[]
  duration: string
  sessions: string
}

export const servicesData: ServiceData[] = [
  {
    slug: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    description: "En son teknoloji cihazlarla kalıcı ve ağrısız lazer epilasyon uygulamaları.",
    image: "/images/lazer.jpg",
    fullDescription: "Lazer epilasyon, ışık enerjisi kullanarak kıl köklerini hedef alan ve kalıcı kıl azaltımı sağlayan modern bir yöntemdir. Merkezimizde kullandığımız FDA onaylı diode lazer cihazlarımız, tüm cilt tiplerine güvenle uygulanabilir ve minimum rahatsızlık ile maksimum sonuç sağlar. Her seans öncesi cildiniz uzman personelimiz tarafından değerlendirilir ve size özel parametreler belirlenir.",
    benefits: [
      "Kalıcı kıl azaltımı sağlar",
      "Ağrısız ve konforlu bir deneyim sunar",
      "Tüm cilt tiplerine uygundur",
      "Batma ve kızarıklık oluşmaz",
      "Zaman kazandırır, tıraş ve ağda dönemine son verir"
    ],
    howItWorks: [
      "İlk olarak cildiniz temizlenir ve tıraş edilir",
      "Özel bir jel uygulanır",
      "Lazer cihazı ile belirlenen bölgeye uygulama yapılır",
      "İşlem sonrası soğutucu krem uygulanır",
      "Güneşten korunma ve bakım önerileri verilir"
    ],
    whoIsItFor: [
      "İstenmeyen tüylerden kalıcı olarak kurtulmak isteyenler",
      "Ağda ve tıraştan yorulanlar",
      "Batık kıl problemi yaşayanlar",
      "Pürüzsüz bir cilde sahip olmak isteyenler"
    ],
    duration: "15-60 dakika (bölgeye göre değişir)",
    sessions: "6-8 seans (4-6 hafta arayla)"
  },
  {
    slug: "medikal-cilt-bakimi",
    title: "Medikal Cilt Bakımı",
    description: "Cildinize özel profesyonel bakım protokolleri ile genç ve sağlıklı bir cilt.",
    image: "/images/cilt-bakimi.jpg",
    fullDescription: "Medikal cilt bakımı, dermatolojik prensiplere dayanan ve cildinizin ihtiyaçlarına göre özelleştirilen profesyonel bakım uygulamalarını kapsar. Akne, leke, kırışıklık, kuruluk gibi cilt problemlerine çözüm sunan bu uygulamalar, tıbbi cihazlar ve dermokozmetik ürünlerle gerçekleştirilir. Her seans öncesi detaylı cilt analizi yapılır ve kişiye özel bir tedavi planı oluşturulur.",
    benefits: [
      "Cilt yenilenmesi ve gençleşme",
      "Akne ve akne izlerinin tedavisi",
      "Leke ve ton eşitsizliklerinin giderilmesi",
      "Kırışıklık ve ince çizgilerin azaltılması",
      "Cilt neminin ve elastikiyetinin artırılması"
    ],
    howItWorks: [
      "Detaylı cilt analizi yapılır",
      "Cilt tipine uygun temizlik yapılır",
      "Peeling veya enzymatic soyma uygulanır",
      "Serum ve maske uygulaması yapılır",
      "Koruyucu krem ve SPF ile işlem tamamlanır"
    ],
    whoIsItFor: [
      "Akne ve sivilce problemi yaşayanlar",
      "Cildinde leke ve ton eşitsizliği olanlar",
      "Yaşlanma belirtileri görmeye başlayanlar",
      "Sağlıklı ve parlak bir cilde sahip olmak isteyenler"
    ],
    duration: "45-90 dakika",
    sessions: "4-6 seans (2 hafta arayla)"
  },
  {
    slug: "bolgesel-incelme",
    title: "Bölgesel İncelme",
    description: "Hedefli teknolojilerle istenmeyen yağlardan kurtulun, formunuza kavuşun.",
    image: "/images/bolgesel-incelme.jpg",
    fullDescription: "Bölgesel incelme uygulamaları, diyet ve egzersizle giderilemeyen inatçı yağ birikimlerini hedef alan non-invaziv tedavi yöntemleridir. Kavitasyon, radyofrekans ve vakum teknolojilerini kullanarak yağ hücrelerini parçalar ve vücudun doğal yollarla atımını sağlar. Cerrahi müdahale gerektirmeyen bu yöntemler, konforlu bir deneyim sunarken etkili sonuçlar sağlar.",
    benefits: [
      "Cerrahi müdahale gerektirmez",
      "Ağrısız ve konforlu uygulama",
      "Hedefli yağ yakımı sağlar",
      "Ciltte sıkılaşma etkisi",
      "Selülit görünümünü azaltır"
    ],
    howItWorks: [
      "Vücut analizi ve ölçüm yapılır",
      "Hedef bölgeler belirlenir",
      "Kavitasyon ile yağ hücreleri parçalanır",
      "Radyofrekans ile cilt sıkılaştırılır",
      "Lenf drenaj masajı ile işlem tamamlanır"
    ],
    whoIsItFor: [
      "Bölgesel yağlanma problemi yaşayanlar",
      "Diyet ve sporla sonuç alamayanlar",
      "Cerrahi yöntemlerden kaçınanlar",
      "Vücut şekillendirmek isteyenler"
    ],
    duration: "60-90 dakika",
    sessions: "8-12 seans (haftada 2 kez)"
  },
  {
    slug: "kalici-makyaj",
    title: "Günlük Makyaj",
    description: "Doğal görünümlü, gün boyu taze kalacak günlük makyaj uygulamaları ile her an bakımlı görünün.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
    fullDescription: "Günlük makyaj; cilt tonunuza uygun renk seçimi ve yüz hatlarınıza göre şekillendirilmiş, pratik ama özenli bir görünüm kazanmanızı sağlar. Seans öncesi hedef görünümünüz (doğal/soft/glow) birlikte belirlenir; cilt temizliği ve nemlendirme adımlarının ardından baz, kaş-göz uygulaması ve sabitleme ile gün boyu taze kalan bir sonuç hedeflenir. Size özel ürün önerileriyle evde uygulamanızı da kolaylaştırıyoruz.",
    benefits: [
      "Doğal ve gün boyu taze görünüm",
      "Cilt tonuna uygun renk ve bitiriş seçimi",
      "Kaş-göz uyumu ile daha belirgin ifade",
      "Hızlı uygulama sayesinde pratik çözüm",
      "Seans sonrası bakım ve ürün önerileri"
    ],
    howItWorks: [
      "Cilt tipi ve hedef görünüm belirlenir (doğal/soft/glow)",
      "Temizleme ve nemlendirme adımları uygulanır",
      "Makyaj bazı ve renk eşleştirmesi yapılır",
      "Kaş-göz uygulaması ve yüz hatları şekillendirilir",
      "Sabitleme, kontroller ve size özel ürün önerileri yapılır"
    ],
    whoIsItFor: [
      "Her gün pratik ama özenli makyaj isteyenler",
      "Doğal görünümlü bir makyaj arayanlar",
      "Renk uyumu ve uygulama tekniği konusunda destek isteyenler",
      "İşe/okula hızlı yetişmek isteyenler"
    ],
    duration: "30-60 dakika",
    sessions: "Tek seans (isteğe göre yenilenir)"
  },
  {
    slug: "kirpik-lifting",
    title: "Kirpik Lifting",
    description: "Doğal kirpiklerinizi kaldırarak daha etkileyici bakışlara sahip olun.",
    image: "/images/kirpik-lifting.jpg",
    fullDescription: "Kirpik lifting, doğal kirpiklerinizi kökten uca kaldırarak daha uzun, kıvrık ve etkileyici bir görünüm kazandıran profesyonel bir uygulamadır. Takma kirpik veya kirpik uzatma gibi ek malzeme kullanmadan, sadece kendi kirpiklerinizle muhteşem bir etki elde edersiniz. İşlem tamamen güvenlidir ve doğal görünümü korur.",
    benefits: [
      "Doğal kirpiklerle etkileyici bakışlar",
      "6-8 hafta kalıcılık",
      "Takma kirpik hissi olmadan kıvrık görünüm",
      "Gözleri daha büyük ve açık gösterir",
      "Günlük bakım gerektirmez"
    ],
    howItWorks: [
      "Kirpikler temizlenir ve hazırlanır",
      "Özel silikon pad göz kapağına yerleştirilir",
      "Kirpikler pad üzerine düzenlenir",
      "Lifting solüsyonu uygulanır",
      "İsteğe bağlı boya ve keratin uygulaması yapılır"
    ],
    whoIsItFor: [
      "Düz ve aşağı bakan kirpiklere sahip olanlar",
      "Doğal görünümü tercih edenler",
      "Kirpik uzatmadan kaçınanlar",
      "Pratik ve bakım gerektirmeyen çözüm isteyenler"
    ],
    duration: "45-60 dakika",
    sessions: "Tek seans (6-8 haftada yenilenebilir)"
  },
  {
    slug: "protez-tirnak",
    title: "Protez Tırnak",
    description: "Profesyonel tırnak bakımı ve estetik protez tırnak uygulamaları.",
    image: "/images/protez-tirnak.jpg",
    fullDescription: "Protez tırnak uygulaması, kırık, yıpranmış veya şekilsiz tırnaklara estetik bir görünüm kazandıran profesyonel bir hizmettir. Jel, akrilik veya polijel yöntemleriyle uygulanan protez tırnaklar, doğal görünümlü ve uzun ömürlüdür. Nail art, French manikür ve özel tasarım seçenekleriyle tırnaklarınızı sanat eserine dönüştürüyoruz.",
    benefits: [
      "Güçlü ve dayanıklı tırnaklar",
      "İstediğiniz uzunluk ve şekil",
      "Doğal görünümlü sonuçlar",
      "Geniş renk ve tasarım seçenekleri",
      "2-3 hafta kalıcılık"
    ],
    howItWorks: [
      "Tırnaklar şekillendirilir ve hazırlanır",
      "İstenen uzunluk belirlenir",
      "Protez uygulama yapılır (jel/akrilik)",
      "Şekillendirme ve zımparalama yapılır",
      "Renk ve tasarım uygulanır"
    ],
    whoIsItFor: [
      "Kırılgan ve zayıf tırnaklara sahip olanlar",
      "Tırnak yeme alışkanlığı olanlar",
      "Uzun ve bakımlı tırnaklar isteyenler",
      "Özel günler için estetik tırnak isteyenler"
    ],
    duration: "60-90 dakika",
    sessions: "Tek seans (2-3 haftada dolgu gerekir)"
  }
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug)
}
