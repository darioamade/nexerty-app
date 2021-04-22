const Men = require('../models/menModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
// const { request } = require('express');
// const { response } = require('../app');

exports.getCart = catchAsync(async (req, res, next) => {
  res.status(200).render('cart', {
    title: 'Customer/Cart',
  });
});
exports.getDeleteCart = catchAsync(async (req, res, next) => {
  let cart = req.session.cart;
  cart.delete(req.body.prodId);
  res.redirect('/');
});

exports.getUpdateOne = catchAsync(async (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {
      items: {},
      totalQty: 0,
      totalPrice: 0,
    };
  }
  let cart = req.session.cart;
  // Check if items does not exist in cart
  if (!cart.items[req.body._id]) {
    cart.items[req.body._id] = {
      item: req.body,
      qty: 1,
    };
    cart.totalQty = cart.totalQty + 1;
    cart.totalPrice = cart.totalPrice + req.body.price;
  } else {
    cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
    cart.totalQty = cart.totalQty + 1;
    cart.totalPrice = cart.totalPrice + req.body.price;
  }

  return res.json({ totalQty: req.session.cart.totalQty });
});

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const men = await Men.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('main', {
    title: 'Houses Colection',
    men,
  });
});



/* exports.aliasBestSeller = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-price';
  req.query.fields = 'name,price, color,summary,status';
  next();
}; */

exports.getCollections = catchAsync(async (req, res, next) => {
  res.status(200).render('collections', {
    title: 'Mens colection',
  });
});

exports.getWomen = catchAsync(async (req, res, next) => {
  res.status(200).render('women', {
    title: `Women's colection`,
  });
});
exports.getWomenNew = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  // 2)n Build template
  // Render template using data from step 1
  res.status(200).render('main', {
    title: `New Colection`,
    men, // <-- Here I am passing the data from step 1 to use in the template
  });
});
exports.getGirls = catchAsync(async (req, res, next) => {
  const girls = await Girls.find().populate();
  // 2)n Build template
  // Render template using data from step 1
  res.status(200).render('girlsNew', {
    title: `New Colection`,
    girls, // <-- Here I am passing the data from step 1 to use in the template
  });
});

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your Account',
  });
};
// exports.getAccount = catchAsync(async (req, res) => {

//   res.status(200).render('my', {
//     title: `Custumer's account`,
//   });
// });
exports.getAccountDetails = catchAsync(async (req, res, next) => {
  // const men = await Men.find();
  res.status(200).render('accountDetails', {
    title: `Account's details`,
  });
});
exports.getAccountWishlist = catchAsync(async (req, res, next) => {
  // const men = await Men.find();
  res.status(200).render('accountWhishlist', {
    title: `Account's wishlist`,
  });
});

exports.getMyOrders = catchAsync(async (req, res, next) => {
  // 1) find all the ordes thta user as order  *(FIND ALL BOOKINGS)
  const bookings = await Booking.find({ user: req.user.id }); // 👈 all the id orders are saved in bookings ,but this just give me the ID's , now I have to create an array will all IDs and after that query for men(order"men") that contain this IDs

  //console.log(bookings);
  // 2) Find tours with the returned IDs
  const mensIDs = bookings.map((el) => el.men);
  const men = await Men.find({ _id: { $in: mensIDs } }); //IMPORTANT New operator $in
  //console.log(men);
  // const men = await Men.find();
  res.status(200).render('my', {
    title: `Account's orders`,
    men,
  });
});

exports.getAccountOrders = catchAsync(async (req, res, next) => {
  // const men = await Men.find();
  res.status(200).render('accountOrders', {
    title: `Account's orders`,
  });
});
exports.getAccountAddressBook = catchAsync(async (req, res, next) => {
  // const men = await Men.find();
  res.status(200).render('accountAddressBook', {
    title: `Account's address book`,
  });
});

exports.getDetails = (req, res) => {
  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "script-src 'self' https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js 'unsafe-inline' 'unsafe-eval';"
    )
    .render('accountDetails', {
      title: `Account Details | Customers `,
    });
};

