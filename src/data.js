import ProfileSection from "./components/ProfileSection";

const posts = [
    {
        id: 0,
        imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg",
        imageAlt: "Psychopomp",
        title: "Psychopomp",
        paragraph: "Japanese Breakfast"
    },
    {
        id: 1,
        imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg",
        imageAlt: "let's go",
        title: "let's go",
        paragraph: "In Love With A Ghost"
    },
    {
        id: 2,
        imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg",
        imageAlt: "The Beautiful Game",
        title: "The Beautiful Game",
        paragraph: "Vulfpeck"
    },
    {
        id: 3,
        imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg",
        imageAlt: "Jane Doe",
        title: "Jane Doe",
        paragraph: "Converge"
    }

];
export default {
    profileSection: {
        imgSrc: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
        imgAlt: "",
        name: "Jane Doe",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️",
        stats: {
            postsLength: posts.length,
            following: 200,
            followers: 450
        },
    },
    posts: [...posts]
};