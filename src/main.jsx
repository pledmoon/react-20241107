import React, { createElement } from 'react'
import { createRoot } from 'react-dom/client'

import { restaurants} from '../materials/mock.js'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
  createElement(
    'main',
    null,

    createElement('h3', null, restaurants[0]?.name ?? '-'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[0]?.menu[0]?.name),
      createElement('li', null, restaurants[0]?.menu[1]?.name),
      createElement('li', null, restaurants[0]?.menu[2]?.name),
    ),
    createElement('h3', null, 'Отзывы'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[0]?.reviews[0]?.text),
      createElement('li', null, restaurants[0]?.reviews[1]?.text),
    ),

    createElement('h3', null, restaurants[1]?.name ?? '-'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[1]?.menu[0]?.name),
      createElement('li', null, restaurants[1]?.menu[1]?.name),
    ),
    createElement('h3', null, 'Отзывы'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[1]?.reviews[0]?.text),
      createElement('li', null, restaurants[1]?.reviews[1]?.text),
    ),

    createElement('h3', null, restaurants[2]?.name ?? '-'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[2]?.menu[0]?.name),
      createElement('li', null, restaurants[2]?.menu[1]?.name),
      createElement('li', null, restaurants[2]?.menu[2]?.name),
    ),
    createElement('h3', null, 'Отзывы'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[2]?.reviews[0]?.text),
    ),

    createElement('h3', null, restaurants[3]?.name ?? '-'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[3]?.menu[0]?.name),
      createElement('li', null, restaurants[3]?.menu[1]?.name),
    ),
    createElement('h3', null, 'Отзывы'),
    createElement(
      'ul',
      null,
      createElement('li', null, restaurants[3]?.reviews[0]?.text),
      createElement('li', null, restaurants[3]?.reviews[1]?.text),
    ),

    createElement('hr', null),

    restaurants.map((restaurant) => {
      return (
        createElement(
          React.Fragment,
          {
            key: restaurant?.id,
          },
          createElement(
            'h3',
            null,
            restaurant?.name
          ),
          createElement(
            'ul',
            null,
            restaurant.menu.map((menu) => {
              return createElement(
                'li',
                {
                  key: menu?.id,
                },
                menu?.name
              )
            })
          ),
          createElement(
            'h3',
            null,
            'Отзывы'
          ),
          createElement(
            'ul',
            null,
            restaurant.reviews.map((review) => {
              return createElement(
                'li',
                {
                  key: review?.id,
                },
                review?.text
              )
            })
          ),
        )
      )
    }),
  ),
)

