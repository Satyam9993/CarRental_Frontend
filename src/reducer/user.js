import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  pickuploc: {
    long : 75.8577,
    lat : 22.7196,
    address : null
  },
  cars: [
    {
      id: 1,
      name: 'Puma Shoes',
      desc: "The best shoes in the marketplace",
      href: '#',
      imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
      imageAlt: "Puma Shoes",
      price: 2,
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      desc: "The best shoes in the marketplace",
      href: '#',
      imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      desc: "The best shoes in the marketplace",
      href: '#',
      imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      desc: "The best shoes in the marketplace",
      href: '#',
      imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },
    {
      id: 5,
      name: 'Basic Tee',
      desc: "The best shoes in the marketplace",
      href: '#',
      imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },
  ],
  cart: [],
  locations: [],
  selectedLocation: '644c9ce9db73875afbabac4b'
};

export const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPickUpLoc: (state, action) => {
      state.pickuploc = action.payload.pickuploc;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setCars: (state, action) => {
      state.cars = action.payload.cars;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload.location;
    },
    setLocations: (state, action) => {
      state.locations = action.payload.locations;
    },
    setAddcart: (state, action) => {
      state.cart = [...state.cart, action.payload.carId];
    },
    setRemovecart: (state, action) => {
      const id = action.payload.carId;
      state.cart = state.cart.filter(c => c !== id);
    }
  },
});

export const { setPickUpLoc, setLogin, setLogout, setPost, setCars, setRemovecart, setAddcart,setSelectedLocation, setLocations } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;