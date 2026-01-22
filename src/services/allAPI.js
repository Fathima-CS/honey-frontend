import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

/* =========================
   AUTH APIs
========================= */

// register
export const registerAPI = async (userDetails) => {
  return await commonAPI(
    "POST",
    `${serverURL}/register`,
    userDetails
  )
}

// login
export const loginAPI = async (userDetails) => {
  return await commonAPI(
    "POST",
    `${serverURL}/login`,
    userDetails
  )
}
export const googleLoginAPI = async (data) => {
  return await commonAPI(
    "POST",
    `${serverURL}/auth/google`,
    data
  );
};


// // google login
// export const googleLoginAPI = async (userDetails) => {
//   return await commonAPI(
//     "POST",
//     `${serverURL}/google/sign-in`,
//     userDetails
//   )
// }
//get all honey -guest
export const getAllHoneyAPI = async () => {
  return await commonAPI(
    "GET",
    `${serverURL}/honey/all`,
    {})
}
export const viewHoneyAPI = async (honeyId) => {
  return await commonAPI(
    "GET",
    `${serverURL}/honey/view/${honeyId}`,
    null
  );
};

/* =========================
   USER APIs (Protected)
========================= */

// edit user profile
// export const editUserAPI = async (id, reqBody, reqHeader) => {
//   return await commonAPI(
//     "PUT",
//     `${serverURL}/user/${id}/edit`,
//     reqBody,
//     reqHeader
//   )
// }
//get user addded product
export const getUserSellHoneyProfileAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/user/profile/honey`,
    {},reqHeader
    
  );
}
//addproduct
export const addProductAPI = async (productData,reqHeader) => {
  

  return await commonAPI(
    "POST",
    `${serverURL}/add`,
    productData,
    reqHeader
  );
};
// GET all honey for logged-in user (exclude own products)
export const getUserproductAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/user/honey`,
    {},
    reqHeader
  );
};
//user profile edit
export const updateUserProfileAPI = async (userId, profileData, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${serverURL}/user/update-profile/${userId}`, // ✅ FIXED
    profileData,
    reqHeader
  );
};
 //user bought honey
 export const getUserBoughtHoneyAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/user/profile/honey/bought`,
    "",
    reqHeader
  );
};

//products page
export const getUserAllHoneyAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/user/honey`,
    "",
    reqHeader
  );
};
export const buyHoneyAPI = async (honeyId, reqHeader) => {
  return await commonAPI(
    "POST",
    `${serverURL}/honey/buy`,
    { honeyId },   // ✅ send honeyId in body
    reqHeader
  );
};

export const getSellerOrdersAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/seller/orders`,
    "",
    reqHeader
  );
};
/* =========================
   ADMIN APIs
========================= */

export const getAllUsersAdminAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/admin/users`,
    "",
    reqHeader
  );
}
export const getAllHoneyAdminAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/admin/honey`,
    "",
    reqHeader
  );
};
export const updateHoneyStatusAdminAPI = async (honeyId, status, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${serverURL}/admin/honey/status/${honeyId}`,
    { status },
    reqHeader
  );
};
// ADMIN – get all orders
export const getAllOrdersAdminAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/admin/orders`,
    "",
    reqHeader
  );
};