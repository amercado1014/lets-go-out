/* eslint-disable max-len */
export const mockRestaurantsApiData = {
  "address": {
    "apiKey": null,
    "streetAddress": "",
    "latitude": 39.6682515,
    "longitude": -105.096661,
    "city": "Denver",
    "state": "CO",
    "zip": "80227",
    "aptNumber": null
  },
  "restaurants": [
    {
      "apiKey": "aa1163f8eb68a8f7144247b91fbcb2f31932e981e6050b6c",
      "deliveryMin": 0,
      "deliveryPrice": 3.5,
      "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-daddys-pizza-s-wadsworth-21136_1407870747356.png",
      "name": "Big Daddy's Pizza - S. Wadsworth",
      "streetAddress": "2772 S Wadsworth Blvd",
      "city": "Denver",
      "state": "CO",
      "zip": "80227",
      "foodTypes": [
        "Pizza"
      ],
      "phone": "(303) 988-3697",
      "latitude": 39.666141,
      "longitude": -105.080677,
      "minFreeDelivery": 0,
      "taxRate": 0.08,
      "acceptsCash": true,
      "acceptsCard": true,
      "offersPickup": true,
      "offersDelivery": true,
      "isTestRestaurant": false,
      "minWaitTime": 45,
      "maxWaitTime": 60,
      "open": false,
      "url": "https://eatstreet.com/denver-co/restaurants/big-daddys-pizza-s-wadsworth",
      "hours": {
        "Monday": [
          "11:00 AM - 3:00 AM"
        ],
        "Saturday": [
          "11:00 AM - 3:00 AM"
        ],
        "Sunday": [
          "11:00 AM - 3:00 AM"
        ],
        "Wednesday": [
          "11:00 AM - 3:00 AM"
        ],
        "Tuesday": [
          "11:00 AM - 3:00 AM"
        ],
        "Friday": [
          "11:00 AM - 3:00 AM"
        ],
        "Thursday": [
          "11:00 AM - 3:00 AM"
        ]
      },
      "timezone": "US/Mountain"
    }
  ]
};

export const returnedMockRestaurantApiData = [
  {
    "apiKey": "aa1163f8eb68a8f7144247b91fbcb2f31932e981e6050b6c",
    "deliveryMin": 0,
    "deliveryPrice": 3.5,
    "logoUrl": "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-daddys-pizza-s-wadsworth-21136_1407870747356.png",
    "name": "Big Daddy's Pizza - S. Wadsworth",
    "streetAddress": "2772 S Wadsworth Blvd",
    "city": "Denver",
    "state": "CO",
    "zip": "80227",
    "foodTypes": [
      "Pizza"
    ],
    "phone": "(303) 988-3697",
    "latitude": 39.666141,
    "longitude": -105.080677,
    "minFreeDelivery": 0,
    "taxRate": 0.08,
    "acceptsCash": true,
    "acceptsCard": true,
    "offersPickup": true,
    "offersDelivery": true,
    "isTestRestaurant": false,
    "minWaitTime": 45,
    "maxWaitTime": 60,
    "open": false,
    "url": "https://eatstreet.com/denver-co/restaurants/big-daddys-pizza-s-wadsworth",
    "hours": {
      "Monday": [
        "11:00 AM - 3:00 AM"
      ],
      "Saturday": [
        "11:00 AM - 3:00 AM"
      ],
      "Sunday": [
        "11:00 AM - 3:00 AM"
      ],
      "Wednesday": [
        "11:00 AM - 3:00 AM"
      ],
      "Tuesday": [
        "11:00 AM - 3:00 AM"
      ],
      "Friday": [
        "11:00 AM - 3:00 AM"
      ],
      "Thursday": [
        "11:00 AM - 3:00 AM"
      ]
    },
    "timezone": "US/Mountain"
  }
];

