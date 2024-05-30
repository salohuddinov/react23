import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: () => ({ 
        url: '/users' 
      }),
      providesTags:["User"]
    }),
     // Post request
     createUser: build.mutation({
      query: (body)=> ({
        url: "/auth/sign-up",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
  }),
  }),
})

export const {
  useGetUsersQuery,
  useCreateUserMutation
} = userApi