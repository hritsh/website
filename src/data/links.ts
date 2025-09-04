export interface LinkItem {
    label: string;
    url: string;
    icon: string;
    target?: string;
}

export const primaryLinks: LinkItem[] = [
    {
        label: "Email",
        url: "mailto:hritish.mahajan@gmail.com",
        icon: "/svg/email.svg",
        target: "_blank"
    },
    {
        label: "LinkedIn",
        url: "https://linkedin.com/in/hritishm",
        icon: "/svg/linkedin.svg",
        target: "_blank"
    },
    {
        label: "GitHub",
        url: "https://github.com/hritsh/",
        icon: "/svg/github.svg",
        target: "_blank"
    },
    {
        label: "Resume",
        url: "/files/resume.pdf",
        icon: "/svg/resume.svg",
        target: "_blank"
    }
];

export const socialLinks: LinkItem[] = [
    {
        label: "Last.fm",
        url: "https://www.last.fm/user/hritish",
        icon: "/png/lastfm.png",
        target: "_blank"
    },
    {
        label: "Letterboxd",
        url: "https://letterboxd.com/hritish/",
        icon: "/png/letterboxd.png",
        target: "_blank"
    },
    {
        label: "Spotify",
        url: "https://open.spotify.com/user/yiyux7j8ulk65u43htlfe84tv",
        icon: "/png/spotify.png",
        target: "_blank"
    },
    {
        label: "YouTube",
        url: "https://youtube.com/playlist?list=PLOr-MoOX5EBk6ZHz2D8_DqELRgbt3g7fq",
        icon: "/png/youtube.png",
        target: "_blank"
    }
];