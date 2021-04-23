const express = require('express');
const viewsController = require('../controllers/viewsController');
const authcontroller = require('../controllers/authController');
const bookingcontroller = require('../controllers/bookingController');

const router = express.Router();

router.use(authcontroller.isLoggedIn); // NOTE not needed for now

router.get('/', authcontroller.isLoggedIn, viewsController.getOverview);
router.get('/house/:slug', authcontroller.isLoggedIn, viewsController.getHouse); // House overview

router.get('/login', authcontroller.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authcontroller.protect, viewsController.getAccount);
router.get('/signup', viewsController.getSignupForm);

/* router.post(
  '/submit-user-data',
  authcontroller.protect,
  viewsController.updateUserData
); */

//BUG test with HTML form 👇 used to submit HTML form without API
router.post(
  '/submit-user-data',
  authcontroller.protect,
  viewsController.updateUserData
);

//IMPORTANT
router.get('/for-sale', viewsController.getForSale);
router.get('/for-sale/:slug', viewsController.getForSaleSlug);
router.get('/buying', viewsController.getBuying);
router.get('/how-it-works', viewsController.getHowItWorks);
router.get('/selling', viewsController.getSelling);
router.get('/error', viewsController.getError);
router.get('/get-started/reason-for-contact', viewsController.getStarted);
router.get('/get-started/calendar', viewsController.getCalendar);
router.get('/get-started/email', viewsController.getEmail);
router.get('/get-started/name', viewsController.getName);
router.get('/get-started/email-address', viewsController.getContactMail);
//IMPORTANT

//BUG BUGBUGBUGBUGBUGBUGBUG
router.get('/men/new', viewsController.getMenNew); //NOTE not in use now

//TEST
router.get('/men/best-sellers', viewsController.getMenBestSeller);
router.get('/men/:slug', viewsController.getDescription); // this was '/description/:slug'`NOTE not in use now

router.get(
  '/account/details/',
  authcontroller.protect,
  viewsController.getDetails
);
router.get(
  '/account/details/',
  authcontroller.protect,
  viewsController.getAccountDetails
);
router.get(
  '/account/wishlist/',
  authcontroller.protect,
  viewsController.getAccountWishlist
);
router.get(
  '/my-men/',
  authcontroller.protect,
  viewsController.getAccountOrders
);
router.get(
  '/account/address-book/',
  authcontroller.protect,
  viewsController.getAccountAddressBook
);

router.get('/cart', viewsController.getCart);
router.get('/detete-cart', viewsController.getDeleteCart);
router
  .post('/update-cart', viewsController.getUpdateOne)
  .patch(authcontroller.restrictTo('user'));

router.get('/collections', viewsController.getCollections);
router.get(
  '/',
  bookingcontroller.createBookingCheckout,
  viewsController.getWomen
); 

// NOTE this route is suppose to be account details
router.get(
  '/account/orders/',
  authcontroller.protect,
  viewsController.getMyOrders
); // my tours


router.get('/account', viewsController.getAccount); // Leave not protect for none register guess

router.get('/pic', viewsController.getPic);
router.get('/search', viewsController.getSearch);
router.get('/logintest', viewsController.getLoginTest);

module.exports = router;
