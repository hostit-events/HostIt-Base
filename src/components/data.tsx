export const detailsTabs = [
  "Schedule",
  "Tickets",
  "Workshops",
  "Speakers",
];

export const dummyEvents = [
  {
    eventId: 0,
    eventName: "Web3 Lagos Conference",
    eventStartDate: "1725526800",
    eventEndDate: "1725735600",
    eventLocation: "Lagos, Nigeria",
    description:
      "The Web3 Lagos Conference is the largest Web3 Event in Lagos, Nigeria. This conference will bring together Web3 enthusiasts from all over Nigeria and beyond. Here, community meets technology for three days of intensive Networking and Learning experiences. Future of money, you deserve to be in the know!",
    numberOfTickets: 2000,
    numberOfRegistration: 2000,
    paid: false,
    schedule: [
      {
        time: "1725526800",
        title: "Registration",
        description: "All attendees checkin during this period",
      },
      {
        time: "1725528800",
        title: "Opening speech",
        description: "The founder gives an opening speech",
      },
      {
        time: "1725529800",
        title: "Keynote speech",
        description: "The keynote speaker speaks about the possibility of web3",
      },
    ],
    ticketsType: [
      { type: "Vip", price: 10, numberOfTickets: 0, sold: 0 },
      { type: "Regular", price: 5, numberOfTickets: 0, sold: 0 },
      { type: "Early bird", price: 3, numberOfTickets: 0, sold: 0 },
    ],
    workshops: [
      {
        name: "Metal model for building smart contracts on Bitcoin",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "Blockchain and its dilenma",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "AI revolution",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
    ],
    speakers: [
      {
        img: "/speaker-one.png",
        name: "John Doe",
        description: "CEO, Dummy company",
      },
      {
        img: "/speaker-two.png",
        name: "Peter Smart",
        description: "Technical Writter, Smart Chain",
      },
      {
        img: "/speaker-three.png",
        name: "Vitalik Buterin",
        description: "Founder, Ethereum",
      },
      {
        img: "/speaker-four.png",
        name: "Bad Girl Riri",
        description: "Musician, Wife of ASAP Rocky",
      },
    ],
    sponsors: [
      { type: "Gold", img: "/ef.jpeg" },
      { type: "Gold", img: "/lisk.jpeg" },
      { type: "Platinum", img: "/icp.jpeg" },
      { type: "Platinum", img: "/solana.jpeg" },
    ],
  },
  {
    eventId: 1,
    eventName: "Web3 Lagos Conference",
    eventStartDate: "1725526800",
    eventEndDate: "1725735600",
    description:
      "The Web3 Lagos Conference is the largest Web3 Event in Lagos, Nigeria. This conference will bring together Web3 enthusiasts from all over Nigeria and beyond. Here, community meets technology for three days of intensive Networking and Learning experiences. Future of money, you deserve to be in the know!",
    numberOfTickets: "2000",
    numberOfRegistration: "2000",
    paid: true,
    schedule: [],
    ticketsType: [
      { type: "Vip", price: 10, numberOfTickets: 0, sold: 0 },
      { type: "Regular", price: 5, numberOfTickets: 0, sold: 0 },
      { type: "Early bird", price: 3, numberOfTickets: 0, sold: 0 },
    ],
    workshops: [
      {
        name: "Metal model for building smart contracts on Bitcoin",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "Blockchain and its dilenma",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "AI revolution",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
    ],
    speakers: [
      {
        img: "/speaker-one.png",
        name: "John Doe",
        description: "CEO, Dummy company",
      },
      {
        img: "/speaker-two.png",
        name: "Peter Smart",
        description: "Technical Writter, Smart Chain",
      },
      {
        img: "/speaker-three.png",
        name: "Vitalik Buterin",
        description: "Founder, Ethereum",
      },
      {
        img: "/speaker-four.png",
        name: "Bad girl Riri",
        description: "Musician, Wife of ASAP Rocky",
      },
    ],
    sponsors: [
      { type: "Gold", img: "/ef.jpeg" },
      { type: "Gold", img: "/lisk.jpeg" },
      { type: "Platinum", img: "/icp.jpeg" },
      { type: "Platinum", img: "/solana.jpeg" },
    ],
  },
  {
    eventId: 2,
    eventName: "Web3 Lagos Conference",
    eventStartDate: "1725526800",
    eventEndDate: "1725735600",
    description:
      "The Web3 Lagos Conference is the largest Web3 Event in Lagos, Nigeria. This conference will bring together Web3 enthusiasts from all over Nigeria and beyond. Here, community meets technology for three days of intensive Networking and Learning experiences. Future of money, you deserve to be in the know!",
    numberOfTickets: "2000",
    numberOfRegistration: "2000",
    paid: true,
    schedule: [
      { time: "", title: "", description: "" },
      { time: "", title: "", description: "" },
      { time: "", title: "", description: "" },
    ],
    ticketsType: [
      { type: "Vip", price: 10, numberOfTickets: 0, sold: 0 },
      { type: "Regular", price: 5, numberOfTickets: 0, sold: 0 },
      { type: "Early bird", price: 3, numberOfTickets: 0, sold: 0 },
    ],
    workshops: [
      {
        name: "Metal model for building smart contracts on Bitcoin",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "Blockchain and its dilenma",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "AI revolution",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
    ],
    speakers: [
      {
        img: "/speaker-one.png",
        name: "John Doe",
        description: "CEO, Dummy company",
      },
      {
        img: "/speaker-two.png",
        name: "Peter Smart",
        description: "Technical Writter, Smart Chain",
      },
      {
        img: "/speaker-three.png",
        name: "Vitalik Buterin",
        description: "Founder, Ethereum",
      },
      {
        img: "/speaker-four.png",
        name: "Bad girl Riri",
        description: "Musician, Wife of ASAP Rocky",
      },
    ],
    sponsors: [
      { type: "Gold", img: "/ef.jpeg" },
      { type: "Gold", img: "/lisk.jpeg" },
      { type: "Platinum", img: "/icp.jpeg" },
      { type: "Platinum", img: "/solana.jpeg" },
    ],
  },
  {
    eventId: 3,
    eventName: "Web3 Lagos Conference",
    eventStartDate: "1725526800",
    eventEndDate: "1725735600",
    description:
      "The Web3 Lagos Conference is the largest Web3 Event in Lagos, Nigeria. This conference will bring together Web3 enthusiasts from all over Nigeria and beyond. Here, community meets technology for three days of intensive Networking and Learning experiences. Future of money, you deserve to be in the know!",
    numberOfTickets: "2000",
    numberOfRegistration: "2000",
    paid: false,
    schedule: [
      { time: "", title: "", description: "" },
      { time: "", title: "", description: "" },
      { time: "", title: "", description: "" },
    ],
    ticketsType: [
      { type: "Vip", price: 10, numberOfTickets: 0, sold: 0 },
      { type: "Regular", price: 5, numberOfTickets: 0, sold: 0 },
      { type: "Early bird", price: 3, numberOfTickets: 0, sold: 0 },
    ],
    workshops: [
      {
        name: "Metal model for building smart contracts on Bitcoin",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "Blockchain and its dilenma",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
      {
        name: "AI revolution",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu varius, suscipit leo ut, gravida tortor.",
      },
    ],
    speakers: [
      {
        img: "/speaker-one.png",
        name: "John Doe",
        description: "CEO, Dummy company",
      },
      {
        img: "/speaker-two.png",
        name: "Peter Smart",
        description: "Technical Writter, Smart Chain",
      },
      {
        img: "/speaker-three.png",
        name: "Vitalik Buterin",
        description: "Founder, Ethereum",
      },
      {
        img: "/speaker-four.png",
        name: "Bad girl Riri",
        description: "Musician, Wife of ASAP Rocky",
      },
    ],
    sponsors: [
      { type: "Gold", img: "/ef.jpeg" },
      { type: "Gold", img: "/lisk.jpeg" },
      { type: "Platinum", img: "/icp.jpeg" },
      { type: "Platinum", img: "/solana.jpeg" },
    ],
  },
];
