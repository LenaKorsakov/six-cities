import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  listAllOffers,
  listNearbyOffers
} from './actions';
import nearbyOffers from '../mocks/nearby-offers';
import { DEFAULT_CITY } from '../const/city-names';
import { DEFAULT_SORT } from '../const/sort-type';
import { City, Offer } from '../@types/offer-types';
import { SortEnum } from '../const/@types';


type InitialState = {
  offers: Offer[];
  nearbyOffers: Offer[];
  city: City;
  sortOption: SortEnum;
}

const initialState: InitialState = {
  offers: [],
  nearbyOffers,
  city: DEFAULT_CITY,
  sortOption: DEFAULT_SORT
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(listAllOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(listNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortOption = action.payload;
    });
});

export {reducer};
