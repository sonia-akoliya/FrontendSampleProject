import { v4 as uuid } from "uuid";

export const ROUTES = {
  HOME: "/",
  FLIGHTS_RESULT: "/flights/result",
  PASSENGER_DETAILS: "/passenger-details",
  FLIGHT_BOOKING_ROUTE: "/flight-booking",
  TRAVELLERS: "/flight-booking/travellers",
  SEAT_SELECTION: "/flight-booking/seat-selection",
  MEAL_SELECTION: "/flight-booking/meal-selection",
  PAYMENT: "/flight-booking/payment",
  DASHBOARD: "/dashboard",
  BOOKINGS: "/admin/bookings",
  LOGIN: "/login",
  SIGNUP: "/signUp",
  ADMIN: "/admin",
  BOOKING_INFO: "/bookings/:id",
  SEATMAP: "/seatmap/:flightId",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_API_LOGS: "/admin/logs",
  PROFILE: "/profile",
  BOOKING_CONFIRMATION: "/booking-confirmation",
  USER_BOOKINGS: "/user/bookings",
  USER_BOOKING_DETAILS: "/user/bookings/:id",
  WELCOME: "/welcome",
  HOTEL_RESULTS: "/hotel/results",
  HOTEL_DETAILS: "/hotels/results/hotel-details",
  HOTEL_REVIEW: "/hotels/results/hotel-review",
};

export const DEFAULT_VALUES = {
  EMPTY_STRING: "",
  SINGLE_SPACE_STRING: " ",
  EMPTY_OBJECT: {},
  EMPTY_ARRAY: [],
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  NINE: 9,
  TEN: 10,
  TWELVE: 12,
  HUNDRED: 100,
  ADMIN: "/admin",
  TOTAL_PAGES_TO_RENDER: 5,
  DEFAULT_SEARCH_KEYWORD: "ab",
  DEFAULT_HOTEL_SEARCH_KEYWORD: "del",
  TIMEOUT_DURATION: 4000,
};

export const PAYMENT_METHODS = [
  {
    id: 1,
    title: "Razorpay",
    isDisabled: false,
    provider: "razorpay",
    default: false,
  },
  {
    id: 2,
    title: "Stripe",
    isDisabled: false,
    provider: "stripe",
    default: true,
  },
  {
    id: 3,
    title: "Credit/Debit Card",
    isDisabled: false,
    provider: "card",
    default: false,
  },
  {
    id: 4,
    title: "UPI",
    isDisabled: true,
    provider: "upi",
    default: false,
  },
];

export const PAYMENT_PROVIDERS = {
  UPI: "upi",
  CARD: "card",
  RAZORPAY: "razorpay",
  STRIPE: "stripe",
};

export const FARE_CATEGORIES = {
  BASE_PRICE: "Base Price",
  FEES_AND_SURCHARGES: "Fees & Surcharges",
  TOTAL: "Total",
};

export const TRAVEL_CLASSES = [
  {
    name: "ECONOMY",
    value: "ECONOMY",
  },
  {
    name: "PREMIUM ECONOMY",
    value: "PREMIUM_ECONOMY",
  },
  {
    name: "BUSINESS",
    value: "BUSINESS",
  },
  {
    name: "FIRST",
    value: "FIRST",
  },
];

export const CITY_CODES = [
  {
    code: "BOM",
    name: "Mumbai",
  },
  {
    code: "COK",
    name: "Kochi",
  },
  {
    code: "BLR",
    name: "Banglore",
  },
  {
    code: "CCU",
    name: "Kolkata",
  },
  {
    code: "HYD",
    name: "Hyderabad",
  },
];

export const TRAVEL_GUIDELINES = [
  "Vaccination Requirements : None",
  "COVID test requirements : Negative RT-PCR test report is not required for passengers travelling from other states to enter Telangana.",
  "Pre-registration or e-Pass requirements : Download and update Aarogya Setu app.",
  "Quarantine Guidelines : None.",
  "Destination Restrictions : None.",
  "Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass",
  "Please reach at least 2 hours prior to flight departure",
  "The latest DGCA guidelines state that it is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight. Any lapse might result in de-boarding",
  "Remember to download the baggage tag(s) and affix it on your bag(s).",
];

