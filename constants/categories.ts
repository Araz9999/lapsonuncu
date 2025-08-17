import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: 1,
    name: {
      az: 'Elektronika',
      ru: 'Электроника',
    },
    icon: 'smartphone',
    subcategories: [
      {
        id: 101,
        name: {
          az: 'Mobil telefon və aksesuarlar',
          ru: 'Мобильные телефоны и аксессуары',
        },
        subcategories: [
          { id: 10101, name: { az: 'iPhone', ru: 'iPhone' } },
          { id: 10102, name: { az: 'Samsung', ru: 'Samsung' } },
          { id: 10103, name: { az: 'Xiaomi', ru: 'Xiaomi' } },
          { id: 10104, name: { az: 'Huawei', ru: 'Huawei' } },
          { id: 10105, name: { az: 'Oppo', ru: 'Oppo' } },
          { id: 10106, name: { az: 'Vivo', ru: 'Vivo' } },
          { id: 10107, name: { az: 'OnePlus', ru: 'OnePlus' } },
          { id: 10108, name: { az: 'Realme', ru: 'Realme' } },
          { id: 10109, name: { az: 'Nokia', ru: 'Nokia' } },
          { id: 10110, name: { az: 'Sony', ru: 'Sony' } },
          { id: 10111, name: { az: 'LG', ru: 'LG' } },
          { id: 10112, name: { az: 'Motorola', ru: 'Motorola' } },
          { id: 10113, name: { az: 'Honor', ru: 'Honor' } },
          { id: 10114, name: { az: 'Google Pixel', ru: 'Google Pixel' } },
          { id: 10115, name: { az: 'Telefon aksesuarları', ru: 'Аксессуары для телефонов' } },
          { id: 10116, name: { az: 'Qoruyucu şüşələr', ru: 'Защитные стекла' } },
          { id: 10117, name: { az: 'Telefon qabları', ru: 'Чехлы для телефонов' } },
          { id: 10118, name: { az: 'Şarj cihazları', ru: 'Зарядные устройства' } },
          { id: 10119, name: { az: 'Powerbank', ru: 'Powerbank' } },
          { id: 10120, name: { az: 'Kabellər', ru: 'Кабели' } },
          { id: 10121, name: { az: 'Simsiz qulaqlıqlar', ru: 'Беспроводные наушники' } },
          { id: 10122, name: { az: 'Bluetooth dinamiklər', ru: 'Bluetooth колонки' } },
          { id: 10123, name: { az: 'Telefon tutacaqları', ru: 'Держатели для телефонов' } },
          { id: 10124, name: { az: 'Selfi çubuqları', ru: 'Селфи-палки' } },
          { id: 10125, name: { az: 'Smart saatlar', ru: 'Умные часы' } },
          { id: 10126, name: { az: 'Fitness qolbaqları', ru: 'Фитнес-браслеты' } },
        ]
      },
      {
        id: 102,
        name: {
          az: 'Kompüterlər və noutbuklar',
          ru: 'Компьютеры и ноутбуки',
        },
        subcategories: [
          { id: 10201, name: { az: 'Noutbuklar', ru: 'Ноутбуки' } },
          { id: 10202, name: { az: 'Masaüstü kompüterlər', ru: 'Настольные компьютеры' } },
          { id: 10203, name: { az: 'Monitorlar', ru: 'Мониторы' } },
          { id: 10204, name: { az: 'Klaviaturalar', ru: 'Клавиатуры' } },
          { id: 10205, name: { az: 'Siçanlar', ru: 'Мыши' } },
          { id: 10206, name: { az: 'Printer və MFU', ru: 'Принтеры и МФУ' } },
          { id: 10207, name: { az: 'Skaner', ru: 'Сканеры' } },
          { id: 10208, name: { az: 'Proyektorlar', ru: 'Проекторы' } },
          { id: 10209, name: { az: 'UPS', ru: 'ИБП' } },
          { id: 10210, name: { az: 'Şəbəkə avadanlığı', ru: 'Сетевое оборудование' } },
          { id: 10211, name: { az: 'Server avadanlığı', ru: 'Серверное оборудование' } },
          { id: 10212, name: { az: 'Kompüter hissələri', ru: 'Комплектующие' } },
          { id: 10213, name: { az: 'Videokartlar', ru: 'Видеокарты' } },
          { id: 10214, name: { az: 'Prosessorlar', ru: 'Процессоры' } },
          { id: 10215, name: { az: 'RAM yaddaş', ru: 'Оперативная память' } },
          { id: 10216, name: { az: 'SSD diskləri', ru: 'SSD диски' } },
          { id: 10217, name: { az: 'HDD diskləri', ru: 'HDD диски' } },
          { id: 10218, name: { az: 'Anakartlar', ru: 'Материнские платы' } },
          { id: 10219, name: { az: 'Güc blokları', ru: 'Блоки питания' } },
          { id: 10220, name: { az: 'Korpuslar', ru: 'Корпуса' } },
        ]
      },
      {
        id: 103,
        name: {
          az: 'Planşetlər',
          ru: 'Планшеты',
        },
        subcategories: [
          { id: 10301, name: { az: 'iPad', ru: 'iPad' } },
          { id: 10302, name: { az: 'Samsung planşetləri', ru: 'Планшеты Samsung' } },
          { id: 10303, name: { az: 'Huawei planşetləri', ru: 'Планшеты Huawei' } },
          { id: 10304, name: { az: 'Lenovo planşetləri', ru: 'Планшеты Lenovo' } },
          { id: 10305, name: { az: 'Xiaomi planşetləri', ru: 'Планшеты Xiaomi' } },
          { id: 10306, name: { az: 'Planşet aksesuarları', ru: 'Аксессуары для планшетов' } },
        ]
      },
      {
        id: 104,
        name: {
          az: 'TV və video',
          ru: 'ТВ и видео',
        },
        subcategories: [
          { id: 10401, name: { az: 'Televizorlar', ru: 'Телевизоры' } },
          { id: 10402, name: { az: 'Smart TV', ru: 'Smart TV' } },
          { id: 10403, name: { az: 'LED televizorlar', ru: 'LED телевизоры' } },
          { id: 10404, name: { az: 'OLED televizorlar', ru: 'OLED телевизоры' } },
          { id: 10405, name: { az: 'QLED televizorlar', ru: 'QLED телевизоры' } },
          { id: 10406, name: { az: 'Proyektorlar', ru: 'Проекторы' } },
          { id: 10407, name: { az: 'TV qutuları', ru: 'ТВ приставки' } },
          { id: 10408, name: { az: 'DVD/Blu-ray pleyelər', ru: 'DVD/Blu-ray плееры' } },
          { id: 10409, name: { az: 'Antenalar', ru: 'Антенны' } },
          { id: 10410, name: { az: 'TV aksesuarları', ru: 'Аксессуары для ТВ' } },
        ]
      },
      {
        id: 105,
        name: {
          az: 'Audio texnika',
          ru: 'Аудиотехника',
        },
        subcategories: [
          { id: 10501, name: { az: 'Qulaqlıqlar', ru: 'Наушники' } },
          { id: 10502, name: { az: 'Simsiz qulaqlıqlar', ru: 'Беспроводные наушники' } },
          { id: 10503, name: { az: 'Dinamiklər', ru: 'Колонки' } },
          { id: 10504, name: { az: 'Bluetooth dinamiklər', ru: 'Bluetooth колонки' } },
          { id: 10505, name: { az: 'Soundbar', ru: 'Саундбары' } },
          { id: 10506, name: { az: 'Mikrofonlar', ru: 'Микрофоны' } },
          { id: 10507, name: { az: 'Audio interfeysləri', ru: 'Аудиоинтерфейсы' } },
          { id: 10508, name: { az: 'Musiqi mərkəzləri', ru: 'Музыкальные центры' } },
          { id: 10509, name: { az: 'Radiolər', ru: 'Радиоприемники' } },
          { id: 10510, name: { az: 'Turntable', ru: 'Проигрыватели' } },
        ]
      },
      {
        id: 106,
        name: {
          az: 'Foto və video',
          ru: 'Фото и видео',
        },
        subcategories: [
          { id: 10601, name: { az: 'Fotoaparatlar', ru: 'Фотоаппараты' } },
          { id: 10602, name: { az: 'Videokameralar', ru: 'Видеокамеры' } },
          { id: 10603, name: { az: 'Action kameralar', ru: 'Экшн-камеры' } },
          { id: 10604, name: { az: 'Dronlar', ru: 'Дроны' } },
          { id: 10605, name: { az: 'Objektivi', ru: 'Объективы' } },
          { id: 10606, name: { az: 'Tripodlar', ru: 'Штативы' } },
          { id: 10607, name: { az: 'Flaşlar', ru: 'Вспышки' } },
          { id: 10608, name: { az: 'Foto aksesuarları', ru: 'Фотоаксессуары' } },
          { id: 10609, name: { az: 'Yaddaş kartları', ru: 'Карты памяти' } },
          { id: 10610, name: { az: 'Foto çantaları', ru: 'Фотосумки' } },
        ]
      },
      {
        id: 107,
        name: {
          az: 'Oyun konsolları',
          ru: 'Игровые консоли',
        },
        subcategories: [
          { id: 10701, name: { az: 'PlayStation', ru: 'PlayStation' } },
          { id: 10702, name: { az: 'Xbox', ru: 'Xbox' } },
          { id: 10703, name: { az: 'Nintendo', ru: 'Nintendo' } },
          { id: 10704, name: { az: 'PC oyunları', ru: 'PC игры' } },
          { id: 10705, name: { az: 'Oyun aksesuarları', ru: 'Игровые аксессуары' } },
          { id: 10706, name: { az: 'VR headsetlər', ru: 'VR гарнитуры' } },
          { id: 10707, name: { az: 'Oyun stulları', ru: 'Игровые кресла' } },
          { id: 10708, name: { az: 'Oyun klaviaturaları', ru: 'Игровые клавиатуры' } },
          { id: 10709, name: { az: 'Oyun siçanları', ru: 'Игровые мыши' } },
          { id: 10710, name: { az: 'Gamepadlar', ru: 'Геймпады' } },
        ]
      },
      {
        id: 108,
        name: {
          az: 'Məişət texnikası',
          ru: 'Бытовая техника',
        },
        subcategories: [
          { id: 10801, name: { az: 'Soyuducular', ru: 'Холодильники' } },
          { id: 10802, name: { az: 'Paltaryuyan maşınlar', ru: 'Стиральные машины' } },
          { id: 10803, name: { az: 'Qabyuyan maşınlar', ru: 'Посудомоечные машины' } },
          { id: 10804, name: { az: 'Mikrodalğalı sobalar', ru: 'Микроволновые печи' } },
          { id: 10805, name: { az: 'Ütülər', ru: 'Утюги' } },
          { id: 10806, name: { az: 'Tozsoran', ru: 'Пылесосы' } },
          { id: 10807, name: { az: 'Kondisionerlər', ru: 'Кондиционеры' } },
          { id: 10808, name: { az: 'İstilik radiatoru', ru: 'Радиаторы отопления' } },
          { id: 10809, name: { az: 'Su qızdırıcıları', ru: 'Водонагреватели' } },
          { id: 10810, name: { az: 'Hava təmizləyiciləri', ru: 'Очистители воздуха' } },
        ]
      },
      {
        id: 109,
        name: {
          az: 'Mətbəx texnikası',
          ru: 'Кухонная техника',
        },
        subcategories: [
          { id: 10901, name: { az: 'Sobalar', ru: 'Плиты' } },
          { id: 10902, name: { az: 'Ovenlər', ru: 'Духовки' } },
          { id: 10903, name: { az: 'Tosterlar', ru: 'Тостеры' } },
          { id: 10904, name: { az: 'Blenderlər', ru: 'Блендеры' } },
          { id: 10905, name: { az: 'Çay dəmləyicilər', ru: 'Чайники' } },
          { id: 10906, name: { az: 'Qəhvə maşınları', ru: 'Кофемашины' } },
          { id: 10907, name: { az: 'Multivarkalar', ru: 'Мультиварки' } },
          { id: 10908, name: { az: 'Xırdalan edici', ru: 'Измельчители' } },
          { id: 10909, name: { az: 'Meyve sıxanlar', ru: 'Соковыжималки' } },
          { id: 10910, name: { az: 'Mikserlər', ru: 'Миксеры' } },
        ]
      },
      {
        id: 110,
        name: {
          az: 'Avtomobil elektronikası',
          ru: 'Автоэлектроника',
        },
        subcategories: [
          { id: 11001, name: { az: 'Avtomobil radiosistemi', ru: 'Автомагнитолы' } },
          { id: 11002, name: { az: 'DVR kameralar', ru: 'Видеорегистраторы' } },
          { id: 11003, name: { az: 'GPS naviqatorlar', ru: 'GPS навигаторы' } },
          { id: 11004, name: { az: 'Avtomobil şarj cihazları', ru: 'Автомобильные зарядки' } },
          { id: 11005, name: { az: 'Avtomobil aksesuarları', ru: 'Автомобильные аксессуары' } },
          { id: 11006, name: { az: 'Radar detektorları', ru: 'Радар-детекторы' } },
          { id: 11007, name: { az: 'Avtomobil dinamikləri', ru: 'Автомобильные колонки' } },
          { id: 11008, name: { az: 'Avtomobil amplifikatoru', ru: 'Автомобильные усилители' } },
        ]
      },
    ],
  },
  {
    id: 2,
    name: {
      az: 'Daşınmaz əmlak',
      ru: 'Недвижимость',
    },
    icon: 'home',
    subcategories: [
      {
        id: 201,
        name: {
          az: 'Mənzillər',
          ru: 'Квартиры',
        },
        subcategories: [
          { id: 20101, name: { az: '1 otaqlı', ru: '1-комнатные' } },
          { id: 20102, name: { az: '2 otaqlı', ru: '2-комнатные' } },
          { id: 20103, name: { az: '3 otaqlı', ru: '3-комнатные' } },
          { id: 20104, name: { az: '4 otaqlı', ru: '4-комнатные' } },
          { id: 20105, name: { az: '5+ otaqlı', ru: '5+ комнатные' } },
          { id: 20106, name: { az: 'Studiya', ru: 'Студии' } },
          { id: 20107, name: { az: 'Yeni tikili', ru: 'Новостройки' } },
          { id: 20108, name: { az: 'Köhnə tikili', ru: 'Вторичное жилье' } },
          { id: 20109, name: { az: 'Penthouse', ru: 'Пентхаус' } },
          { id: 20110, name: { az: 'Duplex', ru: 'Дуплекс' } },
        ]
      },
      {
        id: 202,
        name: {
          az: 'Evlər',
          ru: 'Дома',
        },
        subcategories: [
          { id: 20201, name: { az: 'Bağ evləri', ru: 'Дачи' } },
          { id: 20202, name: { az: 'Kənd evləri', ru: 'Сельские дома' } },
          { id: 20203, name: { az: 'Şəhər evləri', ru: 'Городские дома' } },
          { id: 20204, name: { az: 'Villalar', ru: 'Виллы' } },
          { id: 20205, name: { az: 'Kotteçlər', ru: 'Коттеджи' } },
          { id: 20206, name: { az: 'Townhouse', ru: 'Таунхаус' } },
          { id: 20207, name: { az: 'Fərdi evlər', ru: 'Частные дома' } },
        ]
      },
      {
        id: 203,
        name: {
          az: 'Torpaq sahələri',
          ru: 'Земельные участки',
        },
        subcategories: [
          { id: 20301, name: { az: 'Tikinti torpağı', ru: 'Земля под строительство' } },
          { id: 20302, name: { az: 'Kənd təsərrüfatı torpağı', ru: 'Сельхозземля' } },
          { id: 20303, name: { az: 'Bağ torpağı', ru: 'Садовые участки' } },
          { id: 20304, name: { az: 'Sənaye torpağı', ru: 'Промышленная земля' } },
          { id: 20305, name: { az: 'Kommersiya torpağı', ru: 'Коммерческая земля' } },
        ]
      },
      {
        id: 204,
        name: {
          az: 'Kommersiya obyektləri',
          ru: 'Коммерческие объекты',
        },
        subcategories: [
          { id: 20401, name: { az: 'Ofislər', ru: 'Офисы' } },
          { id: 20402, name: { az: 'Mağazalar', ru: 'Магазины' } },
          { id: 20403, name: { az: 'Anbarlar', ru: 'Склады' } },
          { id: 20404, name: { az: 'İstehsalat binası', ru: 'Производственные помещения' } },
          { id: 20405, name: { az: 'Restoranlar', ru: 'Рестораны' } },
          { id: 20406, name: { az: 'Mehmanxanalar', ru: 'Гостиницы' } },
          { id: 20407, name: { az: 'Ticarət mərkəzləri', ru: 'Торговые центры' } },
          { id: 20408, name: { az: 'Biznes mərkəzləri', ru: 'Бизнес-центры' } },
          { id: 20409, name: { az: 'Kafe və barlar', ru: 'Кафе и бары' } },
          { id: 20410, name: { az: 'Avtoyuma stansiyaları', ru: 'Автомойки' } },
        ]
      },
      {
        id: 205,
        name: {
          az: 'Qarajlar və parkinqlər',
          ru: 'Гаражи и парковки',
        },
        subcategories: [
          { id: 20501, name: { az: 'Qarajlar', ru: 'Гаражи' } },
          { id: 20502, name: { az: 'Parkinq yerləri', ru: 'Парковочные места' } },
          { id: 20503, name: { az: 'Avtomobil anbarları', ru: 'Автомобильные склады' } },
        ]
      },
      {
        id: 206,
        name: {
          az: 'Kirayə',
          ru: 'Аренда',
        },
        subcategories: [
          { id: 20601, name: { az: 'Mənzil kirayəsi', ru: 'Аренда квартир' } },
          { id: 20602, name: { az: 'Ev kirayəsi', ru: 'Аренда домов' } },
          { id: 20603, name: { az: 'Ofis kirayəsi', ru: 'Аренда офисов' } },
          { id: 20604, name: { az: 'Qaraj kirayəsi', ru: 'Аренда гаражей' } },
          { id: 20605, name: { az: 'Mağaza kirayəsi', ru: 'Аренда магазинов' } },
          { id: 20606, name: { az: 'Anbar kirayəsi', ru: 'Аренда складов' } },
          { id: 20607, name: { az: 'Otaq kirayəsi', ru: 'Аренда комнат' } },
          { id: 20608, name: { az: 'Günlük kirayə', ru: 'Посуточная аренда' } },
        ]
      },
      {
        id: 207,
        name: {
          az: 'İnvestisiya layihələri',
          ru: 'Инвестиционные проекты',
        },
        subcategories: [
          { id: 20701, name: { az: 'Tikinti layihələri', ru: 'Строительные проекты' } },
          { id: 20702, name: { az: 'Yeni tikili layihələr', ru: 'Проекты новостроек' } },
          { id: 20703, name: { az: 'Kommersiya layihələri', ru: 'Коммерческие проекты' } },
          { id: 20704, name: { az: 'Turizm layihələri', ru: 'Туристические проекты' } },
          { id: 20705, name: { az: 'Kənd təsərrüfatı layihələri', ru: 'Сельскохозяйственные проекты' } },
          { id: 20706, name: { az: 'Sənaye layihələri', ru: 'Промышленные проекты' } },
          { id: 20707, name: { az: 'Yaşayış kompleksləri', ru: 'Жилые комплексы' } },
        ]
      },
      {
        id: 208,
        name: {
          az: 'Xarici əmlak',
          ru: 'Зарубежная недвижимость',
        },
        subcategories: [
          { id: 20801, name: { az: 'Türkiyə əmlakı', ru: 'Недвижимость в Турции' } },
          { id: 20802, name: { az: 'Dubay əmlakı', ru: 'Недвижимость в Дубае' } },
          { id: 20803, name: { az: 'Avropa əmlakı', ru: 'Недвижимость в Европе' } },
          { id: 20804, name: { az: 'ABŞ əmlakı', ru: 'Недвижимость в США' } },
          { id: 20805, name: { az: 'Rusiya əmlakı', ru: 'Недвижимость в России' } },
          { id: 20806, name: { az: 'Gürcüstan əmlakı', ru: 'Недвижимость в Грузии' } },
          { id: 20807, name: { az: 'Digər ölkələr', ru: 'Другие страны' } },
        ]
      },
      {
        id: 209,
        name: {
          az: 'Kurort və istirahət əmlakı',
          ru: 'Курортная и рекреационная недвижимость',
        },
        subcategories: [
          { id: 20901, name: { az: 'Dəniz kənarı əmlak', ru: 'Недвижимость у моря' } },
          { id: 20902, name: { az: 'Dağ kurortları', ru: 'Горные курорты' } },
          { id: 20903, name: { az: 'Spa və wellness mərkəzləri', ru: 'Спа и велнес центры' } },
          { id: 20904, name: { az: 'Golf klubları', ru: 'Гольф клубы' } },
          { id: 20905, name: { az: 'Xizək mərkəzləri', ru: 'Лыжные центры' } },
          { id: 20906, name: { az: 'Termal kurortlar', ru: 'Термальные курорты' } },
          { id: 20907, name: { az: 'Ekoloji turizm mərkəzləri', ru: 'Экотуристические центры' } },
        ]
      },
      {
        id: 210,
        name: {
          az: 'Xüsusi təyinatlı əmlak',
          ru: 'Недвижимость специального назначения',
        },
        subcategories: [
          { id: 21001, name: { az: 'Xəstəxanalar', ru: 'Больницы' } },
          { id: 21002, name: { az: 'Məktəblər', ru: 'Школы' } },
          { id: 21003, name: { az: 'Universitetlər', ru: 'Университеты' } },
          { id: 21004, name: { az: 'Uşaq bağçaları', ru: 'Детские сады' } },
          { id: 21005, name: { az: 'İdman kompleksləri', ru: 'Спортивные комплексы' } },
          { id: 21006, name: { az: 'Kinoteatrlar', ru: 'Кинотеатры' } },
          { id: 21007, name: { az: 'Teatrlar', ru: 'Театры' } },
          { id: 21008, name: { az: 'Muzeylar', ru: 'Музеи' } },
          { id: 21009, name: { az: 'Dini binalar', ru: 'Религиозные здания' } },
          { id: 21010, name: { az: 'Hökumət binaları', ru: 'Правительственные здания' } },
        ]
      },
      {
        id: 211,
        name: {
          az: 'Əmlak xidmətləri',
          ru: 'Услуги недвижимости',
        },
        subcategories: [
          { id: 21101, name: { az: 'Əmlak qiymətləndirilməsi', ru: 'Оценка недвижимости' } },
          { id: 21102, name: { az: 'Əmlak idarəetməsi', ru: 'Управление недвижимостью' } },
          { id: 21103, name: { az: 'Əmlak hüquq məsləhətləri', ru: 'Юридические консультации по недвижимости' } },
          { id: 21104, name: { az: 'Əmlak sığortası', ru: 'Страхование недвижимости' } },
          { id: 21105, name: { az: 'Əmlak təmiri', ru: 'Ремонт недвижимости' } },
          { id: 21106, name: { az: 'Əmlak dizaynı', ru: 'Дизайн недвижимости' } },
          { id: 21107, name: { az: 'Əmlak fotoçəkilişi', ru: 'Фотосъемка недвижимости' } },
          { id: 21108, name: { az: 'Əmlak marketinqi', ru: 'Маркетинг недвижимости' } },
        ]
      },
      {
        id: 212,
        name: {
          az: 'Əmlak maliyyələşdirilməsi',
          ru: 'Финансирование недвижимости',
        },
        subcategories: [
          { id: 21201, name: { az: 'İpotek kreditləri', ru: 'Ипотечные кредиты' } },
          { id: 21202, name: { az: 'Əmlak investisiyaları', ru: 'Инвестиции в недвижимость' } },
          { id: 21203, name: { az: 'Əmlak fondları', ru: 'Фонды недвижимости' } },
          { id: 21204, name: { az: 'Əmlak sənədləşdirilməsi', ru: 'Оформление документов на недвижимость' } },
          { id: 21205, name: { az: 'Əmlak vergi məsləhətləri', ru: 'Налоговые консультации по недвижимости' } },
          { id: 21206, name: { az: 'Əmlak lizinqi', ru: 'Лизинг недвижимости' } },
        ]
      },
      {
        id: 213,
        name: {
          az: 'Ağıllı ev texnologiyaları',
          ru: 'Технологии умного дома',
        },
        subcategories: [
          { id: 21301, name: { az: 'Ağıllı ev sistemləri', ru: 'Системы умного дома' } },
          { id: 21302, name: { az: 'Təhlükəsizlik sistemləri', ru: 'Системы безопасности' } },
          { id: 21303, name: { az: 'İqlim idarəetmə sistemləri', ru: 'Системы климат-контроля' } },
          { id: 21304, name: { az: 'Ağıllı işıqlandırma', ru: 'Умное освещение' } },
          { id: 21305, name: { az: 'Avtomatik qapılar', ru: 'Автоматические ворота' } },
          { id: 21306, name: { az: 'Video nəzarət sistemləri', ru: 'Системы видеонаблюдения' } },
          { id: 21307, name: { az: 'Ağıllı məişət texnikası', ru: 'Умная бытовая техника' } },
        ]
      },
    ],
  },
  {
    id: 3,
    name: {
      az: 'Nəqliyyat',
      ru: 'Транспорт',
    },
    icon: 'car',
    subcategories: [
      {
        id: 301,
        name: {
          az: 'Avtomobillər',
          ru: 'Автомобили',
        },
        subcategories: [
          { id: 30101, name: { az: 'Sedan', ru: 'Седан' } },
          { id: 30102, name: { az: 'Hetçbek', ru: 'Хэтчбек' } },
          { id: 30103, name: { az: 'SUV', ru: 'Внедорожник' } },
          { id: 30104, name: { az: 'Kupe', ru: 'Купе' } },
          { id: 30105, name: { az: 'Kabriolet', ru: 'Кабриолет' } },
          { id: 30106, name: { az: 'Miniven', ru: 'Минивэн' } },
          { id: 30107, name: { az: 'Elektromobil', ru: 'Электромобиль' } },
          { id: 30108, name: { az: 'Hibrid', ru: 'Гибрид' } },
          { id: 30109, name: { az: 'Crossover', ru: 'Кроссовер' } },
          { id: 30110, name: { az: 'Pikap', ru: 'Пикап' } },
          { id: 30111, name: { az: 'Liftbek', ru: 'Лифтбек' } },
          { id: 30112, name: { az: 'Universal', ru: 'Универсал' } },
        ]
      },
      {
        id: 302,
        name: {
          az: 'Motosikletlər',
          ru: 'Мотоциклы',
        },
        subcategories: [
          { id: 30201, name: { az: 'Sport motosikletləri', ru: 'Спортивные мотоциклы' } },
          { id: 30202, name: { az: 'Klassik motosikletlər', ru: 'Классические мотоциклы' } },
          { id: 30203, name: { az: 'Skuterlər', ru: 'Скутеры' } },
          { id: 30204, name: { az: 'ATV', ru: 'Квадроциклы' } },
          { id: 30205, name: { az: 'Kros motosikletləri', ru: 'Кроссовые мотоциклы' } },
          { id: 30206, name: { az: 'Turist motosikletləri', ru: 'Туристические мотоциклы' } },
          { id: 30207, name: { az: 'Chopper', ru: 'Чопперы' } },
          { id: 30208, name: { az: 'Elektrik motosikletləri', ru: 'Электромотоциклы' } },
        ]
      },
      {
        id: 303,
        name: {
          az: 'Ehtiyat hissələri',
          ru: 'Запчасти',
        },
        subcategories: [
          { id: 30301, name: { az: 'Mühərrik hissələri', ru: 'Детали двигателя' } },
          { id: 30302, name: { az: 'Əyləclər', ru: 'Тормоза' } },
          { id: 30303, name: { az: 'Şinlər', ru: 'Шины' } },
          { id: 30304, name: { az: 'Disklərdə', ru: 'Диски' } },
          { id: 30305, name: { az: 'Akustika', ru: 'Акустика' } },
          { id: 30306, name: { az: 'Filtrlər', ru: 'Фильтры' } },
          { id: 30307, name: { az: 'Yağlar', ru: 'Масла' } },
          { id: 30308, name: { az: 'Akkumulyatorlar', ru: 'Аккумуляторы' } },
          { id: 30309, name: { az: 'Işıqlandırma', ru: 'Освещение' } },
          { id: 30310, name: { az: 'Salon aksesuarları', ru: 'Салонные аксессуары' } },
        ]
      },
      {
        id: 304,
        name: {
          az: 'Yük maşınları',
          ru: 'Грузовики',
        },
        subcategories: [
          { id: 30401, name: { az: 'Yüngül yük maşınları', ru: 'Легкие грузовики' } },
          { id: 30402, name: { az: 'Orta yük maşınları', ru: 'Средние грузовики' } },
          { id: 30403, name: { az: 'Ağır yük maşınları', ru: 'Тяжелые грузовики' } },
          { id: 30404, name: { az: 'Qoşqular', ru: 'Прицепы' } },
          { id: 30405, name: { az: 'Yarımqoşqular', ru: 'Полуприцепы' } },
        ]
      },
      {
        id: 305,
        name: {
          az: 'Avtobuslar',
          ru: 'Автобусы',
        },
        subcategories: [
          { id: 30501, name: { az: 'Şəhər avtobusları', ru: 'Городские автобусы' } },
          { id: 30502, name: { az: 'Turist avtobusları', ru: 'Туристические автобусы' } },
          { id: 30503, name: { az: 'Mikroavtobuslar', ru: 'Микроавтобусы' } },
          { id: 30504, name: { az: 'Məktəb avtobusları', ru: 'Школьные автобусы' } },
        ]
      },
      {
        id: 306,
        name: {
          az: 'Su nəqliyyatı',
          ru: 'Водный транспорт',
        },
        subcategories: [
          { id: 30601, name: { az: 'Qayıqlar', ru: 'Лодки' } },
          { id: 30602, name: { az: 'Yachtlar', ru: 'Яхты' } },
          { id: 30603, name: { az: 'Katamaranlar', ru: 'Катамараны' } },
          { id: 30604, name: { az: 'Su skuterləri', ru: 'Гидроциклы' } },
          { id: 30605, name: { az: 'Su nəqliyyatı aksesuarları', ru: 'Аксессуары для водного транспорта' } },
        ]
      },
      {
        id: 307,
        name: {
          az: 'Xüsusi texnika',
          ru: 'Спецтехника',
        },
        subcategories: [
          { id: 30701, name: { az: 'Ekskavatorlar', ru: 'Экскаваторы' } },
          { id: 30702, name: { az: 'Buldozerlər', ru: 'Бульдозеры' } },
          { id: 30703, name: { az: 'Kranlar', ru: 'Краны' } },
          { id: 30704, name: { az: 'Traktorlar', ru: 'Тракторы' } },
          { id: 30705, name: { az: 'Kombaynlar', ru: 'Комбайны' } },
          { id: 30706, name: { az: 'Yol texnikası', ru: 'Дорожная техника' } },
        ]
      },
      {
        id: 308,
        name: {
          az: 'Velosipedlər',
          ru: 'Велосипеды',
        },
        subcategories: [
          { id: 30801, name: { az: 'Dağ velosipedləri', ru: 'Горные велосипеды' } },
          { id: 30802, name: { az: 'Şəhər velosipedləri', ru: 'Городские велосипеды' } },
          { id: 30803, name: { az: 'Yol velosipedləri', ru: 'Шоссейные велосипеды' } },
          { id: 30804, name: { az: 'Elektrik velosipedləri', ru: 'Электровелосипеды' } },
          { id: 30805, name: { az: 'Uşaq velosipedləri', ru: 'Детские велосипеды' } },
          { id: 30806, name: { az: 'BMX', ru: 'BMX' } },
          { id: 30807, name: { az: 'Velosiped aksesuarları', ru: 'Велосипедные аксессуары' } },
        ]
      },
      {
        id: 309,
        name: {
          az: 'Nəqliyyat kirayəsi',
          ru: 'Аренда транспорта',
        },
        subcategories: [
          { id: 30901, name: { az: 'Avtomobil kirayəsi', ru: 'Аренда автомобилей' } },
          { id: 30902, name: { az: 'Motosiklet kirayəsi', ru: 'Аренда мотоциклов' } },
          { id: 30903, name: { az: 'Yük maşını kirayəsi', ru: 'Аренда грузовиков' } },
          { id: 30904, name: { az: 'Avtobus kirayəsi', ru: 'Аренда автобусов' } },
          { id: 30905, name: { az: 'Xüsusi texnika kirayəsi', ru: 'Аренда спецтехники' } },
        ]
      },
    ],
  },
  {
    id: 4,
    name: {
      az: 'İş və xidmətlər',
      ru: 'Работа и услуги',
    },
    icon: 'briefcase',
    subcategories: [
      {
        id: 401,
        name: {
          az: 'Vakansiyalar',
          ru: 'Вакансии',
        },
        subcategories: [
          { id: 40101, name: { az: 'IT və kompüterlər', ru: 'IT и компьютеры' } },
          { id: 40102, name: { az: 'Satış', ru: 'Продажи' } },
          { id: 40103, name: { az: 'Marketing', ru: 'Маркетинг' } },
          { id: 40104, name: { az: 'Mühasibatlıq', ru: 'Бухгалтерия' } },
          { id: 40105, name: { az: 'İnsan resursları', ru: 'Кадры' } },
          { id: 40106, name: { az: 'Tikinti', ru: 'Строительство' } },
          { id: 40107, name: { az: 'Təhsil', ru: 'Образование' } },
          { id: 40108, name: { az: 'Səhiyyə', ru: 'Медицина' } },
          { id: 40109, name: { az: 'Turizm', ru: 'Туризм' } },
          { id: 40110, name: { az: 'Restoran biznes', ru: 'Ресторанный бизнес' } },
          { id: 40111, name: { az: 'Təhlükəsizlik', ru: 'Безопасность' } },
          { id: 40112, name: { az: 'Nəqliyyat', ru: 'Транспорт' } },
          { id: 40113, name: { az: 'Sənaye', ru: 'Промышленность' } },
          { id: 40114, name: { az: 'Kənd təsərrüfatı', ru: 'Сельское хозяйство' } },
          { id: 40115, name: { az: 'Gözəllik və sağlamlıq', ru: 'Красота и здоровье' } },
        ]
      },
      {
        id: 402,
        name: {
          az: 'İş axtarıram',
          ru: 'Ищу работу',
        },
        subcategories: [
          { id: 40201, name: { az: 'IT mütəxəssis', ru: 'IT специалист' } },
          { id: 40202, name: { az: 'Satış mütəxəssisi', ru: 'Специалист по продажам' } },
          { id: 40203, name: { az: 'Mühasib', ru: 'Бухгалтер' } },
          { id: 40204, name: { az: 'Menecer', ru: 'Менеджер' } },
          { id: 40205, name: { az: 'Müəllim', ru: 'Учитель' } },
          { id: 40206, name: { az: 'Həkim', ru: 'Врач' } },
          { id: 40207, name: { az: 'Sürücü', ru: 'Водитель' } },
          { id: 40208, name: { az: 'Təmizlik işçisi', ru: 'Уборщик' } },
          { id: 40209, name: { az: 'Mühəndis', ru: 'Инженер' } },
          { id: 40210, name: { az: 'Dizayner', ru: 'Дизайнер' } },
        ]
      },
      {
        id: 403,
        name: {
          az: 'İşçi axtarıram',
          ru: 'Ищу сотрудников',
        },
        subcategories: [
          { id: 40301, name: { az: 'IT mütəxəssis axtarıram', ru: 'Ищу IT специалиста' } },
          { id: 40302, name: { az: 'Satış mütəxəssisi axtarıram', ru: 'Ищу специалиста по продажам' } },
          { id: 40303, name: { az: 'Mühasib axtarıram', ru: 'Ищу бухгалтера' } },
          { id: 40304, name: { az: 'Menecer axtarıram', ru: 'Ищу менеджера' } },
          { id: 40305, name: { az: 'Müəllim axtarıram', ru: 'Ищу учителя' } },
          { id: 40306, name: { az: 'Həkim axtarıram', ru: 'Ищу врача' } },
          { id: 40307, name: { az: 'Sürücü axtarıram', ru: 'Ищу водителя' } },
          { id: 40308, name: { az: 'Təmizlik işçisi axtarıram', ru: 'Ищу уборщика' } },
          { id: 40309, name: { az: 'Mühəndis axtarıram', ru: 'Ищу инженера' } },
          { id: 40310, name: { az: 'Dizayner axtarıram', ru: 'Ищу дизайнера' } },
        ]
      },
      {
        id: 404,
        name: {
          az: 'Xidmətlər',
          ru: 'Услуги',
        },
        subcategories: [
          { id: 40401, name: { az: 'Təmizlik xidmətləri', ru: 'Услуги уборки' } },
          { id: 40402, name: { az: 'Nəqliyyat xidmətləri', ru: 'Транспортные услуги' } },
          { id: 40403, name: { az: 'Təmir xidmətləri', ru: 'Ремонтные услуги' } },
          { id: 40404, name: { az: 'Foto və video çəkiliş', ru: 'Фото и видеосъемка' } },
          { id: 40405, name: { az: 'Web dizayn', ru: 'Веб-дизайн' } },
          { id: 40406, name: { az: 'Tərcümə xidmətləri', ru: 'Переводческие услуги' } },
          { id: 40407, name: { az: 'Hüquq xidmətləri', ru: 'Юридические услуги' } },
          { id: 40408, name: { az: 'Mühasibatlıq xidmətləri', ru: 'Бухгалтерские услуги' } },
          { id: 40409, name: { az: 'Konsaltinq', ru: 'Консалтинг' } },
          { id: 40410, name: { az: 'Reklam xidmətləri', ru: 'Рекламные услуги' } },
        ]
      },
      {
        id: 405,
        name: {
          az: 'Təmir və tikinti',
          ru: 'Ремонт и строительство',
        },
        subcategories: [
          { id: 40501, name: { az: 'Ev təmiri', ru: 'Ремонт квартир' } },
          { id: 40502, name: { az: 'Ofis təmiri', ru: 'Ремонт офисов' } },
          { id: 40503, name: { az: 'Ev tikintisi', ru: 'Строительство домов' } },
          { id: 40504, name: { az: 'Elektrik işləri', ru: 'Электромонтажные работы' } },
          { id: 40505, name: { az: 'Santexnika işləri', ru: 'Сантехнические работы' } },
          { id: 40506, name: { az: 'Boyaq işləri', ru: 'Малярные работы' } },
          { id: 40507, name: { az: 'Döşəmə işləri', ru: 'Напольные покрытия' } },
          { id: 40508, name: { az: 'Dam işləri', ru: 'Кровельные работы' } },
        ]
      },
      {
        id: 406,
        name: {
          az: 'Təhsil və kurslar',
          ru: 'Образование и курсы',
        },
        subcategories: [
          { id: 40601, name: { az: 'Xarici dil kursları', ru: 'Курсы иностранных языков' } },
          { id: 40602, name: { az: 'Kompüter kursları', ru: 'Компьютерные курсы' } },
          { id: 40603, name: { az: 'Sürücülük kursları', ru: 'Курсы вождения' } },
          { id: 40604, name: { az: 'Musiqi dərsləri', ru: 'Уроки музыки' } },
          { id: 40605, name: { az: 'Rəqs dərsləri', ru: 'Уроки танцев' } },
          { id: 40606, name: { az: 'Repetitorluq', ru: 'Репетиторство' } },
          { id: 40607, name: { az: 'Biznes kursları', ru: 'Бизнес-курсы' } },
          { id: 40608, name: { az: 'Sənətkarlıq kursları', ru: 'Курсы рукоделия' } },
        ]
      },
      {
        id: 407,
        name: {
          az: 'Gözəllik və sağlamlıq',
          ru: 'Красота и здоровье',
        },
        subcategories: [
          { id: 40701, name: { az: 'Kuaförlük xidmətləri', ru: 'Парикмахерские услуги' } },
          { id: 40702, name: { az: 'Kosmetoloji xidmətlər', ru: 'Косметологические услуги' } },
          { id: 40703, name: { az: 'Masaj xidmətləri', ru: 'Массажные услуги' } },
          { id: 40704, name: { az: 'Manikür və pedikür', ru: 'Маникюр и педикюр' } },
          { id: 40705, name: { az: 'Fitness məşqçisi', ru: 'Фитнес-тренер' } },
          { id: 40706, name: { az: 'Dietetik', ru: 'Диетология' } },
          { id: 40707, name: { az: 'Psixoloji xidmətlər', ru: 'Психологические услуги' } },
        ]
      },
      {
        id: 408,
        name: {
          az: 'Təmizlik xidmətləri',
          ru: 'Клининговые услуги',
        },
        subcategories: [
          { id: 40801, name: { az: 'Ev təmizliyi', ru: 'Уборка квартир' } },
          { id: 40802, name: { az: 'Ofis təmizliyi', ru: 'Уборка офисов' } },
          { id: 40803, name: { az: 'Pəncərə təmizliyi', ru: 'Мытье окон' } },
          { id: 40804, name: { az: 'Xalça təmizliği', ru: 'Чистка ковров' } },
          { id: 40805, name: { az: 'Mebel təmizliği', ru: 'Чистка мебели' } },
          { id: 40806, name: { az: 'Tikinti sonrası təmizlik', ru: 'Уборка после ремонта' } },
        ]
      },
    ],
  },
  {
    id: 5,
    name: {
      az: 'Şəxsi əşyalar',
      ru: 'Личные вещи',
    },
    icon: 'shirt',
    subcategories: [
      {
        id: 501,
        name: {
          az: 'Geyim',
          ru: 'Одежда',
        },
        subcategories: [
          { id: 50101, name: { az: 'Qadın geyimi', ru: 'Женская одежда' } },
          { id: 50102, name: { az: 'Kişi geyimi', ru: 'Мужская одежда' } },
          { id: 50103, name: { az: 'Uşaq geyimi', ru: 'Детская одежда' } },
          { id: 50104, name: { az: 'İdman geyimi', ru: 'Спортивная одежда' } },
          { id: 50105, name: { az: 'Çimərlik geyimi', ru: 'Пляжная одежда' } },
          { id: 50106, name: { az: 'İş geyimi', ru: 'Деловая одежда' } },
          { id: 50107, name: { az: 'Gecə geyimi', ru: 'Вечерняя одежда' } },
          { id: 50108, name: { az: 'Ev geyimi', ru: 'Домашняя одежда' } },
          { id: 50109, name: { az: 'Qış geyimi', ru: 'Зимняя одежда' } },
          { id: 50110, name: { az: 'Yay geyimi', ru: 'Летняя одежда' } },
        ]
      },
      {
        id: 502,
        name: {
          az: 'Ayaqqabı',
          ru: 'Обувь',
        },
        subcategories: [
          { id: 50201, name: { az: 'Qadın ayaqqabıları', ru: 'Женская обувь' } },
          { id: 50202, name: { az: 'Kişi ayaqqabıları', ru: 'Мужская обувь' } },
          { id: 50203, name: { az: 'Uşaq ayaqqabıları', ru: 'Детская обувь' } },
          { id: 50204, name: { az: 'İdman ayaqqabıları', ru: 'Спортивная обувь' } },
          { id: 50205, name: { az: 'Qış ayaqqabıları', ru: 'Зимняя обувь' } },
          { id: 50206, name: { az: 'Yay ayaqqabıları', ru: 'Летняя обувь' } },
          { id: 50207, name: { az: 'Ev ayaqqabıları', ru: 'Домашняя обувь' } },
          { id: 50208, name: { az: 'İş ayaqqabıları', ru: 'Рабочая обувь' } },
        ]
      },
      {
        id: 503,
        name: {
          az: 'Aksesuarlar',
          ru: 'Аксессуары',
        },
        subcategories: [
          { id: 50301, name: { az: 'Çantalar', ru: 'Сумки' } },
          { id: 50302, name: { az: 'Kəmərlər', ru: 'Ремни' } },
          { id: 50303, name: { az: 'Eynəklər', ru: 'Очки' } },
          { id: 50304, name: { az: 'Şapkalar', ru: 'Шапки' } },
          { id: 50305, name: { az: 'Əlcəklər', ru: 'Перчатки' } },
          { id: 50306, name: { az: 'Şərflər', ru: 'Шарфы' } },
          { id: 50307, name: { az: 'Qalstuklar', ru: 'Галстуки' } },
          { id: 50308, name: { az: 'Saç aksesuarları', ru: 'Аксессуары для волос' } },
          { id: 50309, name: { az: 'Portfellər', ru: 'Портфели' } },
          { id: 50310, name: { az: 'Çəmədanlar', ru: 'Чемоданы' } },
        ]
      },
      {
        id: 504,
        name: {
          az: 'Saat və zinət əşyaları',
          ru: 'Часы и украшения',
        },
        subcategories: [
          { id: 50401, name: { az: 'Qol saatları', ru: 'Наручные часы' } },
          { id: 50402, name: { az: 'Smart saatlar', ru: 'Умные часы' } },
          { id: 50403, name: { az: 'Qızıl zinət əşyaları', ru: 'Золотые украшения' } },
          { id: 50404, name: { az: 'Gümüş zinət əşyaları', ru: 'Серебряные украшения' } },
          { id: 50405, name: { az: 'Brilyant zinət əşyaları', ru: 'Бриллиантовые украшения' } },
          { id: 50406, name: { az: 'Bizuteria', ru: 'Бижутерия' } },
          { id: 50407, name: { az: 'Sırğalar', ru: 'Серьги' } },
          { id: 50408, name: { az: 'Boyunbağılar', ru: 'Ожерелья' } },
          { id: 50409, name: { az: 'Üzüklər', ru: 'Кольца' } },
          { id: 50410, name: { az: 'Bilərziklər', ru: 'Браслеты' } },
        ]
      },
      {
        id: 505,
        name: {
          az: 'Parfümeriya və kosmetika',
          ru: 'Парфюмерия и косметика',
        },
        subcategories: [
          { id: 50501, name: { az: 'Qadın ətirləri', ru: 'Женские духи' } },
          { id: 50502, name: { az: 'Kişi ətirləri', ru: 'Мужские духи' } },
          { id: 50503, name: { az: 'Dekoratif kosmetika', ru: 'Декоративная косметика' } },
          { id: 50504, name: { az: 'Dəri baxımı', ru: 'Уход за кожей' } },
          { id: 50505, name: { az: 'Saç baxımı', ru: 'Уход за волосами' } },
          { id: 50506, name: { az: 'Bədən baxımı', ru: 'Уход за телом' } },
          { id: 50507, name: { az: 'Dırnaq baxımı', ru: 'Уход за ногтями' } },
          { id: 50508, name: { az: 'Kişi baxım məhsulları', ru: 'Мужская косметика' } },
        ]
      },
      {
        id: 506,
        name: {
          az: 'Çantalar və portfellər',
          ru: 'Сумки и портфели',
        },
        subcategories: [
          { id: 50601, name: { az: 'Qadın çantaları', ru: 'Женские сумки' } },
          { id: 50602, name: { az: 'Kişi çantaları', ru: 'Мужские сумки' } },
          { id: 50603, name: { az: 'İdman çantaları', ru: 'Спортивные сумки' } },
          { id: 50604, name: { az: 'Səyahət çantaları', ru: 'Дорожные сумки' } },
          { id: 50605, name: { az: 'Məktəb çantaları', ru: 'Школьные рюкзаки' } },
          { id: 50606, name: { az: 'Laptop çantaları', ru: 'Сумки для ноутбуков' } },
          { id: 50607, name: { az: 'Çəmədanlar', ru: 'Чемоданы' } },
        ]
      },
      {
        id: 507,
        name: {
          az: 'Dəri məmulatları',
          ru: 'Кожаные изделия',
        },
        subcategories: [
          { id: 50701, name: { az: 'Dəri cüzdanlar', ru: 'Кожаные кошельки' } },
          { id: 50702, name: { az: 'Dəri kəmərlər', ru: 'Кожаные ремни' } },
          { id: 50703, name: { az: 'Dəri əlcəklər', ru: 'Кожаные перчатки' } },
          { id: 50704, name: { az: 'Dəri geyim', ru: 'Кожаная одежда' } },
          { id: 50705, name: { az: 'Dəri aksesuarlar', ru: 'Кожаные аксессуары' } },
          { id: 50706, name: { az: 'Dəri çantalar', ru: 'Кожаные сумки' } },
          { id: 50707, name: { az: 'Dəri portfellər', ru: 'Кожаные портфели' } },
          { id: 50708, name: { az: 'Dəri telefon qabları', ru: 'Кожаные чехлы для телефонов' } },
        ]
      },
      {
        id: 508,
        name: {
          az: 'Vintage və retro',
          ru: 'Винтаж и ретро',
        },
        subcategories: [
          { id: 50801, name: { az: 'Vintage geyim', ru: 'Винтажная одежда' } },
          { id: 50802, name: { az: 'Vintage aksesuarlar', ru: 'Винтажные аксессуары' } },
          { id: 50803, name: { az: 'Retro saatlar', ru: 'Ретро часы' } },
          { id: 50804, name: { az: 'Vintage zinət əşyaları', ru: 'Винтажные украшения' } },
          { id: 50805, name: { az: 'Vintage çantalar', ru: 'Винтажные сумки' } },
          { id: 50806, name: { az: 'Retro eynəklər', ru: 'Ретро очки' } },
          { id: 50807, name: { az: 'Vintage parfümlər', ru: 'Винтажные духи' } },
        ]
      },
      {
        id: 509,
        name: {
          az: 'Lüks və premium',
          ru: 'Люкс и премиум',
        },
        subcategories: [
          { id: 50901, name: { az: 'Lüks geyim', ru: 'Люксовая одежда' } },
          { id: 50902, name: { az: 'Designer çantalar', ru: 'Дизайнерские сумки' } },
          { id: 50903, name: { az: 'Lüks saatlar', ru: 'Люксовые часы' } },
          { id: 50904, name: { az: 'Premium zinət əşyaları', ru: 'Премиум украшения' } },
          { id: 50905, name: { az: 'Lüks parfümlər', ru: 'Люксовые духи' } },
          { id: 50906, name: { az: 'Designer ayaqqabılar', ru: 'Дизайнерская обувь' } },
          { id: 50907, name: { az: 'Ekskluziv aksesuarlar', ru: 'Эксклюзивные аксессуары' } },
          { id: 50908, name: { az: 'Lüks kosmetika', ru: 'Люксовая косметика' } },
        ]
      },
      {
        id: 510,
        name: {
          az: 'Təbii və ekoloji',
          ru: 'Натуральные и экологичные',
        },
        subcategories: [
          { id: 51001, name: { az: 'Təbii kosmetika', ru: 'Натуральная косметика' } },
          { id: 51002, name: { az: 'Organik parfümlər', ru: 'Органические духи' } },
          { id: 51003, name: { az: 'Ekoloji geyim', ru: 'Экологичная одежда' } },
          { id: 51004, name: { az: 'Təbii dəri məmulatları', ru: 'Изделия из натуральной кожи' } },
          { id: 51005, name: { az: 'Bambuk aksesuarlar', ru: 'Бамбуковые аксессуары' } },
          { id: 51006, name: { az: 'Təbii daş zinət əşyaları', ru: 'Украшения из натуральных камней' } },
          { id: 51007, name: { az: 'Ekoloji çantalar', ru: 'Экологичные сумки' } },
        ]
      },
      {
        id: 511,
        name: {
          az: 'Əl işi və handmade',
          ru: 'Ручная работа и handmade',
        },
        subcategories: [
          { id: 51101, name: { az: 'Əl ilə toxunmuş geyim', ru: 'Вязаная одежда ручной работы' } },
          { id: 51102, name: { az: 'Əl işi zinət əşyaları', ru: 'Украшения ручной работы' } },
          { id: 51103, name: { az: 'Handmade çantalar', ru: 'Сумки ручной работы' } },
          { id: 51104, name: { az: 'Əl işi aksesuarlar', ru: 'Аксессуары ручной работы' } },
          { id: 51105, name: { az: 'Əl ilə tikilmiş geyim', ru: 'Одежда ручного пошива' } },
          { id: 51106, name: { az: 'Handmade ayaqqabılar', ru: 'Обувь ручной работы' } },
          { id: 51107, name: { az: 'Əl işi kosmetika', ru: 'Косметика ручной работы' } },
          { id: 51108, name: { az: 'Fərdi sifarişlər', ru: 'Индивидуальные заказы' } },
        ]
      },
      {
        id: 512,
        name: {
          az: 'Müasir texnologiyalar',
          ru: 'Современные технологии',
        },
        subcategories: [
          { id: 51201, name: { az: 'Smart geyim', ru: 'Умная одежда' } },
          { id: 51202, name: { az: 'Texnoloji aksesuarlar', ru: 'Технологичные аксессуары' } },
          { id: 51203, name: { az: 'LED zinət əşyaları', ru: 'LED украшения' } },
          { id: 51204, name: { az: 'Bluetooth aksesuarlar', ru: 'Bluetooth аксессуары' } },
          { id: 51205, name: { az: 'Smart çantalar', ru: 'Умные сумки' } },
          { id: 51206, name: { az: 'Texnoloji eynəklər', ru: 'Технологичные очки' } },
          { id: 51207, name: { az: 'İnnovasiya məhsulları', ru: 'Инновационные продукты' } },
        ]
      },
      {
        id: 513,
        name: {
          az: 'Xüsusi hadisələr',
          ru: 'Особые события',
        },
        subcategories: [
          { id: 51301, name: { az: 'Toy geyimi', ru: 'Свадебная одежда' } },
          { id: 51302, name: { az: 'Məzuniyyət geyimi', ru: 'Выпускная одежда' } },
          { id: 51303, name: { az: 'Bayram geyimi', ru: 'Праздничная одежда' } },
          { id: 51304, name: { az: 'Korporativ geyim', ru: 'Корпоративная одежда' } },
          { id: 51305, name: { az: 'Teatr kostyumları', ru: 'Театральные костюмы' } },
          { id: 51306, name: { az: 'Milli geyim', ru: 'Национальная одежда' } },
          { id: 51307, name: { az: 'Karnaval kostyumları', ru: 'Карнавальные костюмы' } },
        ]
      },
    ],
  },
  {
    id: 6,
    name: {
      az: 'Ev və bağ',
      ru: 'Дом и сад',
    },
    icon: 'sofa',
    subcategories: [
      {
        id: 601,
        name: {
          az: 'Mebel',
          ru: 'Мебель',
        },
        subcategories: [
          { id: 60101, name: { az: 'Divan və kreslo', ru: 'Диваны и кресла' } },
          { id: 60102, name: { az: 'Masa və stullar', ru: 'Столы и стулья' } },
          { id: 60103, name: { az: 'Yataq dəsti', ru: 'Спальные гарнитуры' } },
          { id: 60104, name: { az: 'Şkaflar', ru: 'Шкафы' } },
          { id: 60105, name: { az: 'Rəflər', ru: 'Полки' } },
          { id: 60106, name: { az: 'Mətbəx mebeli', ru: 'Кухонная мебель' } },
          { id: 60107, name: { az: 'Ofis mebeli', ru: 'Офисная мебель' } },
          { id: 60108, name: { az: 'Uşaq mebeli', ru: 'Детская мебель' } },
          { id: 60109, name: { az: 'Bağ mebeli', ru: 'Садовая мебель' } },
          { id: 60110, name: { az: 'Antik mebel', ru: 'Антикварная мебель' } },
        ]
      },
      {
        id: 602,
        name: {
          az: 'Məişət texnikası',
          ru: 'Бытовая техника',
        },
        subcategories: [
          { id: 60201, name: { az: 'Böyük məişət texnikası', ru: 'Крупная бытовая техника' } },
          { id: 60202, name: { az: 'Kiçik məişət texnikası', ru: 'Мелкая бытовая техника' } },
          { id: 60203, name: { az: 'Mətbəx texnikası', ru: 'Кухонная техника' } },
          { id: 60204, name: { az: 'İqlim texnikası', ru: 'Климатическая техника' } },
          { id: 60205, name: { az: 'Təmizlik texnikası', ru: 'Техника для уборки' } },
        ]
      },
      {
        id: 603,
        name: {
          az: 'Bağ və bağça',
          ru: 'Сад и огород',
        },
        subcategories: [
          { id: 60301, name: { az: 'Bağ alətləri', ru: 'Садовые инструменты' } },
          { id: 60302, name: { az: 'Toxum və fidanlar', ru: 'Семена и саженцы' } },
          { id: 60303, name: { az: 'Bağ mebeli', ru: 'Садовая мебель' } },
          { id: 60304, name: { az: 'Suvarma sistemi', ru: 'Системы полива' } },
          { id: 60305, name: { az: 'Bağ texnikası', ru: 'Садовая техника' } },
          { id: 60306, name: { az: 'Gübrələr', ru: 'Удобрения' } },
          { id: 60307, name: { az: 'Bitki qoruyucu vasitələr', ru: 'Средства защиты растений' } },
          { id: 60308, name: { az: 'Bağ dekorasiyası', ru: 'Садовый декор' } },
        ]
      },
      {
        id: 604,
        name: {
          az: 'Təmir və tikinti materialları',
          ru: 'Ремонт и стройматериалы',
        },
        subcategories: [
          { id: 60401, name: { az: 'Elektrik materialları', ru: 'Электрические материалы' } },
          { id: 60402, name: { az: 'Santexnika materialları', ru: 'Сантехнические материалы' } },
          { id: 60403, name: { az: 'Boyaq və laklar', ru: 'Краски и лаки' } },
          { id: 60404, name: { az: 'Döşəmə materialları', ru: 'Напольные покрытия' } },
          { id: 60405, name: { az: 'Divar materialları', ru: 'Стеновые материалы' } },
          { id: 60406, name: { az: 'Dam materialları', ru: 'Кровельные материалы' } },
          { id: 60407, name: { az: 'İnşaat alətləri', ru: 'Строительные инструменты' } },
          { id: 60408, name: { az: 'Bağlayıcı materiallar', ru: 'Крепежные материалы' } },
        ]
      },
      {
        id: 605,
        name: {
          az: 'Qab-qacaq',
          ru: 'Посуда',
        },
        subcategories: [
          { id: 60501, name: { az: 'Mətbəx qabları', ru: 'Кухонная посуда' } },
          { id: 60502, name: { az: 'Süfrə qabları', ru: 'Столовая посуда' } },
          { id: 60503, name: { az: 'Çay və qəhvə dəstləri', ru: 'Чайные и кофейные сервизы' } },
          { id: 60504, name: { az: 'Şüşə qablar', ru: 'Стеклянная посуда' } },
          { id: 60505, name: { az: 'Plastik qablar', ru: 'Пластиковая посуда' } },
          { id: 60506, name: { az: 'Mətbəx aksesuarları', ru: 'Кухонные аксессуары' } },
        ]
      },
      {
        id: 606,
        name: {
          az: 'İnteryerə əşyalar',
          ru: 'Предметы интерьера',
        },
        subcategories: [
          { id: 60601, name: { az: 'Şəkillər və tablolar', ru: 'Картины и постеры' } },
          { id: 60602, name: { az: 'Güzgülər', ru: 'Зеркала' } },
          { id: 60603, name: { az: 'Saatlar', ru: 'Часы' } },
          { id: 60604, name: { az: 'Vazalar', ru: 'Вазы' } },
          { id: 60605, name: { az: 'Şamlar', ru: 'Свечи' } },
          { id: 60606, name: { az: 'Yastıqlar', ru: 'Подушки' } },
          { id: 60607, name: { az: 'Pərdələr', ru: 'Шторы' } },
          { id: 60608, name: { az: 'Xalçalar', ru: 'Ковры' } },
        ]
      },
      {
        id: 607,
        name: {
          az: 'Bitkilər',
          ru: 'Растения',
        },
        subcategories: [
          { id: 60701, name: { az: 'Ev bitkiləri', ru: 'Комнатные растения' } },
          { id: 60702, name: { az: 'Bağ bitkiləri', ru: 'Садовые растения' } },
          { id: 60703, name: { az: 'Çiçəklər', ru: 'Цветы' } },
          { id: 60704, name: { az: 'Ağaclar', ru: 'Деревья' } },
          { id: 60705, name: { az: 'Kollar', ru: 'Кустарники' } },
          { id: 60706, name: { az: 'Bitki qabları', ru: 'Горшки для растений' } },
        ]
      },
      {
        id: 608,
        name: {
          az: 'İşıqlandırma',
          ru: 'Освещение',
        },
        subcategories: [
          { id: 60801, name: { az: 'Çilçıraqlar', ru: 'Люстры' } },
          { id: 60802, name: { az: 'Masa lampaları', ru: 'Настольные лампы' } },
          { id: 60803, name: { az: 'Döşəmə lampaları', ru: 'Торшеры' } },
          { id: 60804, name: { az: 'Divar lampaları', ru: 'Настенные светильники' } },
          { id: 60805, name: { az: 'LED işıqlar', ru: 'LED освещение' } },
          { id: 60806, name: { az: 'Bağ işıqlandırması', ru: 'Садовое освещение' } },
        ]
      },
      {
        id: 609,
        name: {
          az: 'Təhlükəsizlik sistemləri',
          ru: 'Системы безопасности',
        },
        subcategories: [
          { id: 60901, name: { az: 'Video nəzarət sistemləri', ru: 'Системы видеонаблюдения' } },
          { id: 60902, name: { az: 'Siqnalizasiya sistemləri', ru: 'Сигнализации' } },
          { id: 60903, name: { az: 'Ağıllı qapı zəngləri', ru: 'Умные дверные звонки' } },
          { id: 60904, name: { az: 'Hərəkət sensorları', ru: 'Датчики движения' } },
          { id: 60905, name: { az: 'Duman detektorları', ru: 'Датчики дыма' } },
          { id: 60906, name: { az: 'Qaz detektorları', ru: 'Датчики газа' } },
          { id: 60907, name: { az: 'Su sızması detektorları', ru: 'Датчики протечки воды' } },
          { id: 60908, name: { az: 'Ağıllı kilidlər', ru: 'Умные замки' } },
          { id: 60909, name: { az: 'Təhlükəsizlik kameraları', ru: 'Камеры безопасности' } },
          { id: 60910, name: { az: 'Ev seyfi', ru: 'Домашние сейфы' } },
        ]
      },
      {
        id: 610,
        name: {
          az: 'Ağıllı ev texnologiyaları',
          ru: 'Технологии умного дома',
        },
        subcategories: [
          { id: 61001, name: { az: 'Ağıllı termostatlar', ru: 'Умные термостаты' } },
          { id: 61002, name: { az: 'Ağıllı rozetkalar', ru: 'Умные розетки' } },
          { id: 61003, name: { az: 'Ağıllı açarlar', ru: 'Умные выключатели' } },
          { id: 61004, name: { az: 'Səs köməkçiləri', ru: 'Голосовые помощники' } },
          { id: 61005, name: { az: 'Ağıllı hub-lar', ru: 'Умные хабы' } },
          { id: 61006, name: { az: 'Wi-Fi genişləndiricilər', ru: 'Wi-Fi усилители' } },
          { id: 61007, name: { az: 'Ağıllı pərdələr', ru: 'Умные шторы' } },
          { id: 61008, name: { az: 'Ağıllı su sistemi', ru: 'Умные системы полива' } },
        ]
      },
      {
        id: 611,
        name: {
          az: 'Ev kimyəvi maddələri',
          ru: 'Бытовая химия',
        },
        subcategories: [
          { id: 61101, name: { az: 'Təmizlik vasitələri', ru: 'Моющие средства' } },
          { id: 61102, name: { az: 'Paltar yuyucu vasitələr', ru: 'Стиральные порошки' } },
          { id: 61103, name: { az: 'Qab yuyucu vasitələr', ru: 'Средства для мытья посуды' } },
          { id: 61104, name: { az: 'Döşəmə təmizləyiciləri', ru: 'Средства для пола' } },
          { id: 61105, name: { az: 'Şüşə təmizləyiciləri', ru: 'Средства для стекол' } },
          { id: 61106, name: { az: 'Dezinfeksiya vasitələri', ru: 'Дезинфицирующие средства' } },
          { id: 61107, name: { az: 'Hava təravətləndiriciləri', ru: 'Освежители воздуха' } },
          { id: 61108, name: { az: 'Kanalizasiya təmizləyiciləri', ru: 'Средства для труб' } },
        ]
      },
      {
        id: 612,
        name: {
          az: 'Ev tekstili',
          ru: 'Домашний текстиль',
        },
        subcategories: [
          { id: 61201, name: { az: 'Çarpayı dəstləri', ru: 'Постельное белье' } },
          { id: 61202, name: { az: 'Dəsmallar', ru: 'Полотенца' } },
          { id: 61203, name: { az: 'Yorğanlar', ru: 'Одеяла' } },
          { id: 61204, name: { az: 'Yastıqlar', ru: 'Подушки' } },
          { id: 61205, name: { az: 'Pərdələr', ru: 'Шторы' } },
          { id: 61206, name: { az: 'Tül pərdələr', ru: 'Тюль' } },
          { id: 61207, name: { az: 'Masa örtükləri', ru: 'Скатерти' } },
          { id: 61208, name: { az: 'Mətbəx dəsmalları', ru: 'Кухонные полотенца' } },
          { id: 61209, name: { az: 'Hamam örtükləri', ru: 'Банные халаты' } },
          { id: 61210, name: { az: 'Dekorativ yastıqlar', ru: 'Декоративные подушки' } },
        ]
      },
      {
        id: 613,
        name: {
          az: 'Ev alətləri',
          ru: 'Домашние инструменты',
        },
        subcategories: [
          { id: 61301, name: { az: 'Əl alətləri', ru: 'Ручные инструменты' } },
          { id: 61302, name: { az: 'Elektrik alətləri', ru: 'Электроинструменты' } },
          { id: 61303, name: { az: 'Ölçü alətləri', ru: 'Измерительные инструменты' } },
          { id: 61304, name: { az: 'Bağlayıcı elementlər', ru: 'Крепежные элементы' } },
          { id: 61305, name: { az: 'Alət qutuları', ru: 'Ящики для инструментов' } },
          { id: 61306, name: { az: 'Nərdivan və pilləkənlər', ru: 'Лестницы и стремянки' } },
          { id: 61307, name: { az: 'İş əlcəkləri', ru: 'Рабочие перчатки' } },
          { id: 61308, name: { az: 'Təhlükəsizlik vasitələri', ru: 'Средства защиты' } },
        ]
      },
      {
        id: 614,
        name: {
          az: 'Saxlama və təşkilat',
          ru: 'Хранение и организация',
        },
        subcategories: [
          { id: 61401, name: { az: 'Saxlama qutuları', ru: 'Контейнеры для хранения' } },
          { id: 61402, name: { az: 'Şkaf təşkilatçıları', ru: 'Органайзеры для шкафов' } },
          { id: 61403, name: { az: 'Çəkmə təşkilatçıları', ru: 'Органайзеры для ящиков' } },
          { id: 61404, name: { az: 'Asma sistemləri', ru: 'Подвесные системы' } },
          { id: 61405, name: { az: 'Rəf sistemləri', ru: 'Стеллажные системы' } },
          { id: 61406, name: { az: 'Vakuum torbalar', ru: 'Вакуумные пакеты' } },
          { id: 61407, name: { az: 'Çanta və portfellər', ru: 'Сумки и чемоданы' } },
          { id: 61408, name: { az: 'Etiketlər və işarələr', ru: 'Этикетки и маркеры' } },
        ]
      },
      {
        id: 615,
        name: {
          az: 'Hovuz və spa',
          ru: 'Бассейны и спа',
        },
        subcategories: [
          { id: 61501, name: { az: 'Şişmə hovuzlar', ru: 'Надувные бассейны' } },
          { id: 61502, name: { az: 'Çərçivəli hovuzlar', ru: 'Каркасные бассейны' } },
          { id: 61503, name: { az: 'Hovuz təmizlik avadanlığı', ru: 'Оборудование для чистки бассейнов' } },
          { id: 61504, name: { az: 'Hovuz kimyəvi maddələri', ru: 'Химия для бассейнов' } },
          { id: 61505, name: { az: 'Hovuz aksesuarları', ru: 'Аксессуары для бассейнов' } },
          { id: 61506, name: { az: 'Jakuzi və spa', ru: 'Джакузи и спа' } },
          { id: 61507, name: { az: 'Sauna avadanlığı', ru: 'Оборудование для сауны' } },
          { id: 61508, name: { az: 'Su oyunları', ru: 'Водные игры' } },
        ]
      },
      {
        id: 616,
        name: {
          az: 'Enerji və ekoloji həllər',
          ru: 'Энергетические и экологические решения',
        },
        subcategories: [
          { id: 61601, name: { az: 'Günəş panelləri', ru: 'Солнечные панели' } },
          { id: 61602, name: { az: 'Külək generatorları', ru: 'Ветрогенераторы' } },
          { id: 61603, name: { az: 'Enerji saxlama sistemləri', ru: 'Системы накопления энергии' } },
          { id: 61604, name: { az: 'LED işıqlandırma', ru: 'LED освещение' } },
          { id: 61605, name: { az: 'Su qənaət sistemləri', ru: 'Системы экономии воды' } },
          { id: 61606, name: { az: 'Kompost qutuları', ru: 'Компостные ящики' } },
          { id: 61607, name: { az: 'Yağış suyu toplama', ru: 'Сбор дождевой воды' } },
          { id: 61608, name: { az: 'Ekoloji təmizlik vasitələri', ru: 'Экологичные моющие средства' } },
        ]
      },
      {
        id: 617,
        name: {
          az: 'Ev ofisi',
          ru: 'Домашний офис',
        },
        subcategories: [
          { id: 61701, name: { az: 'İş masaları', ru: 'Рабочие столы' } },
          { id: 61702, name: { az: 'Ofis stulları', ru: 'Офисные стулья' } },
          { id: 61703, name: { az: 'Kitab rəfləri', ru: 'Книжные полки' } },
          { id: 61704, name: { az: 'Sənəd saxlama', ru: 'Хранение документов' } },
          { id: 61705, name: { az: 'Masa lampaları', ru: 'Настольные лампы' } },
          { id: 61706, name: { az: 'Lövhələr', ru: 'Доски' } },
          { id: 61707, name: { az: 'Ofis aksesuarları', ru: 'Офисные аксессуары' } },
          { id: 61708, name: { az: 'Kabel idarəetməsi', ru: 'Управление кабелями' } },
        ]
      },
      {
        id: 618,
        name: {
          az: 'Ev təhlükəsizliyi',
          ru: 'Домашняя безопасность',
        },
        subcategories: [
          { id: 61801, name: { az: 'Yanğın söndürücülər', ru: 'Огнетушители' } },
          { id: 61802, name: { az: 'İlk yardım dəstləri', ru: 'Аптечки первой помощи' } },
          { id: 61803, name: { az: 'Uşaq təhlükəsizliyi', ru: 'Детская безопасность' } },
          { id: 61804, name: { az: 'Qaz maskalar', ru: 'Противогазы' } },
          { id: 61805, name: { az: 'Fənərlər', ru: 'Фонари' } },
          { id: 61806, name: { az: 'Təcili durum dəstləri', ru: 'Наборы экстренной помощи' } },
          { id: 61807, name: { az: 'Radioaktiv detektorlar', ru: 'Детекторы радиации' } },
          { id: 61808, name: { az: 'Karbon monoksid detektorları', ru: 'Детекторы угарного газа' } },
        ]
      },
    ],
  },
  {
    id: 7,
    name: {
      az: 'Uşaq aləmi',
      ru: 'Детский мир',
    },
    icon: 'baby',
    subcategories: [
      {
        id: 701,
        name: {
          az: 'Uşaq geyimləri',
          ru: 'Детская одежда',
        },
        subcategories: [
          { id: 70101, name: { az: '0-2 yaş geyimi', ru: 'Одежда 0-2 года' } },
          { id: 70102, name: { az: '3-6 yaş geyimi', ru: 'Одежда 3-6 лет' } },
          { id: 70103, name: { az: '7-12 yaş geyimi', ru: 'Одежда 7-12 лет' } },
          { id: 70104, name: { az: '13+ yaş geyimi', ru: 'Одежда 13+ лет' } },
          { id: 70105, name: { az: 'Körpə geyimi', ru: 'Одежда для новорожденных' } },
          { id: 70106, name: { az: 'Uşaq idman geyimi', ru: 'Детская спортивная одежда' } },
        ]
      },
      {
        id: 702,
        name: {
          az: 'Uşaq ayaqqabıları',
          ru: 'Детская обувь',
        },
        subcategories: [
          { id: 70201, name: { az: 'İlk addım ayaqqabıları', ru: 'Обувь для первых шагов' } },
          { id: 70202, name: { az: 'Uşaq idman ayaqqabıları', ru: 'Детские кроссовки' } },
          { id: 70203, name: { az: 'Uşaq çəkmələri', ru: 'Детские сапоги' } },
          { id: 70204, name: { az: 'Uşaq sandalları', ru: 'Детские сандалии' } },
          { id: 70205, name: { az: 'Məktəb ayaqqabıları', ru: 'Школьная обувь' } },
        ]
      },
      {
        id: 703,
        name: {
          az: 'Uşaq arabaları',
          ru: 'Детские коляски',
        },
        subcategories: [
          { id: 70301, name: { az: 'Yenidoğan arabaları', ru: 'Коляски для новорожденных' } },
          { id: 70302, name: { az: 'Gəzinti arabaları', ru: 'Прогулочные коляски' } },
          { id: 70303, name: { az: 'Transformer arabalar', ru: 'Коляски-трансформеры' } },
          { id: 70304, name: { az: 'İkiz arabaları', ru: 'Коляски для двойни' } },
          { id: 70305, name: { az: 'Araba aksesuarları', ru: 'Аксессуары для колясок' } },
        ]
      },
      {
        id: 704,
        name: {
          az: 'Oyuncaqlar',
          ru: 'Игрушки',
        },
        subcategories: [
          { id: 70401, name: { az: 'Körpələr üçün oyuncaqlar', ru: 'Игрушки для малышей' } },
          { id: 70402, name: { az: 'Konstruktorlar', ru: 'Конструкторы' } },
          { id: 70403, name: { az: 'Kukla və heyvan oyuncaqları', ru: 'Куклы и мягкие игрушки' } },
          { id: 70404, name: { az: 'Maşın oyuncaqları', ru: 'Машинки' } },
          { id: 70405, name: { az: 'Təhsil oyuncaqları', ru: 'Развивающие игрушки' } },
          { id: 70406, name: { az: 'Elektron oyuncaqlar', ru: 'Электронные игрушки' } },
          { id: 70407, name: { az: 'Bord oyunları', ru: 'Настольные игры' } },
          { id: 70408, name: { az: 'Puzzle', ru: 'Пазлы' } },
          { id: 70409, name: { az: 'Kreativ oyuncaqlar', ru: 'Творческие игрушки' } },
          { id: 70410, name: { az: 'Açıq hava oyuncaqları', ru: 'Игрушки для улицы' } },
        ]
      },
      {
        id: 705,
        name: {
          az: 'Uşaq mebeli',
          ru: 'Детская мебель',
        },
        subcategories: [
          { id: 70501, name: { az: 'Uşaq çarpayıları', ru: 'Детские кровати' } },
          { id: 70502, name: { az: 'Uşaq masaları', ru: 'Детские столы' } },
          { id: 70503, name: { az: 'Uşaq stulları', ru: 'Детские стулья' } },
          { id: 70504, name: { az: 'Uşaq şkafları', ru: 'Детские шкафы' } },
          { id: 70505, name: { az: 'Oyun mebeli', ru: 'Игровая мебель' } },
          { id: 70506, name: { az: 'Körpə mebeli', ru: 'Мебель для новорожденных' } },
        ]
      },
      {
        id: 706,
        name: {
          az: 'Uşaq qidaları',
          ru: 'Детское питание',
        },
        subcategories: [
          { id: 70601, name: { az: 'Körpə qarışıqları', ru: 'Детские смеси' } },
          { id: 70602, name: { az: 'Uşaq püresi', ru: 'Детские пюре' } },
          { id: 70603, name: { az: 'Uşaq içkiləri', ru: 'Детские напитки' } },
          { id: 70604, name: { az: 'Uşaq peçenyesi', ru: 'Детское печенье' } },
          { id: 70605, name: { az: 'Vitamin əlavələri', ru: 'Витаминные добавки' } },
        ]
      },
      {
        id: 707,
        name: {
          az: 'Uşaq avtomobil oturacaqları',
          ru: 'Детские автокресла',
        },
        subcategories: [
          { id: 70701, name: { az: '0-13 kq avtokreslo', ru: 'Автокресла 0-13 кг' } },
          { id: 70702, name: { az: '9-18 kq avtokreslo', ru: 'Автокресла 9-18 кг' } },
          { id: 70703, name: { az: '15-36 kq avtokreslo', ru: 'Автокресла 15-36 кг' } },
          { id: 70704, name: { az: 'Buster oturacaqları', ru: 'Бустеры' } },
        ]
      },
      {
        id: 708,
        name: {
          az: 'Uşaq velosipedləri',
          ru: 'Детские велосипеды',
        },
        subcategories: [
          { id: 70801, name: { az: 'Balans velosipedləri', ru: 'Беговелы' } },
          { id: 70802, name: { az: '12" velosipedlər', ru: 'Велосипеды 12"' } },
          { id: 70803, name: { az: '14" velosipedlər', ru: 'Велосипеды 14"' } },
          { id: 70804, name: { az: '16" velosipedlər', ru: 'Велосипеды 16"' } },
          { id: 70805, name: { az: '18" velosipedlər', ru: 'Велосипеды 18"' } },
          { id: 70806, name: { az: '20" velosipedlər', ru: 'Велосипеды 20"' } },
        ]
      },
      {
        id: 709,
        name: {
          az: 'Uşaq baxımı',
          ru: 'Уход за детьми',
        },
        subcategories: [
          { id: 70901, name: { az: 'Uşaq kosmetikası', ru: 'Детская косметика' } },
          { id: 70902, name: { az: 'Uşaq şampunları', ru: 'Детские шампуни' } },
          { id: 70903, name: { az: 'Uşaq sabunları', ru: 'Детское мыло' } },
          { id: 70904, name: { az: 'Uşaq kremlər', ru: 'Детские кремы' } },
          { id: 70905, name: { az: 'Uşaq dişləri üçün', ru: 'Для детских зубов' } },
        ]
      },
    ],
  },
  {
    id: 8,
    name: {
      az: 'Heyvanlar',
      ru: 'Животные',
    },
    icon: 'dog',
    subcategories: [
      {
        id: 801,
        name: {
          az: 'İtlər',
          ru: 'Собаки',
        },
        subcategories: [
          { id: 80101, name: { az: 'Böyük cinslər', ru: 'Крупные породы' } },
          { id: 80102, name: { az: 'Orta cinslər', ru: 'Средние породы' } },
          { id: 80103, name: { az: 'Kiçik cinslər', ru: 'Мелкие породы' } },
          { id: 80104, name: { az: 'Qarışıq cinslər', ru: 'Смешанные породы' } },
          { id: 80105, name: { az: 'İt balası', ru: 'Щенки' } },
        ]
      },
      {
        id: 802,
        name: {
          az: 'Pişiklər',
          ru: 'Кошки',
        },
        subcategories: [
          { id: 80201, name: { az: 'Uzun tüklü cinslər', ru: 'Длинношерстные породы' } },
          { id: 80202, name: { az: 'Qısa tüklü cinslər', ru: 'Короткошерстные породы' } },
          { id: 80203, name: { az: 'Tüksüz cinslər', ru: 'Бесшерстные породы' } },
          { id: 80204, name: { az: 'Qarışıq cinslər', ru: 'Смешанные породы' } },
          { id: 80205, name: { az: 'Pişik balası', ru: 'Котята' } },
        ]
      },
      {
        id: 803,
        name: {
          az: 'Quşlar',
          ru: 'Птицы',
        },
        subcategories: [
          { id: 80301, name: { az: 'Papağaylar', ru: 'Попугаи' } },
          { id: 80302, name: { az: 'Kanareykalar', ru: 'Канарейки' } },
          { id: 80303, name: { az: 'Finçlər', ru: 'Амадины' } },
          { id: 80304, name: { az: 'Göyərçinlər', ru: 'Голуби' } },
          { id: 80305, name: { az: 'Digər quşlar', ru: 'Другие птицы' } },
        ]
      },
      {
        id: 804,
        name: {
          az: 'Akvarium balıqları',
          ru: 'Аквариумные рыбки',
        },
        subcategories: [
          { id: 80401, name: { az: 'Tropik balıqlar', ru: 'Тропические рыбки' } },
          { id: 80402, name: { az: 'Soyuq su balıqları', ru: 'Холодноводные рыбки' } },
          { id: 80403, name: { az: 'Dəniz balıqları', ru: 'Морские рыбки' } },
          { id: 80404, name: { az: 'Akvarium bitkiləri', ru: 'Аквариумные растения' } },
          { id: 80405, name: { az: 'Akvarium avadanlığı', ru: 'Аквариумное оборудование' } },
        ]
      },
      {
        id: 805,
        name: {
          az: 'Kənd təsərrüfatı heyvanları',
          ru: 'Сельхоз животные',
        },
        subcategories: [
          { id: 80501, name: { az: 'İnəklər', ru: 'Коровы' } },
          { id: 80502, name: { az: 'Atlar', ru: 'Лошади' } },
          { id: 80503, name: { az: 'Qoyunlar', ru: 'Овцы' } },
          { id: 80504, name: { az: 'Keçilər', ru: 'Козы' } },
          { id: 80505, name: { az: 'Donuzlar', ru: 'Свиньи' } },
          { id: 80506, name: { az: 'Toyuqlar', ru: 'Куры' } },
          { id: 80507, name: { az: 'Ördəklər', ru: 'Утки' } },
          { id: 80508, name: { az: 'Qazlar', ru: 'Гуси' } },
        ]
      },
      {
        id: 806,
        name: {
          az: 'Heyvan əşyaları',
          ru: 'Товары для животных',
        },
        subcategories: [
          { id: 80601, name: { az: 'İt aksesuarları', ru: 'Аксессуары для собак' } },
          { id: 80602, name: { az: 'Pişik aksesuarları', ru: 'Аксессуары для кошек' } },
          { id: 80603, name: { az: 'Heyvan qidası', ru: 'Корм для животных' } },
          { id: 80604, name: { az: 'Heyvan oyuncaqları', ru: 'Игрушки для животных' } },
          { id: 80605, name: { az: 'Heyvan yataqları', ru: 'Лежанки для животных' } },
          { id: 80606, name: { az: 'Heyvan daşıyıcıları', ru: 'Переноски для животных' } },
          { id: 80607, name: { az: 'Heyvan baxım məhsulları', ru: 'Средства ухода за животными' } },
        ]
      },
      {
        id: 807,
        name: {
          az: 'Digər heyvanlar',
          ru: 'Другие животные',
        },
        subcategories: [
          { id: 80701, name: { az: 'Dovşanlar', ru: 'Кролики' } },
          { id: 80702, name: { az: 'Hamsterlər', ru: 'Хомяки' } },
          { id: 80703, name: { az: 'Siçovullar', ru: 'Крысы' } },
          { id: 80704, name: { az: 'Kirpilər', ru: 'Ежи' } },
          { id: 80705, name: { az: 'Sürünənlər', ru: 'Рептилии' } },
          { id: 80706, name: { az: 'Həşəratlar', ru: 'Насекомые' } },
        ]
      },
      {
        id: 808,
        name: {
          az: 'Heyvan xidmətləri',
          ru: 'Услуги для животных',
        },
        subcategories: [
          { id: 80801, name: { az: 'Veterinar xidmətləri', ru: 'Ветеринарные услуги' } },
          { id: 80802, name: { az: 'Heyvan qulluğu', ru: 'Груминг' } },
          { id: 80803, name: { az: 'Heyvan məşqi', ru: 'Дрессировка' } },
          { id: 80804, name: { az: 'Heyvan otelləri', ru: 'Гостиницы для животных' } },
          { id: 80805, name: { az: 'Heyvan gəzdirilməsi', ru: 'Выгул животных' } },
        ]
      },
    ],
  },
  {
    id: 9,
    name: {
      az: 'Hobbi və əyləncə',
      ru: 'Хобби и отдых',
    },
    icon: 'music',
    subcategories: [
      {
        id: 901,
        name: {
          az: 'Musiqi alətləri',
          ru: 'Музыкальные инструменты',
        },
        subcategories: [
          { id: 90101, name: { az: 'Gitaralar', ru: 'Гитары' } },
          { id: 90102, name: { az: 'Pianinolar', ru: 'Пианино' } },
          { id: 90103, name: { az: 'Nəfəs alətləri', ru: 'Духовые инструменты' } },
          { id: 90104, name: { az: 'Zərb alətləri', ru: 'Ударные инструменты' } },
          { id: 90105, name: { az: 'Elektron alətlər', ru: 'Электронные инструменты' } },
          { id: 90106, name: { az: 'Simli alətlər', ru: 'Струнные инструменты' } },
          { id: 90107, name: { az: 'Musiqi aksesuarları', ru: 'Музыкальные аксессуары' } },
        ]
      },
      {
        id: 902,
        name: {
          az: 'Kolleksiya',
          ru: 'Коллекционирование',
        },
        subcategories: [
          { id: 90201, name: { az: 'Markalar', ru: 'Марки' } },
          { id: 90202, name: { az: 'Sikkələr', ru: 'Монеты' } },
          { id: 90203, name: { az: 'Kartlar', ru: 'Карточки' } },
          { id: 90204, name: { az: 'Antik əşyalar', ru: 'Антиквариат' } },
          { id: 90205, name: { az: 'Modelləşdirmə', ru: 'Моделизм' } },
          { id: 90206, name: { az: 'Militaria', ru: 'Милитария' } },
        ]
      },
      {
        id: 903,
        name: {
          az: 'İdman və istirahət',
          ru: 'Спорт и отдых',
        },
        subcategories: [
          { id: 90301, name: { az: 'Fitnes avadanlığı', ru: 'Фитнес оборудование' } },
          { id: 90302, name: { az: 'Velosipedlər', ru: 'Велосипеды' } },
          { id: 90303, name: { az: 'Qış idmanı', ru: 'Зимние виды спорта' } },
          { id: 90304, name: { az: 'Su idmanı', ru: 'Водные виды спорта' } },
          { id: 90305, name: { az: 'Futbol', ru: 'Футбол' } },
          { id: 90306, name: { az: 'Basketbol', ru: 'Баскетбол' } },
          { id: 90307, name: { az: 'Tennis', ru: 'Теннис' } },
          { id: 90308, name: { az: 'Döyüş sənətləri', ru: 'Боевые искусства' } },
          { id: 90309, name: { az: 'Yoga və pilates', ru: 'Йога и пилатес' } },
          { id: 90310, name: { az: 'Turizm avadanlığı', ru: 'Туристическое снаряжение' } },
        ]
      },
      {
        id: 904,
        name: {
          az: 'Kitablar',
          ru: 'Книги',
        },
        subcategories: [
          { id: 90401, name: { az: 'Bədii ədəbiyyat', ru: 'Художественная литература' } },
          { id: 90402, name: { az: 'Elmi ədəbiyyat', ru: 'Научная литература' } },
          { id: 90403, name: { az: 'Uşaq kitabları', ru: 'Детские книги' } },
          { id: 90404, name: { az: 'Dərsliklər', ru: 'Учебники' } },
          { id: 90405, name: { az: 'Ensiklopediyalar', ru: 'Энциклопедии' } },
          { id: 90406, name: { az: 'Dini kitablar', ru: 'Религиозные книги' } },
          { id: 90407, name: { az: 'Biznes kitabları', ru: 'Бизнес-литература' } },
        ]
      },
      {
        id: 905,
        name: {
          az: 'Ovçuluq və balıqçılıq',
          ru: 'Охота и рыбалка',
        },
        subcategories: [
          { id: 90501, name: { az: 'Balıqçılıq avadanlığı', ru: 'Рыболовные снасти' } },
          { id: 90502, name: { az: 'Ovçuluq silahları', ru: 'Охотничье оружие' } },
          { id: 90503, name: { az: 'Ovçuluq geyimi', ru: 'Охотничья одежда' } },
          { id: 90504, name: { az: 'Balıqçılıq geyimi', ru: 'Рыболовная одежда' } },
          { id: 90505, name: { az: 'Çadırlar', ru: 'Палатки' } },
          { id: 90506, name: { az: 'Yem və qarmaqlar', ru: 'Приманки и крючки' } },
        ]
      },
      {
        id: 906,
        name: {
          az: 'Biletlər və səyahət',
          ru: 'Билеты и путешествия',
        },
        subcategories: [
          { id: 90601, name: { az: 'Konsert biletləri', ru: 'Билеты на концерты' } },
          { id: 90602, name: { az: 'Teatr biletləri', ru: 'Билеты в театр' } },
          { id: 90603, name: { az: 'İdman biletləri', ru: 'Спортивные билеты' } },
          { id: 90604, name: { az: 'Səyahət turları', ru: 'Туристические туры' } },
          { id: 90605, name: { az: 'Aviabiletlər', ru: 'Авиабилеты' } },
          { id: 90606, name: { az: 'Mehmanxana rezervasiyaları', ru: 'Бронирование отелей' } },
        ]
      },
      {
        id: 907,
        name: {
          az: 'Bord oyunları',
          ru: 'Настольные игры',
        },
        subcategories: [
          { id: 90701, name: { az: 'Klassik bord oyunları', ru: 'Классические настольные игры' } },
          { id: 90702, name: { az: 'Strategiya oyunları', ru: 'Стратегические игры' } },
          { id: 90703, name: { az: 'Kart oyunları', ru: 'Карточные игры' } },
          { id: 90704, name: { az: 'Puzzle oyunları', ru: 'Головоломки' } },
          { id: 90705, name: { az: 'Uşaq bord oyunları', ru: 'Детские настольные игры' } },
        ]
      },
    ],
  },
  {
    id: 10,
    name: {
      az: 'Biznes və avadanlıq',
      ru: 'Бизнес и оборудование',
    },
    icon: 'store',
    subcategories: [
      {
        id: 1001,
        name: {
          az: 'Ticarət avadanlığı',
          ru: 'Торговое оборудование',
        },
        subcategories: [
          { id: 100101, name: { az: 'Kassa aparatları', ru: 'Кассовые аппараты' } },
          { id: 100102, name: { az: 'Vitrinlər', ru: 'Витрины' } },
          { id: 100103, name: { az: 'Rəflər', ru: 'Стеллажи' } },
          { id: 100104, name: { az: 'Mağaza mebeli', ru: 'Торговая мебель' } },
          { id: 100105, name: { az: 'Təhlükəsizlik sistemləri', ru: 'Системы безопасности' } },
          { id: 100106, name: { az: 'Barkod skanerlər', ru: 'Сканеры штрих-кодов' } },
        ]
      },
      {
        id: 1002,
        name: {
          az: 'Sənaye avadanlığı',
          ru: 'Промышленное оборудование',
        },
        subcategories: [
          { id: 100201, name: { az: 'İstehsalat xətləri', ru: 'Производственные линии' } },
          { id: 100202, name: { az: 'Generatorlar', ru: 'Генераторы' } },
          { id: 100203, name: { az: 'Kompressorlar', ru: 'Компрессоры' } },
          { id: 100204, name: { az: 'Nasoslar', ru: 'Насосы' } },
          { id: 100205, name: { az: 'Elektrik avadanlığı', ru: 'Электрооборудование' } },
          { id: 100206, name: { az: 'Ölçü cihazları', ru: 'Измерительные приборы' } },
        ]
      },
      {
        id: 1003,
        name: {
          az: 'Ofis avadanlığı',
          ru: 'Офисное оборудование',
        },
        subcategories: [
          { id: 100301, name: { az: 'Ofis mebeli', ru: 'Офисная мебель' } },
          { id: 100302, name: { az: 'Ofis texnikası', ru: 'Офисная техника' } },
          { id: 100303, name: { az: 'Telefon sistemləri', ru: 'Телефонные системы' } },
          { id: 100304, name: { az: 'Proyektorlar', ru: 'Проекторы' } },
          { id: 100305, name: { az: 'Lövhələr', ru: 'Доски' } },
          { id: 100306, name: { az: 'Ofis aksesuarları', ru: 'Офисные аксессуары' } },
        ]
      },
      {
        id: 1004,
        name: {
          az: 'Biznes satışı',
          ru: 'Продажа бизнеса',
        },
        subcategories: [
          { id: 100401, name: { az: 'Mağaza biznes', ru: 'Магазинный бизнес' } },
          { id: 100402, name: { az: 'Restoran biznes', ru: 'Ресторанный бизнес' } },
          { id: 100403, name: { az: 'İstehsalat biznes', ru: 'Производственный бизнес' } },
          { id: 100404, name: { az: 'Xidmət biznes', ru: 'Сервисный бизнес' } },
          { id: 100405, name: { az: 'İnternet biznes', ru: 'Интернет-бизнес' } },
        ]
      },
      {
        id: 1005,
        name: {
          az: 'Kənd təsərrüfatı',
          ru: 'Сельское хозяйство',
        },
        subcategories: [
          { id: 100501, name: { az: 'Kənd təsərrüfatı texnikası', ru: 'Сельхозтехника' } },
          { id: 100502, name: { az: 'Traktorlar', ru: 'Тракторы' } },
          { id: 100503, name: { az: 'Kombaynlar', ru: 'Комбайны' } },
          { id: 100504, name: { az: 'Suvarma sistemləri', ru: 'Системы орошения' } },
          { id: 100505, name: { az: 'Kənd təsərrüfatı alətləri', ru: 'Сельхозинструменты' } },
          { id: 100506, name: { az: 'Toxumlar', ru: 'Семена' } },
        ]
      },
      {
        id: 1006,
        name: {
          az: 'Restoran avadanlığı',
          ru: 'Оборудование для ресторанов',
        },
        subcategories: [
          { id: 100601, name: { az: 'Mətbəx avadanlığı', ru: 'Кухонное оборудование' } },
          { id: 100602, name: { az: 'Soyuducu avadanlıq', ru: 'Холодильное оборудование' } },
          { id: 100603, name: { az: 'Bar avadanlığı', ru: 'Барное оборудование' } },
          { id: 100604, name: { az: 'Restoran mebeli', ru: 'Ресторанная мебель' } },
          { id: 100605, name: { az: 'Qab-qacaq', ru: 'Посуда' } },
          { id: 100606, name: { az: 'Xidmət avadanlığı', ru: 'Сервировочное оборудование' } },
        ]
      },
    ],
  },
  {
    id: 11,
    name: {
      az: 'Ərzaq və içkilər',
      ru: 'Продукты и напитки',
    },
    icon: 'utensils',
    subcategories: [
      {
        id: 1101,
        name: {
          az: 'Ev yeməkləri',
          ru: 'Домашняя еда',
        },
        subcategories: [
          { id: 110101, name: { az: 'Milli yeməklər', ru: 'Национальные блюда' } },
          { id: 110102, name: { az: 'Şirniyyat', ru: 'Сладости' } },
          { id: 110103, name: { az: 'Çörəklər', ru: 'Хлебобулочные изделия' } },
          { id: 110104, name: { az: 'Konservlər', ru: 'Консервы' } },
          { id: 110105, name: { az: 'Dondurulmuş yeməklər', ru: 'Замороженные блюда' } },
        ]
      },
      {
        id: 1102,
        name: {
          az: 'Şirniyyat və tortlar',
          ru: 'Сладости и торты',
        },
        subcategories: [
          { id: 110201, name: { az: 'Tortlar', ru: 'Торты' } },
          { id: 110202, name: { az: 'Kekslər', ru: 'Кексы' } },
          { id: 110203, name: { az: 'Peçenyeler', ru: 'Печенье' } },
          { id: 110204, name: { az: 'Şokoladlar', ru: 'Шоколад' } },
          { id: 110205, name: { az: 'Konfetlər', ru: 'Конфеты' } },
          { id: 110206, name: { az: 'Bal məhsulları', ru: 'Медовые изделия' } },
        ]
      },
      {
        id: 1103,
        name: {
          az: 'İçkilər',
          ru: 'Напитки',
        },
        subcategories: [
          { id: 110301, name: { az: 'Təbii şirələr', ru: 'Натуральные соки' } },
          { id: 110302, name: { az: 'Kompotlar', ru: 'Компоты' } },
          { id: 110303, name: { az: 'Çaylar', ru: 'Чаи' } },
          { id: 110304, name: { az: 'Qəhvə', ru: 'Кофе' } },
          { id: 110305, name: { az: 'Su', ru: 'Вода' } },
          { id: 110306, name: { az: 'Enerji içkiləri', ru: 'Энергетические напитки' } },
        ]
      },
      {
        id: 1104,
        name: {
          az: 'Qida əlavələri',
          ru: 'Пищевые добавки',
        },
        subcategories: [
          { id: 110401, name: { az: 'Vitaminlər', ru: 'Витамины' } },
          { id: 110402, name: { az: 'Protein tozu', ru: 'Протеиновый порошок' } },
          { id: 110403, name: { az: 'Omega-3', ru: 'Омега-3' } },
          { id: 110404, name: { az: 'Probiotiklər', ru: 'Пробиотики' } },
          { id: 110405, name: { az: 'Mineral əlavələr', ru: 'Минеральные добавки' } },
        ]
      },
      {
        id: 1105,
        name: {
          az: 'Təzə məhsullar',
          ru: 'Свежие продукты',
        },
        subcategories: [
          { id: 110501, name: { az: 'Meyvələr', ru: 'Фрукты' } },
          { id: 110502, name: { az: 'Tərəvəzlər', ru: 'Овощи' } },
          { id: 110503, name: { az: 'Göyərti', ru: 'Зелень' } },
          { id: 110504, name: { az: 'Süd məhsulları', ru: 'Молочные продукты' } },
          { id: 110505, name: { az: 'Ət məhsulları', ru: 'Мясные продукты' } },
          { id: 110506, name: { az: 'Balıq məhsulları', ru: 'Рыбные продукты' } },
        ]
      },
    ],
  },
  {
    id: 12,
    name: {
      az: 'Təhsil və tədris',
      ru: 'Образование и обучение',
    },
    icon: 'book-open',
    subcategories: [
      {
        id: 1201,
        name: {
          az: 'Dərsliklər',
          ru: 'Учебники',
        },
        subcategories: [
          { id: 120101, name: { az: 'Məktəb dərslikləri', ru: 'Школьные учебники' } },
          { id: 120102, name: { az: 'Universitet dərslikləri', ru: 'Университетские учебники' } },
          { id: 120103, name: { az: 'Xarici dil dərslikləri', ru: 'Учебники иностранных языков' } },
          { id: 120104, name: { az: 'Texniki dərsliklər', ru: 'Технические учебники' } },
          { id: 120105, name: { az: 'Tibb dərslikləri', ru: 'Медицинские учебники' } },
        ]
      },
      {
        id: 1202,
        name: {
          az: 'Kurslar və treninqlər',
          ru: 'Курсы и тренинги',
        },
        subcategories: [
          { id: 120201, name: { az: 'İT kursları', ru: 'IT курсы' } },
          { id: 120202, name: { az: 'Dil kursları', ru: 'Языковые курсы' } },
          { id: 120203, name: { az: 'Biznes kursları', ru: 'Бизнес-курсы' } },
          { id: 120204, name: { az: 'Sənətkarlıq kursları', ru: 'Курсы рукоделия' } },
          { id: 120205, name: { az: 'Musiqi kursları', ru: 'Музыкальные курсы' } },
          { id: 120206, name: { az: 'İdman kursları', ru: 'Спортивные курсы' } },
        ]
      },
      {
        id: 1203,
        name: {
          az: 'Repetitorluq',
          ru: 'Репетиторство',
        },
        subcategories: [
          { id: 120301, name: { az: 'Riyaziyyat repetitoru', ru: 'Репетитор по математике' } },
          { id: 120302, name: { az: 'Fizika repetitoru', ru: 'Репетитор по физике' } },
          { id: 120303, name: { az: 'Kimya repetitoru', ru: 'Репетитор по химии' } },
          { id: 120304, name: { az: 'Dil repetitoru', ru: 'Репетитор по языкам' } },
          { id: 120305, name: { az: 'Tarix repetitoru', ru: 'Репетитор по истории' } },
          { id: 120306, name: { az: 'Ədəbiyyat repetitoru', ru: 'Репетитор по литературе' } },
        ]
      },
      {
        id: 1204,
        name: {
          az: 'Təhsil avadanlığı',
          ru: 'Учебное оборудование',
        },
        subcategories: [
          { id: 120401, name: { az: 'Laboratoriya avadanlığı', ru: 'Лабораторное оборудование' } },
          { id: 120402, name: { az: 'Təhsil proqramları', ru: 'Образовательные программы' } },
          { id: 120403, name: { az: 'İnteraktiv lövhələr', ru: 'Интерактивные доски' } },
          { id: 120404, name: { az: 'Təhsil oyunları', ru: 'Образовательные игры' } },
          { id: 120405, name: { az: 'Məktəb ləvazimatları', ru: 'Школьные принадлежности' } },
        ]
      },
      {
        id: 1205,
        name: {
          az: 'Onlayn təhsil',
          ru: 'Онлайн образование',
        },
        subcategories: [
          { id: 120501, name: { az: 'Video kurslar', ru: 'Видеокурсы' } },
          { id: 120502, name: { az: 'Vebinarlar', ru: 'Вебинары' } },
          { id: 120503, name: { az: 'Onlayn repetitorluq', ru: 'Онлайн репетиторство' } },
          { id: 120504, name: { az: 'Elektron kitablar', ru: 'Электронные книги' } },
          { id: 120505, name: { az: 'Təhsil platformaları', ru: 'Образовательные платформы' } },
        ]
      },
    ],
  },
  {
    id: 13,
    name: {
      az: 'Əl işləri',
      ru: 'Рукоделие',
    },
    icon: 'palette',
    subcategories: [
      {
        id: 1301,
        name: {
          az: 'Tikiş və dərziçilik',
          ru: 'Шитье и портняжное дело',
        },
        subcategories: [
          { id: 130101, name: { az: 'Tikiş maşınları', ru: 'Швейные машины' } },
          { id: 130102, name: { az: 'Parçalar', ru: 'Ткани' } },
          { id: 130103, name: { az: 'Tikiş aksesuarları', ru: 'Швейные аксессуары' } },
          { id: 130104, name: { az: 'Düymələr', ru: 'Пуговицы' } },
          { id: 130105, name: { az: 'İplər', ru: 'Нитки' } },
          { id: 130106, name: { az: 'Kalıplar', ru: 'Выкройки' } },
        ]
      },
      {
        id: 1302,
        name: {
          az: 'Toxuculuq və hörmə',
          ru: 'Вязание и плетение',
        },
        subcategories: [
          { id: 130201, name: { az: 'Yun iplər', ru: 'Шерстяные нитки' } },
          { id: 130202, name: { az: 'Pambıq iplər', ru: 'Хлопковые нитки' } },
          { id: 130203, name: { az: 'Toxucu tığları', ru: 'Крючки для вязания' } },
          { id: 130204, name: { az: 'Toxucu dəmirləri', ru: 'Спицы для вязания' } },
          { id: 130205, name: { az: 'Makrame ipləri', ru: 'Нити для макраме' } },
          { id: 130206, name: { az: 'Hörmə materialları', ru: 'Материалы для плетения' } },
        ]
      },
      {
        id: 1303,
        name: {
          az: 'Zərgərlik və bişu hazırlanması',
          ru: 'Ювелирное дело и изготовление украшений',
        },
        subcategories: [
          { id: 130301, name: { az: 'Muncuqlar', ru: 'Бусины' } },
          { id: 130302, name: { az: 'Zərgərlik telləri', ru: 'Ювелирная проволока' } },
          { id: 130303, name: { az: 'Zərgərlik alətləri', ru: 'Ювелирные инструменты' } },
          { id: 130304, name: { az: 'Kristallar', ru: 'Кристаллы' } },
          { id: 130305, name: { az: 'Zərgərlik aksesuarları', ru: 'Ювелирная фурнитура' } },
        ]
      },
      {
        id: 1304,
        name: {
          az: 'Ağac işləri',
          ru: 'Работы по дереву',
        },
        subcategories: [
          { id: 130401, name: { az: 'Ağac materialları', ru: 'Деревянные материалы' } },
          { id: 130402, name: { az: 'Ağac işləmə alətləri', ru: 'Инструменты для работы с деревом' } },
          { id: 130403, name: { az: 'Ağac boyaları', ru: 'Краски для дерева' } },
          { id: 130404, name: { az: 'Ağac lakları', ru: 'Лаки для дерева' } },
          { id: 130405, name: { az: 'Dekorativ ağac məmulatları', ru: 'Декоративные изделия из дерева' } },
        ]
      },
      {
        id: 1305,
        name: {
          az: 'Keramika və gil işləri',
          ru: 'Керамика и работы с глиной',
        },
        subcategories: [
          { id: 130501, name: { az: 'Gil materialları', ru: 'Глиняные материалы' } },
          { id: 130502, name: { az: 'Keramika alətləri', ru: 'Инструменты для керамики' } },
          { id: 130503, name: { az: 'Keramika boyaları', ru: 'Краски для керамики' } },
          { id: 130504, name: { az: 'Gil heykəlciklər', ru: 'Глиняные фигурки' } },
          { id: 130505, name: { az: 'Keramika qabları', ru: 'Керамическая посуда' } },
        ]
      },
      {
        id: 1306,
        name: {
          az: 'Rəsm və kaligrafiya',
          ru: 'Рисование и каллиграфия',
        },
        subcategories: [
          { id: 130601, name: { az: 'Rəsm boyaları', ru: 'Краски для рисования' } },
          { id: 130602, name: { az: 'Rəsm fırçaları', ru: 'Кисти для рисования' } },
          { id: 130603, name: { az: 'Rəsm kağızları', ru: 'Бумага для рисования' } },
          { id: 130604, name: { az: 'Kaligrafiya qələmləri', ru: 'Каллиграфические перья' } },
          { id: 130605, name: { az: 'Kaligrafiya mürəkkəbi', ru: 'Каллиграфические чернила' } },
        ]
      },
      {
        id: 1307,
        name: {
          az: 'Skrapbuking və kart hazırlama',
          ru: 'Скрапбукинг и изготовление открыток',
        },
        subcategories: [
          { id: 130701, name: { az: 'Skrapbuking kağızları', ru: 'Бумага для скрапбукинга' } },
          { id: 130702, name: { az: 'Dekorativ elementlər', ru: 'Декоративные элементы' } },
          { id: 130703, name: { az: 'Yapışqan lentlər', ru: 'Клейкие ленты' } },
          { id: 130704, name: { az: 'Kart şablonları', ru: 'Шаблоны для открыток' } },
          { id: 130705, name: { az: 'Əl ilə düzəldilmiş kartlar', ru: 'Открытки ручной работы' } },
        ]
      },
      {
        id: 1308,
        name: {
          az: 'Sabun və şam hazırlama',
          ru: 'Изготовление мыла и свечей',
        },
        subcategories: [
          { id: 130801, name: { az: 'Sabun bazası', ru: 'Мыльная основа' } },
          { id: 130802, name: { az: 'Ətir yağları', ru: 'Эфирные масла' } },
          { id: 130803, name: { az: 'Sabun boyaları', ru: 'Красители для мыла' } },
          { id: 130804, name: { az: 'Şam mumu', ru: 'Воск для свечей' } },
          { id: 130805, name: { az: 'Şam fitilləri', ru: 'Фитили для свечей' } },
          { id: 130806, name: { az: 'Şam qəlibləri', ru: 'Формы для свечей' } },
        ]
      },
      {
        id: 1309,
        name: {
          az: 'Tikmə və naxış',
          ru: 'Вышивка и узоры',
        },
        subcategories: [
          { id: 130901, name: { az: 'Tikmə ipləri', ru: 'Нитки для вышивки' } },
          { id: 130902, name: { az: 'Tikmə parçaları', ru: 'Ткани для вышивки' } },
          { id: 130903, name: { az: 'Tikmə iynələri', ru: 'Иглы для вышивки' } },
          { id: 130904, name: { az: 'Tikmə çərçivələri', ru: 'Пяльцы для вышивки' } },
          { id: 130905, name: { az: 'Tikmə naxışları', ru: 'Схемы для вышивки' } },
        ]
      },
      {
        id: 1310,
        name: {
          az: 'Digər əl işləri',
          ru: 'Другие виды рукоделия',
        },
        subcategories: [
          { id: 131001, name: { az: 'Origami', ru: 'Оригами' } },
          { id: 131002, name: { az: 'Quilling', ru: 'Квиллинг' } },
          { id: 131003, name: { az: 'Decoupage', ru: 'Декупаж' } },
          { id: 131004, name: { az: 'Felting', ru: 'Валяние' } },
          { id: 131005, name: { az: 'Mozaika', ru: 'Мозаика' } },
          { id: 131006, name: { az: 'Vitraj', ru: 'Витраж' } },
          { id: 131007, name: { az: 'Xonçalar', ru: 'Подносы' } },
          { id: 131008, name: { az: 'Səbət toxuma', ru: 'Плетение корзин' } },
          { id: 131009, name: { az: 'Daş boyama', ru: 'Роспись по камню' } },
          { id: 131010, name: { az: 'Əl ilə düzəldilmiş oyuncaqlar', ru: 'Игрушки ручной работы' } },
        ]
      },
    ],
  },
  {
    id: 14,
    name: {
      az: 'Tibbi ləvazimalar',
      ru: 'Медицинские товары',
    },
    icon: 'heart-pulse',
    subcategories: [
      {
        id: 1401,
        name: {
          az: 'Diaqnostik avadanlığı',
          ru: 'Диагностическое оборудование',
        },
        subcategories: [
          { id: 140101, name: { az: 'Qan təzyiqi ölçənləri', ru: 'Тонометры' } },
          { id: 140102, name: { az: 'Qlükometrlər', ru: 'Глюкометры' } },
          { id: 140103, name: { az: 'Termomentrlər', ru: 'Термометры' } },
          { id: 140104, name: { az: 'Pulsoksimetr', ru: 'Пульсоксиметры' } },
          { id: 140105, name: { az: 'Stetoskoplar', ru: 'Стетоскопы' } },
          { id: 140106, name: { az: 'EKQ aparatları', ru: 'ЭКГ аппараты' } },
          { id: 140107, name: { az: 'Ultrasəs aparatları', ru: 'УЗИ аппараты' } },
          { id: 140108, name: { az: 'Rentgen aparatları', ru: 'Рентген аппараты' } },
        ]
      },
      {
        id: 1402,
        name: {
          az: 'Təkərli kreyserlər və hərəkət yardımcıları',
          ru: 'Кресла-коляски и средства передвижения',
        },
        subcategories: [
          { id: 140201, name: { az: 'Elektrikli kreyserlər', ru: 'Электрические коляски' } },
          { id: 140202, name: { az: 'Mexaniki kreyserlər', ru: 'Механические коляски' } },
          { id: 140203, name: { az: 'Gəzinti çərçivələri', ru: 'Ходунки' } },
          { id: 140204, name: { az: 'Dəstək əsaları', ru: 'Трости' } },
          { id: 140205, name: { az: 'Qoltuqaltı dəyənəkləri', ru: 'Костыли' } },
          { id: 140206, name: { az: 'Rollatorlar', ru: 'Роллаторы' } },
          { id: 140207, name: { az: 'Skuter kreyserlər', ru: 'Скутеры для инвалидов' } },
        ]
      },
      {
        id: 1403,
        name: {
          az: 'Ortopedik məhsullar',
          ru: 'Ортопедические изделия',
        },
        subcategories: [
          { id: 140301, name: { az: 'Ortopedik matraslar', ru: 'Ортопедические матрасы' } },
          { id: 140302, name: { az: 'Ortopedik yastıqlar', ru: 'Ортопедические подушки' } },
          { id: 140303, name: { az: 'Bel dəstəkləri', ru: 'Поясничные корсеты' } },
          { id: 140304, name: { az: 'Boyun yaxalıqları', ru: 'Шейные воротники' } },
          { id: 140305, name: { az: 'Diz dəstəkləri', ru: 'Наколенники' } },
          { id: 140306, name: { az: 'Bilərzik dəstəkləri', ru: 'Бандажи для запястья' } },
          { id: 140307, name: { az: 'Ayaq dəstəkləri', ru: 'Ортопедические стельки' } },
          { id: 140308, name: { az: 'Postural dəstəklər', ru: 'Корректоры осанки' } },
        ]
      },
      {
        id: 1404,
        name: {
          az: 'Tədavi avadanlığı',
          ru: 'Лечебное оборудование',
        },
        subcategories: [
          { id: 140401, name: { az: 'İnhalyatorlar', ru: 'Ингаляторы' } },
          { id: 140402, name: { az: 'Oksigen konsentratorları', ru: 'Кислородные концентраторы' } },
          { id: 140403, name: { az: 'CPAP aparatları', ru: 'CPAP аппараты' } },
          { id: 140404, name: { az: 'Fizioterapiya aparatları', ru: 'Физиотерапевтические аппараты' } },
          { id: 140405, name: { az: 'Elektrostimulatorlar', ru: 'Электростимуляторы' } },
          { id: 140406, name: { az: 'Maqnit terapiya aparatları', ru: 'Аппараты магнитотерапии' } },
          { id: 140407, name: { az: 'Lazer terapiya aparatları', ru: 'Лазерные терапевтические аппараты' } },
        ]
      },
      {
        id: 1405,
        name: {
          az: 'Yara baxımı və gigiyena',
          ru: 'Уход за ранами и гигиена',
        },
        subcategories: [
          { id: 140501, name: { az: 'Tibbi sarğılar', ru: 'Медицинские бинты' } },
          { id: 140502, name: { az: 'Yara yepistiricilləri', ru: 'Пластыри' } },
          { id: 140503, name: { az: 'Antiseptiklər', ru: 'Антисептики' } },
          { id: 140504, name: { az: 'Dezinfeksiya vasitələri', ru: 'Дезинфицирующие средства' } },
          { id: 140505, name: { az: 'Tibbi əlcəklər', ru: 'Медицинские перчатки' } },
          { id: 140506, name: { az: 'Tibbi maskalar', ru: 'Медицинские маски' } },
          { id: 140507, name: { az: 'Gigiyena məhsulları', ru: 'Гигиенические изделия' } },
          { id: 140508, name: { az: 'Yara örtükləri', ru: 'Раневые покрытия' } },
        ]
      },
      {
        id: 1406,
        name: {
          az: 'Tibbi mebel',
          ru: 'Медицинская мебель',
        },
        subcategories: [
          { id: 140601, name: { az: 'Xəstə çarpayıları', ru: 'Медицинские кровати' } },
          { id: 140602, name: { az: 'Tibbi stollar', ru: 'Медицинские столы' } },
          { id: 140603, name: { az: 'Muayinə masaları', ru: 'Смотровые столы' } },
          { id: 140604, name: { az: 'Tibbi kabinetlər', ru: 'Медицинские шкафы' } },
          { id: 140605, name: { az: 'Tibbi stullar', ru: 'Медицинские стулья' } },
          { id: 140606, name: { az: 'Xəstə lifti', ru: 'Подъемники для пациентов' } },
        ]
      },
      {
        id: 1407,
        name: {
          az: 'Optika və göz sağlamlığı',
          ru: 'Оптика и здоровье глаз',
        },
        subcategories: [
          { id: 140701, name: { az: 'Eynəklər', ru: 'Очки' } },
          { id: 140702, name: { az: 'Kontakt linzalar', ru: 'Контактные линзы' } },
          { id: 140703, name: { az: 'Böyüdücü lupa', ru: 'Увеличительные лупы' } },
          { id: 140704, name: { az: 'Göz damcıları', ru: 'Глазные капли' } },
          { id: 140705, name: { az: 'Göz baxım məhsulları', ru: 'Средства ухода за глазами' } },
          { id: 140706, name: { az: 'Günəş eynəkləri', ru: 'Солнцезащитные очки' } },
        ]
      },
      {
        id: 1408,
        name: {
          az: 'İlk yardım dəstləri',
          ru: 'Аптечки первой помощи',
        },
        subcategories: [
          { id: 140801, name: { az: 'Ev üçün ilk yardım dəsti', ru: 'Домашняя аптечка' } },
          { id: 140802, name: { az: 'Avtomobil üçün ilk yardım dəsti', ru: 'Автомобильная аптечка' } },
          { id: 140803, name: { az: 'Səyahət üçün ilk yardım dəsti', ru: 'Дорожная аптечка' } },
          { id: 140804, name: { az: 'İdman üçün ilk yardım dəsti', ru: 'Спортивная аптечка' } },
          { id: 140805, name: { az: 'İş yeri üçün ilk yardım dəsti', ru: 'Аптечка для рабочего места' } },
        ]
      },
      {
        id: 1409,
        name: {
          az: 'Laboratoriya avadanlığı',
          ru: 'Лабораторное оборудование',
        },
        subcategories: [
          { id: 140901, name: { az: 'Mikroskoplar', ru: 'Микроскопы' } },
          { id: 140902, name: { az: 'Sentrifuqalar', ru: 'Центрифуги' } },
          { id: 140903, name: { az: 'Laboratoriya şüşələri', ru: 'Лабораторная посуда' } },
          { id: 140904, name: { az: 'pH ölçənləri', ru: 'pH метры' } },
          { id: 140905, name: { az: 'Analitik tərəzilər', ru: 'Аналитические весы' } },
          { id: 140906, name: { az: 'İnkubatorlar', ru: 'Инкубаторы' } },
          { id: 140907, name: { az: 'Avtoklavlar', ru: 'Автоклавы' } },
        ]
      },
      {
        id: 1410,
        name: {
          az: 'Hamiləlik və körpə baxımı',
          ru: 'Беременность и уход за младенцами',
        },
        subcategories: [
          { id: 141001, name: { az: 'Hamiləlik testləri', ru: 'Тесты на беременность' } },
          { id: 141002, name: { az: 'Körpə tərəziləri', ru: 'Детские весы' } },
          { id: 141003, name: { az: 'Süd pompası', ru: 'Молокоотсосы' } },
          { id: 141004, name: { az: 'Körpə termomentrlər', ru: 'Детские термометры' } },
          { id: 141005, name: { az: 'Körpə inhaleatori', ru: 'Детские ингаляторы' } },
          { id: 141006, name: { az: 'Hamiləlik dəstək kəmərləri', ru: 'Бандажи для беременных' } },
          { id: 141007, name: { az: 'Körpə monitoru', ru: 'Мониторы для младенцев' } },
        ]
      },
      {
        id: 1411,
        name: {
          az: 'Stomatologiya',
          ru: 'Стоматология',
        },
        subcategories: [
          { id: 141101, name: { az: 'Diş müalicə avadanlığı', ru: 'Стоматологическое лечебное оборудование' } },
          { id: 141102, name: { az: 'Diş protezləri', ru: 'Зубные протезы' } },
          { id: 141103, name: { az: 'Ortodontik aparatlar', ru: 'Ортодонтические аппараты' } },
          { id: 141104, name: { az: 'Diş implantları', ru: 'Зубные имплантаты' } },
          { id: 141105, name: { az: 'Diş baxım məhsulları', ru: 'Средства ухода за зубами' } },
          { id: 141106, name: { az: 'Diş fırçaları', ru: 'Зубные щетки' } },
          { id: 141107, name: { az: 'Diş pastaları', ru: 'Зубные пасты' } },
          { id: 141108, name: { az: 'Ağız yuyucu məhlullar', ru: 'Ополаскиватели для рта' } },
          { id: 141109, name: { az: 'Diş ipi', ru: 'Зубная нить' } },
          { id: 141110, name: { az: 'Diş ağrı kəsiciləri', ru: 'Обезболивающие для зубов' } },
          { id: 141111, name: { az: 'Diş ağartma məhsulları', ru: 'Отбеливающие средства для зубов' } },
          { id: 141112, name: { az: 'Diş həkimi alətləri', ru: 'Стоматологические инструменты' } },
          { id: 141113, name: { az: 'Diş röntgen avadanlığı', ru: 'Стоматологическое рентген оборудование' } },
          { id: 141114, name: { az: 'Diş laboratoriya avadanlığı', ru: 'Зуботехническое лабораторное оборудование' } },
          { id: 141115, name: { az: 'Diş anesteziya məhsulları', ru: 'Стоматологические анестетики' } },
          { id: 141116, name: { az: 'Diş dolgu materialları', ru: 'Пломбировочные материалы' } },
          { id: 141117, name: { az: 'Diş çəkmə alətləri', ru: 'Инструменты для удаления зубов' } },
          { id: 141118, name: { az: 'Diş təmizləmə avadanlığı', ru: 'Оборудование для чистки зубов' } },
          { id: 141119, name: { az: 'Diş klinikası mebeli', ru: 'Мебель для стоматологических кабинетов' } },
          { id: 141120, name: { az: 'Diş texnikası aksesuarları', ru: 'Аксессуары для стоматологического оборудования' } },
        ]
      },
      {
        id: 1412,
        name: {
          az: 'Kardioloji',
          ru: 'Кардиология',
        },
        subcategories: [
          { id: 141201, name: { az: 'EKQ aparatları', ru: 'ЭКГ аппараты' } },
          { id: 141202, name: { az: 'Ürək monitoru', ru: 'Кардиомониторы' } },
          { id: 141203, name: { az: 'Defibrillyatorlar', ru: 'Дефибрилляторы' } },
          { id: 141204, name: { az: 'Ürək stimulyatorları', ru: 'Кардиостимуляторы' } },
          { id: 141205, name: { az: 'Ürək kateterləri', ru: 'Сердечные катетеры' } },
          { id: 141206, name: { az: 'Ürək dərmanları', ru: 'Кардиологические препараты' } },
          { id: 141207, name: { az: 'Ürək cərrahiyyə alətləri', ru: 'Кардиохирургические инструменты' } },
          { id: 141208, name: { az: 'Ürək protezləri', ru: 'Сердечные протезы' } },
        ]
      },
      {
        id: 1413,
        name: {
          az: 'Nevroloji',
          ru: 'Неврология',
        },
        subcategories: [
          { id: 141301, name: { az: 'EEQ aparatları', ru: 'ЭЭГ аппараты' } },
          { id: 141302, name: { az: 'Nevroloji çəkiclər', ru: 'Неврологические молоточки' } },
          { id: 141303, name: { az: 'Beyin stimulyatorları', ru: 'Нейростимуляторы' } },
          { id: 141304, name: { az: 'Nevroloji dərmanlar', ru: 'Неврологические препараты' } },
          { id: 141305, name: { az: 'Beyin cərrahiyyə alətləri', ru: 'Нейрохирургические инструменты' } },
          { id: 141306, name: { az: 'Spinal implantlar', ru: 'Спинальные имплантаты' } },
          { id: 141307, name: { az: 'Nevroloji testlər', ru: 'Неврологические тесты' } },
        ]
      },
      {
        id: 1414,
        name: {
          az: 'Oftalmoloji',
          ru: 'Офтальмология',
        },
        subcategories: [
          { id: 141401, name: { az: 'Oftalmoskoplar', ru: 'Офтальмоскопы' } },
          { id: 141402, name: { az: 'Göz təzyiqi ölçənləri', ru: 'Тонометры глазные' } },
          { id: 141403, name: { az: 'Göz cərrahiyyə alətləri', ru: 'Офтальмохирургические инструменты' } },
          { id: 141404, name: { az: 'İntraokulyar linzalar', ru: 'Интраокулярные линзы' } },
          { id: 141405, name: { az: 'Göz lazer aparatları', ru: 'Лазерные аппараты для глаз' } },
          { id: 141406, name: { az: 'Göz dərmanları', ru: 'Офтальмологические препараты' } },
          { id: 141407, name: { az: 'Göz protezləri', ru: 'Глазные протезы' } },
          { id: 141408, name: { az: 'Göz bandajları', ru: 'Глазные повязки' } },
        ]
      },
      {
        id: 1415,
        name: {
          az: 'Ginekologiya',
          ru: 'Гинекология',
        },
        subcategories: [
          { id: 141501, name: { az: 'Ginekologi müayinə alətləri', ru: 'Гинекологические инструменты' } },
          { id: 141502, name: { az: 'Ultrasəs ginekologi aparatları', ru: 'УЗИ аппараты гинекологические' } },
          { id: 141503, name: { az: 'Ginekologi cərrahiyyə alətləri', ru: 'Гинекологические хирургические инструменты' } },
          { id: 141504, name: { az: 'Hamiləlik testləri', ru: 'Тесты на беременность' } },
          { id: 141505, name: { az: 'Ginekologi dərmanlar', ru: 'Гинекологические препараты' } },
          { id: 141506, name: { az: 'Doğum alətləri', ru: 'Акушерские инструменты' } },
          { id: 141507, name: { az: 'Kontraceptiv vasitələr', ru: 'Контрацептивы' } },
        ]
      },
      {
        id: 1416,
        name: {
          az: 'Urologiya',
          ru: 'Урология',
        },
        subcategories: [
          { id: 141601, name: { az: 'Uroloji müayinə alətləri', ru: 'Урологические инструменты' } },
          { id: 141602, name: { az: 'Uroloji kateterləri', ru: 'Урологические катетеры' } },
          { id: 141603, name: { az: 'Uroloji cərrahiyyə alətləri', ru: 'Урологические хирургические инструменты' } },
          { id: 141604, name: { az: 'Sidik testləri', ru: 'Анализы мочи' } },
          { id: 141605, name: { az: 'Uroloji dərmanlar', ru: 'Урологические препараты' } },
          { id: 141606, name: { az: 'Prostat müayinə alətləri', ru: 'Инструменты для обследования простаты' } },
          { id: 141607, name: { az: 'Böyrək daşı müalicə alətləri', ru: 'Оборудование для лечения камней в почках' } },
        ]
      },
      {
        id: 1417,
        name: {
          az: 'Dermatoloji',
          ru: 'Дерматология',
        },
        subcategories: [
          { id: 141701, name: { az: 'Dermatoloji müayinə alətləri', ru: 'Дерматологические инструменты' } },
          { id: 141702, name: { az: 'Dəri biopsiya alətləri', ru: 'Инструменты для биопсии кожи' } },
          { id: 141703, name: { az: 'Dermatoloji lazer aparatları', ru: 'Дерматологические лазеры' } },
          { id: 141704, name: { az: 'Dəri dərmanları', ru: 'Дерматологические препараты' } },
          { id: 141705, name: { az: 'Kosmetoloji aparatlar', ru: 'Косметологическое оборудование' } },
          { id: 141706, name: { az: 'Dəri baxım məhsulları', ru: 'Средства ухода за кожей' } },
          { id: 141707, name: { az: 'Fototerapiya aparatları', ru: 'Аппараты фототерапии' } },
        ]
      },
      {
        id: 1418,
        name: {
          az: 'Anesteziologiya',
          ru: 'Анестезиология',
        },
        subcategories: [
          { id: 141801, name: { az: 'Anesteziya aparatları', ru: 'Наркозные аппараты' } },
          { id: 141802, name: { az: 'Anesteziya dərmanları', ru: 'Анестетики' } },
          { id: 141803, name: { az: 'İntubasiya alətləri', ru: 'Интубационные инструменты' } },
          { id: 141804, name: { az: 'Anesteziya monitorları', ru: 'Мониторы анестезии' } },
          { id: 141805, name: { az: 'Ağrı kəsici pompalar', ru: 'Обезболивающие помпы' } },
          { id: 141806, name: { az: 'Spinal anesteziya alətləri', ru: 'Инструменты спинальной анестезии' } },
        ]
      },
      {
        id: 1419,
        name: {
          az: 'Pediatriya',
          ru: 'Педиатрия',
        },
        subcategories: [
          { id: 141901, name: { az: 'Uşaq müayinə alətləri', ru: 'Педиатрические инструменты' } },
          { id: 141902, name: { az: 'Uşaq vaksinləri', ru: 'Детские вакцины' } },
          { id: 141903, name: { az: 'Uşaq dərmanları', ru: 'Детские лекарства' } },
          { id: 141904, name: { az: 'Yenidoğan baxım avadanlığı', ru: 'Оборудование для новорожденных' } },
          { id: 141905, name: { az: 'Uşaq cərrahiyyə alətləri', ru: 'Детские хирургические инструменты' } },
          { id: 141906, name: { az: 'Uşaq reanimasiya avadanlığı', ru: 'Детское реанимационное оборудование' } },
          { id: 141907, name: { az: 'Uşaq inkubatorları', ru: 'Детские инкубаторы' } },
        ]
      },
      {
        id: 1420,
        name: {
          az: 'Psixiatriya',
          ru: 'Психиатрия',
        },
        subcategories: [
          { id: 142001, name: { az: 'Psixiatrik dərmanlar', ru: 'Психиатрические препараты' } },
          { id: 142002, name: { az: 'Psixoloji testlər', ru: 'Психологические тесты' } },
          { id: 142003, name: { az: 'Elektrokonvulsiv terapiya aparatları', ru: 'Аппараты электросудорожной терапии' } },
          { id: 142004, name: { az: 'Psixiatrik müayinə alətləri', ru: 'Психиатрические инструменты' } },
          { id: 142005, name: { az: 'Beyin stimulyasiya aparatları', ru: 'Аппараты стимуляции мозга' } },
          { id: 142006, name: { az: 'Psixoterapiya avadanlığı', ru: 'Оборудование для психотерапии' } },
        ]
      },
      {
        id: 1421,
        name: {
          az: 'Onkologiya',
          ru: 'Онкология',
        },
        subcategories: [
          { id: 142101, name: { az: 'Onkoloji cərrahiyyə alətləri', ru: 'Онкологические хирургические инструменты' } },
          { id: 142102, name: { az: 'Şüa terapiyası aparatları', ru: 'Аппараты лучевой терапии' } },
          { id: 142103, name: { az: 'Kimyaterapiya dərmanları', ru: 'Химиотерапевтические препараты' } },
          { id: 142104, name: { az: 'Onkoloji diaqnostik avadanlıq', ru: 'Онкологическое диагностическое оборудование' } },
          { id: 142105, name: { az: 'Biopsi alətləri', ru: 'Инструменты для биопсии' } },
          { id: 142106, name: { az: 'Onkoloji implantlar', ru: 'Онкологические имплантаты' } },
          { id: 142107, name: { az: 'Şişə müalicə lazerləri', ru: 'Лазеры для лечения опухолей' } },
        ]
      },
      {
        id: 1422,
        name: {
          az: 'Endokrinologiya',
          ru: 'Эндокринология',
        },
        subcategories: [
          { id: 142201, name: { az: 'İnsulin pompalar', ru: 'Инсулиновые помпы' } },
          { id: 142202, name: { az: 'Hormon testləri', ru: 'Гормональные тесты' } },
          { id: 142203, name: { az: 'Endokrin dərmanlar', ru: 'Эндокринологические препараты' } },
          { id: 142204, name: { az: 'Tiroid müayinə alətləri', ru: 'Инструменты для обследования щитовидной железы' } },
          { id: 142205, name: { az: 'Diabetik baxım məhsulları', ru: 'Средства ухода для диабетиков' } },
          { id: 142206, name: { az: 'Metabolik sindrom testləri', ru: 'Тесты метаболического синдрома' } },
        ]
      },
      {
        id: 1423,
        name: {
          az: 'Reanimasiya və təcili yardım',
          ru: 'Реанимация и скорая помощь',
        },
        subcategories: [
          { id: 142301, name: { az: 'Reanimasiya avadanlığı', ru: 'Реанимационное оборудование' } },
          { id: 142302, name: { az: 'Təcili yardım çantaları', ru: 'Сумки скорой помощи' } },
          { id: 142303, name: { az: 'Oksigen terapiyası avadanlığı', ru: 'Оборудование кислородной терапии' } },
          { id: 142304, name: { az: 'Kardiopulmonar reanimasiya alətləri', ru: 'Инструменты сердечно-легочной реанимации' } },
          { id: 142305, name: { az: 'Təcili dərmanlar', ru: 'Препараты экстренной помощи' } },
          { id: 142306, name: { az: 'Travma baxım dəstləri', ru: 'Наборы для травматологической помощи' } },
          { id: 142307, name: { az: 'Portativ defibrillyatorlar', ru: 'Портативные дефибрилляторы' } },
        ]
      },
    ],
  },
  {
    id: 15,
    name: {
      az: 'Digər',
      ru: 'Прочее',
    },
    icon: 'more-horizontal',
    subcategories: [
      {
        id: 1501,
        name: {
          az: 'Təsnif edilməmiş',
          ru: 'Неклассифицированные',
        },
        subcategories: [
          { id: 150101, name: { az: 'Ümumi elanlar', ru: 'Общие объявления' } },
          { id: 150102, name: { az: 'Müxtəlif məhsullar', ru: 'Разные товары' } },
          { id: 150103, name: { az: 'Xüsusi elanlar', ru: 'Специальные объявления' } },
          { id: 150104, name: { az: 'Yeni kateqoriya təklifi', ru: 'Предложение новой категории' } },
        ]
      },
      {
        id: 1502,
        name: {
          az: 'Kolleksiya və antik',
          ru: 'Коллекции и антиквариат',
        },
        subcategories: [
          { id: 150201, name: { az: 'Nadir əşyalar', ru: 'Редкие предметы' } },
          { id: 150202, name: { az: 'Vintage məhsullar', ru: 'Винтажные товары' } },
          { id: 150203, name: { az: 'Kolleksiya əşyaları', ru: 'Коллекционные предметы' } },
          { id: 150204, name: { az: 'Sənət əsərləri', ru: 'Произведения искусства' } },
        ]
      },
      {
        id: 1503,
        name: {
          az: 'Xüsusi tələblər',
          ru: 'Особые потребности',
        },
        subcategories: [
          { id: 150301, name: { az: 'Fərdi sifarişlər', ru: 'Индивидуальные заказы' } },
          { id: 150302, name: { az: 'Əl işi məhsullar', ru: 'Изделия ручной работы' } },
          { id: 150303, name: { az: 'Ekskluziv məhsullar', ru: 'Эксклюзивные товары' } },
          { id: 150304, name: { az: 'Xüsusi layihələr', ru: 'Специальные проекты' } },
        ]
      },
    ],
  },
];