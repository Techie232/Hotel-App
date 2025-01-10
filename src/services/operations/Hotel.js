import toast from "react-hot-toast";
import { apiConnector } from '../apiConnector';
import { endPoints } from "../apis";

const {
   FETCH_HOTELS,
   ADD_HOTEL
} = endPoints;

export const fetchAllHotels = async () => {
   const toastId = toast.loading('Loading...');
   let result = [];
   try {
      const response = await apiConnector('GET', FETCH_HOTELS, null);

      if (!response?.data?.success)
         throw new Error("Could not fetch all Hotels' data")

      result = response?.data?.data;

   } catch (error) {
      toast.error(error?.response?.data?.message);
   }
   toast.dismiss(toastId);
   return result;
}

export const createNewHotel = async (data) => {
   const toastId = toast.loading('Loading...');
   try {
      const response = await apiConnector('POST', ADD_HOTEL, data);

      if (!response?.data?.success)
         throw new Error("Could not created the Hotel data");

      toast.success("Hotel data created Successfully!");

   } catch (error) {
      toast.error("Not able to created Hotel data");
   }
   toast.dismiss(toastId);
}