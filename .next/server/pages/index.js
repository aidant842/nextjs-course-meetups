(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(459);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Card(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Card);

/***/ }),

/***/ 1076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(7548);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(6422);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(7957);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js






function MeetupItem(props) {
  const router = (0,router_.useRouter)();

  const showDetailsHandler = () => {
    router.push(`/${props.id}`);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: (MeetupItem_module_default()).item,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: props.image,
          alt: props.title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MeetupItem_module_default()).content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: props.title
        }), /*#__PURE__*/jsx_runtime_.jsx("address", {
          children: props.address
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).actions,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        })
      })]
    })
  });
}

/* harmony default export */ var meetups_MeetupItem = (MeetupItem);
// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(3982);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (MeetupList_module_default()).list,
    children: props.meetups.map(meetup => /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupItem, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id))
  });
}

/* harmony default export */ var meetups_MeetupList = (MeetupList);
;// CONCATENATED MODULE: ./pages/index.js







const HomePage = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "React Meetups"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupList, {
      meetups: props.meetups
    }), ";"]
  });
};
/* export async function getServerSideProps(context) {
    const request = context.req;
    const response = context.response;
    //fetch data from an api
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
} */
//Has to be named getStaticProps


async function getStaticProps() {
  //fetch data from an API
  const client = await external_mongodb_.MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close(); //always need to return an object

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // how often to re-render page on server in seconds
    revalidate: 1
  };
}
/* harmony default export */ var pages = (HomePage);

/***/ }),

/***/ 7957:
/***/ (function(module) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ 3982:
/***/ (function(module) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ 459:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1076));
module.exports = __webpack_exports__;

})();