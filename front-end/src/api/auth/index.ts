import { instance } from '..';
import qs from 'qs'
// import { useAppDispatch } from '../../hooks';
import { updateAccessToken, updateIsAuthenticated, updateRegisterError, updateRegisterSuccess, updateTempAuthToken } from '../../features/auth/authSlice';
import { infoAlert, successAlert } from '../../utils/alert';
import api from '../api';
// import { Dispatch } from 'redux';

export let myInterval = null;


// login verification for email & password
export const logIn = async (dispatch: any, formData: any) => {
  console.log("formData", formData)
  try {
    const { data } = await instance({
      url: '/api/AuthenticateUser/v2',
      method: 'POST',
      data: formData,
    });
    console.log("logIn response data", data)
    if (data.status === "Error") {
      if (data.message === "SignIn_Authentication_Failed") {
        infoAlert("Invalid login credentials.")
      }
    } else {
      // dispatch(updateIsAuthenticated(true))
      // api.setAccessToken(data.access_token)
      // dispatch(updateAccessToken(data.access_token))

      // localStorage.setItem('access_token', data.access_token)
      // window.location.href = "/account/overview"


      // localStorage.setItem('access_token', response.data.access_token)
      if (data.status === 'Success') {
        successAlert("One time password should be sent to your email. Please check your email inbox!")
        const tempAuthToken: string = data.data.tempAuthToken;
        console.log("tempAuthToken", tempAuthToken)
        dispatch(updateTempAuthToken(tempAuthToken))
      }
    }
  } catch (e) {
    console.error(e);
  }
}

export const signUp = async (dispatch: any, values: any) => {
  delete values.passwordConfirm;
  delete values.agree;

  try {
    const { data } = await instance({
      url: '/api/SignUp/v2',
      method: 'POST',
      data: values,
    });

    if (data.status === 'Success') {
      dispatch(updateRegisterSuccess(true))
    } else {
      if (data.status === 'Error') {
        dispatch(updateRegisterError(data.data))
      }
      // dispatch({ type: USER_SIGNUP_FAIL });
      // dispatch(
      //   triggerModalOpen(
      //     _.has(data, ['message']) ? data.message : data.Message,
      //   ),
      // );
      // clearCaptcha();
    }
  } catch (e) {
    // dispatch({ type: USER_SIGNUP_FAIL });
    // dispatch(triggerModalOpen('somethingWentWrong'));
    // clearCaptcha();
  }
};

// one time password verify after login credential verify
export const twoFactorLogin = async (dispatch: any, values: any) => {
  console.log("twoFactorLogin values --> ", values)
  const body: any = {
    grant_type: 'password',
    username: values.tempAuthToken,
    password: values.oneTimePassword,
    dvc_otp: '',
  };
  console.log("body", body)
  if (values.dvc_otp) {
    body.dvc_otp = values.dvc_otp;
  }
  if (localStorage.getItem('deviceId')) {
    body.dvc_id = localStorage.getItem('deviceId');
  }

  try {
    const response = await instance({
      url: '/token/v2',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(body),
    });

    console.log("Response =====> ", response)

    if (response.status === 200) {
      dispatch(updateIsAuthenticated(true))
      api.setAccessToken(response.data.access_token)
      dispatch(updateAccessToken(response.data.access_token))

      localStorage.setItem('access_token', response.data.access_token)
      window.location.href = "/account/overview"
      // dispatch(loginSuccessful(response.data.access_token));
      // dispatch(getAdditionalFields());
      // dispatch(getUserTradingVolumeDiscounts());
      // dispatch(callRenewTokenFun());
      // dispatch(GetPendingDeposits());
    } else {
      infoAlert("Incorrect 2FA Code")
      // dispatch({ type: USER_2FA_LOGIN_FAILED });
      // dispatch(
      //   triggerModalOpen(
      //     response.data.error_description || response.data.error,
      //   ),
      // );
    }
  } catch (e) {
    infoAlert("Incorrect 2FA Code")
    // dispatch({ type: USER_NOT_AUTHENTICATED });
    // dispatch(
    //   triggerModalOpen(
    //     'Sorry, something went wrong. Please try to login again.',
    //   ),
    // );
  }

};