export const INDEX = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 3,
  FIFTH: 4,
  LAST: -1,
};

export const REGEX = {
  SEATMAP: /\/seatmaps?\w*/,
  UPI_REGEX: /^[a-zA-Z0-9.-]{2,256}@[a-zA-Z]{2,64}$/,
  CARD_NUMBER_REGEX: /^\d{13,19}$/,
  CARD_EXPIRY_MONTH_REGEX: /^(0[1-9]|1[0-2])$/,
  CARD_EXPIRY_YEAR_REGEX: /^\d{4}/,
  CVV_REGEX: /^\d{3}$/,
  CARD_NAME_REGEX: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  FLIGHT_SEARCH: /^\/search?\w+/,
  NAME: /^[a-zA-Z]*[a-zA-Z]$/,
  EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
  NUMERIC: /^\d*$/,
  LOCATIONS: /\/locations\w*/,
  FARE_CALENDAR: /\/fareCalendar\w*/,
  LOGS: /\/logs\w*/,
  PRICE: /\/price\w*/,
  CAPITAL_ALPHABET: /^[A-Z]$/,
  BOOKINGS: /bookings\w*/,
  CHARACTER_AFTER_WHITESPACE: /\b\w/g,
  WHITESPACES_AT_START: /^\S/,
  HOTEL_SEARCH: /^\/hotels\/search?\w+/,
  PHONE_NUMBER: /^\+?[1-9]\d{7,14}$/,
  PASSPORT_NUMBER: /^[a-zA-Z0-9]+$/,
  PANCARD_NUMBER: /^([a-zA-Z]){5}\d{4}([a-zA-Z])$/,
};

export const MONTHS = [
  {
    key: "January",
    value: "1",
  },
  {
    key: "February",
    value: "2",
  },
  {
    key: "March",
    value: "3",
  },
  {
    key: "April",
    value: "4",
  },
  {
    key: "May",
    value: "5",
  },
  {
    key: "June",
    value: "6",
  },
  {
    key: "July",
    value: "7",
  },
  {
    key: "August",
    value: "8",
  },
  {
    key: "September",
    value: "9",
  },
  {
    key: "October",
    value: "10",
  },
  {
    key: "November",
    value: "11",
  },
  {
    key: "December",
    value: "12",
  },
];

export const CURRENCY_SYMBOLS = {
  EUR: "€",
  USD: "$",
  INR: "₹",
};

export const SPECIAL_SYMBOLS = {
  ARROW_RIGHT: "→",
};

export const API_RESPONSES = {
  ERROR: "Error",
};

export const HTTPS_STATUS_CODES = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};
export const REQUEST_METHODS = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete",
  PUT: "put",
};

export const SUCCESS = 200;

export const GENDER = {
  MALE: "MALE",
  FEMALE: "FEMALE",
};

export const PROMISES = {
  CANCELLED: "CANCELLED",
};

export const USER_AUTH_FIELDS = {
  PHONE: "phone",
  PIN: "pin",
  EMAIL: "email",
  PASSWORD: "password",
  CONFIRMPASSWORD: "confirmPassword",
  SUBSCRIBE: "subscribe",
};

export const BOOKING_STATUS = {
  ALL: "ALL",
  CONFIRMED: "CONFIRMED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  CANCELLED: "CANCELLED",
  PAID: "PAID",
  UNPAID: "UNPAID",
  PARTIAL_PAYMENT: "PARTIAL PAYMENT",
  PROCESSING: "PROCESSING",
};

export const AUTH_DATA = {
  IS_AUTHENTICATED: "isAuthenticated",
  REFRESH_TOKEN: "refreshToken",
  ACCESS_TOKEN: "accessToken",
  USER: "user",
  ADDRESS_INFO: "addressInfo",
  TRAVELERS_INFO: "travelersInfo",
};

export const TRIP_TYPES = {
  ONE_WAY: "oneWay",
  ROUND_TRIP: "roundTrip",
  MULTI_CITY: "multiCity",
};

export const TRIP_TYPES_ARRAY = [
  { id: 1, value: "roundTrip", label: "searchSection.tripTypes.roundTrip" },
  { id: 2, value: "oneWay", label: "searchSection.tripTypes.oneWay" },
  { id: 3, value: "multiCity", label: "searchSection.tripTypes.multiCity" },
];

