const hotels = [
    {
      id: 1,
      placeId: 2,
      hotelName: "Light bright airy stylish apt & safe peaceful stay",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.9,
      photoUrl: "https://i.imgur.com/vzogJXj.png",
      price: 34,
    },
    {
      id: 2,
      placeId: 2,
      hotelName: "Apartment in Lost Panorama",
      guests: 2,
      bedrooms: 1,
      bed: 1,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 5.0,
      photoUrl: "https://i.imgur.com/hI8yILw.png",
      price: 30,
    },
    {
      id: 3,
      placeId: 2,
      hotelName: "AR Lounge & Pool ",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.5,
      photoUrl: "https://i.imgur.com/Fi6XEJH.png",
      price: 38,
    },
    {
      id: 4,
      placeId: 1,
      hotelName: "Prime Park Hotel",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 5.0,
      photoUrl: "https://i.imgur.com/7CGvYPM.jpg",
      price: 26,
    },
    {
      id: 5,
      placeId: 1,
      hotelName: "Long Beach Hotel",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 5.0,
      photoUrl: "https://i.imgur.com/CmI2CKU.jpg",
      price: 20,
    },
    {
      id: 6,
      placeId: 1,
      hotelName: "Laguna Beach Hotel & Resort",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.9,
      photoUrl: "https://i.imgur.com/xw4Bkxb.jpg",
      price: 27,
    },
    {
      id: 7,
      placeId: 4,
      hotelName: "Resort RungRang - Sajek",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.6,
      photoUrl: "https://i.imgur.com/1GXRiJ2.jpg",
      price: 22,
    },
    {
      id: 8,
      placeId: 4,
      hotelName: "Keeper’s Inn",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.5,
      photoUrl: "https://i.imgur.com/nmnakQm.jpg",
      price: 22,
    },
    {
      id: 9,
      placeId: 4,
      hotelName: "Monu Adom Resort",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.5,
      photoUrl: "https://i.imgur.com/Dd9bTDK.jpg",
      price: 22,
    },
    {
      id: 10,
      placeId: 3,
      hotelName: "Sundarban Tiger Roar Resort",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.5,
      photoUrl: "https://i.imgur.com/sT60EiW.jpg",
      price: 22,
    },
    {
      id: 11,
      placeId: 6,
      hotelName: "Bono Nibash Hill Resort",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.5,
      photoUrl: "https://i.imgur.com/n0AslVo.jpg",
      price: 25,
    },
    {
      id: 12,
      placeId: 6,
      hotelName: "Fanush Resort",
      guests: 4,
      bedrooms: 2,
      bed: 2,
      cancellation: "Cancellation fexibility availiable",
      facilities: "Wif Air conditioning Kitchen",
      ratting: 4.5,
      photoUrl: "https://i.imgur.com/zC70N6a.jpg",
      price: 27,
    },
    {
        id: 13,
        placeId: 6,
        hotelName: "Monu Adom Resort",
        guests: 4,
        bedrooms: 2,
        bed: 2,
        cancellation: "Cancellation fexibility availiable",
        facilities: "Wif Air conditioning Kitchen",
        ratting: 4.5,
        photoUrl: "https://i.imgur.com/Dd9bTDK.jpg",
        price: 22,
      },
      {
        id: 14,
        placeId: 3,
        hotelName: "Stylish apt & safe peaceful stay",
        guests: 4,
        bedrooms: 2,
        bed: 2,
        cancellation: "Cancellation fexibility availiable",
        facilities: "Wif Air conditioning Kitchen",
        ratting: 4.9,
        photoUrl: "https://i.imgur.com/vzogJXj.png",
        price: 34,
      },
      {
        id: 15,
        placeId: 3,
        hotelName: "Apartment in Lost Panorama",
        guests: 2,
        bedrooms: 1,
        bed: 1,
        cancellation: "Cancellation fexibility availiable",
        facilities: "Wif Air conditioning Kitchen",
        ratting: 5.0,
        photoUrl: "https://i.imgur.com/hI8yILw.png",
        price: 30,
      },
      {
        id: 16,
        placeId: 5,
        hotelName: "Long Beach Hotel",
        guests: 4,
        bedrooms: 2,
        bed: 2,
        cancellation: "Cancellation fexibility availiable",
        facilities: "Wif Air conditioning Kitchen",
        ratting: 5.0,
        photoUrl: "https://i.imgur.com/CmI2CKU.jpg",
        price: 20,
      },
      {
        id: 17,
        placeId: 5,
        hotelName: "Laguna Beach Hotel & Resort",
        guests: 4,
        bedrooms: 2,
        bed: 2,
        cancellation: "Cancellation fexibility availiable",
        facilities: "Wif Air conditioning Kitchen",
        ratting: 4.9,
        photoUrl: "https://i.imgur.com/xw4Bkxb.jpg",
        price: 27,
      },
      {
        id: 18,
        placeId: 5,
        hotelName: "Resort Saint Martin Inn",
        guests: 4,
        bedrooms: 2,
        bed: 2,
        cancellation: "Cancellation fexibility availiable",
        facilities: "Wif Air conditioning Kitchen",
        ratting: 4.6,
        photoUrl: "https://i.imgur.com/1GXRiJ2.jpg",
        price: 22,
      }
  ];
  
  export default hotels;

  [
    {
        "id": 1,
        "placeId": 2,
        "hotelName": "Light bright airy stylish apt & safe peaceful stay",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.9,
        "photoUrl": "https://i.ibb.co/cw2LLdj/f496f4fa71b45e394299928f2c2ebd21.jpg",
        "price": 34,
        "category": "Sreemangal"
    },
    {
        "id": 2,
        "placeId": 2,
        "hotelName": "Apartment in Lost Panorama",
        "guests": 2,
        "bedrooms": 1,
        "bed": 1,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 5.0,
        "photoUrl": "https://i.ibb.co/6bj6SL1/2afbeb3f2dfb14bdafae1656f74e8c49.jpg",
        "price": 30,
        "category": "Sreemangal"
    },
    {
        "id": 3,
        "placeId": 2,
        "hotelName": "AR Lounge & Pool",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/0KcLHtC/1b71bec592b79b7866d40646de44a2fa.jpg",
        "price": 38,
        "category": "Sreemangal"
    },
    {
        "id": 4,
        "placeId": 1,
        "hotelName": "Prime Park Hotel",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 5.0,
        "photoUrl": "https://i.ibb.co/DrJMtQ0/4c8e3c939e7a529754a0526ea5107065.jpg",
        "price": 26,
        "category": "Cox's Bazar"
    },
    {
        "id": 5,
        "placeId": 1,
        "hotelName": "Long Beach Hotel",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 5.0,
        "photoUrl": "https://i.ibb.co/WnwPBmt/5b78e033387715813ebdedd1a4c0792b.jpg",
        "price": 20,
        "category": "Cox's Bazar"
    },
    {
        "id": 6,
        "placeId": 1,
        "hotelName": "Laguna Beach Hotel & Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.9,
        "photoUrl": "https://i.ibb.co/GHGv49Z/8b1533e2ae043ff2f3778d58554a70d7.jpg",
        "price": 27,
        "category": "Cox's Bazar"
    },
    {
        "id": 7,
        "placeId": 4,
        "hotelName": "Resort RungRang - Sajek",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.6,
        "photoUrl": "https://i.ibb.co/pnk9BMp/40fd2d9209cac5c34f2aeab1c277d7a6.jpg",
        "price": 22,
        "category": "Sundarbans"
    },
    {
        "id": 8,
        "placeId": 4,
        "hotelName": "Keeper’s Inn",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/30z3kjf/60a119010def965a6fbf75c10ea49bb8.jpg",
        "price": 22,
        "category": "Sundarbans"
    },
    {
        "id": 9,
        "placeId": 4,
        "hotelName": "Monu Adom Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/9wYTPxn/79ace30b0e1ff804c0825023931b967d.jpg",
        "price": 22,
        "category": "Sundarbans"
    },
    {
        "id": 10,
        "placeId": 3,
        "hotelName": "Sundarban Tiger Roar Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/r4xvfjL/647a1cd8318f93353812e769f790703f.jpg",
        "price": 22,
        "category": "Sajek Valley"
    },
    {
        "id": 11,
        "placeId": 6,
        "hotelName": "Bono Nibash Hill Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/drb3fM0/697dd3e2106b856a2240ea693191b3b5.jpg",
        "price": 25,
        "category": "Sajek Valley"
    },
    {
        "id": 12,
        "placeId": 6,
        "hotelName": "Fanush Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/nD3T7cz/addbfbe06b4b91d6dc434529374abf09.jpg",
        "price": 27,
        "category": "Sajek Valley"
    },
    {
        "id": 13,
        "placeId": 6,
        "hotelName": "Monu Adom Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/hgdrR1r/bc2d27e229fa20dc046b63ae93db5009.jpg",
        "price": 22,
        "category": "St. Martin Island"
    },
    {
        "id": 14,
        "placeId": 3,
        "hotelName": "Stylish apt & safe peaceful stay",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.9,
        "photoUrl": "https://i.ibb.co/M5Sk0Qt/be92eb6c1208a3d95f1488818f20a22a.jpg",
        "price": 34,
        "category": "St. Martin Island"
    },
    {
        "id": 15,
        "placeId": 3,
        "hotelName": "Apartment in Lost Panorama",
        "guests": 2,
        "bedrooms": 1,
        "bed": 1,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 5.0,
        "photoUrl": "https://i.ibb.co/WnwPBmt/5b78e033387715813ebdedd1a4c0792b.jpg",
        "price": 30,
        "category": "St. Martin Island"
    },
    {
        "id": 16,
        "placeId": 5,
        "hotelName": "Long Beach Hotel",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 5.0,
        "photoUrl": "https://i.ibb.co/JkJvVNw/e545978566ac52b640d3fa1d633a7016.jpg",
        "price": 20,
        "category": "Nilgiri Nilachol"
    },
    {
        "id": 17,
        "placeId": 5,
        "hotelName": "Laguna Beach Hotel & Resort",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.9,
        "photoUrl": "https://i.ibb.co/DR3PxKm/cd758d1ea27282df3be78c2ab87072ed.jpg",
        "price": 27,
        "category": "Nilgiri Nilachol"
    },
    {
        "id": 18,
        "placeId": 5,
        "hotelName": "Resort Martin Inn",
        "guests": 4,
        "bedrooms": 2,
        "bed": 2,
        "cancellation": "Cancellation flexibility available",
        "facilities": "WiFi Air conditioning Kitchen",
        "rating": 4.5,
        "photoUrl": "https://i.ibb.co/y49kXqH/4c8e3c939e7a529754a0526ea5107065.jpg",
        "price": 26,
        "category": "Nilgiri Nilachol"
    }
]