export const requestDeviceVerificationOTP = () => {
  // return async (dispatch, getState) => {
  //   let values = {
  //     email: userEmail,
  //     dvc_id: '',
  //   };
  //   if (localStorage.getItem('deviceId')) {
  //     values.dvc_id = localStorage.getItem('deviceId');
  //   }
  //   try {
  //     const { data } = await instance({
  //       url: `/api/Request_Device_Verification_OTP`,
  //       method: 'POST',
  //       data: values,
  //     });
  //     if (data.status === 'Success') {
  //       dispatch(triggerToast('emailOtp', 'success'));
  //     } else {
  //       dispatch(triggerModalOpen(data.message));
  //     }
  //   } catch (e) {
  //     dispatch(triggerModalOpen('somethingWentWrong'));
  //   }
  // };
};



export const getWithdrawalLimits = async (token: string) => {
  // return async dispatch => {
  try {
    const { data } = await instance({
      url: '/api/Get_User_Withdrawal_Limits',
      method: 'GET',
      headers: {
        'Authorization': token
      }
    });

    if (data.status === 'Success') {
      // dispatch({
      //   type: SET_WITHDRAWAL_LIMIT,
      //   payload: data.data[0],
      // });
    }
  } catch (e) { }
  // };
};


// export const callRenewTokenFun = () => {
//   return async (dispatch: any) => {
//     try {
//       if (props) {
//         myInterval = setTimeout(() => {
//           dispatch(renewToken());
//         }, 1000 * 200);
//       } else {
//         dispatch(renewToken());
//       }
//     } catch (e) {}
//   };
// };


export const resendOtpToken = async (tempAuthToken: string) => {
  console.log("calling resendOtpToken")
  // return async (dispatch, getState) => {
  // const { tempAuthToken } = getState().auth;

  try {
    const { data } = await instance({
      url: `/api/AuthenticateUser_Resend_EmailOTP/${tempAuthToken}`,
      method: 'POST',
    });

    if (data.status === 'Success') {
      successAlert("OTP code is resent to your email!!!")
      // dispatch({
      //   type: SEND_EMAIL_OTP_SUCCESS,
      // });
      // dispatch(triggerToast('emailOtp', 'success'));
    } else {
      // dispatch({ type: SEND_EMAIL_OTP_FAIL });
      // dispatch(triggerModalOpen(data.message));
    }
  } catch (e) {
    // dispatch({ type: SEND_EMAIL_OTP_FAIL });
    // dispatch(triggerModalOpen('somethingWentWrong'));
  }
  // };
};

export const renewToken = async () => {
  // return async dispatch => {
  try {
    const response = await api.authenticatedInstance({
      url: '/renew-token',
      method: 'POST',
    });

    if (response.status === 200) {
      // dispatch(renewTokenSuccessful(response.data.data.access_token));
      // dispatch(callRenewTokenFun(response.data.data.expires_in));
    } else {
      // socket.logout();
      // dispatch({ type: USER_NOT_AUTHENTICATED });
      // dispatch(
      //   triggerModalOpen(
      //     response.data.data.error_description || response.data.error,
      //   ),
      // );
    }
  } catch (e) {
    // dispatch({ type: USER_NOT_AUTHENTICATED });
    // socket.logout();
    // dispatch(
    //   triggerModalOpen(
    //     'Sorry, something went wrong. Please try to login again.',
    //   ),
    // );
  }
  // };
};


// export const callRenewTokenFun = () => {
//     try {
//       if (props) {
//         myInterval = setTimeout(() => {
//           dispatch(renewToken());
//         }, 1000 * 200);
//       } else {
//         dispatch(renewToken());
//       }
//     } catch (e) {}
// };

// export const renewTokenSuccessful = bearerToken => {
//   return dispatch => {
//     setBearer(bearerToken);
//     exchangeApi.setAuthentication(bearerToken);
//     socket.login(bearerToken);
//     dispatch({
//       type: USER_AUTHENTICATED,
//       payload: { bearerToken },
//     });
//     dispatch({ type: USER_LOGIN_SUCCESS });
//   };
// };