export const JOURNEY_TYPES = {
  DEPART: "depart",
  RETURN: "return",
};

export const COLORS = {
  PRIMARY: "primary",
  CONTRAST: "contrast",
  SECONDARY: "secondary",
};

export const DEFAULT_COLORS = {
  primaryHexCode: "#642ec8",
  contrastHexCode: "#111827",
  secondaryHexCode: "#d4c3f5",
};

export const JOURNEY_DEFAULT_VALUES = {
  id: uuid(),
  originCode: {
    cityName: "Delhi",
    iata: "DEL",
    airportName: "Indira Gandhi Int Airport",
  },
  destCode: {
    cityName: "Bombay",
    iata: "BOM",
    airportName: "Chhatrapati Shivaji Maharaja Airport",
  },
  departureDate: new Date(
    new Date().setDate(new Date().getDate() + DEFAULT_VALUES.ONE)
  )
    .toISOString()
    .split("T")[DEFAULT_VALUES.ZERO],
  departureTime: "",
  returnDate: new Date(
    new Date().setDate(new Date().getDate() + DEFAULT_VALUES.THREE)
  )
    .toISOString()
    .split("T")[DEFAULT_VALUES.ZERO],
  returnTime: "",
};

export const DEPLOYED_IMAGE_BASE_URL =
  "https://devtavajsapptemplate.s3.ap-south-1.amazonaws.com/trip-tava/";

export const FARE_TYPES = {
  REGULAR: "Regular",
  ARMED_FORCES: "Armed Force",
  STUDENT: "Student",
  SENIOR_CITIZEN: "Senior Citizen",
};

export const DEFAULT_CURRENCY_CODE = "INR";
export const DEFAULT_LANGUAGE_CODE = "en";
export const DEFAULT_USER_LANGUAGE = "English";
export const DEFAULT_USER_COUNTRY_NAME = "India";
export const DEFAULT_USER_COUNTRY_CODE = "IN";

export const CACHE_KEYS = {
  USER_COUNTRY_INFO: "userCountryInfo",
  FLIGHT_INFORMATION: "flightInformation",
  IS_AUTHENTICATED: "isAuthenticated",
  X_REQUEST_ID: "X-Request-Id",
  FLIGHT_PRICE_REQUEST_BODY: "flightPriceRequestBody",
  TRAVELERS_INFORMATION: "travelersInformation",
  BOOKING_INFORMATION: "bookingInformation",
  HOTEL_DETAILS_REQUEST_BODY: "hotelDetailsRequestBody",
  USER_INFO: "userInfo",
  TBO_TOKEN_ID: "tboTokenId",
  USER: "user",
  SEARCH_FILTERS: "searchFilters",
};

export const MOCK_API_ENDPOINTS = {
  PAYMENT_METHOD: "/payment-methods",
  SIGNUP: "/sign-up",
  LOGIN: "/login",
  PRICE: "/price",
  FLIGHT_DATES: /\/flightDates\w*/,
  FARE_CALENDAR: /\/fareCalendar\w*/,
  PAYMENT: "/payment",
  SEATMAP: "/seat-map",
  USER_BOOKINGS: /user\/bookings\w*/,
  USER_BOOKING_DETAILS: /user\/bookings\/(.*)/,
  HOTELS_RESULTS: "/hotels/search",
  HOTEL_DETAILS: "/hotels/price",
  AMADEUS_SEARCH: "/amadeus-search",
  TBO_SEARCH: "/tbo-search",
  PROMO_CODE: "/promocodes",
  TBO_BOOKING: "/tbo-booking",
  AMADEUS_BOOKING: "/amadeus-booking",
  BOOK_CALLBACK: /book-callback\/(.*)/,
  SPECIAL_SERVICES: "/special-services",
};

export const DEFAULT_LIMIT = 6;

export const SEARCH_RESULT_CARD_TABS = {
  FLIGHT_DETAILS: "FLIGHT DETAILS",
  FARE_SUMMARY: "FARE SUMMARY",
  CANCELLATION: "CANCELLATION",
  DATE_CHANGE: "DATE CHANGE",
};

