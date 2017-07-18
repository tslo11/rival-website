
export interface BadgesEarned {
  "id": number,
  "date_earned": string;
  "details": string;
}

export interface User {
  "id": number;
  "name": string;
  "image": string;
  "badges": BadgesEarned[];
}

export interface Badge {
  "id": number;
  "title": string;
  "image": string;
  "description": string;
  "created": string;
  "created_by": number;
}

export const USERS: User[] = [
  {
      "id":20174,
      "name": "ninja",
      "image": "user_ninja.jpg",
      "badges": [
      ]
  },
  {
      "id":20175,
      "name": "stevie",
      "image": "user_stevie.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Spirit Captain"
          },
      ]
  },
  {
      "id":20176,
      "name": "champ",
      "image": "user_champ.jpg",
      "badges": [
      ]
  },
  {
      "id":20177,
      "name": "nitz",
      "image": "user_nitz.jpg",
      "badges": [
      ]
  },
  {
      "id":20178,
      "name": "tots",
      "image": "user_tots.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Co-Captain"
          },
      ]
  },
  {
      "id":20179,
      "name": "janine",
      "image": "user_janine.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Co-Captain"
          },
      ]
  },
  {
      "id":201710,
      "name": "kristen",
      "image": "user_kristen.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Snack Captain"
          },
      ]
  },
  {
      "id":201711,
      "name": "tlo",
      "image": "user_tlo.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"MI Pod Leader"
          },
      ]
  },
  {
      "id":201712,
      "name": "zeus",
      "image": "user_zeus.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Social Media Team"
          },
      ]
  },
  {
      "id":201713,
      "name": "bubba",
      "image": "user_bubba.jpg",
      "badges": [
      ]
  },
  {
      "id":201714,
      "name": "tz",
      "image": "user_tz.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Swag Captain"
          },
      ]
  },
  {
      "id":201715,
      "name": "brittany",
      "image": "user_brittany.jpg",
      "badges": [
      ]
  },
  {
      "id":201718,
      "name": "harley",
      "image": "user_harley.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Co-Captain"
          },
      ]
  },
  {
      "id":201720,
      "name": "sophie",
      "image": "user_sophie.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Treasurer"
          },
      ]
  },
  {
      "id":201722,
      "name": "talia",
      "image": "user_talia.jpg",
      "badges": [
      ]
  },
  {
      "id":201723,
      "name": "chelsea",
      "image": "user_chelsea.jpg",
      "badges": [
      ]
  },
  {
      "id":201727,
      "name": "gg",
      "image": "user_gg.jpg",
      "badges": [
      ]
  },
  {
      "id":201730,
      "name": "mack",
      "image": "user_mack.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Strength & Cond. Coach"
          },
      ]
  },
  {
      "id":201731,
      "name": "sara scott",
      "image": "user_sarascott.jpg",
      "badges": [
      ]
  },
  {
      "id":201732,
      "name": "viv",
      "image": "user_viv.jpg",
      "badges": [
      ]
  },
  {
      "id":201737,
      "name": "hank",
      "image": "user_hank.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Spirit Captain"
          },
      ]
  },
  {
      "id":201738,
      "name": "jenny",
      "image": "user_jenny.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Squoddballs Leader"
          },
      ]
  },
  {
      "id":201740,
      "name": "deanna",
      "image": "user_deanna.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Coach"
          },
      ]
  },
  {
      "id":201741,
      "name": "theiss",
      "image": "user_theiss.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Coach"
          },
      ]
  }
];


export const BADGES: Badge[] = [
  {
    "id": 200,
    "title": "First Responder",
    "image": "badge_check.png",
    "description": "Be the first to respond to a team survey (sent out by the captains).",
    "created": "",
    "created_by": 8
  },
  {
    "id": 201,
    "title": "Sweaty Selfie",
    "image": "badge_weight.png",
    "description": "Complete a workout outside of weekly pods/practices. Take a post workout selfie and post it to slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 202,
    "title": "Hi - Five",
    "image": "badge_hand.png",
    "description": "Get to know your buddies and introduce them to the team. Post five unique facts about each of them to slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 203,
    "title": "Pump It Up",
    "image": "badge_headphones.png",
    "description": "Take a video of yourself lip-syncing to your favorite pump up song and post it to slack. (min length 10 second)",
    "created": "",
    "created_by": 8
  },
  {
    "id": 204,
    "title": "Superb Suggester",
    "image": "badge_lightbulb.png",
    "description": "Email tots with a new idea for a badge and the criteria to earn it.  Requirements: (1) everyone has a reasonably fair chance of earning (2) you could make a convincing argument on how it benefits the team / working towards our goals",
    "created": "",
    "created_by": 8
  },
  {
    "id": 205,
    "title": "Reporting for Duty",
    "image": "badge_officer.png",
    "description": "Volunteer for an officer or committee member role on our team.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 206,
    "title": "Throwin' Around Trophy",
    "image": "badge_trophy.png",
    "description": "Throw with each member of our team for a minimum of one uninterrupted 15 min segment. Keep a log of when you threw with who and submit to tots for approval.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 207,
    "title": "Snack Attack",
    "image": "badge_cupcake.png",
    "description": "Bring a shareable amount of team snacks to a practice or tournament. Because snacks.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 208,
    "title": "Border Patrol",
    "image": "badge_car.png",
    "description": "Take a photo of/by a state border sign and post it to slack. Only one photo needed per group. After a state border is claimed, nobody else can earn badge credit for that state.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 209,
    "title": "RAK",
    "image": "badge_heart.png",
    "description": "Complete a random act of kindness for a Rival teammate/coach. Share evidence (photo or description) of the act you've committed or award badge credit to someone for an act you received via slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 210,
    "title": "Bonding Badge Badge",
    "image": "badge_pals.png",
    "description": "Take a photo of yourself and a teammate doing a non-frisbee related activity together and post it to slack. Photo must include participants hanging out together during the week, outside of your homes. (Pictures at practice, workouts, to/from rival events, eating after practice, or solely with people you live with do not count!)",
    "created": "",
    "created_by": 8
  },
  {
    "id": 211,
    "title": "Sleeping Beauty",
    "image": "badge_zs.png",
    "description": "Take a selfie with a sleeping teammate (during non-normal sleep hours) and post it to slack.",
    "created": "",
    "created_by": 8
  },
];