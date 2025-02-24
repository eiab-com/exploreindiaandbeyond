import supabase from "./supabase";

export const getAdventureEnquiries = async () => {
  const { data, error } = await supabase.from("adventure_enquiries").select("*");
  if (error) {
    console.error("Error fetching contacted list:", error);
    return [];
  }
  return data || [];
};


export const getContactList = async () => {
  const { data, error } = await supabase.from("contacts").select("*");
  if (error) {
    console.error("Error fetching contacted list:", error);
    return [];
  }
  return data || [];
};