exports.getMenNew = catchAsync(async (req, res, next) => {
  const men = await Men.find({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  // 2)n Build template
  // Render template using data from step 1
  res.status(200).render('houseOverview', {
    title: `${men.name} House`,
    men, // <-- Here I am passing the data from step 1 to use in the template
  });
});

exports.getHouse = catchAsync(async (req, res, next) => {
  const men = await Men.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!men) {
    return next(new AppError('There is no House with that name.', 404));
  }

  res.status(200).render('houseOverview', {
    title: `${men.name} House`,
    men,
  });
});
// exports.getHouse = catchAsync(async (req, res, next) => {
//   const men = await Men.find();
//   // Render template using data from step 1
//   res.status(200).render('houseOverview', {
//     title: `Houses Colection`,
//     men, // <-- Here I am passing the data from step 1 to use in the template
//   });
// });

/* NOTE test */
/* exports.getMenNewer = catchAsync(async (req, res, next) => {

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  if(endIndex < users.length){
      results.next = {
        page: page + 1,
        limit: limit,
      };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = await Men.find().limit(limit).skip(startIndex).exec()
  res.json(results);

}); */

/* NOTE test */

// Like Tour
exports.getDescription = catchAsync(async (req, res, next) => {
  const men = await Men.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  if (!men) {
    return next(new AppError('There is no item with that name.', 404));
  }

  res.status(200).render('error', {
    title: `${men.name}`,
    men,
  });
});

exports.getForSale = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const men = await Men.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('for-sale', {
    title: 'Houses Colection',
    men,
  });
});

exports.getForSaleSlug = catchAsync(async (req, res, next) => {
  const men = await Men.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!men) {
    return next(new AppError('There is no House with that name.', 404));
  }

  res.status(200).render('houseOverview', {
    title: `${men.name} House`,
    men,
  });
});

exports.getBuying = catchAsync(async (req, res, next) => {
  const men = await Men.find({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  // 2)n Build template
  // Render template using data from step 1
  res.status(200).render('buying', {
    title: `Houses Colection`,
    men, // <-- Here I am passing the data from step 1 to use in the template
  });
});
exports.getHowItWorks = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  // 2)n Build template
  // Render template using data from step 1
  res.status(200).render('howItworks', {
    title: `${men.name}`,
    men, // <-- Here I am passing the data from step 1 to use in the template
  });
});

exports.getSelling = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  // 2)n Build template
  // Render template using data from step 1
  res.status(200).render('selling', {
    // title: `${men.name}`,
    title: `Buying agents`,
    men, // <-- Here I am passing the data from step 1 to use in the template
  });
});

exports.getStarted = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('getstarted', {
    title: `${men.name}`,
    men, 
  });
});

exports.getCalendar = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('calendar', {
    title: `${men.name}`,
    men,
  });
});

exports.getEmail = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('getemail', {
    title: `${men.name}`,
    men,
  });
});
exports.
getName = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('getname', {
    title: `${men.name}`,
    men,
  });
});



exports.getGirl = catchAsync(async (req, res, next) => {
  res.status(200).render('women', {
    title: 'Mens colection',
  });
});

exports.getDescriptionWomen = catchAsync(async (req, res, next) => {
  const men = await Men.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  res.status(200).render('houseOverview', {
    men,
  });
});

exports.getDescriptionGirls = catchAsync(async (req, res, next) => {
  const girls = await Girls.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  if (!girls) {
    return next(new AppError('There is no item with that name.', 404));
  }

  res.status(200).render('descriptionGirls', {
    title: `${girls.name}`,
    girls,
  });
});
// Like Tour
/* exports.getDescription = catchAsync(async (req, res, next) => {
  const men = await Men.findOne({slug: req.params.slug})
  // .populate({
  //   path: 'reviews',
  //   fields: ' review rating user',
  // }); // This time I am using findOne because I don't know which one We are looking

  res.status(200).render('description', {
    title: `New Colection`,
    men,
  });
});
 */

