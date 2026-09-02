export type Language = 'ar' | 'en';

export interface ProductItem {
  id: string;
  category: 'egyptian' | 'imported' | 'granite' | 'onyx';
  nameAr: string;
  nameEn: string;
  originAr: string;
  originEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  finishesAr: string[];
  finishesEn: string[];
  recommendedUsesAr: string[];
  recommendedUsesEn: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  titleAr: string;
  titleEn: string;
  locationAr: string;
  locationEn: string;
  typeAr: string;
  typeEn: string;
  category: 'residential' | 'commercial' | 'hospitality';
  materialsUsedAr: string;
  materialsUsedEn: string;
  image: string;
  year: string;
}
