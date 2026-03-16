export type SocialLink = {
  id: string;
  platform: string;
  label: string;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    id: "youtube",
    platform: "YouTube",
    label: "WCPW YouTube",
    url: "https://youtube.com/@WCPW",
  },
  {
    id: "tiktok",
    platform: "TikTok",
    label: "@wcpw_",
    url: "https://tiktok.com/@wcpw_",
  },
  {
    id: "twitch",
    platform: "Twitch",
    label: "lomtrae",
    url: "https://twitch.tv/lomtrae",
  },
  {
    id: "discord",
    platform: "Discord",
    label: "WCPW Community",
    url: "https://discord.gg/wcpw",
  },
];

export default socialLinks;