exports.getSustainability = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('campagin', {
    title: `New Colection`,
    men,
  });
});

exports.getError = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('error', {
    title: `Error`,
    men,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser,
  });
});

exports.updateUserAddress = catchAsync(async (req, res, next) => {
  console.log('UPADATING USER', req.body);
  const updatedAddress = await User.findByIdAndUpdate(
    req.user.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      addressline1: req.body.addressline1,
      addressline2: req.body.addressline2,
      town: req.body.town,
      country: req.body.country,
      countryProvince: req.body.countryProvince,
      postcode: req.body.postcode,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).render('accountAddressBook', {
    title: `Account's address book`,
    user: updatedAddress,
  });
});

/* exports.getMenBestSeller = catchAsync(async (req, res, next) => {
  //  req.query.limit = '5';
  //  req.query.sort = '-price';
  //  req.query.fields = 'name,price, color,summary,status';

  res.status(200).render('menBestSeller', {
    title: `${men.name}`,
    men,
  });
});
 */

//BUG best sellertr not working yet
exports.getMenBestSeller = catchAsync(async (req, res, next) => {
  const men = await Men.findOne().populate();
  if (!men) {
    return next(new AppError('There is no item with that name.', 404));
  }

  res.status(200).render('menBestSeller', {
    title: `${men.name} House`,
    men,
  });
});
//localhost:4000/api/v1/men/?categoryType=${query}
//localhost:4000/api/v1/men/?categoryType=Tailoring
//  exports.getSearch = catchAsync(async (req, res, next) => {
//   // req.query.sort = '-price';
//   const { term } = req.query.sort;
//   // const { term } = req.query;
//   const men = await Men.findAll().populate();
//   if (!men) {
//     return next(new AppError('There is no item with that name.', 404));
//   }

//   res.status(200).render('search', {
//     title: `${men.name}`,
//     men,
//   });

//   // const men = await Men.findOne().populate();
//   // if (!men) {
//   //   return next(new AppError('There is no item with that name.', 404));
//   // }

//   // res.status(200).render('search', {
//   //   title: `${men.name}`,
//   //   men,
//   // });
// });

exports.getPic = catchAsync(async (req, res, next) => {
  const men = await men.find().populate();
  res.status(200).render('my', {
    title: `${men.name} House`,
    men,
  });
});

// IMPORTANT CREATECNEW USER
exports.getSignupForm = (req, res) => {
  res.status(200).render('siginUpUser', {
    title: ' Sign Up Account',
  });
};

exports.getLoginTest = catchAsync(async (req, res, next) => {
  const men = await Men.find().populate();
  res.status(200).render('loginPage', {
    title: `${men.name} House`,
    men,
  });
});

exports.getLoginForm = catchAsync(async (req, res) => {
  res.status(200).render('login', {
    title: `Log into your account`,
  });
});

exports.getSearch = catchAsync(async (req, res, next) => {
  const men = await Men.findOne().populate();
  if (!men) {
    return next(new AppError('There is no item with that name.', 404));
  }

  res.status(200).render('search', {
    title: `${men.name}`,
    men,
  });

  /* 
  exports.getLoginTest = catchAsync(async (req, res, next) => {
    const men = await Men.findOne().populate();
    if (!men) {
      return next(new AppError('There is no item with that name.', 404));
    }

    res.status(200).render('loginPage', {
      title: `${men.name}`,
      men,
    });getLoginTest

  let result = await Men.aggregate([
    {
      $search: {
        autocomplete: {
          query: `${req.query.term}`,
          path: 'name',
          fuzzy: {
            maxEdits: 2,
          },
        },
      },
    },
  ]).toArray();
  // res.send(result);
  // console.log(result);
  res.status(200).render('search', {
    title: `${men.name}`,
    data: result,
  }); */
});

// exports.aliasSearch = catchAsync(async (req, res, next) => {
//   const { term }  = req.query

//   // console.log(req.query);
//   res.render('search', {
//     // title: `${men.name}`,
//     data: req.query,
//   });
// });
