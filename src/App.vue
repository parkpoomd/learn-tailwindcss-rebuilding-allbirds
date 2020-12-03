<template>
  <div class="px-4 py-3 bg-gray-500 text-white">
    <p class="text-xs font-semibold text-center">
      Gift with confidence. Returns are extended till January 15th.
    </p>
  </div>
  <header
    class="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white"
  >
    <div class="absolute inset-0 shadow-lg opacity-50"></div>
    <div class="flex">
      <button class="h-8 w-8">
        <svg
          class="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div class="flex">
      <img class="h-9" src="./assets/allbirds-logo.svg" alt="Allbirds" />
    </div>
    <div class="flex">
      <button class="h-8 w-8">
        <svg
          class="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
  </header>
  <main>
    <div>
      <div class="flex items-center justify-between px-8 pt-4 pb-3 md:px-12">
        <div>
          <div class="text-xs font-semibold text-gray-900 space-x-1">
            <a href="#" class="underline">Home</a>
            <span>/</span>
          </div>
          <h1 class="text-lg font-bold text-gray-900 md:text-xl">
            Women's Shoes
          </h1>
        </div>
        <div>
          <button class="block h-6 w-6">
            <svg
              class="transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-gray-100 py-2 overflow-x-auto scrollbars-hidden">
        <div class="px-8 text-sm inline-flex space-x-5 md:px-12">
          <a
            href="#"
            class="font-medium text-gray-800 whitespace-nowrap"
            v-for="category in categories"
            :key="category"
            >{{ category }}</a
          >
        </div>
      </div>
    </div>
    <div>
      <div class="py-6 px-8 space-y-16 md:px-12">
        <div v-for="product in products" :key="product.name">
          <div>
            <div>
              <div>
                <h2 class="text-lg font-bold md:text-xl">{{ product.name }}</h2>
                <p class="text-sm font-medium text-gray-800">
                  {{ product.description }}
                </p>
              </div>
              <div class="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
                <div class="shadow-xl">
                  <div class="shadow-lg">
                    <a href="#">
                      <div>
                        <img
                          class="w-full"
                          :src="product.styles[0].image"
                          alt=""
                        />
                      </div>
                      <div class="px-4 pt-3">
                        <h3 class="text-sm font-bold">{{ product.name }}</h3>
                        <p class="mt-1 text-sm font-medium text-gray-800">
                          {{ product.styles[0].name }}
                        </p>
                      </div>
                    </a>
                    <div class="mt-1 px-4 pb-4">
                      <p class="text-sm font-medium text-gray-800">
                        {{ product.styles[0].price }}
                      </p>
                      <div
                        class="mt-4 flex items-center space-x-6 md:space-x-2"
                      >
                        <span
                          v-for="(style, i) in product.styles.slice(0, 5)"
                          :key="style.name"
                          class="md:flex-1 md:min-w-0 md:flex"
                        >
                          <button
                            class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none md:rounded-none md:w-full md:aspect-w-1 md:aspect-h-1 md:border-0"
                            :class="
                              i === 0
                                ? 'ring-2 ring-offset-1 ring-gray-300 md:ring-0'
                                : ''
                            "
                          >
                            <span class="sr-only">{{ style.name }}</span>
                            <span
                              class="h-full w-full flex flex-col transform -rotate-45 md:hidden"
                            >
                              <span
                                class="h-3 w-6"
                                :style="{ backgroundColor: style.colors[0] }"
                              ></span>
                              <span
                                class="h-3 w-6"
                                :style="{ backgroundColor: style.colors[1] }"
                              ></span>
                            </span>
                            <span class="hidden md:h-full md:w-full md:flex">
                              <img :src="style.image" alt="" />
                              <span
                                class="absolute inset-0"
                                :class="
                                  i === 0
                                    ? 'md:ring-1 md:ring-inset md:ring-offset-0 md:ring-gray-300'
                                    : ''
                                "
                              ></span>
                            </span>
                          </button>
                        </span>
                        <span class="md:flex-1 md:min-w-0 md:flex">
                          <button
                            type="button"
                            class="h-7 w-7 border rounded-full flex items-center justify-center text-gray-600 hover:border-gray-400 md:aspect-w-1 md:aspect-h-1 md:w-full md:rounded-none"
                          >
                            <span class="flex items-center justify-center">
                              <svg
                                class="h-4 w-4 md:h-7 md:w-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="border-t">
                      <button
                        class="px-4 py-2 text-sm w-full flex justify-between"
                      >
                        <span class="font-semibold">Quick Add</span>
                        <span>
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="relative">
                    <img class="w-full" :src="product.previewImage" alt="" />
                    <div class="absolute inset-0">
                      <div
                        class="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-900 opacity-95"
                      ></div>
                      <div class="absolute inset-x-0 bottom-0">
                        <p class="px-6 pb-6 font-bold text-white capitalize">
                          {{ product.previewText }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="bg-gray-800 py-12">
    <div class="px-6">
      <form action="#">
        <div>
          <label
            for="email_address"
            class="block text-white text-sm font-medium"
            >Enter your email to stay in touch!</label
          >
          <div class="mt-1.5 relative">
            <input
              type="text"
              name="email"
              id="email"
              class="block w-full text-white bg-gray-600 border-2 border-transparent focus:border-white focus:ring-0 transition"
            />
            <div
              class="absolute inset-0 border-b-2 border-white pointer-events-none"
              aria-hidden
            ></div>
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="block w-full px-4 py-3 rounded bg-gray-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categories: [
        "Women's Running Shoes",
        'Everyday Sneakers',
        'Slip-Ons',
        'High Tops',
        'Boat Shoes',
        'Flats',
        'Weather Repellent Shoes'
      ],
      products: [
        {
          name: "Women's Wool Runner Mizzles",
          description:
            'Our weather-ready sneaker made with merino wool and Puddle Guard.',
          previewText: 'Cozy sneaker, storm weather',
          previewImage:
            'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/7iZtj7xuQisv6WANcLi0Jw/bb54f0d33833ecf0fd69507fc658c9e8/W_PCT_WRM.jpg',
          styles: [
            {
              name: 'Natural Gray (Cream Sole)',
              price: '$115',
              colors: ['#585c60', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_600,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MNCW_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_NATURAL_GREY_CREAM_1a3541d8-85c9-4104-b4a8-ebf1ccb5c75a.png?v=1598997117'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['#353946', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['#28282c', '#434345'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Cardamom (Cream Sole)',
              price: '$115',
              colors: ['#9d957a', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Aurora (Cream)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'True Black (Black Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            }
          ]
        },
        {
          name: "Women's Tree Dashers",
          description:
            'Our running shoe designed with breathable Tree material.',
          previewText: 'Cozy sneaker, storm weather',
          previewImage:
            'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/7iZtj7xuQisv6WANcLi0Jw/bb54f0d33833ecf0fd69507fc658c9e8/W_PCT_WRM.jpg',
          styles: [
            {
              name: 'Natural Gray (Cream Sole)',
              price: '$115',
              colors: ['#585c60', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['#353946', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['#28282c', '#434345'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Cardamom (Cream Sole)',
              price: '$115',
              colors: ['#9d957a', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Aurora (Cream)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'True Black (Black Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            }
          ]
        },
        {
          name: "Women's Wool Dasher Mizzles",
          description:
            'Our weather-ready running shoe made with ZQ merino wool and Puddle Guard®.',
          previewText: 'Cozy sneaker, storm weather',
          previewImage:
            'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/7iZtj7xuQisv6WANcLi0Jw/bb54f0d33833ecf0fd69507fc658c9e8/W_PCT_WRM.jpg',
          styles: [
            {
              name: 'Natural Gray (Cream Sole)',
              price: '$115',
              colors: ['#585c60', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7zH6z1ZICqNsobuE3elfMA/2'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['#353946', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['#28282c', '#434345'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Cardamom (Cream Sole)',
              price: '$115',
              colors: ['#9d957a', '#e2e2da'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Aurora (Cream)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            },
            {
              name: 'True Black (Black Sole)',
              price: '$115',
              colors: ['#e7e5e2', '#bfbab5'],
              image:
                'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/1'
            }
          ]
        }
      ]
    }
  }
}
</script>