export const TRAVELER_TYPE = {
  ADULT: "Adult",
  CHILD: "Child",
  HELD_INFANT: "Infant",
};

export const DEFAULT_BOOKING_DETAILS = {
  DEFAULT_BOOKING_TYPE: "INSTANT",
  DEFAULT_RESULT_SOURCE: "AM",
  DEFAULT_DOCUMENT_TYPE: "PASSPORT",
};

export const INITIAL_SORTING_VALUES = {
  stops: {},
  airlines: {},
  departureTime: {
    minTime: 0,
    maxTime: 1440,
  },
  arrivalTime: {
    minTime: 0,
    maxTime: 1440,
  },

  price: {
    minPrice: "",
    maxPrice: "",
    currency: "",
  },
  layoverAirports: {},
};

export const INITIAL_SORTING_FILTERS = {
  stops: [],
  airlines: [],
  layoverAirports: [],
  departureTime: {
    minTime: 0,
    maxTime: 1440,
  },
  arrivalTime: {
    minTime: 0,
    maxTime: 1440,
  },
  price: { maxPrice: "", minPrice: "" },
};

export const INITIAL_FILTERS = {
  isolated: {
    outBound: INITIAL_SORTING_FILTERS,
    inBound: INITIAL_SORTING_FILTERS,
  },
  packages: INITIAL_SORTING_FILTERS,
};

export const DEFAULT_FLIGHT_SEARCH_OPTIONS = {
  packages: INITIAL_SORTING_VALUES,
  isolated: {
    outBound: INITIAL_SORTING_VALUES,
    inBound: INITIAL_SORTING_VALUES,
  },
};

export const WINDOWS_EVENTS = {
  CLICK: "click",
  COPY: "copy",
  PASTE: "paste",
  POPSTATE: "popstate",
  STORAGE: "storage",
};

export const MOCK_RAZORPAY_ORDER_ID = "MOCK_RAZORPAY_ORDER_ID";

export const SEAT_TYPE = {
  WINDOW_SEAT: "Window Seat",
  MIDDLE_SEAT: "Middle Seat",
  AISLE_SEAT: "Aisle Seat",
};

export const KEY_CODES = {
  KEY_DOWN: "ArrowDown",
  KEY_UP: "ArrowUp",
  ENTER: "Enter",
};

export const LOCATION_TYPE = {
  FROM: "From",
  TO: "To",
};

export const DATA_COUNT_OPTIONS = [
  { limit: 5, label: "Limit 5" },
  { limit: 10, label: "Limit 10" },
  { limit: 15, label: "Limit 15" },
  { limit: 20, label: "Limit 20" },
  { limit: 25, label: "Limit 25" },
];

export const AUTHENTICATED_NAVBAR_CONTENT = [
  {
    id: 1,
    name: "navbar.myTrips",
    routePath: ROUTES.USER_BOOKINGS,
  },
];

export const slides = [
  { id: 1, imgName: "slide1", city: "Paris, France", price: "$1,397" },
  { id: 2, imgName: "slide2", city: "Maui, Hawaii", price: "$1,397" },
  { id: 3, imgName: "slide3", city: "Beijing, China", price: "$1,397" },
  { id: 4, imgName: "slide4", city: "Bergen, Norway", price: "$1,397" },
  { id: 5, imgName: "slide5", city: "Reykjavik, Iceland", price: "$1,397" },
  { id: 6, imgName: "slide6", city: "Phuket, Thailand", price: "$1,397" },
];

export const sliderArray = [
  {
    id: 1,
    title: "homepage.liveNow",
    subTitle: "homepage.discount",
    buttonPrevClass: "sale-button-prev ",
    buttonNextClass: "sale-button-next",
    sliderClass: "sale-slider",
    slides: slides,
  },
  {
    id: 2,
    title: "homepage.jackpot",
    subTitle: "homepage.saveExtra",
    buttonPrevClass: "top-selling-button-prev ",
    buttonNextClass: "top-selling-button-next",
    sliderClass: "top-selling-slider",
    slides: slides,
  },
  {
    id: 3,
    title: "homepage.internalDestinations",
    subTitle: "homepage.exploreWorld",
    buttonPrevClass: "internal-destinations-button-prev ",
    buttonNextClass: "internal-destinations-button-next",
    sliderClass: "internal-destinations-slider",
    slides: slides,
  },
];

