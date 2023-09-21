import { configureStore, createSlice } from '@reduxjs/toolkit';

const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'DOSA',
        description: 'Product description goes here.',
        imageUrl: 'https://th.bing.com/th/id/OIP.tgBEnGL82S1XlRWeIRqA4gHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
      },
      {
        id: 2,
        name: "IDLY",
        description: 'Product description goes here.',
        imageUrl: 'https://th.bing.com/th/id/OIP.oDZH9SCP_49uZHYjW8i7WwHaHa?pid=ImgDet&rs=1',
      },
      {
        id: 3,
        name: "DHAL",
        description: 'Product description goes here.',
        imageUrl: 'https://th.bing.com/th/id/OIP.mdPvWRnRYYdbNOyLcBu8KQHaE7?pid=ImgDet&rs=1',
      },
      {
        id: 4,
        name: "NOODLES",
        description: 'Product description goes here.',
        imageUrl: 'https://thesaltymarshmallow.com/wp-content/uploads/2019/09/Pan-Fried-Noodles-Recipe-03-200x300.jpg',
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