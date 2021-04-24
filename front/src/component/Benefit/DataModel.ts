export interface BenefitCompany {
    companyName: string;
    categoryId: number;
    description: string;
    thumbNailPath: string;
    totalLike: number;
    userLike: false;
}

export interface BenefitCompanyRes {
    isLoaded: boolean;
    data: Omit<BenefitCompany, 'userLike'>[];
}

export interface BenefitFavoriteCompany {
    [companyName: string]: boolean;
}