export const DATE_PICKER_OPTIONS = [
  {
    title: "Exact Dates",
    value: "",
  },
  {
    title: "1 Day",
    value: "",
  },
  {
    title: "2 Days",
    value: "",
  },
  {
    title: "3 Days",
    value: "",
  },
  {
    title: "7 Days",
    value: "",
  },
];

export const DATE_TYPE_TITLES = {
  DEPARTURE: "Departure",
  RETURN: "Return",
};

export const DRAWER_SIZE = {
  SM: "small",
  MD: "medium",
  FULL: "fullScreen",
  LARGE: "large",
};

export const SSO_PROVIDER = {
  APPLE: "apple",
  FACEBOOK: "facebook",
  GOOGLE: "google",
};

export const FLIGHT_BOOKING_ROUTE = "/flight-booking";

export const travelBaggagesDetails = [
  {
    id: "1",
    label: "NonStop",
    price: "488",
    checked: false,
  },
  {
    id: "2",
    label: "Carry-on included",
    price: "432",
    checked: false,
  },
  {
    id: "3",
    label: "No cancel fee",
    price: "397",
    checked: false,
  },
  {
    id: "4",
    label: "No change fee",
    price: "432",
    checked: false,
  },
  {
    id: "5",
    label: "Low CO2 Emissions",
    price: "432",
    checked: false,
  },
  {
    id: "6",
    label: "Meals Included",
    price: "432",
    checked: false,
  },
];

export const internationalFlightsDetails = [
  { id: "1", label: "Passport Required", isChecked: false },
  { id: "2", label: "Tourist Visa Required", isChecked: false },
  { id: "3", label: "Vaccinations Required", isChecked: false },
  { id: "4", label: "Currency Restrictions", isChecked: false },
];

export const SUPPORTED_LANGUAGES = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "हिंदी",
    code: "hi",
  },
  {
    name: "தமிழ்",
    code: "ta",
  },
  {
    name: "සිංහල",
    code: "si",
  },
  {
    name: "Español",
    code: "es",
  },
];

export const FLIGHT_TYPE = {
  OUTBOUND_RESULT: "outBound",
  INBOUND_RESULT: "inBound",
};

export const MODAL_SIZE = {
  MD: "medium",
  FULL: "fullScreen",
  LG: "largeScreen",
};

export const MODAL_POSITION = {
  TOP: "top",
  CENTER: "center",
};

export const ESCAPE = "Escape";

export const KEYDOWN = "keydown";

export const SEARCH_SECTION = {
  FLIGHT: "flight",
  HOTEL: "hotel",
};

export const KEYBOARD_KEY_CODES = {
  UP_KEY_CODE: 38,
  DOWN_KEY_CODE: 40,
  ENTER_KEY_CODE: 13,
};

export const DEFAULT_USER_IP_ADDRESS = "182.78.207.162";

export const DEBOUNCE_TIME = 300;

export const INITIAL_HOTEL_VALUES = {
  price: {
    minPrice: "",
    maxPrice: "",
    currency: "",
  },
  starRatings: {},
  categories: {},
  locality: {},
};

export const INITIAL_HOTEL_FILTERS = {
  minPrice: "",
  maxPrice: "",
  starRatings: [],
  categories: [],
  locality: [],
};

export const HOTEL_DEFAULT_VALUES = {
  adult: DEFAULT_VALUES.ONE,
  children: DEFAULT_VALUES.ZERO,
  infants: DEFAULT_VALUES.ZERO,
  checkIn: new Date().toISOString().split("T")[0],
  targetDate: new Date(
    new Date().setDate(new Date().getDate() + DEFAULT_VALUES.TWO)
  )
    .toISOString()
    .split("T")[DEFAULT_VALUES.ZERO],
  noOfRooms: DEFAULT_VALUES.ONE,
  noOfNights: DEFAULT_VALUES.ONE,
  guestNationality: {
    isoCode: "IN",
    name: "india",
  },
  destination: {
    tava_countrycode: "IN",
    tava_id: "122175",
    tava_destination: "Jaipur",
  },
};