export const cleanRestaurantData = {
  apiKey: "aa1163f8eb68a8f7144247b91fbcb2f39e65e39821ec08a9",
  logoUrl: "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-daddys-pizza-lakewood-21135_1407868711096.png",
  name: "Big Daddy's Pizza - Lakewood",
  streetAddress: "850 Wadsworth Blvd",
  city: "Lakewood",
  state: "CO",
  zip: "80214",
  foodTypes: "Pizza",
  phone: "(303) 736-6090",
  url: "https://eatstreet.com/lakewood-co/restaurants/big-daddys-pizza-lakewood",
  hours: {
    Monday: "11:00 AM - 3:00 AM",
    Saturday: "11:00 AM - 3:00 AM",
    Sunday: "11:00 AM - 3:00 AM",
    Wednesday: "11:00 AM - 3:00 AM",
    Tuesday: "11:00 AM - 3:00 AM",
    Friday: "11:00 AM - 3:00 AM",
    Thursday: "11:00 AM - 3:00 AM"
  },
  deliveryMin: 12,
  offersDelivery: true,
  minFreeDelivery: 0,
  deliveryPrice: 3.5
};

export const mockRestaurants = [
  {
    apiKey: "aa1163f8eb68a8f7144247b91fbcb2f39e65e39821ec08a9",
    logoUrl: "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-daddys-pizza-lakewood-21135_1407868711096.png",
    name: "Big Daddy's Pizza - Lakewood",
    streetAddress: "850 Wadsworth Blvd",
    city: "Lakewood",
    state: "CO",
    zip: "80214",
    foodTypes: "Pizza",
    phone: "(303) 736-6090",
    url: "https://eatstreet.com/lakewood-co/restaurants/big-daddys-pizza-lakewood",
    hours: {
      Monday: "11:00 AM - 3:00 AM",
      Saturday: "11:00 AM - 3:00 AM",
      Sunday: "11:00 AM - 3:00 AM",
      Wednesday: "11:00 AM - 3:00 AM",
      Tuesday: "11:00 AM - 3:00 AM",
      Friday: "11:00 AM - 3:00 AM",
      Thursday: "11:00 AM - 3:00 AM"
    },
    deliveryMin: 12,
    offersDelivery: false,
    minFreeDelivery: 0
  },
  {
    apiKey: "aa1163f8eb68a8f7144247b91fbcb2f39e65e39821ec08a9",
    logoUrl: "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-daddys-pizza-lakewood-21135_1407868711096.png",
    name: "Big Daddy's Pizza - Lakewood",
    streetAddress: "850 Wadsworth Blvd",
    city: "Lakewood",
    state: "CO",
    zip: "80214",
    foodTypes: "Pizza",
    phone: "(303) 736-6090",
    url: "https://eatstreet.com/lakewood-co/restaurants/big-daddys-pizza-lakewood",
    hours: {
      Monday: "11:00 AM - 3:00 AM",
      Saturday: "11:00 AM - 3:00 AM",
      Sunday: "11:00 AM - 3:00 AM",
      Wednesday: "11:00 AM - 3:00 AM",
      Tuesday: "11:00 AM - 3:00 AM",
      Friday: "11:00 AM - 3:00 AM",
      Thursday: "11:00 AM - 3:00 AM"
    },
    deliveryMin: 12,
    offersDelivery: false,
    minFreeDelivery: 0
  }
];

