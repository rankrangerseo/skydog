import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://skydogsocial.com/#organization",
        "name": "SkyDog",
        "url": "https://skydogsocial.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://skydogsocial.com/#logo",
          "url": "https://skydogsocial.com/assets/meta/preview.png",
          "caption": "SkyDog NFT"
        },
        "image": "https://skydogsocial.com/assets/meta/preview.png",
        "description": "SkyDog is a Web3 IP building blue-chip NFTs, immersive storytelling, and play-to-earn gaming ecosystems.",
        "sameAs": [
          "https://twitter.com/SkyDogSocialNFT",
          "https://discord.gg/zbF6Aab76g",
          "https://t.me/SkyDog_SOCIAL",
          "https://www.instagram.com/skydog_social/",
          "https://www.facebook.com/skydogsocial",
          "https://www.tiktok.com/@skydogsocial44",
          "https://www.youtube.com/@SkyDogSocial"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://skydogsocial.com/#website",
        "url": "https://skydogsocial.com",
        "name": "SkyDog NFT",
        "publisher": {
          "@id": "https://skydogsocial.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SkyDog?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the year 4444, Earth is no longer habitable. The human race has fled, but one hero remains, the legendary SkyDog. To save the future, SkyDog and his fleet of 4444 elite warriors must navigate deep space, dodge asteroid belts, and survive intergalactic challenges to find a new home."
        }
      },
      {
        "@type": "Question",
        "name": "What is SkyTrek?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkyTrek is the interstellar journey undertaken by SkyDog and his elite warriors. It's also the name of the immersive game experience where players can join SkyDog's fleet and participate in the mission to find a new home for humanity."
        }
      },
      {
        "@type": "Question",
        "name": "What is Sky Token and how to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sky Tokens are the in-game currency used throughout the SkyDog universe. They can be earned through gameplay, missions, and community participation. Use them to upgrade your ship, purchase equipment, and trade with other players in the intergalactic marketplace."
        }
      },
      {
        "@type": "Question",
        "name": "How to play and earn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Join SkyDog's fleet by creating an account, customizing your warrior, and embarking on missions. Complete challenges, defeat space pirates, discover new planets, and collaborate with other players. Earn Sky Tokens through successful missions, daily tasks, and tournament participation."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GameSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "SkyTrek",
    "description": "An interstellar Web3 play-to-earn cosmic space challenge where players pilot spacecraft, conquer cosmic missions, and earn SKY Tokens.",
    "genre": ["Action", "Sci-Fi", "Play-to-Earn", "Space Simulator"],
    "gamePlatform": ["Web Browser"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
