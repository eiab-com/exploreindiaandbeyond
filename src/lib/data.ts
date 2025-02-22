import supabase from "./supabase";

export const getContactedList = async () => {
  const { data, error } = await supabase.from("bookings").select("*");
  if (error) {
    console.error("Error fetching contacted list:", error);
    return [];
  }
  return data || [];
};
