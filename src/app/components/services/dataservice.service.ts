import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public packSelected: BehaviorSubject<any> = new BehaviorSubject<any>(0);


  constructor() { }

  private data: any;
  setData(data: any) {
    console.log(JSON.stringify(data));
    this.data = data;
  }
  getData(): any {
    return this.data;
  }

  clearData() {
    this.data = null;
  }



  getProductsData() {
    return [
      {
        id: 1,
        name: "Solo Trip to Kashmir",
        price: "53,000",
        image: "assets/banner-1.jpg",
        description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "gulmarg", "pahalgam"],
        rating: 8,
        packBadge: "BESTSELLING",
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": [
              "A representative will meet you at the prearranged location in Srinagar and provide a brief overview of the entire trip.",
              "After that, a motel in Srinagar will be where you are taken.",
              "Finish the check-in procedures, take some time to relax, and then go exploring Srinagar.",
              "Check out the Shalimar Bagh and Nishat Bagh, two of the most well-known Mughal Gardens (abode of love).",
              "The Zabarwan hills can be seen in the distance as these gardens encircle Dal Lake's eastern side for several kilometres.",
              "Spend some time by the lake in the evening and look around the neighbourhood."
            ]
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": [
              "The hotel's delicious brunch is served each morning with a stunning view of Dal Lake.",
              "Prepare yourself for the ultimate journey to Sonamarg after breakfast.",
              "Set out on a full-day trip to the lovely Sonmarg 'meadow of gold.'",
              "Stop at picturesque locations along the way to Sonamarg to take in the scenery and the surrounding natural beauty.",
              "When you get to Sonamarg, you can take a horse to the Thajiwas Glacier, where snow is present all year long.",
              "In Sonamarg, you can also take part in the most well-liked sports activities, like white water kayaking.",
              "Drive back to your accommodation in Srinagar after finishing your exploration of Sonamarg.",
              "Enjoy a night's sleep and supper at the Srinagar hotel."
            ]
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": [
              "Enjoy a delicious breakfast while taking in the stunning view of the snow-capped mountains before checking out of the hotel.",
              "You will then continue on to Pahalgam, also known as the shepherds' region.",
              "Once you arrive in Pahalgam, settle into your hotel and take some time to unwind before travelling to the lovely Aru Valley.",
              "A small hamlet called Aru Valley is renowned for its scenic beauty and offers a variety of adventurous activities.",
              "The Betaab Valley, one of the most well-known tourist locations that offers breathtaking views of the Lidder River while being surrounded by heavenly natural charm, should then be reached.",
              "Additionally, Chandanwari, which is known for its snow bridge and serves as the beginning point of the revered Amarnath Yatra, will be on your itinerary.",
              "Return to the hotel in Pahalgam and call it a day after a day filled with breathtaking sightseeing and exhilarating experiences."
            ]
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": [
              "Start your day early with a hearty breakfast, then set off on a scenic drive from Srinagar to Gulmarg.",
              "Upon reaching Gulmarg, your main activity will be the Gondola Ride, offering stunning panoramic views of the snow-covered mountains.",
              "As the cable car rises, enjoy the sweeping vistas of the valley below, revealing the hidden beauty of nature.",
              "Before heading back to Srinagar, take advantage of Gulmarg’s famous ski slopes and try your hand at adventure sports like skiing and paragliding.",
              "On the return journey, savor the natural beauty and snow-capped mountains that have accompanied you throughout the day.",
              "Enjoy dinner and an overnight stay at a hotel in Srinagar."
            ]
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": [
              "Begin your day with a satisfying breakfast, taking in the breathtaking view of the snow-capped mountains before checking out of the houseboat.",
              "The tour concludes as you are dropped off at a preferred location in Srinagar."
            ]
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
      },

      {
        id: 2,
        name: "Solo Trip",
        price: "Rs 59000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
        description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'TRENDING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": [
              "A representative will meet you at the prearranged location in Srinagar and provide a brief overview of the entire trip.",
              "After that, a motel in Srinagar will be where you are taken.",
              "Finish the check-in procedures, take some time to relax, and then go exploring Srinagar.",
              "Check out the Shalimar Bagh and Nishat Bagh, two of the most well-known Mughal Gardens (abode of love).",
              "The Zabarwan hills can be seen in the distance as these gardens encircle Dal Lake's eastern side for several kilometres.",
              "Spend some time by the lake in the evening and look around the neighbourhood."
            ]
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": [
              "The hotel's delicious brunch is served each morning with a stunning view of Dal Lake.",
              "Prepare yourself for the ultimate journey to Sonamarg after breakfast.",
              "Set out on a full-day trip to the lovely Sonmarg 'meadow of gold.'",
              "Stop at picturesque locations along the way to Sonamarg to take in the scenery and the surrounding natural beauty.",
              "When you get to Sonamarg, you can take a horse to the Thajiwas Glacier, where snow is present all year long.",
              "In Sonamarg, you can also take part in the most well-liked sports activities, like white water kayaking.",
              "Drive back to your accommodation in Srinagar after finishing your exploration of Sonamarg.",
              "Enjoy a night's sleep and supper at the Srinagar hotel."
            ]
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": [
              "Enjoy a delicious breakfast while taking in the stunning view of the snow-capped mountains before checking out of the hotel.",
              "You will then continue on to Pahalgam, also known as the shepherds' region.",
              "Once you arrive in Pahalgam, settle into your hotel and take some time to unwind before travelling to the lovely Aru Valley.",
              "A small hamlet called Aru Valley is renowned for its scenic beauty and offers a variety of adventurous activities.",
              "The Betaab Valley, one of the most well-known tourist locations that offers breathtaking views of the Lidder River while being surrounded by heavenly natural charm, should then be reached.",
              "Additionally, Chandanwari, which is known for its snow bridge and serves as the beginning point of the revered Amarnath Yatra, will be on your itinerary.",
              "Return to the hotel in Pahalgam and call it a day after a day filled with breathtaking sightseeing and exhilarating experiences."
            ]
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": [
              "Start your day early with a hearty breakfast, then set off on a scenic drive from Srinagar to Gulmarg.",
              "Upon reaching Gulmarg, your main activity will be the Gondola Ride, offering stunning panoramic views of the snow-covered mountains.",
              "As the cable car rises, enjoy the sweeping vistas of the valley below, revealing the hidden beauty of nature.",
              "Before heading back to Srinagar, take advantage of Gulmarg’s famous ski slopes and try your hand at adventure sports like skiing and paragliding.",
              "On the return journey, savor the natural beauty and snow-capped mountains that have accompanied you throughout the day.",
              "Enjoy dinner and an overnight stay at a hotel in Srinagar."
            ]
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": [
              "Begin your day with a satisfying breakfast, taking in the breathtaking view of the snow-capped mountains before checking out of the houseboat.",
              "The tour concludes as you are dropped off at a preferred location in Srinagar."
            ]
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
      },
      {
        id: 3,
        name: "Kashmir Bliss",
        price: "73500",
        image: "assets/banner-2.jpg",
        description: "Immerse yourself in the tranquil beauty of Ladakh",
        days: 6,
        nights: 5,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'POPULAR',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing"

          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": " Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": " Exploring Betaab, Aru Chandanwari",
            "return": false
          },
          {
            "day": "Pahalgam to Srinagar",
            "dayActivity": " Exploring Betaab, Aru Chandanwari",
            "return": true
          },

          {
            "day": "Srinagar to Sonamarg",
            "dayActivity": "Exploring Gulmarg",
            "return": false
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": "Leaving with beautiful Memories",
            "return": true
          },
        ],

        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
      },
      {
        id: 4,
        name: "Kashmir Together",
        price: "63000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/11/4gyueebwdwo.jpg",
        description: "Romantic getaway amidst breathtaking natural beauty.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 9,
        packBadge: 'TRENDING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to Sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true,
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": "Exploring Betaab",
            "return": false
          },
          {
            "day": "Pahalgam to Airport",
            "dayActivity": "Leaving with beautiful Memories"
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
      },

      {
        id: 5,
        name: "Honeymoon Haven Kashmir",
        price: "88000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/11/4gyueebwdwo.jpg",
        description: "Himalayan Bliss for Romantic Souls",
        days: 7,
        nights: 6,
        destinations: ["srinagar", "sonamarg", "pahalgam", "Chandanwari", "gulmarg"],
        rating: 8,
        packBadge: 'BESTSELLING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true

          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": " Exploring Betaab",
            "return": true
          },
          {
            "day": "Pahalgam to Chandanwari - Pahalgam",
            "dayActivity": "Exploring Aru , Chandanwari"
          },
          {
            "day": "Pahalgam to Srinagar",
            "dayActivity": "Back to Srinagar",
            "return": true
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": "Leaving with beautiful Memories"
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ],
      },

      {
        id: 6,
        name: "Kashmir Family Adventure",
        price: "105000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/12/11019174-960x636.jpg",
        description: "Embrace the thrill of remote adventures, explore remote destinations.",
        days: 5,
        nights: 4,

        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'BESTSELLING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": "Exploring Pahalgam",
            "return": true
          },

          {
            "day": "Pahalgam to Airport",
            "dayActivity": "Leaving with beautiful Memories"
          },
        ],
        // inclusions: ["6 Night accomdation", "Daily breakfast and Dinner", "pick and drop", "1 shikara ride"]

        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
      },

      {
        id: 7,
        name: "Ladakh Adventure Tour",
        price: "137900",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/12/11019174-960x636.jpg",
        description: "Embrace the thrill of remote adventures, explore remote destinations.",
        days: 5,
        nights: 4,
        destinations: ["Srinagar", "Kargil", "Ladakh", "Pangong", "Nubra"],
        rating: 8,
        packBadge: 'TRENDING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "ON ARRIVAL AT SRINAGAR AIRPORT/RAILWAY STATION MEET OR GREET BY OUR REPRESENTATIVE & DRIVE TOWARDS SRINAGAR HOTEL. CHECK INTO THE HOTEL & OVERNIGHT STAY",
            "return": true
          },
          {
            "day": "Srinagar to Kargil",
            "dayActivity": "Morning check out from the hotel & depart for Kargil which is about 205 kilometers from Srinagar. En-route, stop at the valley of meadows Sonmarg for lunch and then cross the Zojila Pass which is located 3900 meter above the sea level. After driving for some time, reach the Drass Village which is said to be the 2nd coldest place on earth after Siberia in Russia. By the evening, you will reach Kargil Town; upon reaching there, check in at the hotel/deluxe camp for overnight stay.",
            "return": false
          },
          {
            "day": "Kargil to Leh Ladakh",
            "dayActivity": "Travelling Leh Ladakh",
            "return": false
          },
          {
            "day": "Ladakh Sight Seeing",
            "dayActivity": "Ladakh is a breathtaking destination known for its stunning landscapes, vibrant culture, and unique experiences. From the crystal-clear waters of Pangong Lake to the majestic monasteries like Thiksey and Hemis, every corner of Ladakh offers a glimpse into its rich heritage."
            , "return": false
          },
          {
            "day": "Ladakh to  Nubra",
            "dayActivity": "Leaving for Nubra Valley, driving across Khardong-la (alt: 18,380 ft). After descending from the pass, drive on for sightseeing of the Sumoor area. Later check into a fixed camp in the same area or drive across to Deskit for an overnight stay in a camp."
            , "return": false
          },
          {
            "day": "Exploring Nubra",
            "dayActivity": "Today after an early breakfast you would be driven to Nubra Valley. Enroute visit Khardung-la-pass, the highest motorable road in the world at 18,380ft. Nubra Valley is popularly known as Ldorma or the valley of flowers. It is situated to the north of Ladakh between the Karakoram and Ladakh ranges of the Himalayas. Arrive at Hunder & check in at Hotel/Camps. Later visit Diskit Village & enjoy the Camel ride on sand dunes. Dinner and overnight stay at Hotel/Camp."
            , "return": false
          },
          {
            "day": "Nubra to Pangong",
            "dayActivity": "Today after breakfast, check out from the Hotel & drive to Pangong Lake, east to the Leh after crossing Changla Pass (17500ft) and driving via Durbuk and Tangtse villages in the Changthang region of Ladakh and perhaps one of the most amazing lakes in Asia which changes its color 4 – 5 times a day. Later drive back to Leh for night stay"
            , "return": false
          },

          {
            "day": "Camping at Pangong",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },

          {
            "day": "Pangong to Leh",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views.",
          },
          {
            "day": "Ladakh to Kargil",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },
          {
            "day": "Kargil to Srinagar Airport",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
        // inclusions: ["1 Night At Srinagar", "2 Night At Kargil", "3 Night At Leh", "3 Night At Nubra", "Daily breakfast and dinner", "pick and drop"]
      },
    ]
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getContactFormData() {
    return [
      {
        "control_type": 'text',
        "control_name": "name",
        "control_label": "Name",
        "placeholder": 'Your Name',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          }
        ],
      },
      {
        "control_type": 'number',
        "control_name": "phone",
        "control_label": "Mobile Number",
        "placeholder": 'Mobile Number',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          },
          {
            "phone": {
              'validation':true
            }
          }
        ],
      },
      {
        "control_type": 'email',
        "control_name": "email",
        "control_label": "Email",
        "placeholder": 'Your Email ID',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          },
          {
            "email": {
              'validation':true
            }
          }
        ],
      },
      {
        "control_type": 'textarea',
        "control_name": "message",
        "control_label": "Your Message",
        "placeholder": 'Your Email ID',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          }
        ],
      },
    ]
  }
}
