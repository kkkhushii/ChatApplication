import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'RAPID_API_KEY',
    'X-RapidAPI-Host': 'RAPID_API',
   
  
         
    
  };
  
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'RAPID_API' }),

  


  endpoints: (builder) => ({
    getCryptoNews: builder.query({
    //query: () => createRequest('/news'),
    query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),


    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;





