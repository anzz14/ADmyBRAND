// Sample Lottie animation data for marketing/AI theme
// You can replace this with your actual Lottie JSON file
export const marketingLottieData = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 120,
  "w": 400,
  "h": 400,
  "nm": "AI Marketing Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Circle",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [
          {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
          {"t": 120, "s": [360]}
        ]},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "d": 1,
              "ty": "el",
              "s": {"a": 0, "k": [100, 100]},
              "p": {"a": 0, "k": [0, 0]}
            },
            {
              "ty": "st",
              "c": {"a": 0, "k": [0.4, 0.5, 0.9, 1]},
              "o": {"a": 0, "k": 100},
              "w": {"a": 0, "k": 4}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.4, 0.5, 0.9, 0.3]},
              "o": {"a": 0, "k": 100}
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0]},
              "a": {"a": 0, "k": [0, 0]},
              "s": {"a": 0, "k": [100, 100]},
              "r": {"a": 0, "k": 0},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 120,
      "st": 0,
      "bm": 0
    }
  ]
}

// Alternative: You can also load external Lottie files
export const loadLottieFromUrl = async (url: string) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error('Failed to load Lottie animation:', error)
    return null
  }
}

// Popular free Lottie animations you can use:
export const lottieUrls = {
  aiRobot: 'https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json',
  dataAnalytics: 'https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json',
  marketing: 'https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json',
  automation: 'https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json',
  dashboard: 'https://assets6.lottiefiles.com/packages/lf20_1a8dx7zj.json'
}
