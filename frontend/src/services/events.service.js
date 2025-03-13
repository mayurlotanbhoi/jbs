import { setVehicles } from '../redux/vehicle/vehicleSlice';
import { baseApi } from './baseApi';

export const eventApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Register vehicle mutation
        createEvents: builder.mutation({
            query: (data) => ({
                url: '/event/create-event', // Corrected spelling of 'vehicle'
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['vehicle'],
        }),

        attendEvents: builder.mutation({
            query: (eventId) => ({
                url: `/event/${eventId}/attend`, // Corrected spelling of 'vehicle'
                method: 'POST',
                body: {},
            }),
            invalidatesTags: ['vehicle'],
        }),


        postOnEvent: builder.mutation({
            query: ({ data, eventId }) => ({
                url: `/event/${eventId}/post`, // Corrected spelling of 'vehicle'
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['vehicle'],
        }),

        getEventPost: builder.query({
            query: (eventId) => `/event/${eventId}`,
            providesTags: ['eventPost'],
            refetchOnReconnect: true,

            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled; // Ensure query completes
                } catch (error) {
                    console.error('Error fetching event posts:', error.message || error);
                }
            },
        }),



        // Get all vehicle histories
        getEventsByCity: builder.query({
            query: () => '/event/get-event',
            providesTags: ['vehicle'],
            refetchOnReconnect: true,    // Retry on reconnect
            // Use onQueryStarted to dispatch data to the Redux store
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled; // Wait for the query to resolve
                    return data;
                } catch (error) {
                    console.error('Error fetching vehicles:', error);
                }
            },
        }),
    }),
});

export const { useCreateEventsMutation, useAttendEventsMutation, usePostOnEventMutation, useGetEventPostQuery, useGetEventsByCityQuery } = eventApi;
