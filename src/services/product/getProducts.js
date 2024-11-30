import { useState } from "react";
import { GLOBAL } from "../../config/global";
import { HttpClient } from "../httpClient";

const http = HttpClient();

const initialState = [];

export const getProductsPromise = ({query = "", page = 1}) => {
  const url = `${GLOBAL.HOST}/walmart-search-by-keyword?keyword=${query}&page=${page}&sortBy=best_match`;
  return http.get(url);
};

export const useGetAccountStatements = () => {
  const [response, setResponse] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = (payload) => {
    setLoading(true);
    setError("");
    setResponse([]);
    getProductsPromise(payload)
      .then(({data}) => {
        const response = data.item.props.pageProps.initialData.searchResult.itemStacks[0]?.items || []
        console.log(response);
        const result = response.filter(x => x.canAddToCart && x.availabilityStatusDisplayValue === "In stock");
        setResponse(result);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return { response, loading, error, getProducts };
};


const DATA = {
  "__typename": "Product",
  "availabilityStatusDisplayValue": "In stock",
  "productLocationDisplayValue": "J13",
  "externalInfoUrl": "",
  "canonicalUrl": "/ip/ASUS-Chromebook-Plus-CX34-14-inch-Touch-Laptop-with-Google-AI-Intel-Core-i3-1215U-8GB-RAM-128GB-UFS-Gray/5098188355?classType=REGULAR",
  "canAddToCart": true,
  "showOptions": false,
  "description": "",
  "flag": "",
  "fulfillmentBadges": [],
  "fulfillmentType": "STORE",
  "id": "5WPXVVZCT2MC",
  "usItemId": "5098188355",
  "image": "https://i5.walmartimages.com/seo/ASUS-Chromebook-Plus-CX34-14-inch-Touch-Laptop-with-Google-AI-Intel-Core-i3-1215U-8GB-RAM-128GB-UFS-Gray_d997f03d-1bc9-47c4-bbc9-298728f21c01.ba34890f4a3989e998d4ac0698904b29.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
  "isOutOfStock": false,
  "name": "ASUS Chromebook Plus CX34 14 inch Touch Laptop with Google AI Intel Core i3-1215U 8GB RAM 128GB UFS Gray",
  "price": 329,
  "preOrder": {
      "isPreOrder": false,
      "streetDateDisplayable": null,
      "streetDateType": null,
      "releaseDate": null,
      "streetDate": null
  },
  "priceInfo": {
      "itemPrice": "$369.00",
      "linePrice": "$329.00",
      "wasPrice": "$369.00",
      "unitPrice": "",
      "shipPrice": "",
      "minPriceForVariant": "",
      "subscriptionPrice": "",
      "subscriptionString": "",
      "priceDisplayCondition": "",
      "finalCostByWeight": false,
      "submapType": "",
      "priceRangeString": "",
      "linePriceDisplay": "Now $329.00",
      "eaPricingPreText": "",
      "memberPriceString": "",
      "subscriptionPercentage": null,
      "savingsAmt": 40,
      "minPrice": 0,
      "savings": "SAVE $40.00",
      "subscriptionDualPrice": null,
      "eaPricingText": "",
      "isB2BPrice": false
  },
  "rating": {
      "averageRating": 4,
      "numberOfReviews": 73
  },
  "salesUnit": "EACH",
  "variantList": [],
  "isVariantTypeSwatch": false,
  "offerId": "0BD5AEB83FD43D5E85503E04231EBFBE",
  "sellerId": "F55CDC31AB754BB68FE0B39041159D63",
  "sellerName": "Walmart.com",
  "sponsoredProduct": {
      "spQs": "HU2G_1p-1zcDHRrB49pHGYH-P_qh9iiJU4nteXE1_y1gJa0A2XyT8t3wKZ8luJ_B-GK02FgQmJMRdxdeg9MxaYoZyQTNyIzTsKPFKA-vqkCUmWqItYvVja9-0XUyhlVSgNy8jry32BbYYsp5WhPgtcgbtXZndw3TEJP16SvkZWbQkqEorTSCKrR8XEoaS4OV-nrhVapHbzgHAGSXU6fHhqtR1QbxgkKpjPKGDhfNg6IVhNYW8YRRxPJuy0yrijQxXYYCjM656y_inA2jBouMCjpYWCu3O7wF62cHVmX9zos",
      "clickBeacon": "https://www.walmart.com/sp/track?adUid=a313f81d-fe7a-46fa-91c7-7a43649ede63&pgId=computer&spQs=HU2G_1p-1zcDHRrB49pHGYH-P_qh9iiJU4nteXE1_y1gJa0A2XyT8t3wKZ8luJ_B-GK02FgQmJMRdxdeg9MxaYoZyQTNyIzTsKPFKA-vqkCUmWqItYvVja9-0XUyhlVSgNy8jry32BbYYsp5WhPgtcgbtXZndw3TEJP16SvkZWbQkqEorTSCKrR8XEoaS4OV-nrhVapHbzgHAGSXU6fHhqtR1QbxgkKpjPKGDhfNg6IVhNYW8YRRxPJuy0yrijQxXYYCjM656y_inA2jBouMCjpYWCu3O7wF62cHVmX9zos&storeId=3081&pt=search&mloc=sp-search-middle&bkt=ace1_default%7Cace2_default%7Cace3_default%7Ccoldstart_on%7Csearch_default&pltfm=desktop&rdf=0&plmt=__plmt__&eventST=__eventST__&pos=__pos__&bt=__bt__&tn=WMT&wtn=elh9ie&tax=1085632_1071204_5186082_4126170_5681475&spqc=qenv&et=head_torso&st=head",
      "spTags": null,
      "viewBeacon": null
  },
  "quickShop": null,
  "numberOfReviews": 73,
  "imageInfo": {
      "id": "7E9DBE7053AF4BEC9EE15D69FB5CBD94",
      "name": "ASUS-Chromebook-Plus-CX34-14-inch-Touch-Laptop-with-Google-AI-Intel-Core-i3-1215U-8GB-RAM-128GB-UFS-Gray_d997f03d-1bc9-47c4-bbc9-298728f21c01.ba34890f4a3989e998d4ac0698904b29.jpeg",
      "thumbnailUrl": "https://i5.walmartimages.com/seo/ASUS-Chromebook-Plus-CX34-14-inch-Touch-Laptop-with-Google-AI-Intel-Core-i3-1215U-8GB-RAM-128GB-UFS-Gray_d997f03d-1bc9-47c4-bbc9-298728f21c01.ba34890f4a3989e998d4ac0698904b29.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      "size": "104-104",
      "allImages": []
  },
  "type": "REGULAR",
  "moqText": null,
  "specialBuy": false,
  "pac": null,
  "priceFlip": false,
  "buyNowEligible": true,
  "earlyAccessEvent": false,
  "preOrderBadge": null,
  "fulfillmentIcon": {
      "key": "SAVE_WITH_W_PLUS",
      "label": "Save with"
  },
  "preEarlyAccessEvent": false,
  "groupMetaData": {
      "groupType": null,
      "groupSubType": null,
      "numberOfComponents": 0,
      "groupComponents": null
  },
  "petRx": {
      "eligible": false,
      "singleDispense": null
  },
  "pglsCondition": null,
  "preownedCondition": null,
  "imageName": "ASUS-Chromebook-Plus-CX34-14-inch-Touch-Laptop-with-Google-AI-Intel-Core-i3-1215U-8GB-RAM-128GB-UFS-Gray_d997f03d-1bc9-47c4-bbc9-298728f21c01.ba34890f4a3989e998d4ac0698904b29.jpeg",
  "fulfillmentBadgeGroups": [
      {
          "text": "Free pickup ",
          "slaText": "today",
          "isSlaTextBold": true,
          "templates": null,
          "className": "dark-gray",
          "key": "FF_PICKUP"
      },
      {
          "text": "Delivery ",
          "slaText": "today",
          "isSlaTextBold": true,
          "templates": null,
          "className": "dark-gray",
          "key": "FF_DELIVERY"
      },
      {
          "text": "Free shipping, arrives ",
          "slaText": "today",
          "isSlaTextBold": true,
          "templates": null,
          "className": "dark-gray",
          "key": "FF_SHIPPING"
      }
  ],
  "weightIncrement": 1,
  "itemStackPosition": 1,
  "shortDescription": null,
  "isEarlyAccessItem": false,
  "fulfillmentTitle": "title_store_not_available",
  "buyBoxSuppression": false,
  "vision": {
      "ageGroup": null,
      "visionCenterApproved": false
  },
  "badge": {
      "text": "",
      "id": "",
      "type": "",
      "key": "",
      "bundleId": ""
  },
  "blitzItem": false,
  "socialProofBadges": null,
  "classType": "REGULAR",
  "annualEventV2": false,
  "rewards": null,
  "isLeftSideGridItem": false,
  "seeShippingEligibility": false,
  "itemType": null,
  "topResult": null,
  "isPreowned": false,
  "imageID": "7E9DBE7053AF4BEC9EE15D69FB5CBD94",
  "aspectInfo": {
      "name": null,
      "header": null,
      "id": null,
      "snippet": null
  },
  "externalInfo": null,
  "variantCriteria": [],
  "productLocation": [
      {
          "displayValue": "J13",
          "aisle": {
              "zone": "J",
              "aisle": 13
          }
      }
  ],
  "subscription": {
      "__typename": "SubscriptionData",
      "subscriptionEligible": false,
      "showSubscriptionCTA": false
  },
  "isBadSplit": false,
  "salesUnitType": "EACH",
  "seeSimilar": false,
  "additionalOfferCount": null,
  "isSponsoredFlag": true,
  "averageRating": 4.5,
  "arExperiences": {
      "isARHome": false,
      "isZeekit": false,
      "isAROptical": false
  },
  "swipeableImages": [],
  "fulfillmentSummary": [
      {
          "fulfillment": "DELIVERY",
          "storeId": "3081",
          "deliveryDate": null,
          "fulfillmentMethods": [
              "UNSCHEDULED",
              "SCHEDULED"
          ],
          "fulfillmentBadge": null
      },
      {
          "fulfillment": "PICKUP",
          "storeId": "3081",
          "deliveryDate": "2024-11-30T23:00:00.000Z",
          "fulfillmentMethods": [
              "UNSCHEDULED",
              "SCHEDULED"
          ],
          "fulfillmentBadge": null
      },
      {
          "fulfillment": "DELIVERY",
          "storeId": "0",
          "deliveryDate": "2024-11-30T22:59:00.000Z",
          "fulfillmentMethods": [
              "UNSCHEDULED"
          ],
          "fulfillmentBadge": null
      }
  ],
  "hasCarePlans": true,
  "imageSize": "",
  "promoDiscount": null,
  "addOnServices": null,
  "groupsV2": null,
  "quickShopCTALabel": null,
  "availabilityInNearbyStore": null,
  "checkStoreAvailabilityATC": false,
  "eventAttributes": {
      "priceFlip": false,
      "specialBuy": false
  },
  "productIndex": 1,
  "showAtc": true,
  "similarItems": false,
  "newConditionProductId": null,
  "keyAttributes": [
      {
          "displayEnum": "other",
          "value": "15.6 in"
      }
  ],
  "returnPolicy": {
      "returnable": null,
      "freeReturns": null,
      "returnWindow": {
          "value": null,
          "unitType": "Day"
      },
      "returnPolicyText": null
  },
  "annualEvent": false,
  "itemBeacon": null,
  "badges": {
      "flags": null,
      "tags": [
          {
              "__typename": "BaseBadge",
              "key": "SAVE_WITH_W_PLUS",
              "text": "Save with",
              "type": "ICON"
          }
      ],
      "groups": [
          {
              "__typename": "UnifiedBadgeGroup",
              "name": "fulfillment",
              "members": [
                  {
                      "__typename": "BadgeGroupMember",
                      "id": "L1051",
                      "key": "FF_PICKUP",
                      "memberType": "badge",
                      "otherInfo": null,
                      "rank": 1,
                      "slaText": "today",
                      "slaDate": null,
                      "styleId": "FF_STYLE",
                      "text": "Free pickup ",
                      "type": "LABEL",
                      "iconId": null,
                      "templates": null,
                      "badgeContent": null
                  },
                  {
                      "__typename": "BadgeGroupMember",
                      "id": "L1052",
                      "key": "FF_DELIVERY",
                      "memberType": "badge",
                      "otherInfo": null,
                      "rank": 2,
                      "slaText": "today",
                      "slaDate": null,
                      "styleId": "FF_STYLE",
                      "text": "Delivery ",
                      "type": "LABEL",
                      "iconId": null,
                      "templates": null,
                      "badgeContent": null
                  },
                  {
                      "__typename": "BadgeGroupMember",
                      "id": "L1053",
                      "key": "FF_SHIPPING",
                      "memberType": "badge",
                      "otherInfo": null,
                      "rank": 3,
                      "slaText": "today",
                      "slaDate": null,
                      "styleId": "FF_STYLE",
                      "text": "Free shipping, arrives ",
                      "type": "LABEL",
                      "iconId": null,
                      "templates": null,
                      "badgeContent": null
                  }
              ]
          }
      ],
      "groupsV2": null
  },
  "snapEligible": false,
  "mhmdFlag": false,
  "showBuyNow": false,
  "showExploreOtherConditionsCTA": false,
  "availabilityStatusV2": {
      "display": "In stock",
      "value": "IN_STOCK"
  },
  "category": {
      "categoryPathId": "0:3944:1089430:3951:1230091:1103213:8178966",
      "path": null
  },
  "shouldLazyLoad": false
}