import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => '/restaurants',
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishByDishId: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (restaurantId) => [{ type: 'Reviews', restaurantId }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ({ restaurantId }) => [{ type: 'Reviews', restaurantId }],
    }),
  }),
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByDishIdQuery,
  useAddReviewMutation,
} = apiSlice
