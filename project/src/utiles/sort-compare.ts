import type { Offer } from '../@types/offer-types';

export const sortPriceLowToHight = (a: Offer, b: Offer) => a.price - b.price;

export const sortPriceHightToLow = (a: Offer, b: Offer) => b.price - a.price;

export const sortRatingHightToLow = (a: Offer, b: Offer) => b.rating - a.rating;

export const sortDefault = (a: Offer, b: Offer) => 0;