import axios from "axios";
import { instance } from "..";

export const generateDepositAddress = async (currency: string, token: string): Promise<string> => {

  try {
    const { data } = await axios({
      url: 'https://nodes.oxfx.io/api/GenerateAddress',
      headers: {
        'Authorization': token
      },
      method: 'POST',
      data: {
        currency,
      },
    });
    if (data.status === 'Success') {
      console.log("data.data.address", data.data.address)
      return data.data.address;
    } else {
      // Handle the case when status is not 'Success'
      throw new Error("Address generation failed");
    }
  } catch (e) {
    // Handle any errors occurred during the request
    throw new Error("Failed to generate deposit address");
  }
};

export const getDepositData = async (currency: string, token: string): Promise<any> => {

  try {
    const { data } = await instance({
      url: '/api/getDeposits',
      headers: {
        'Authorization': token
      },
      method: 'POST',
      data: {
        currency,
      },
    });
    if (data.status === 'Success') {
      return data.data.deposits
    } else {
      // Handle the case when status is not 'Success'
      throw new Error("Address generation failed");
    }
  } catch (e) {
    // Handle any errors occurred during the request
    throw new Error("Failed to generate deposit address");
  }
};