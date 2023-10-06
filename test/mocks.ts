export const testData = {
  id: 1,
  name: "Test Food",
  reviews: [{
    review: "Wow... Loved this place.",
    numberOfLikes: 1
  },
  {
    review: "Crust is not good.",
    numberOfLikes: 0
  },
  {
    review: "Not tasty and the texture was just nasty.",
    numberOfLikes: 0
  }]
}

export const apiResponse = [
  {
    type: 'positive',
    score: 0.69803975325,
    ratio: 1,
    keywords: [{
      word: "love",
      score: 0.917220858
    },
    {
      word: "wow",
      score: 0.861439214
    },
    {
      word: "place",
      score: 0.152059727
    }],
    version: '7.5.7',
    author: 'twinword inc.',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
  {
    type: 'negative',
    score: -0.7841936745,
    ratio: -1,
    keywords: [{
      word: "good",
      score: -0.943387349
    },
    {
      word: "not",
      score: -0.625
    }],
    version: '7.5.7',
    author: 'twinword inc.',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
  {
    type: 'negative',
    score: -0.395480877,
    ratio: -0.804514320665926,
    keywords: [{
      word: "texture",
      score: 0.192192596
    },
    {
      word: "nasty",
      score: -0.956923508
    },
    {
      word: "not",
      score: -0.625
    },
    {
      word: "tasty",
      score: -0.192192596
    }],
    version: '7.5.7',
    author: 'twinword inc.',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
];

export const resultResponse = {
  id: 1,
  name: "Test Food",
  reviews: [{
    review: "Wow... Loved this place.",
    numberOfLikes: 1,
    sentiment: {
      type: "positive",
      score: 0.69803975325,
      ratio: 1,
      keywords: [{
          word: "love",
          score: 0.917220858
        },
        {
          word: "wow",
          score: 0.861439214
        },
        {
          word: "place",
          score: 0.152059727
        }
      ],
      version: "7.5.7",
      author: "twinword inc.",
      email: "help@twinword.com",
      result_code: "200",
      result_msg: "Success"
    }
  },
  {
    review: "Crust is not good.",
    numberOfLikes: 0,
    sentiment: {
      type: "negative",
      score: -0.7841936745,
      ratio: -1,
      keywords: [{
          word: "good",
          score: -0.943387349
        },
        {
          word: "not",
          score: -0.625
        }
      ],
      version: "7.5.7",
      author: "twinword inc.",
      email: "help@twinword.com",
      result_code: "200",
      result_msg: "Success"
    }
  },
  {
    review: "Not tasty and the texture was just nasty.",
    numberOfLikes: 0,
    sentiment: {
      type: "negative",
      score: -0.395480877,
      ratio: -0.804514320665926,
      keywords: [{
          word: "texture",
          score: 0.192192596
        },
        {
          word: "nasty",
          score: -0.956923508
        },
        {
          word: "not",
          score: -0.625
        },
        {
          word: "tasty",
          score: -0.192192596
        }
      ],
      version: "7.5.7",
      author: "twinword inc.",
      email: "help@twinword.com",
      result_code: "200",
      result_msg: "Success"
    }
  }]
}