export const cleanRestaurantsArray = [
  { 
    apiKey: "aa1163f8eb68a8f7144247b91fbcb2f31932e981e6050b6c", 
    city: "Denver", 
    foodTypes: "Pizza", 
    hours: { 
      Friday: "11:00 AM - 3:00 AM", 
      Monday: "11:00 AM - 3:00 AM", 
      Saturday: "11:00 AM - 3:00 AM", 
      Sunday: "11:00 AM - 3:00 AM", 
      Thursday: "11:00 AM - 3:00 AM", 
      Tuesday: "11:00 AM - 3:00 AM", 
      Wednesday: "11:00 AM - 3:00 AM" 
    }, 
    logoUrl: "https://eatstreet-static.s3.amazonaws.com/assets/images/restaurant_logos/big-daddys-pizza-s-wadsworth-21136_1407870747356.png", 
    name: "Big Daddy's Pizza - S. Wadsworth", 
    phone: "(303) 988-3697", 
    state: "CO", 
    streetAddress: "2772 S Wadsworth Blvd", 
    url: "https://eatstreet.com/denver-co/restaurants/big-daddys-pizza-s-wadsworth", 
    zip: "80227",
    deliveryMin: 0,
    offersDelivery: true,
    minFreeDelivery: 0,
    deliveryPrice: 3.5 
  }
];

export const mockLocationApiData = { 
  lat: 39.7047095, 
  lng: -105.08137339999999 
};

