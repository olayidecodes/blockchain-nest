import images from "./images";

const products = [
    {
        id: 1,
        image: images.product_1,
        title: "USDC Depeg Protection",
        detail: "Protect your investments with our USDC Crypto Depeg Protection. Ideal for USDT risk capital providers.",
        link: "google.com"
    },
    {
        id: 2,
        image: images.product_2,
        title: "Travel Delay Protection",
        detail: "First decentralized insurance. Payouts are automatic and almost instant.",
        link: "google.com"
    },
    {
        id: 3,
        image: images.product_3,
        title: "Crop Protection",
        detail: "Select your and the location of your field. Automated payout are triggered by drought or flood events reported by government agencies."
    }
    
]

const partners = [
    {
        id: 1,
        image: images.chainlink,
        link: "chainlink.com"
    },
    {
        id: 2,
        image: images.floodlight,
        link: "google.com"
    },
    {
        id: 3,
        image: images.kr1,
        link: "google.com"
    },
    {
        id: 4,
        image: images.lemonade,
        link: "google.com"
    },
    {
        id: 5,
        image: images.pula,
        link: "google.com"
    },
]

const faq = [
    {
        question: 'Question 1',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
    },
    {
        question: 'Question 2',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
    },
    {
        question: 'Question 3',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
    },
    {
        question: 'Question 4',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
    },
    {
        question: 'Question 5',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
    }
]
export default { partners, products, faq };