import { configureStore, createSlice } from '@reduxjs/toolkit';

const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'IDLY',
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 2,
        name: "DOSA",
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 3,
        name: "NOODLES",
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    
     
    ],
  },
  reducers: {},
});
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
  },
});

export default store;