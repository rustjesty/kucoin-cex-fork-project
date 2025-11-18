import api from "../api";

export const getFavoritePairs = async () => {
  const response = await api.authenticatedInstance.get("/api/Customer_Favourite_Pairs");

  console.log("response", response)
}
