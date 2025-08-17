import { Store, storePlans } from '@/types/store';

export const mockStores: Store[] = [
  {
    id: '1',
    userId: 'user1',
    name: 'TechMart Bakı',
    categoryName: 'Elektronika',
    address: 'Nizami küçəsi 123, Bakı',
    contactInfo: {
      phone: '+994501234567',
      email: 'info@techmart.az',
      website: 'https://techmart.az',
      whatsapp: '+994501234567'
    },
    description: 'Ən yeni texnologiyalar və elektronika məhsulları',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center',
    plan: storePlans[1], // Premium plan
    adsUsed: 45,
    maxAds: 350,
    deletedListings: [],
    isActive: true,
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    expiresAt: '2024-02-15T10:00:00Z',
    gracePeriodEndsAt: undefined,
    deactivatedAt: undefined,
    archivedAt: undefined,
    lastPaymentReminder: undefined,
    followers: ['user2', 'user3', 'user4'],
    rating: 24, // Total rating points
    totalRatings: 5, // Number of ratings (average: 4.8)
  },
  {
    id: '2',
    userId: 'user2',
    name: 'Fashion House',
    categoryName: 'Geyim və Ayaqqabı',
    address: 'Fountain Square, Bakı',
    contactInfo: {
      phone: '+994502345678',
      email: 'contact@fashionhouse.az',
      whatsapp: '+994502345678'
    },
    description: 'Ən son moda trendləri və keyfiyyətli geyimlər',
    logo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=200&fit=crop&crop=center',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center',
    plan: storePlans[0], // Basic plan
    adsUsed: 78,
    maxAds: 200,
    deletedListings: [],
    isActive: true,
    status: 'active',
    createdAt: '2024-01-20T14:30:00Z',
    expiresAt: '2024-02-20T14:30:00Z',
    gracePeriodEndsAt: undefined,
    deactivatedAt: undefined,
    archivedAt: undefined,
    lastPaymentReminder: undefined,
    followers: ['user1', 'user3'],
    rating: 18, // Total rating points
    totalRatings: 4, // Number of ratings (average: 4.5)
  },
  {
    id: '3',
    userId: 'user3',
    name: 'AutoParts Pro',
    categoryName: 'Nəqliyyat',
    address: 'Həzi Aslanov prospekti 45, Bakı',
    contactInfo: {
      phone: '+994503456789',
      email: 'sales@autoparts.az',
      website: 'https://autoparts.az'
    },
    description: 'Avtomobil ehtiyat hissələri və aksesuarları',
    logo: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop&crop=center',
    coverImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop&crop=center',
    plan: storePlans[2], // Business plan
    adsUsed: 156,
    maxAds: 500,
    deletedListings: [],
    isActive: true,
    status: 'active',
    createdAt: '2024-01-10T09:15:00Z',
    expiresAt: '2024-02-10T09:15:00Z',
    gracePeriodEndsAt: undefined,
    deactivatedAt: undefined,
    archivedAt: undefined,
    lastPaymentReminder: undefined,
    followers: ['user1', 'user2', 'user4', 'user5'],
    rating: 20, // Total rating points
    totalRatings: 4, // Number of ratings (average: 5.0)
  },
  {
    id: '4',
    userId: 'user4',
    name: 'Home & Garden',
    categoryName: 'Ev və Bağ',
    address: 'Gənclik prospekti 78, Bakı',
    contactInfo: {
      phone: '+994504567890',
      email: 'info@homegarden.az',
      whatsapp: '+994504567890'
    },
    description: 'Ev və bağ üçün hər şey',
    logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop&crop=center',
    plan: storePlans[1], // Premium plan
    adsUsed: 89,
    maxAds: 350,
    deletedListings: [],
    isActive: true,
    status: 'active',
    createdAt: '2024-01-25T16:45:00Z',
    expiresAt: '2024-02-25T16:45:00Z',
    gracePeriodEndsAt: undefined,
    deactivatedAt: undefined,
    archivedAt: undefined,
    lastPaymentReminder: undefined,
    followers: ['user1'],
    rating: 14, // Total rating points
    totalRatings: 3, // Number of ratings (average: 4.7)
  },
  {
    id: '5',
    userId: 'user5',
    name: 'Sports Zone',
    categoryName: 'İdman və Hobbi',
    address: '28 May küçəsi 12, Bakı',
    contactInfo: {
      phone: '+994505678901',
      email: 'contact@sportszone.az',
      website: 'https://sportszone.az',
      whatsapp: '+994505678901'
    },
    description: 'İdman avadanlıqları və aksesuarları',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center',
    plan: storePlans[0], // Basic plan
    adsUsed: 34,
    maxAds: 200,
    deletedListings: [],
    isActive: true,
    status: 'active',
    createdAt: '2024-01-30T11:20:00Z',
    expiresAt: '2024-03-01T11:20:00Z',
    gracePeriodEndsAt: undefined,
    deactivatedAt: undefined,
    archivedAt: undefined,
    lastPaymentReminder: undefined,
    followers: ['user2', 'user3'],
    rating: 16, // Total rating points
    totalRatings: 4, // Number of ratings (average: 4.0)
  }
];