export const mockMenu = [
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a71d089a8c1dc5b6fde41ee9406039e889',
    name: 'Pizza By The Slice',
    items: [
      {
        apiKey: '9511054',
        name: 'Cheese Pizza by the Slice',
        basePrice: 2.5
      },
      {
        apiKey: '9511055',
        name: 'Pepperoni Pizza by the Slice',
        basePrice: 3
      },
      {
        apiKey: '9511056',
        name: 'Sausage Pizza by the Slice',
        basePrice: 3
      },
      {
        apiKey: '9511058',
        name: 'New York Pizza by the Slice',
        description: 'Pepperoni, Sausage, Mushroom & Cheese',
        basePrice: 4
      },
      {
        apiKey: '9511059',
        name: 'Brooklyn Pizza by the Slice',
        description: 'Meatball, Bacon, Onion & Cheese',
        basePrice: 4
      },
      {
        apiKey: '9511060',
        name: 'Long Island Pizza by the Slice',
        description: 'Ham, Bacon, Pineapple & Cheese',
        basePrice: 4
      },
      {
        apiKey: '9511061',
        name: 'Supreme Pizza by the Slice',
        description: 'Pepperoni, Meatball, Mushroom, Greenpepper, Black Olive & Cheese',
        basePrice: 5
      },
      {
        apiKey: '9511062',
        name: 'Veggie Pizza by the Slice',
        description: 'Spinach, Mushroom, Onion, Greenpepper, Black Olive & Cheese',
        basePrice: 5
      },
      {
        apiKey: '9511063',
        name: 'Bronx Pizza by the Slice',
        description: 'Pepperoni, Sausage, Meatball, Ham, Bacon & Cheese',
        basePrice: 5
      },
      {
        apiKey: '11553967',
        name: 'Denver Love Pizza by the Slice',
        description: 'Tomato and basil.',
        basePrice: 3.5
      }
    ]
  },
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a7e79ff2fff3881032e41ee9406039e889',
    name: 'Pizza',
    items: [
      {
        apiKey: '9511064',
        name: 'Cheese Pizza - Small',
        description: '  Choice of small or large.',
        basePrice: 10.99
      },
      {
        apiKey: '9511065',
        name: 'Cheese Pizza - Large',
        description: '  Choice of small or large.',
        basePrice: 14.99
      },
      {
        apiKey: '9511080',
        name: 'New York Pizza - Small',
        description: 'Pepperoni, sausage and mushrooms.  Choice of small or large.',
        basePrice: 13.99
      },
      {
        apiKey: '9511081',
        name: 'New York Pizza - Large',
        description: 'Pepperoni, sausage and mushrooms.  Choice of small or large.',
        basePrice: 20.99
      },
      {
        apiKey: '9511082',
        name: 'Brooklyn Pizza - Small',
        description: 'Meatball, bacon and onion.  Choice of small or large.',
        basePrice: 13.99
      },
      {
        apiKey: '9511083',
        name: 'Brooklyn Pizza - Large',
        description: 'Meatball, bacon and onion.  Choice of small or large.',
        basePrice: 20.99
      },
      {
        apiKey: '9511085',
        name: 'Long Island Pizza - Small',
        description: 'Ham, bacon and pineapple.  Choice of small or large.',
        basePrice: 13.99
      },
      {
        apiKey: '9511086',
        name: 'Long Island Pizza - Large',
        description: 'Ham, bacon and pineapple.  Choice of small or large.',
        basePrice: 20.99
      },
      {
        apiKey: '9511087',
        name: 'Supreme Pizza - Small',
        description: 'Pepperoni, meatball, mushroom, green pepper and black olive.  Choice of small or large.',
        basePrice: 15.99
      },
      {
        apiKey: '9511089',
        name: 'Supreme Pizza - Large',
        description: 'Pepperoni, meatball, mushroom, green pepper and black olive.  Choice of small or large.',
        basePrice: 24.99
      },
      {
        apiKey: '9511091',
        name: 'Veggie Pizza - Small',
        description: 'Spinach, mushroom, onion, green pepper and black olive.  Choice of small or large.',
        basePrice: 15.99
      },
      {
        apiKey: '9511093',
        name: 'Veggie Pizza - Large',
        description: 'Spinach, mushroom, onion, green pepper and black olive.  Choice of small or large.',
        basePrice: 24.99
      },
      {
        apiKey: '9511095',
        name: 'Bronx Pizza - Small',
        description: 'Pepperoni, sausage, meatball, ham and bacon.  Choice of small or large.',
        basePrice: 15.99
      },
      {
        apiKey: '9511096',
        name: 'Bronx Pizza - Large',
        description: 'Pepperoni, sausage, meatball, ham and bacon.  Choice of small or large.',
        basePrice: 24.99
      },
      {
        apiKey: '11553987',
        name: 'Pepperoni Pizza - Small',
        description: '  Choice of small or large.',
        basePrice: 11.99
      },
      {
        apiKey: '11553988',
        name: 'Pepperoni Pizza - Large',
        description: '  Choice of small or large.',
        basePrice: 16.99
      },
      {
        apiKey: '11553989',
        name: 'Sausage Pizza - Small',
        description: '  Choice of small or large.',
        basePrice: 11.99
      },
      {
        apiKey: '11553990',
        name: 'Sausage Pizza - Large',
        description: '  Choice of small or large.',
        basePrice: 16.99
      },
      {
        apiKey: '11553991',
        name: 'Denver Love Pizza - Small',
        description: 'Tomato and basil.  Choice of small or large.',
        basePrice: 12.99
      },
      {
        apiKey: '11553992',
        name: 'Denver Love Pizza - Large',
        description: 'Tomato and basil.  Choice of small or large.',
        basePrice: 18.99
      },
      {
        apiKey: '11553993',
        name: 'White Pizza - Small',
        description: 'Signature white sauce pizza with cheese.  Choice of small or large.',
        basePrice: 11.99
      },
      {
        apiKey: '11553994',
        name: 'White Pizza - Large',
        description: 'Signature white sauce pizza with cheese.  Choice of small or large.',
        basePrice: 16.99
      },
      {
        apiKey: '11553995',
        name: 'BBQ Chicken Pizza - Small',
        description: 'Sweet BBQ sauce pizza with chicken and red onion.  Choice of small or large.',
        basePrice: 13.99
      },
      {
        apiKey: '11553996',
        name: 'BBQ Chicken Pizza - Large',
        description: 'weet BBQ sauce pizza with chicken and red onion.  Choice of small or large.',
        basePrice: 20.99
      },
      {
        apiKey: '11553997',
        name: 'Chicken Bacon Ranch Pizza - Small',
        description: 'White pizza with chicken, bacon and tomato.  Choice of small or large.',
        basePrice: 14.99
      },
      {
        apiKey: '11553998',
        name: 'Chicken Bacon Ranch Pizza - Large',
        description: 'White pizza with chicken, bacon and tomato.  Choice of small or large.',
        basePrice: 22.99
      }
    ]
  }
];
