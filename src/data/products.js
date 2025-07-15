const products = [
  {
    "id": 1,
    "name": "Red Apples",
    "weight": "1lb",
    "price": 1.6,
    "originalPrice": 2.0,
    "discount": 20,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75",
    "rating": 4.28,
    "availability": "4 pieces available",
    "description": "Red Apples is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 2,
    "name": "Baby Spinach",
    "weight": "2 Pfund",
    "price": 0.6,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
    "rating": 4.58,
    "availability": "19 pieces available",
    "description": "Baby Spinach is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 3,
    "name": "Blueberries",
    "weight": "1lb",
    "price": 3.0,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
    "rating": 4.5,
    "availability": "1 pieces available",
    "description": "Blueberries is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 4,
    "name": "Brussels Sprout",
    "weight": "2lbs",
    "price": 1.2,
    "originalPrice": 1.5,
    "discount": 15,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75",
    "rating": 4.13,
    "availability": "11 pieces available",
    "description": "Brussels Sprout is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 5,
    "name": "Clementines",
    "weight": "1lb",
    "price": 2.5,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75",
    "rating": 3.88,
    "availability": "17 pieces available",
    "description": "Clementines is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 6,
    "name": "Product 6",
    "weight": "1lb",
    "price": 2.46,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75",
    "rating": 3.5,
    "availability": "9 pieces available",
    "description": "Product 6 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75", 
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 7,
    "name": "Cucumber",
    "weight": "1lb",
    "price": 2.16,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",
    "rating": 3.64,
    "availability": "20 pieces available",
    "description": "Product 7 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",

    ]
  },
  {
    "id": 8,
    "name": "Dates",
    "weight": "5lb",
    "price": 3.23,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75",
    "rating": 3.75,
    "availability": "12 pieces available",
    "description": "Product 8 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 9,
    "name": "Green Beans",
    "weight": "3lb",
    "price": 1.35,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75",
    "rating": 3.45,
    "availability": "9 pieces available",
    "description": "Product 9 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 10,
    "name": "Lime",
    "weight": "4lb",
    "price": 1.36,
    "image":  "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75",
    "rating": 4.81,
    "availability": "15 pieces available",
    "description": "Product 10 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75",
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75",
         "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75",
          "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 11,
    "name": "Mango",
    "weight": "3lb",
    "price": 1.8,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75",
    "rating": 3.64,
    "availability": "13 pieces available",
    "description": "Product 11 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75", 
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75",
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75",
         "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 12,
    "name": "Pepper",
    "weight": "1lb",
    "price": 3.77,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
    "rating": 4.97,
    "availability": "16 pieces available",
    "description": "Product 12 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
         "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
          "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 13,
    "name": "Pears",
    "weight": "1lb",
    "price": 3.93,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75",
    "rating": 4.56,
    "availability": "5 pieces available",
    "description": "Product 13 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 14,
    "name": "Peeled Baby Carrot",
    "weight": "5lb",
    "price": 1.29,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75",
    "rating": 4.54,
    "availability": "17 pieces available",
    "description": "Product 14 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 15,
    "name": "Cherry",
    "weight": "1lb",
    "price": 1.21,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75",
    "rating": 4.99,
    "availability": "4 pieces available",
    "description": "Product 15 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 16,
    "name": "Strawberry",
    "weight": "1lb",
    "price": 1.87,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75",
    "rating": 4.36,
    "availability": "19 pieces available",
    "description": "Product 16 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 17,
    "name": "Mix Vegetable Platter",
    "weight": "3lb",
    "price": 2.06,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75",
    "rating": 3.17,
    "availability": "6 pieces available",
    "description": "Product 17 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 18,
    "name": "Fresh Beef",
    "weight": "5lb",
    "price": 3.64,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75",
    "rating": 4.99,
    "availability": "20 pieces available",
    "description": "Product 18 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 19,
    "name": "Lemon",
    "weight": "3lb",
    "price": 1.16,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75",
    "rating": 4.12,
    "availability": "13 pieces available",
    "description": "Product 19 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 20,
    "name": "Signature Salmon",
    "weight": "1lb",
    "price": 3.62,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75",
    "rating": 3.46,
    "availability": "2 pieces available",
    "description": "Product 20 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75"
      
    ]
  },
  {
    "id": 21,
    "name": "Sliced Turkey Breast",
    "weight": "1lb",
    "price": 3.78,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75",
    "rating": 4.63,
    "availability": "20 pieces available",
    "description": "Product 21 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75"
     
    ]
  },
  {
    "id": 22,
    "name": "Cod Fillet",
    "weight": "1lb",
    "price": 3.88,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75",
    "rating": 4.03,
    "availability": "1 pieces available",
    "description": "Product 22 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 23,
    "name": "Swordfish Fillet",
    "weight": "2lb",
    "price": 3.13,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75",
    "rating": 4.41,
    "availability": "1 pieces available",
    "description": "Product 23 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75"
    
    ]
  },
  {
    "id": 24,
    "name": "Halibut Fillet",
    "weight": "1lb",
    "price": 2.25,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75",
    "rating": 4.56,
    "availability": "6 pieces available",
    "description": "Product 24 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75"
     
    ]
  },
  {
    "id": 25,
    "name": "Tilapia Fillet",
    "weight": "3lb",
    "price": 1.56,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75",
    "rating": 4.26,
    "availability": "2 pieces available",
    "description": "Product 25 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
    "Category A",
    "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 26,
    "name": "Chicken Thighs",
    "weight": "2lb",
    "price": 2.05,
    "image":  "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75",
    "rating": 3.73,
    "availability": "14 pieces available",
    "description": "Product 26 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 27,
    "name": "Chicken Breast",
    "weight": "1lb",
    "price": 2.91,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75",
    "rating": 3.35,
    "availability": "5 pieces available",
    "description": "Product 27 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 28,
    "name": "Beef Steak",
    "weight": "4lb",
    "price": 1.83,
    "image":"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75",
    "rating": 3.79,
    "availability": "5 pieces available",
    "description": "Product 28 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 29,
    "name": "Belmont Custard Cream",
    "weight": "3lb",
    "price": 3.96,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75",
    "rating": 3.08,
    "availability": "6 pieces available",
    "description": "Product 29 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 30,
    "name": "Crawford Digestives",
    "weight": "3lb",
    "price": 3.11,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75",
    "rating": 3.58,
    "availability": "19 pieces available",
    "description": "Product 30 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 31,
    "name": "Crawford Shortie",
    "weight": "4lb",
    "price": 1.87,
    "image":  "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75",
    "rating": 4.28,
    "availability": "7 pieces available",
    "description": "Product 31 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75",
    ]
  },
  {
    "id": 32,
    "name": "Juli S Cheese Crackers",
    "weight": "5lb",
    "price": 2.5,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75",
    "rating": 4.04,
    "availability": "18 pieces available",
    "description": "Product 32 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 33,
    "name": "Happy Egg Organic",
    "weight": "4lb",
    "price": 1.57,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75",
    "rating": 3.44,
    "availability": "19 pieces available",
    "description": "Product 33 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
       "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 34,
    "name": "Cp Omega",
    "weight": "4lb",
    "price": 1.41,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75",
    "rating": 3.36,
    "availability": "8 pieces available",
    "description": "Product 34 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 35,
    "name": "Lotus Biscoff",
    "weight": "1lb",
    "price": 1.11,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75",
    "rating": 4.76,
    "availability": "18 pieces available",
    "description": "Product 35 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 36,
    "name": "Dairy Milk Crispello",
    "weight": "4lb",
    "price": 3.13,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75",
    "rating": 3.75,
    "availability": "2 pieces available",
    "description": "Product 36 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 37,
    "name": "Cadbury Zip",
    "weight": "3lb",
    "price": 3.39,
    "image":"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75",
    "rating": 3.26,
    "availability": "18 pieces available",
    "description": "Product 37 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 38,
    "name": "Everyday Essentials Wholemeal Bread",
    "weight": "4lb",
    "price": 3.13,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F350%2FEveryday_Essentials_Wholemeal_Bread.jpg&w=1920&q=75",
    "rating": 3.31,
    "availability": "20 pieces available",
    "description": "Product 38 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F350%2FEveryday_Essentials_Wholemeal_Bread.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F350%2FEveryday_Essentials_Wholemeal_Bread.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F350%2FEveryday_Essentials_Wholemeal_Bread.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F350%2FEveryday_Essentials_Wholemeal_Bread.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 39,
    "name": "Roberts Seeded Bloomer",
    "weight": "2lb",
    "price": 3.66,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F352%2Froberts_Seriously_Seeded_Bloomer.jpg&w=1920&q=75",
    "rating": 4.67,
    "availability": "4 pieces available",
    "description": "Product 39 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F352%2Froberts_Seriously_Seeded_Bloomer.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F352%2Froberts_Seriously_Seeded_Bloomer.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F352%2Froberts_Seriously_Seeded_Bloomer.jpg&w=1920&q=75",
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F352%2Froberts_Seriously_Seeded_Bloomer.jpg&w=1920&q=75"
    ]
  },
  {
    "id": 40,
    "name": "Snikers Snack Size",
    "weight": "3lb",
    "price": 3.84,
    "image": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75",
    "rating": 3.47,
    "availability": "6 pieces available",
    "description": "Product 40 is a high-quality product, fresh and perfect for your kitchen needs.",
    "categories": [
      "Category A",
      "Category B"
    ],
    "seller": "Grocery Shop",
    "images": [
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75",
     "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75"
    ]
  }
];

export default products;