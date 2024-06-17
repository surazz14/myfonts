export const data = [
  {
    _id: {
      $oid: "666af0eddbe0ba7fbd7c2e3d",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    pull_request: {
      id: 123,
      url: "Test",
      title: "Feature/CWV-123",
      base_branch: "test",
    },
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "10 s",
      numericValue: 444,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.004",
      details: {
        items: [
          {
            cumulativeLayoutShiftMainFrame: 0.0036311770220287037,
            newEngineResult: {
              cumulativeLayoutShift: 0.0036311770220287037,
              cumulativeLayoutShiftMainFrame: 0.0036311770220287037,
            },
            newEngineResultDiffered: false,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.0036311770220287037,
      numericUnit: "unitless",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 547,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "table",
        items: [],
        headings: [],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.98,
      scoreDisplayMode: "numeric",
      displayValue: "0.9 s",
      numericValue: 934.1456412443729,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [],
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
        items: [],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        headings: [],
        overallSavingsMs: 0,
        type: "opportunity",
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        overallSavingsMs: 0,
        headings: [
          {
            subItemsHeading: {
              key: "location",
              valueType: "source-location",
            },
            key: "url",
            label: "URL",
            valueType: "url",
          },
          {
            valueType: "code",
            key: null,
            subItemsHeading: {
              key: "signal",
            },
          },
          {
            key: "wastedBytes",
            valueType: "bytes",
            label: "Potential Savings",
          },
        ],
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 52,
        type: "opportunity",
        items: [
          {
            totalBytes: 0,
            wastedBytes: 52,
            subItems: {
              type: "subitems",
              items: [
                {
                  location: {
                    column: 400,
                    line: 0,
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                    urlProvider: "network",
                    type: "source-location",
                  },
                  signal: "@babel/plugin-transform-classes",
                },
              ],
            },
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
          },
        ],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T13:15:25.801Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666aef273e63b09edd48afd5",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 469,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.004",
      details: {
        items: [
          {
            newEngineResult: {
              cumulativeLayoutShift: 0.0036311770220287037,
              cumulativeLayoutShiftMainFrame: 0.0036311770220287037,
            },
            newEngineResultDiffered: false,
            cumulativeLayoutShiftMainFrame: 0.0036311770220287037,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.0036311770220287037,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.6 s",
      numericValue: 588,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "table",
        items: [],
        headings: [],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "0.8 s",
      numericValue: 789.6255255679658,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        debugData: {
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
          type: "debugdata",
        },
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
        type: "opportunity",
        overallSavingsBytes: 0,
        headings: [],
        items: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        sortedBy: ["wastedBytes"],
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
        headings: [],
        overallSavingsMs: 0,
        overallSavingsBytes: 0,
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        items: [
          {
            wastedBytes: 52,
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
            subItems: {
              type: "subitems",
              items: [
                {
                  signal: "@babel/plugin-transform-classes",
                  location: {
                    line: 0,
                    type: "source-location",
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                    column: 400,
                    urlProvider: "network",
                  },
                },
              ],
            },
            totalBytes: 0,
          },
        ],
        overallSavingsMs: 0,
        overallSavingsBytes: 52,
        type: "opportunity",
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        headings: [
          {
            label: "URL",
            subItemsHeading: {
              key: "location",
              valueType: "source-location",
            },
            key: "url",
            valueType: "url",
          },
          {
            valueType: "code",
            subItemsHeading: {
              key: "signal",
            },
            key: null,
          },
          {
            key: "wastedBytes",
            valueType: "bytes",
            label: "Potential Savings",
          },
        ],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T13:07:51.943Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666aef253e63b09edd48afd3",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 513.4830800000001,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0",
      details: {
        items: [
          {
            cumulativeLayoutShiftMainFrame: 0,
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0,
              cumulativeLayoutShift: 0,
            },
            newEngineResultDiffered: false,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "0.7 s",
      numericValue: 693.4044000000001,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "table",
        items: [],
        headings: [],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.98,
      scoreDisplayMode: "numeric",
      displayValue: "0.9 s",
      numericValue: 946.0637219633537,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
        type: "opportunity",
        overallSavingsMs: 0,
        headings: [],
        items: [],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        type: "opportunity",
        items: [],
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        sortedBy: ["wastedBytes"],
        overallSavingsMs: 0,
        items: [
          {
            totalBytes: 0,
            wastedBytes: 52,
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
            subItems: {
              type: "subitems",
              items: [
                {
                  signal: "@babel/plugin-transform-classes",
                  location: {
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                    type: "source-location",
                    column: 400,
                    line: 0,
                    urlProvider: "network",
                  },
                },
              ],
            },
          },
        ],
        headings: [
          {
            valueType: "url",
            subItemsHeading: {
              valueType: "source-location",
              key: "location",
            },
            key: "url",
            label: "URL",
          },
          {
            key: null,
            subItemsHeading: {
              key: "signal",
            },
            valueType: "code",
          },
          {
            key: "wastedBytes",
            valueType: "bytes",
            label: "Potential Savings",
          },
        ],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        type: "opportunity",
        overallSavingsBytes: 52,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T13:07:49.402Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666aeeb23e63b09edd48afd1",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 504.5,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0",
      details: {
        items: [
          {
            newEngineResultDiffered: false,
            cumulativeLayoutShiftMainFrame: 0,
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0,
              cumulativeLayoutShift: 0,
            },
          },
        ],
        type: "debugdata",
      },
      numericValue: 0,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 0.95,
      scoreDisplayMode: "numeric",
      displayValue: "1.0 s",
      numericValue: 968.1624049999999,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        type: "table",
        headings: [],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.98,
      scoreDisplayMode: "numeric",
      displayValue: "1.0 s",
      numericValue: 962.3625682158931,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
        headings: [],
        items: [],
        type: "opportunity",
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        overallSavingsMs: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [],
        items: [],
        overallSavingsBytes: 0,
        type: "opportunity",
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        type: "opportunity",
        overallSavingsBytes: 52,
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
        headings: [
          {
            subItemsHeading: {
              key: "location",
              valueType: "source-location",
            },
            valueType: "url",
            key: "url",
            label: "URL",
          },
          {
            subItemsHeading: {
              key: "signal",
            },
            key: null,
            valueType: "code",
          },
          {
            valueType: "bytes",
            key: "wastedBytes",
            label: "Potential Savings",
          },
        ],
        sortedBy: ["wastedBytes"],
        items: [
          {
            wastedBytes: 52,
            totalBytes: 0,
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
            subItems: {
              items: [
                {
                  signal: "@babel/plugin-transform-classes",
                  location: {
                    column: 400,
                    line: 0,
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                    urlProvider: "network",
                    type: "source-location",
                  },
                },
              ],
              type: "subitems",
            },
          },
        ],
        overallSavingsMs: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T13:05:54.683Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666aed357d3741ee06111655",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "0.6 s",
      numericValue: 579.4603200000001,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0",
      details: {
        type: "debugdata",
        items: [
          {
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0,
              cumulativeLayoutShift: 0,
            },
            cumulativeLayoutShiftMainFrame: 0,
            newEngineResultDiffered: false,
          },
        ],
      },
      numericValue: 0,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "0.7 s",
      numericValue: 732.6137600000002,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "table",
        items: [],
        headings: [],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.98,
      scoreDisplayMode: "numeric",
      displayValue: "0.9 s",
      numericValue: 885.5111633867125,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        sortedBy: ["wastedBytes"],
        headings: [],
        overallSavingsBytes: 0,
        overallSavingsMs: 0,
        type: "opportunity",
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "opportunity",
        overallSavingsMs: 0,
        items: [],
        headings: [],
        sortedBy: ["wastedBytes"],
        debugData: {
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
          type: "debugdata",
        },
        overallSavingsBytes: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        overallSavingsMs: 0,
        items: [
          {
            wastedBytes: 52,
            totalBytes: 0,
            subItems: {
              type: "subitems",
              items: [
                {
                  signal: "@babel/plugin-transform-classes",
                  location: {
                    type: "source-location",
                    column: 400,
                    urlProvider: "network",
                    line: 0,
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                  },
                },
              ],
            },
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
          },
        ],
        headings: [
          {
            subItemsHeading: {
              key: "location",
              valueType: "source-location",
            },
            key: "url",
            label: "URL",
            valueType: "url",
          },
          {
            valueType: "code",
            subItemsHeading: {
              key: "signal",
            },
            key: null,
          },
          {
            label: "Potential Savings",
            key: "wastedBytes",
            valueType: "bytes",
          },
        ],
        type: "opportunity",
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 52,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T12:59:33.049Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666aec2290836e64fe04e6dc",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 498.3881,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0",
      details: {
        items: [
          {
            newEngineResultDiffered: false,
            cumulativeLayoutShiftMainFrame: 0,
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0,
              cumulativeLayoutShift: 0,
            },
          },
        ],
        type: "debugdata",
      },
      numericValue: 0,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "0.7 s",
      numericValue: 683.0573999999999,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        headings: [],
        type: "table",
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.96,
      scoreDisplayMode: "numeric",
      displayValue: "1.1 s",
      numericValue: 1073.1552905705598,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
        headings: [],
        overallSavingsBytes: 0,
        overallSavingsMs: 0,
        type: "opportunity",
        items: [],
        sortedBy: ["wastedBytes"],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "opportunity",
        items: [],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        overallSavingsBytes: 0,
        headings: [],
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        overallSavingsMs: 0,
        headings: [
          {
            label: "URL",
            subItemsHeading: {
              valueType: "source-location",
              key: "location",
            },
            valueType: "url",
            key: "url",
          },
          {
            key: null,
            valueType: "code",
            subItemsHeading: {
              key: "signal",
            },
          },
          {
            label: "Potential Savings",
            key: "wastedBytes",
            valueType: "bytes",
          },
        ],
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 52,
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        items: [
          {
            wastedBytes: 52,
            subItems: {
              type: "subitems",
              items: [
                {
                  signal: "@babel/plugin-transform-classes",
                  location: {
                    urlProvider: "network",
                    type: "source-location",
                    column: 400,
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                    line: 0,
                  },
                },
              ],
            },
            totalBytes: 0,
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
          },
        ],
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T12:54:58.934Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666aec0790836e64fe04e6da",
    },
    page_link:
      "https://8ee360-25.myshopify.com/?key=48faa36c9799b6d14aea2fb551fcbbdfc20d3a839045bce36430b72f565cfaac",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 498.3881,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0",
      details: {
        type: "debugdata",
        items: [
          {
            newEngineResultDiffered: false,
            cumulativeLayoutShiftMainFrame: 0,
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0,
              cumulativeLayoutShift: 0,
            },
          },
        ],
      },
      numericValue: 0,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "0.7 s",
      numericValue: 683.0573999999999,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [],
        items: [],
        type: "table",
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.96,
      scoreDisplayMode: "numeric",
      displayValue: "1.1 s",
      numericValue: 1073.1552905705598,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        overallSavingsMs: 0,
        overallSavingsBytes: 0,
        sortedBy: ["wastedBytes"],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        type: "opportunity",
        headings: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        sortedBy: ["wastedBytes"],
        type: "opportunity",
        headings: [],
        overallSavingsMs: 0,
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        items: [],
        overallSavingsBytes: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 0 KiB",
      details: {
        overallSavingsBytes: 52,
        type: "opportunity",
        overallSavingsMs: 0,
        headings: [
          {
            label: "URL",
            key: "url",
            valueType: "url",
            subItemsHeading: {
              valueType: "source-location",
              key: "location",
            },
          },
          {
            valueType: "code",
            subItemsHeading: {
              key: "signal",
            },
            key: null,
          },
          {
            label: "Potential Savings",
            key: "wastedBytes",
            valueType: "bytes",
          },
        ],
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        items: [
          {
            url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
            totalBytes: 0,
            subItems: {
              type: "subitems",
              items: [
                {
                  signal: "@babel/plugin-transform-classes",
                  location: {
                    type: "source-location",
                    column: 400,
                    urlProvider: "network",
                    url: "https://8ee360-25.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js",
                    line: 0,
                  },
                },
              ],
            },
            wastedBytes: 52,
          },
        ],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T12:54:31.992Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666ae9db9aa5d52ce10060f8",
    },
    page_link: "https://myfonts-test.netlify.app/",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 218,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 0.87,
      scoreDisplayMode: "numeric",
      displayValue: "0.109",
      details: {
        items: [
          {
            newEngineResult: {
              cumulativeLayoutShift: 0.10936329588014981,
              cumulativeLayoutShiftMainFrame: 0.10936329588014981,
            },
            cumulativeLayoutShiftMainFrame: 0.10936329588014981,
            newEngineResultDiffered: false,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.10936329588014981,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 247.5,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [
          {
            key: "node",
            valueType: "node",
          },
          {
            key: "url",
            valueType: "url",
            label: "URL",
          },
        ],
        type: "table",
        items: [
          {
            url: "https://myfonts-test.netlify.app/a.avif",
            node: {
              snippet:
                '<img src="/a.avif" alt="Vercel Logo" class="dark:invert ">',
              type: "node",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              boundingRect: {
                top: 414,
                width: 448,
                bottom: 638,
                left: 40,
                height: 224,
                right: 488,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,IMG",
              lhId: "1-2-IMG",
              nodeLabel: "Vercel Logo",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,IMG",
              lhId: "1-3-IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              nodeLabel: "Vercel Logo",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              boundingRect: {
                top: 414,
                right: 984,
                width: 448,
                height: 224,
                left: 536,
                bottom: 638,
              },
              type: "node",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              nodeLabel: "Vercel Logo",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,2,DIV,0,IMG",
              type: "node",
              lhId: "1-4-IMG",
              boundingRect: {
                right: 1480,
                top: 414,
                height: 224,
                width: 448,
                left: 1032,
                bottom: 638,
              },
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              boundingRect: {
                top: 414,
                width: 448,
                height: 224,
                left: 1528,
                bottom: 638,
                right: 1976,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,3,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              type: "node",
              lhId: "1-5-IMG",
              nodeLabel: "Vercel Logo",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
            },
          },
          {
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
              boundingRect: {
                right: 264,
                left: 16,
                top: 902,
                width: 248,
                height: 124,
                bottom: 1026,
              },
              snippet: '<img src="/c.avif" alt="">',
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-6-IMG",
              type: "node",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
            url: "https://myfonts-test.netlify.app/c.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              lhId: "1-7-IMG",
              type: "node",
              snippet: '<img src="/d.avif" alt="">',
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,IMG",
              boundingRect: {
                top: 902,
                height: 124,
                left: 280,
                bottom: 1026,
                width: 248,
                right: 528,
              },
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/e.avif",
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,2,DIV,0,IMG",
              type: "node",
              snippet: '<img src="/e.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              boundingRect: {
                height: 124,
                left: 544,
                top: 902,
                right: 791,
                bottom: 1026,
                width: 248,
              },
              lhId: "1-8-IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,3,DIV,0,IMG",
              boundingRect: {
                bottom: 1026,
                right: 1055,
                left: 807,
                top: 902,
                width: 248,
                height: 124,
              },
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/c.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              type: "node",
              lhId: "1-9-IMG",
            },
          },
          {
            node: {
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,4,DIV,0,IMG",
              boundingRect: {
                height: 124,
                left: 1071,
                bottom: 1026,
                top: 902,
                right: 1319,
                width: 248,
              },
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-10-IMG",
              snippet: '<img src="/d.avif" alt="">',
            },
            url: "https://myfonts-test.netlify.app/d.avif",
          },
        ],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.47,
      scoreDisplayMode: "numeric",
      displayValue: "2.4 s",
      numericValue: 2358.2078871915915,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 21 KiB",
      details: {
        overallSavingsMs: 0,
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        headings: [
          {
            key: "url",
            label: "URL",
            subItemsHeading: {
              key: "source",
              valueType: "code",
            },
            valueType: "url",
          },
          {
            valueType: "bytes",
            subItemsHeading: {
              key: "sourceBytes",
            },
            label: "Transfer Size",
            key: "totalBytes",
          },
          {
            label: "Potential Savings",
            subItemsHeading: {
              key: "sourceWastedBytes",
            },
            valueType: "bytes",
            key: "wastedBytes",
          },
        ],
        overallSavingsBytes: 21035,
        items: [
          {
            url: "https://myfonts-test.netlify.app/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",
            wastedPercent: 41.12745977284168,
            totalBytes: 51147,
            wastedBytes: 21035,
          },
        ],
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        overallSavingsBytes: 0,
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
        headings: [],
        items: [],
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [],
        sortedBy: ["wastedBytes"],
        type: "opportunity",
        overallSavingsBytes: 0,
        debugData: {
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
          type: "debugdata",
        },
        items: [],
        overallSavingsMs: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T12:45:15.960Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666ad3961552ebf378f38c2a",
    },
    page_link: "https://myfonts-test.netlify.app/",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 215,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 0.85,
      scoreDisplayMode: "numeric",
      displayValue: "0.117",
      details: {
        items: [
          {
            cumulativeLayoutShiftMainFrame: 0.11726939229680328,
            newEngineResultDiffered: false,
            newEngineResult: {
              cumulativeLayoutShift: 0.11726939229680328,
              cumulativeLayoutShiftMainFrame: 0.11726939229680328,
            },
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.11726939229680328,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.3 s",
      numericValue: 321,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [
          {
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              snippet:
                '<img src="/a.avif" alt="Vercel Logo" class="dark:invert ">',
              type: "node",
              nodeLabel: "Vercel Logo",
              boundingRect: {
                top: 414,
                height: 224,
                bottom: 638,
                left: 40,
                right: 488,
                width: 448,
              },
              lhId: "1-2-IMG",
            },
            url: "https://myfonts-test.netlify.app/a.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              lhId: "1-3-IMG",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              boundingRect: {
                top: 414,
                bottom: 638,
                right: 984,
                width: 448,
                left: 536,
                height: 224,
              },
              type: "node",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              nodeLabel: "Vercel Logo",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,2,DIV,0,IMG",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              nodeLabel: "Vercel Logo",
              boundingRect: {
                width: 448,
                left: 1032,
                height: 224,
                right: 1480,
                top: 414,
                bottom: 638,
              },
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              type: "node",
              lhId: "1-4-IMG",
            },
          },
          {
            node: {
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              nodeLabel: "Vercel Logo",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,3,DIV,0,IMG",
              lhId: "1-5-IMG",
              type: "node",
              boundingRect: {
                left: 1528,
                bottom: 638,
                top: 414,
                height: 224,
                width: 448,
                right: 1976,
              },
            },
            url: "https://myfonts-test.netlify.app/b.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              boundingRect: {
                right: 264,
                bottom: 1026,
                width: 248,
                top: 902,
                height: 124,
                left: 16,
              },
              snippet: '<img src="/c.avif" alt="">',
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
              lhId: "1-6-IMG",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              boundingRect: {
                width: 248,
                height: 124,
                top: 902,
                right: 528,
                bottom: 1026,
                left: 280,
              },
              type: "node",
              snippet: '<img src="/d.avif" alt="">',
              lhId: "1-7-IMG",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
          {
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,2,DIV,0,IMG",
              snippet: '<img src="/e.avif" alt="">',
              boundingRect: {
                right: 791,
                height: 124,
                top: 902,
                bottom: 1026,
                left: 544,
                width: 248,
              },
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              type: "node",
              lhId: "1-8-IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
            url: "https://myfonts-test.netlify.app/e.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              boundingRect: {
                top: 902,
                height: 124,
                left: 807,
                width: 248,
                bottom: 1026,
                right: 1055,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,3,DIV,0,IMG",
              type: "node",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/c.avif" alt="">',
              lhId: "1-9-IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              lhId: "1-10-IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/d.avif" alt="">',
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,4,DIV,0,IMG",
              boundingRect: {
                top: 902,
                height: 124,
                width: 248,
                left: 1071,
                right: 1319,
                bottom: 1026,
              },
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
        ],
        headings: [
          {
            key: "node",
            valueType: "node",
          },
          {
            label: "URL",
            key: "url",
            valueType: "url",
          },
        ],
        type: "table",
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.96,
      scoreDisplayMode: "numeric",
      displayValue: "1.1 s",
      numericValue: 1060.3594829197737,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 21 KiB",
      details: {
        overallSavingsBytes: 21035,
        type: "opportunity",
        debugData: {
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
          type: "debugdata",
        },
        headings: [
          {
            key: "url",
            label: "URL",
            subItemsHeading: {
              key: "source",
              valueType: "code",
            },
            valueType: "url",
          },
          {
            key: "totalBytes",
            subItemsHeading: {
              key: "sourceBytes",
            },
            valueType: "bytes",
            label: "Transfer Size",
          },
          {
            key: "wastedBytes",
            label: "Potential Savings",
            valueType: "bytes",
            subItemsHeading: {
              key: "sourceWastedBytes",
            },
          },
        ],
        sortedBy: ["wastedBytes"],
        items: [
          {
            wastedBytes: 21035,
            url: "https://myfonts-test.netlify.app/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",
            totalBytes: 51147,
            wastedPercent: 41.12745977284168,
          },
        ],
        overallSavingsMs: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
        headings: [],
        overallSavingsMs: 0,
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        type: "opportunity",
        items: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        overallSavingsBytes: 0,
        overallSavingsMs: 0,
        items: [],
        sortedBy: ["wastedBytes"],
        headings: [],
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T11:10:14.523Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666ad3961552ebf378f38c28",
    },
    page_link: "https://myfonts-test.netlify.app/",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 215,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 0.85,
      scoreDisplayMode: "numeric",
      displayValue: "0.117",
      details: {
        type: "debugdata",
        items: [
          {
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0.11726939229680328,
              cumulativeLayoutShift: 0.11726939229680328,
            },
            newEngineResultDiffered: false,
            cumulativeLayoutShiftMainFrame: 0.11726939229680328,
          },
        ],
      },
      numericValue: 0.11726939229680328,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.3 s",
      numericValue: 321,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [
          {
            key: "node",
            valueType: "node",
          },
          {
            label: "URL",
            valueType: "url",
            key: "url",
          },
        ],
        items: [
          {
            url: "https://myfonts-test.netlify.app/a.avif",
            node: {
              lhId: "1-2-IMG",
              boundingRect: {
                left: 40,
                top: 414,
                height: 224,
                width: 448,
                right: 488,
                bottom: 638,
              },
              snippet:
                '<img src="/a.avif" alt="Vercel Logo" class="dark:invert ">',
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,IMG",
              type: "node",
              nodeLabel: "Vercel Logo",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              boundingRect: {
                left: 536,
                width: 448,
                right: 984,
                bottom: 638,
                top: 414,
                height: 224,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,IMG",
              lhId: "1-3-IMG",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              type: "node",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              nodeLabel: "Vercel Logo",
            },
          },
          {
            node: {
              nodeLabel: "Vercel Logo",
              lhId: "1-4-IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,2,DIV,0,IMG",
              boundingRect: {
                width: 448,
                left: 1032,
                right: 1480,
                bottom: 638,
                height: 224,
                top: 414,
              },
              type: "node",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
            },
            url: "https://myfonts-test.netlify.app/b.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,3,DIV,0,IMG",
              type: "node",
              nodeLabel: "Vercel Logo",
              boundingRect: {
                left: 1528,
                top: 414,
                height: 224,
                width: 448,
                bottom: 638,
                right: 1976,
              },
              lhId: "1-5-IMG",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
            },
          },
          {
            node: {
              type: "node",
              boundingRect: {
                bottom: 1026,
                left: 16,
                top: 902,
                width: 248,
                right: 264,
                height: 124,
              },
              snippet: '<img src="/c.avif" alt="">',
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-6-IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
            },
            url: "https://myfonts-test.netlify.app/c.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,IMG",
              lhId: "1-7-IMG",
              type: "node",
              boundingRect: {
                height: 124,
                right: 528,
                top: 902,
                bottom: 1026,
                left: 280,
                width: 248,
              },
              snippet: '<img src="/d.avif" alt="">',
            },
          },
          {
            node: {
              type: "node",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/e.avif" alt="">',
              lhId: "1-8-IMG",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,2,DIV,0,IMG",
              boundingRect: {
                top: 902,
                bottom: 1026,
                right: 791,
                height: 124,
                left: 544,
                width: 248,
              },
            },
            url: "https://myfonts-test.netlify.app/e.avif",
          },
          {
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,3,DIV,0,IMG",
              boundingRect: {
                top: 902,
                right: 1055,
                width: 248,
                bottom: 1026,
                left: 807,
                height: 124,
              },
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              type: "node",
              snippet: '<img src="/c.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-9-IMG",
            },
            url: "https://myfonts-test.netlify.app/c.avif",
          },
          {
            node: {
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/d.avif" alt="">',
              boundingRect: {
                right: 1319,
                bottom: 1026,
                width: 248,
                top: 902,
                height: 124,
                left: 1071,
              },
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,4,DIV,0,IMG",
              lhId: "1-10-IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
            url: "https://myfonts-test.netlify.app/d.avif",
          },
        ],
        type: "table",
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.96,
      scoreDisplayMode: "numeric",
      displayValue: "1.1 s",
      numericValue: 1060.3594829197737,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 21 KiB",
      details: {
        headings: [
          {
            subItemsHeading: {
              key: "source",
              valueType: "code",
            },
            label: "URL",
            valueType: "url",
            key: "url",
          },
          {
            subItemsHeading: {
              key: "sourceBytes",
            },
            key: "totalBytes",
            valueType: "bytes",
            label: "Transfer Size",
          },
          {
            valueType: "bytes",
            key: "wastedBytes",
            label: "Potential Savings",
            subItemsHeading: {
              key: "sourceWastedBytes",
            },
          },
        ],
        sortedBy: ["wastedBytes"],
        debugData: {
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
          type: "debugdata",
        },
        items: [
          {
            totalBytes: 51147,
            wastedBytes: 21035,
            url: "https://myfonts-test.netlify.app/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",
            wastedPercent: 41.12745977284168,
          },
        ],
        type: "opportunity",
        overallSavingsMs: 0,
        overallSavingsBytes: 21035,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        headings: [],
        overallSavingsMs: 0,
        sortedBy: ["wastedBytes"],
        overallSavingsBytes: 0,
        type: "opportunity",
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        overallSavingsMs: 0,
        overallSavingsBytes: 0,
        type: "opportunity",
        items: [],
        headings: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T11:10:14.513Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666acc99013cb54ef00c10db",
    },
    page_link: "https://myfonts-test.netlify.app/",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.3 s",
      numericValue: 258,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 0.87,
      scoreDisplayMode: "numeric",
      displayValue: "0.112",
      details: {
        items: [
          {
            newEngineResult: {
              cumulativeLayoutShift: 0.11172480716415621,
              cumulativeLayoutShiftMainFrame: 0.11172480716415621,
            },
            newEngineResultDiffered: false,
            cumulativeLayoutShiftMainFrame: 0.11172480716415621,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.11172480716415621,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "20 ms",
      numericValue: 24,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.5 s",
      numericValue: 457,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [
          {
            valueType: "node",
            key: "node",
          },
          {
            key: "url",
            label: "URL",
            valueType: "url",
          },
        ],
        type: "table",
        items: [
          {
            url: "https://myfonts-test.netlify.app/a.avif",
            node: {
              type: "node",
              snippet:
                '<img src="/a.avif" alt="Vercel Logo" class="dark:invert ">',
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,IMG",
              lhId: "1-2-IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              boundingRect: {
                width: 448,
                top: 414,
                bottom: 638,
                left: 40,
                height: 224,
                right: 488,
              },
              nodeLabel: "Vercel Logo",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              nodeLabel: "Vercel Logo",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              boundingRect: {
                right: 984,
                width: 448,
                height: 224,
                left: 536,
                top: 414,
                bottom: 638,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,IMG",
              type: "node",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              lhId: "1-3-IMG",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              boundingRect: {
                bottom: 638,
                left: 1032,
                top: 414,
                width: 448,
                height: 224,
                right: 1480,
              },
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,2,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              nodeLabel: "Vercel Logo",
              lhId: "1-4-IMG",
            },
          },
          {
            node: {
              nodeLabel: "Vercel Logo",
              boundingRect: {
                width: 448,
                bottom: 638,
                top: 414,
                height: 224,
                right: 1976,
                left: 1528,
              },
              lhId: "1-5-IMG",
              type: "node",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,3,DIV,0,IMG",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
            },
            url: "https://myfonts-test.netlify.app/b.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              boundingRect: {
                top: 902,
                bottom: 1026,
                left: 16,
                width: 248,
                height: 124,
                right: 264,
              },
              type: "node",
              snippet: '<img src="/c.avif" alt="">',
              lhId: "1-6-IMG",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              boundingRect: {
                height: 124,
                width: 248,
                right: 528,
                top: 902,
                left: 280,
                bottom: 1026,
              },
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,IMG",
              snippet: '<img src="/d.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-7-IMG",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/e.avif",
            node: {
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-8-IMG",
              type: "node",
              snippet: '<img src="/e.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,2,DIV,0,IMG",
              boundingRect: {
                top: 902,
                width: 248,
                bottom: 1026,
                left: 544,
                height: 124,
                right: 791,
              },
            },
          },
          {
            node: {
              type: "node",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/c.avif" alt="">',
              boundingRect: {
                top: 902,
                right: 1055,
                width: 248,
                left: 807,
                bottom: 1026,
                height: 124,
              },
              lhId: "1-9-IMG",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,3,DIV,0,IMG",
            },
            url: "https://myfonts-test.netlify.app/c.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,4,DIV,0,IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              boundingRect: {
                left: 1071,
                width: 248,
                bottom: 1026,
                height: 124,
                right: 1319,
                top: 902,
              },
              snippet: '<img src="/d.avif" alt="">',
              type: "node",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-10-IMG",
            },
          },
        ],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.83,
      scoreDisplayMode: "numeric",
      displayValue: "1.5 s",
      numericValue: 1495.7609409403744,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 0,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 20 KiB",
      details: {
        headings: [
          {
            label: "URL",
            subItemsHeading: {
              valueType: "code",
              key: "source",
            },
            valueType: "url",
            key: "url",
          },
          {
            key: "totalBytes",
            valueType: "bytes",
            subItemsHeading: {
              key: "sourceBytes",
            },
            label: "Transfer Size",
          },
          {
            subItemsHeading: {
              key: "sourceWastedBytes",
            },
            label: "Potential Savings",
            valueType: "bytes",
            key: "wastedBytes",
          },
        ],
        sortedBy: ["wastedBytes"],
        type: "opportunity",
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 40,
            FCP: 0,
          },
        },
        overallSavingsBytes: 20813,
        items: [
          {
            url: "https://myfonts-test.netlify.app/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",
            wastedBytes: 20813,
            totalBytes: 51151,
            wastedPercent: 40.69003824545365,
          },
        ],
        overallSavingsMs: 40,
      },
      numericValue: 40,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        sortedBy: ["wastedBytes"],
        debugData: {
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
          type: "debugdata",
        },
        type: "opportunity",
        items: [],
        headings: [],
        overallSavingsBytes: 0,
        overallSavingsMs: 0,
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        overallSavingsMs: 0,
        overallSavingsBytes: 0,
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        type: "opportunity",
        sortedBy: ["wastedBytes"],
        headings: [],
        items: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T10:40:25.168Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666acb99013cb54ef00c10d9",
    },
    page_link: "https://myfonts-test.netlify.app/",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 212,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 0.76,
      scoreDisplayMode: "numeric",
      displayValue: "0.15",
      details: {
        items: [
          {
            newEngineResultDiffered: false,
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0.14964364432995692,
              cumulativeLayoutShift: 0.14964364432995692,
            },
            cumulativeLayoutShiftMainFrame: 0.14964364432995692,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.14964364432995692,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 241,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      details: {
        headings: [
          {
            valueType: "node",
            key: "node",
          },
          {
            label: "URL",
            key: "url",
            valueType: "url",
          },
        ],
        type: "table",
        items: [
          {
            node: {
              boundingRect: {
                left: 40,
                top: 414,
                width: 448,
                right: 488,
                height: 224,
                bottom: 638,
              },
              snippet:
                '<img src="/a.avif" alt="Vercel Logo" class="dark:invert ">',
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              lhId: "1-2-IMG",
              nodeLabel: "Vercel Logo",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,IMG",
              type: "node",
            },
            url: "https://myfonts-test.netlify.app/a.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              type: "node",
              nodeLabel: "Vercel Logo",
              lhId: "1-3-IMG",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              boundingRect: {
                right: 984,
                left: 536,
                top: 414,
                width: 448,
                height: 224,
                bottom: 638,
              },
            },
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,2,DIV,0,IMG",
              nodeLabel: "Vercel Logo",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              type: "node",
              lhId: "1-4-IMG",
              boundingRect: {
                width: 448,
                top: 414,
                bottom: 638,
                height: 224,
                right: 1480,
                left: 1032,
              },
            },
          },
          {
            node: {
              nodeLabel: "Vercel Logo",
              lhId: "1-5-IMG",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              boundingRect: {
                bottom: 638,
                width: 448,
                right: 1976,
                height: 224,
                top: 414,
                left: 1528,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,3,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              type: "node",
            },
            url: "https://myfonts-test.netlify.app/b.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              lhId: "1-6-IMG",
              boundingRect: {
                top: 902,
                bottom: 1026,
                width: 248,
                height: 124,
                right: 264,
                left: 16,
              },
              type: "node",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/c.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              type: "node",
              boundingRect: {
                right: 528,
                width: 248,
                bottom: 1026,
                top: 902,
                height: 124,
                left: 280,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-7-IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/d.avif" alt="">',
            },
          },
          {
            url: "https://myfonts-test.netlify.app/e.avif",
            node: {
              boundingRect: {
                bottom: 1026,
                right: 791,
                left: 544,
                top: 902,
                height: 124,
                width: 248,
              },
              type: "node",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-8-IMG",
              snippet: '<img src="/e.avif" alt="">',
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,2,DIV,0,IMG",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              type: "node",
              boundingRect: {
                bottom: 1026,
                top: 902,
                right: 1055,
                left: 807,
                height: 124,
                width: 248,
              },
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-9-IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              snippet: '<img src="/c.avif" alt="">',
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,3,DIV,0,IMG",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,4,DIV,0,IMG",
              snippet: '<img src="/d.avif" alt="">',
              type: "node",
              lhId: "1-10-IMG",
              boundingRect: {
                height: 124,
                left: 1071,
                bottom: 1026,
                right: 1319,
                width: 248,
                top: 902,
              },
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
            },
          },
        ],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.56,
      scoreDisplayMode: "numeric",
      displayValue: "2.1 s",
      numericValue: 2132.0185538767314,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 20 KiB",
      details: {
        overallSavingsMs: 0,
        overallSavingsBytes: 20807,
        sortedBy: ["wastedBytes"],
        headings: [
          {
            subItemsHeading: {
              key: "source",
              valueType: "code",
            },
            key: "url",
            label: "URL",
            valueType: "url",
          },
          {
            key: "totalBytes",
            valueType: "bytes",
            subItemsHeading: {
              key: "sourceBytes",
            },
            label: "Transfer Size",
          },
          {
            valueType: "bytes",
            label: "Potential Savings",
            key: "wastedBytes",
            subItemsHeading: {
              key: "sourceWastedBytes",
            },
          },
        ],
        items: [
          {
            totalBytes: 51135,
            wastedBytes: 20807,
            url: "https://myfonts-test.netlify.app/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",
            wastedPercent: 40.69003824545365,
          },
        ],
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        overallSavingsMs: 0,
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        overallSavingsBytes: 0,
        type: "opportunity",
        sortedBy: ["wastedBytes"],
        items: [],
        headings: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        sortedBy: ["wastedBytes"],
        type: "opportunity",
        overallSavingsBytes: 0,
        items: [],
        debugData: {
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
          type: "debugdata",
        },
        overallSavingsMs: 0,
        headings: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T10:36:09.817Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "666ac9b6937a8bc3c9f1716f",
    },
    page_link: "https://myfonts-test.netlify.app/",
    fcp: {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.2 s",
      numericValue: 210,
      numericUnit: "millisecond",
    },
    cls: {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      score: 0.8,
      scoreDisplayMode: "numeric",
      displayValue: "0.136",
      details: {
        items: [
          {
            cumulativeLayoutShiftMainFrame: 0.13601255037183083,
            newEngineResult: {
              cumulativeLayoutShiftMainFrame: 0.13601255037183083,
              cumulativeLayoutShift: 0.13601255037183083,
            },
            newEngineResultDiffered: false,
          },
        ],
        type: "debugdata",
      },
      numericValue: 0.13601255037183083,
      numericUnit: "unitless",
    },
    tbt: {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0 ms",
      numericValue: 0,
      numericUnit: "millisecond",
    },
    lcp: {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "0.3 s",
      numericValue: 291,
      numericUnit: "millisecond",
    },
    unsized_images: {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      details: {
        type: "table",
        headings: [
          {
            valueType: "node",
            key: "node",
          },
          {
            label: "URL",
            key: "url",
            valueType: "url",
          },
        ],
        items: [
          {
            url: "https://myfonts-test.netlify.app/a.avif",
            node: {
              nodeLabel: "Vercel Logo",
              lhId: "1-2-IMG",
              type: "node",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,IMG",
              boundingRect: {
                right: 488,
                height: 224,
                width: 448,
                left: 40,
                bottom: 638,
                top: 414,
              },
              snippet:
                '<img src="/a.avif" alt="Vercel Logo" class="dark:invert ">',
            },
          },
          {
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,IMG",
              lhId: "1-3-IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              boundingRect: {
                bottom: 638,
                top: 414,
                right: 984,
                width: 448,
                left: 536,
                height: 224,
              },
              type: "node",
              nodeLabel: "Vercel Logo",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
            },
            url: "https://myfonts-test.netlify.app/b.avif",
          },
          {
            node: {
              boundingRect: {
                left: 1032,
                top: 414,
                right: 1480,
                bottom: 638,
                height: 224,
                width: 448,
              },
              nodeLabel: "Vercel Logo",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,2,DIV,0,IMG",
              lhId: "1-4-IMG",
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              type: "node",
            },
            url: "https://myfonts-test.netlify.app/b.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/b.avif",
            node: {
              boundingRect: {
                top: 414,
                right: 1976,
                left: 1528,
                bottom: 638,
                width: 448,
                height: 224,
              },
              snippet:
                '<img src="/b.avif" alt="Vercel Logo" class="dark:invert">',
              nodeLabel: "Vercel Logo",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,1,DIV,0,DIV,3,DIV,0,IMG",
              selector: "div > div.flex > div.bg-green-200 > img.dark:invert",
              lhId: "1-5-IMG",
              type: "node",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-6-IMG",
              snippet: '<img src="/c.avif" alt="">',
              boundingRect: {
                right: 264,
                bottom: 1026,
                left: 16,
                width: 248,
                height: 124,
                top: 902,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              type: "node",
            },
          },
          {
            node: {
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-7-IMG",
              snippet: '<img src="/d.avif" alt="">',
              boundingRect: {
                bottom: 1026,
                width: 248,
                right: 528,
                top: 902,
                left: 280,
                height: 124,
              },
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              type: "node",
            },
            url: "https://myfonts-test.netlify.app/d.avif",
          },
          {
            node: {
              type: "node",
              snippet: '<img src="/e.avif" alt="">',
              lhId: "1-8-IMG",
              boundingRect: {
                top: 902,
                height: 124,
                bottom: 1026,
                width: 248,
                left: 544,
                right: 791,
              },
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,2,DIV,0,IMG",
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
            },
            url: "https://myfonts-test.netlify.app/e.avif",
          },
          {
            url: "https://myfonts-test.netlify.app/c.avif",
            node: {
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,3,DIV,0,IMG",
              snippet: '<img src="/c.avif" alt="">',
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-9-IMG",
              boundingRect: {
                bottom: 1026,
                top: 902,
                width: 248,
                height: 124,
                left: 807,
                right: 1055,
              },
              type: "node",
            },
          },
          {
            url: "https://myfonts-test.netlify.app/d.avif",
            node: {
              type: "node",
              boundingRect: {
                top: 902,
                left: 1071,
                height: 124,
                width: 248,
                bottom: 1026,
                right: 1319,
              },
              snippet: '<img src="/d.avif" alt="">',
              selector: "div.mt-[5rem] > div.md:flex > div > img",
              lhId: "1-10-IMG",
              nodeLabel: "div.mt-[5rem] > div.md:flex > div > img",
              path: "1,HTML,1,BODY,0,DIV,1,DIV,2,DIV,1,DIV,4,DIV,0,IMG",
            },
          },
        ],
      },
    },
    speed_index: {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      score: 0.96,
      scoreDisplayMode: "numeric",
      displayValue: "1.1 s",
      numericValue: 1056.5781411751607,
      numericUnit: "millisecond",
    },
    unused_javascript: {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      description:
        "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      score: 0.5,
      scoreDisplayMode: "metricSavings",
      displayValue: "Potential savings of 20 KiB",
      details: {
        headings: [
          {
            key: "url",
            valueType: "url",
            label: "URL",
            subItemsHeading: {
              valueType: "code",
              key: "source",
            },
          },
          {
            label: "Transfer Size",
            subItemsHeading: {
              key: "sourceBytes",
            },
            valueType: "bytes",
            key: "totalBytes",
          },
          {
            key: "wastedBytes",
            subItemsHeading: {
              key: "sourceWastedBytes",
            },
            valueType: "bytes",
            label: "Potential Savings",
          },
        ],
        overallSavingsMs: 0,
        items: [
          {
            wastedBytes: 20980,
            totalBytes: 51147,
            wastedPercent: 41.01926159080257,
            url: "https://myfonts-test.netlify.app/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",
          },
        ],
        sortedBy: ["wastedBytes"],
        type: "opportunity",
        overallSavingsBytes: 20980,
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    duplicated_javascript: {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        items: [],
        debugData: {
          type: "debugdata",
          metricSavings: {
            LCP: 0,
            FCP: 0,
          },
        },
        overallSavingsBytes: 0,
        sortedBy: ["wastedBytes"],
        headings: [],
        overallSavingsMs: 0,
        type: "opportunity",
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    legacy_javascript: {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      score: 1,
      scoreDisplayMode: "metricSavings",
      details: {
        debugData: {
          type: "debugdata",
          metricSavings: {
            FCP: 0,
            LCP: 0,
          },
        },
        sortedBy: ["wastedBytes"],
        headings: [],
        overallSavingsBytes: 0,
        overallSavingsMs: 0,
        type: "opportunity",
        items: [],
      },
      numericValue: 0,
      numericUnit: "millisecond",
    },
    createdAt: {
      $date: "2024-06-13T10:28:06.659Z",
    },
    __v: 0,
  },
];
