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
  },
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a785254c5c20f7a219e41ee9406039e889',
    name: 'Calzone',
    description: 'Served with a side of marinara.',
    items: [
      {
        apiKey: '9511131',
        name: 'Cheese Zone',
        description: 'Ricotta & Cheese',
        basePrice: 7
      },
      {
        apiKey: '9511132',
        name: 'Supreme Zone',
        description: 'Ricotta, Cheese, Pepperoni, Sausage, Spinach, Mushroom & Onion',
        basePrice: 10.75
      },
      {
        apiKey: '9511133',
        name: 'Meat Zone',
        description: 'Cheese Zone with Pepperoni, Sausage, Meatball, Bacon and Chicken',
        basePrice: 10.75
      },
      {
        apiKey: '9511134',
        name: 'Pep Zone',
        description: 'Ricotta, Cheese, Double Pepperoni, Jalapeno & Banana Pepper',
        basePrice: 9.25
      },
      {
        apiKey: '11553938',
        name: 'Veggie Zone',
        description: 'Cheese Zone with Spinach, Mushroom, Tomato, Black Olives and Garlic',
        basePrice: 10.75
      }
    ]
  },
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a71cfc14fa83e55a32e41ee9406039e889',
    name: 'Sides and Salad',
    items: [
      {
        apiKey: '9511135',
        name: 'Garlic Bread',
        description: '4 pcs. with marinara',
        basePrice: 3.99
      },
      {
        apiKey: '9511136',
        name: 'Garlic Bread w/ Cheese',
        description: '4 pcs. with marinara',
        basePrice: 4.99
      },
      {
        apiKey: '9511137',
        name: 'Salad - Small',
        description: '  Choice of small or large.',
        basePrice: 4
      },
      {
        apiKey: '9511138',
        name: 'Salad - Large',
        description: '  Choice of small or large.',
        basePrice: 6
      }
    ]
  },
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a76342fd6765684e1ae41ee9406039e889',
    name: 'Desserts',
    items: [
      {
        apiKey: '9511139',
        name: 'Cheesecake',
        basePrice: 2.99
      },
      {
        apiKey: '9511140',
        name: 'Cannoli',
        basePrice: 2.99
      },
      {
        apiKey: '9511142',
        name: 'Dessert Calzone',
        description: 'Nutella & Marshmallow Cream',
        basePrice: 6.99
      }
    ]
  },
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a781da9e6f272df9cae41ee9406039e889',
    name: 'Drinks',
    items: [
      {
        apiKey: '9511143',
        name: 'Can Soda',
        basePrice: 1
      },
      {
        apiKey: '9511144',
        name: 'Gatorade',
        basePrice: 1.99
      },
      {
        apiKey: '9511145',
        name: 'Red Bull',
        basePrice: 2.99
      },
      {
        apiKey: '9511146',
        name: '2 Liter Soda',
        basePrice: 2.99
      },
      {
        apiKey: '9572726',
        name: 'Bottled Water',
        basePrice: 1
      },
      {
        apiKey: '9572730',
        name: 'Snapple',
        basePrice: 1.99
      },
      {
        apiKey: '9572731',
        name: 'Monster',
        basePrice: 2.99
      },
      {
        apiKey: '11553921',
        name: 'San Pellegrino',
        basePrice: 1.5
      }
    ]
  },
  {
    apiKey: 'd7fd4c2ed01f495ffdb3aba31c19a8a7f0b08716c8859d2be41ee9406039e889',
    name: 'Wings',
    description: 'Oven baked wings served with side of ranch or blue cheese.',
    items: [
      {
        apiKey: '11553931',
        name: 'Oven Baked Wings - 6 Pcs',
        description: '  Choice of 6 pcs or 12 pcs.',
        basePrice: 5.95
      },
      {
        apiKey: '11553932',
        name: 'Oven Baked Wings - 12 Pcs',
        description: '  Choice of 6 pcs or 12 pcs.',
        basePrice: 9.95
      }
    ]
  }
];
