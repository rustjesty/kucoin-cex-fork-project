import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import api from '../api/api';

interface IGlobalState {
  fiat: {
    name: string,
    symbol: string;
  },
  language: {
    name: string,
    symbol: string;
  },
  coinStats: {
    data: any;
    loading?: boolean;
    error?: string | null;
  },
  marketData: any,
  tradeData: any,
  orderbookData: any
}

const initialState: IGlobalState = {
  fiat: {
    name: "USD",
    symbol: "$"
  },
  language: {
    name: "English",
    symbol: "Eng"
  },
  coinStats: { data: {} },
  marketData: [],
  tradeData: [],
  orderbookData: {}
}

export const fetchCoinStats = createAsyncThunk(
  'global/fetchCoinStats',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.authenticatedInstance({
        url: '/api/get_coin_stats'
      });
      console.log("datadatadata", data)
      if (data.status === 'Success') {
        return data.data;
      }
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        return rejectWithValue('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        return rejectWithValue('Error setting up the request');
      }
    }
  }
);


export const globalSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateFiatName: (state, action: PayloadAction<string, string>) => {
      state.fiat.name = action.payload
    },
    updateFiatSymbol: (state, action: PayloadAction<string, string>) => {
      state.fiat.symbol = action.payload
    },
    updateLanguage: (state, action: PayloadAction<ILang>) => {
      state.language = action.payload
    },
    updateMarketData: (state, action: PayloadAction<any>) => {
      state.marketData = action.payload
    },
    updateTradeData: (state, action: PayloadAction<any>) => {
      state.tradeData = action.payload
    },
    updateOrderbookData: (state, action: PayloadAction<any>) => {
      state.orderbookData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinStats.pending, (state) => {
        state.coinStats.loading = true;
        state.coinStats.error = null;
      })
      .addCase(fetchCoinStats.fulfilled, (state, action) => {
        state.coinStats.loading = false;
        state.coinStats.data = action.payload;
        state.coinStats.error = null;
      })
      .addCase(fetchCoinStats.rejected, (state, action) => {
        state.coinStats.loading = false;
        state.coinStats.error = action.payload as string;
      });
  },
})

// Action creators are generated for each case reducer function
export const {
  updateFiatName,
  updateFiatSymbol,
  updateLanguage,
  updateMarketData,
  updateTradeData,
  updateOrderbookData
} = globalSlice.actions

export default globalSlice.reducer