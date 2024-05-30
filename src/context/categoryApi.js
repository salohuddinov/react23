import { api } from './api'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getCategory: build.query({
      query: () => ({ 
        url: '/category' 
      }),
      providesTags:["Category"]
    }),
    // Post request
    createCategory: build.mutation({
        query: (body)=> ({
          url: "/category/create",
          method: "POST",
          body
        }),
        invalidatesTags: ["Category"]
    }),
    // Delete request
    deleteCategory: build.mutation({
      query: (id)=> ({
        url:`/category/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Category"]
    })
  }),
})

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi