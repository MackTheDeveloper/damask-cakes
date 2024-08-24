export const MAX_CALLS = 3;
export const END_POINTS = {
  login: process.env.REACT_APP_API_URL + "login",
  logout: process.env.REACT_APP_API_URL + "logout",
  forgotPassword: process.env.REACT_APP_API_URL + "forgetPassword",
  resetPassword: process.env.REACT_APP_API_URL + "resetPassword",
  home: process.env.REACT_APP_API_URL + "homePage",
  myOrders: process.env.REACT_APP_API_URL + "getMyOrders",
  myOrderDetail: process.env.REACT_APP_API_URL + "getMyOrderDetails",
  newsletterSubscription:
    process.env.REACT_APP_API_URL + "newsletterSubscription",
  contactUs: process.env.REACT_APP_API_URL + "sendContactUs",
  myAccount: process.env.REACT_APP_API_URL + "getMyaccount",
  myProfileUpdate: process.env.REACT_APP_API_URL + "myProfileUpdate",
  wishlist: process.env.REACT_APP_API_URL + "getMyWishlistProducts",
  addRemoveWishlist: process.env.REACT_APP_API_URL + "addToWishlist",
  getAllAddress: process.env.REACT_APP_API_URL + "getAllAddress",
  getAllCountry: process.env.REACT_APP_API_URL + "getAllCountry",
  getAllState: process.env.REACT_APP_API_URL + "getAllState",
  updateAddress: process.env.REACT_APP_API_URL + "updateAddress",
  cmsPage: process.env.REACT_APP_API_URL + "cmsPage",
  productList: process.env.REACT_APP_API_URL + "productList",
  categoryList: process.env.REACT_APP_API_URL + "filterList",
  getMySetting: process.env.REACT_APP_API_URL + "getMySetting",
  mySettingUpdate: process.env.REACT_APP_API_URL + "mySettingUpdate",
  megaMenu: process.env.REACT_APP_API_URL + "megaMenu",
  myCart: process.env.REACT_APP_API_URL + "myCart",
  addToCart: process.env.REACT_APP_API_URL + "addToCart",
  notifyMe: process.env.REACT_APP_API_URL + "notifyMeSubscribe",
  productDetail: process.env.REACT_APP_API_URL + "productDetails",
  getRecipesList: process.env.REACT_APP_API_URL + "getRecipesList",
  getRecipesCategoryDetails:
    process.env.REACT_APP_API_URL + "getRecipesCategoryDetails",
  getRecipesPostDetails:
    process.env.REACT_APP_API_URL + "getRecipesPostDetails",
  getProductReview: process.env.REACT_APP_API_URL + "allReview",
  addProductReview: process.env.REACT_APP_API_URL + "submitReview",
  saveRecipesComment: process.env.REACT_APP_API_URL + "saveRecipesComment",
  selectVarient: process.env.REACT_APP_API_URL + "applyVarient",
  getDeleteUser: process.env.REACT_APP_API_URL + "getDeleteUser",
  deleteUser: process.env.REACT_APP_API_URL + "deleteUser",
  getInspirationPostDetails:
    process.env.REACT_APP_API_URL + "getInspirationPostDetails",
  applyPromotion: process.env.REACT_APP_API_URL + "applyPromotion",
  getInspirationList: process.env.REACT_APP_API_URL + "getInspirationList",
  getInspirationCategoryDetails:
    process.env.REACT_APP_API_URL + "getInspirationCategoryDetails",
  getCheckoutList: process.env.REACT_APP_API_URL + "getCheckoutList",
  deleteAddress: process.env.REACT_APP_API_URL + "deleteAddress",
  placeOrder: process.env.REACT_APP_API_URL + "placeOrder",
  quoteUpdateAddress: process.env.REACT_APP_API_URL + "quoteUpdateAddress",
  facebookPixel: process.env.REACT_APP_API_URL + "facebookpixelevents",
  createPaypalExpression:process.env.REACT_APP_API_URL + "createPaypalExpressToken",
  paypalExpressCreateOrder:process.env.REACT_APP_API_URL + "savePaypalToken",
  getMetaInfo:process.env.REACT_APP_API_URL + "getMetaInfo",
  createApplePayPaymentIntent:process.env.REACT_APP_API_URL + "stripePaymentId",
};

export const API_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  LONG: "long",
  FAILED: "failed",
  NO_DATA: "nodata",
};