export const POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
};

export const FILTERS_FIELDS = [
  { interface: "price", label: "price" },
  { interface: "time", label: "arrivalTime" },
  { interface: "time", label: "departureTime" },
  { interface: "stops", label: "stops" },
  { interface: "airline", label: "airline" },
];
export const DATE_FORMAT = "YYYY-MM-DD";

export const FLIGHT_SERVICE_TYPE = {
  AMADEUS: "AMADEUS",
  TBO: "TBO",
};

export const ENDPOINTS = {
  TBO_BOOKING_URL: "/tbo-booking",
  AMADEUS_BOOKING_URL: "/amadeus-booking",
};

export const AUTH_ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPERADMIN",
};

export const LOG_RESULT_TABLE_COLUMNS = [
  {
    dataField: "correlationId",
    text: "Correlation Id",
  },
  {
    dataField: "url",
    text: "URL",
  },
  {
    dataField: "created",
    text: "Created",
  },
  {
    dataField: "serviceType",
    text: "Service Type",
  },
  {
    dataField: "logType",
    text: "Log Type",
  },
  {
    dataField: "bookingId",
    text: "Booking Id",
  },
  {
    dataField: "logData",
    text: "Log Data",
  },
];

export const BOOKING_TABLE_COLUMNS = [
  { key: "bookingId", label: "Booking Id" },
  { key: "bookingStatus", label: "Booking Status" },
  { key: "paymentStatus", label: "Payment Status" },
  { key: "supplier", label: "Supplier" },
  { key: "bookedAt", label: "Booked At" },
  { key: "modifiedAt", label: "Modified At" },
];

export const FLIGHT_PROVIDERS = {
  TBO: "TBO",
  AMADEUS: "AMADEUS",
};

export const ADMIN_BOOKING_TABS = [
  "All",
  "Confirmed",
  "Pending",
  "Rejected",
  "Cancelled",
];

export const MINI_FARE_RULES = {
  REISSUE: "Reissue",
  CANCELLATION: "Cancellation",
};

export const INITIAL_FLIGHT_COUNT = {
  packages: DEFAULT_VALUES.ZERO,
  inBound: DEFAULT_VALUES.ZERO,
  outBound: DEFAULT_VALUES.ZERO,
};

export const TRAVELER_BUTTON_TYPES = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};

export const SEAT_TYPE_INFO = {
  0: "NotSet",
  1: "Window",
  2: "Aisle",
  3: "Middle",
  4: "WindowRecline",
  5: "WindowWing",
  6: "WindowExitRow",
  7: "WindowReclineWing",
  8: "WindowReclineExitRow",
  9: "WindowWingExitRow",
  10: "AisleRecline",
  11: "AisleWing",
  12: "AisleExitRow",
  13: "AisleReclineWing",
  14: "AisleReclineExitRow",
  15: "AisleWingExitRow",
  16: "MiddleRecline",
  17: "MiddleWing",
  18: "MiddleExitRow",
  19: "MiddleReclineWing",
  20: "MiddleReclineExitRow",
  21: "MiddleWingExitRow",
  22: "WindowReclineWingExitRow",
  23: "AisleReclineWingExitRow",
  24: "MiddleReclineWingExitRow",
  25: "WindowBulkhead",
  26: "WindowQuiet",
  27: "WindowBulkheadQuiet",
  28: "MiddleBulkhead",
  29: "MiddleQuiet",
  30: "MiddleBulkheadQuiet",
  31: "AisleBulkhead",
  32: "AisleQuiet",
  33: "AisleBulkheadQuiet",
  34: "CentreAisle",
  35: "CentreMiddle",
  36: "CentreAisleBulkhead",
  37: "CentreAisleQuiet",
  38: "CentreAisleBulkheadQuiet",
  39: "CentreMiddleBulkhead",
  40: "CentreMiddleQuiet",
  41: "CentreMiddleBulkheadQuiet",
  42: "WindowBulkheadWing",
  43: "WindowBulkheadExitRow",
  44: "MiddleBulkheadWing",
  45: "MiddleBulkheadExitRow",
  46: "AisleBulkheadWing",
  47: "AisleBulkheadExitRow",
};
