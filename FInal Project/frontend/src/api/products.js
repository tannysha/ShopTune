export const getProducts = () =>
    Promise.resolve([
      // Women's Clothing
      {
        product_id: 1,
        category: "women",
        product_name: "Floral Dress",
        description: "A light and breezy floral dress, perfect for spring and summer occasions.",
        price: "$48.00",
        image: "https://i.pinimg.com/736x/38/97/81/389781152aa6b118514518b2ec1078f4.jpg"
      },
      {
        product_id: 2,
        category: "women",
        product_name: "Summer Skirt",
        description: "A flowy summer skirt with vibrant patterns for a chic look.",
        price: "$38.00",
        image: "https://i.pinimg.com/736x/c0/82/15/c0821585b794fe9972e56d95482a5252.jpg"
      },
      {
        product_id: 3,
        category: "women",
        product_name: "Stylish Jacket",
        description: "A modern stylish jacket, great for layering in the fall.",
        price: "$65.00",
        image: "https://i.pinimg.com/736x/25/fc/a0/25fca0e30224c837c8878395aef69764.jpg"
      },
      {
        product_id: 4,
        category: "women",
        product_name: "Casual Top",
        description: "A simple yet elegant casual top for everyday wear.",
        price: "$28.00",
        image: "https://i.pinimg.com/736x/8c/f0/de/8cf0de9b2c5a43893c203078c308e35c.jpg"
      },
      {
        product_id: 5,
        category: "women",
        product_name: "Evening Gown",
        description: "A stunning evening gown for formal events and parties.",
        price: "$85.00",
        image: "https://i.pinimg.com/736x/ff/d7/e9/ffd7e9500357c74b59f381a8bb6e10fe.jpg"
      },
      {
        product_id: 6,
        category: "women",
        product_name: "Denim Jeans",
        description: "Classic denim jeans with a comfortable fit and stylish design.",
        price: "$55.00",
        image: "https://i.pinimg.com/736x/ac/e7/91/ace791114b3dcc3abc82c0a2551e80c0.jpg"
      },
      {
        product_id: 7,
        category: "women",
        product_name: "Sweater",
        description: "A cozy sweater for chilly days, available in various colors.",
        price: "$52.00",
        image: "https://i.pinimg.com/736x/5e/39/08/5e3908b65030939ebfc82db7e4207547.jpg"
      },
      {
        product_id: 8,
        category: "women",
        product_name: "Formal Skirt",
        description: "An elegant formal skirt suitable for office and events.",
        price: "$53.00",
        image: "https://i.pinimg.com/736x/36/51/4a/36514a4da9b56b8d8cd0c91f843583cf.jpg"
      },
      {
        product_id: 9,
        category: "women",
        product_name: "Jumpsuit",
        description: "A stylish jumpsuit for a bold and modern look.",
        price: "$54.00",
        image: "https://i.pinimg.com/736x/39/15/fb/3915fb580db78b6b69a4f6cb68de1115.jpg"
      },
      {
        product_id: 10,
        category: "women",
        product_name: "Party Top",
        description: "A glamorous top, perfect for parties and events.",
        price: "$25.00",
        image: "https://i.pinimg.com/736x/18/64/25/186425aa6f7dc6701a6644894d89c067.jpg"
      },
      {
        product_id: 11,
        category: "women",
        product_name: "Denim Jacket",
        description: "A timeless denim jacket to pair with any outfit.",
        price: "$54.00",
        image: "https://i.pinimg.com/736x/42/84/ea/4284eac6596a3d7caeba29be6484aeeb.jpg"
      },
      
      {
        product_id: 12,
        category: "women",
        product_name: "Lounge Shorts",
        description: "Comfortable lounge shorts for a relaxing day at home.",
        price: "$30.00",
        image: "https://i.pinimg.com/736x/25/8c/97/258c97d03c3aa702a61ff248eb31a887.jpg"
      },

      {
        product_id: 13,
        category: "women",
        product_name: "Casual T-shirt",
        description: "A simple yet stylish t-shirt for a casual, everyday look.",
        price: "$26.00",
        image: "https://i.pinimg.com/736x/81/aa/90/81aa9089f801f4be09f1a4034fdac494.jpg"
      },

      {
        product_id: 14,
        category: "women",
        product_name: "Midi Dress",
        description: "A chic midi dress, perfect for casual or semi-formal occasions.",
        price: "$30.00",
        image: "https://i.pinimg.com/736x/25/ad/58/25ad58a43eefcdd1513d712e56772bc4.jpg"
      },

      {
        product_id: 15,
        category: "women",
        product_name: "Cargo Pants",
        description: "Stylish cargo pants with a relaxed fit and functional pockets.",
        price: "$40.00",
        image: "https://i.pinimg.com/736x/75/e6/c7/75e6c7dc7ddabce04c8b38e9e17290c9.jpg"
      },

      // Men's Clothing
      {
        product_id: 16,
        category: "men",
        product_name: "Shirt",
        description: "A classic shirt perfect for both casual and formal wear.",
        price: "$30.00",
        image: "https://i.pinimg.com/736x/36/32/78/363278544b56949d552deb7b6109e84b.jpg"
      },
      {
        product_id: 17,
        category: "men",
        product_name: "Zip-up Jacket",
        description: "A stylish zip-up jacket to keep you warm and fashionable.",
        price: "$36.00",
        image: "https://i.pinimg.com/736x/22/32/fc/2232fce605c5302ef29b4e7e1e15c198.jpg"
      },
      {
        product_id: 18,
        category: "men",
        product_name: "Crew-neck Sweater",
        description: "Cozy crew-neck sweater for a relaxed yet classy look.",
        price: "$60.00",
        image: "https://i.pinimg.com/736x/17/ee/54/17ee54a9668e7e2a6af7b22b81571c10.jpg"
      },
      {
        product_id: 19,
        category: "men",
        product_name: "Casual T-shirt",
        description: "A simple and comfortable t-shirt for everyday wear.",
        price: "$25.00",
        image: "https://i.pinimg.com/736x/af/46/2f/af462ffd97111231914df66c98932a01.jpg"
      },
      {
        product_id: 20,
        category: "men",
        product_name: "Hoodie",
        description: "Warm and stylish hoodie for a laid-back vibe.",
        price: "$80.00",
        image: "https://i.pinimg.com/736x/39/14/6f/39146f56c1fc6f308b08fdd3f17f1e07.jpg"
      },
      {
        product_id: 21,
        category: "men",
        product_name: "Black Denim Jeans",
        description: "Sleek black denim jeans to complement any look.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/28/a6/37/28a6372725f4d552fecc270b98413b3b.jpg"
      },
      {
        product_id: 22,
        category: "men",
        product_name: "Formal Shirt",
        description: "Smart formal shirt for office wear or special occasions.",
        price: "$45.00",
        image: "https://i.pinimg.com/736x/e6/d2/9e/e6d29e0e01c8df55e11112ce99d93631.jpg"
      },
      {
        product_id: 23,
        category: "men",
        product_name: "Shorts",
        description: "Comfortable shorts ideal for summer days.",
        price: "$25.00",
        image: "https://i.pinimg.com/736x/f5/0a/7a/f50a7aa80e266795dfb28c288e0eef6a.jpg"
      },
      {
        product_id: 24,
        category: "men",
        product_name: "Turtle-neck",
        description: "A snug turtle-neck to keep you warm and stylish.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/85/04/1f/85041f93ef5634e67cda950f28e03571.jpg"
      },

      {
        product_id: 25,
        category: "men",
        product_name: "Cargo Pants",
        description: "Stylish cargo pants with multiple pockets for a rugged, casual look.",
        price: "$40.00",
        image: "https://i.pinimg.com/736x/fc/a6/e2/fca6e244e9c429b30129889e40560252.jpg"
      },

      {
        product_id: 26,
        category: "men",
        product_name: "Beige Shirt",
        description: "A classic beige shirt that's versatile and can be dressed up or down.",
        price: "$30.00",
        image: "https://i.pinimg.com/736x/77/5e/0f/775e0f3766a52158dff1e977ed9486a3.jpg"
      },

      {
        product_id: 27,
        category: "men",
        product_name: "Nylon Shorts",
        description: "Lightweight and comfortable nylon shorts, perfect for outdoor activities or casual wear.",
        price: "$25.00",
        image: "https://i.pinimg.com/736x/6c/b5/14/6cb5148a4582cff635508c0c95a54a08.jpg"
      },

      {
        product_id: 28,
        category: "men",
        product_name: "Varsity Jacket",
        description: "A sporty varsity jacket with a modern twist, perfect for layering during cooler months.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/a6/2e/52/a62e52a754ad82c6d6f4ba6e7d7600a7.jpg"
      },

      {
        product_id: 29,
        category: "men",
        product_name: "Wind Breaker",
        description: "A lightweight windbreaker to keep you protected from the elements while staying stylish.",
        price: "$40.00",
        image: "https://i.pinimg.com/736x/2a/ab/f8/2aabf8b27183dcc6644aecdd106a3eb1.jpg"
      },

      {
        product_id: 30,
        category: "men",
        product_name: "Blazer",
        description: "A sharp blazer to elevate your outfit, ideal for formal events or business settings.",
        price: "$60.00",
        image: "https://i.pinimg.com/736x/57/0b/4a/570b4a974934b646d5df45554565a608.jpg"
      },
  
      // Accessories
      {
        product_id: 31,
        category: "accessories",
        product_name: "Hat",
        description: "A stylish wide-brim hat perfect for sunny days.",
        price: "$25.00",
        image: "https://i.pinimg.com/736x/d3/89/fa/d389fa822d902863bdea073a80ad6c9b.jpg"
      },
      {
        product_id: 32,
        category: "accessories",
        product_name: "Chain Belt",
        description: "Elegant chain belt to complement any outfit.",
        price: "$35.00",
        image: "https://i.pinimg.com/736x/94/80/c5/9480c5a9005693b8970888f9fe7fc79f.jpg"
      },
      {
        product_id: 33,
        category: "accessories",
        product_name: "Bow-drop Earrings",
        description: "Chic earrings featuring delicate bow-shaped drops.",
        price: "$20.00",
        image: "https://i.pinimg.com/736x/9f/90/cf/9f90cf61c3f001a898e610d647a08e73.jpg"
      },
      {
        product_id: 34,
        category: "accessories",
        product_name: "Sunglasses",
        description: "Trendy sunglasses for a cool summer vibe.",
        price: "$25.00",
        image: "https://i.pinimg.com/736x/32/a9/17/32a91781dfd7d52794fadca615eb45bf.jpg"
      },
      {
        product_id: 35,
        category: "accessories",
        product_name: "Shoes",
        description: "Comfortable and stylish shoes for any occasion.",
        price: "$80.00",
        image: "https://i.pinimg.com/736x/64/7b/9f/647b9f9e11c3f55a37cbc237905e4163.jpg"
      },
      {
        product_id: 36,
        category: "accessories",
        product_name: "Heels",
        description: "Elegant high heels for a night out.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/f5/ed/97/f5ed97edcbc3ccb39b83445f05164798.jpg"
      },
      {
        product_id: 37,
        category: "accessories",
        product_name: "Beanie",
        description: "Cozy beanie to keep you warm and stylish.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/3a/67/1e/3a671e641c9bdf157736c9392940f439.jpg"
      },
      {
        product_id: 38,
        category: "accessories",
        product_name: "Claw Clip",
        description: "Trendy claw clip for effortless hairstyles.",
        price: "$10.00",
        image: "https://i.pinimg.com/736x/34/ed/22/34ed2271244d5fbf459c9cfcb80b4ab1.jpg"
      },
      {
        product_id: 39,
        category: "accessories",
        product_name: "Cuff Bracelet",
        description: "A bold cuff bracelet made from high-quality metal, featuring a minimalist design that adds a modern edge to any outfit.",
        price: "$30.00",
        image: "https://i.pinimg.com/736x/b3/1b/d7/b31bd7ea3c82a78b34df4c84893dea39.jpg"
      },

      {
        product_id: 40,
        category: "accessories",
        product_name: "Belt",
        description: "Classic leather belt with a sleek buckle.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/4e/86/13/4e861363ab72103b015d2bce479d740d.jpg"
      },

      {
        product_id: 41,
        category: "accessories",
        product_name: "Bandana",
        description: "A versatile and stylish bandana that can be worn as a headscarf, necktie, or accessory to enhance any casual outfit.",
        price: "$15.00",
        image: "https://i.pinimg.com/736x/c3/9f/5e/c39f5ef3d53909b5b240c70559cc89e2.jpg"
      },

      {
        product_id: 42,
        category: "accessories",
        product_name: "Watch",
        description: "A sleek and modern wristwatch with a minimalist design, combining style and function for everyday wear.",
        price: "$50.00",
        image: "https://i.pinimg.com/736x/7c/81/46/7c81464be231b2f66172cf6b93d4d55a.jpg"
      },

      {
        product_id: 43,
        category: "accessories",
        product_name: "Floral Claw-Clip",
        description: "A decorative floral claw clip, perfect for securing hair in a stylish and elegant way while adding a floral touch to your look..",
        price: "$10.00",
        image: "https://i.pinimg.com/736x/5d/df/3b/5ddf3b502cb84c7c8b0d16184beb1abb.jpg"
      },

      {
        product_id: 44,
        category: "accessories",
        product_name: "Tie",
        description: "A classic necktie in a variety of colors and patterns, perfect for elevating your formal or business attire.",
        price: "$20.00",
        image: "https://i.pinimg.com/736x/4d/7e/18/4d7e18703ff1f245cbb2489c26a3c6f0.jpg"
      },

      {
        product_id: 45,
        category: "accessories",
        product_name: "Cowboy Hat",
        description: "A bold cowboy hat, designed with a wide brim and traditional style to bring out your western flair.",
        price: "$30.00",
        image: "https://i.pinimg.com/736x/07/ff/7a/07ff7a05cce130ee4597cdb95cb509a9.jpg"
      }
    ]);
  