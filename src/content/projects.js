const projects = [
  {
    id: "garments",
    title: "Clothes as Memory, Repair as Resistance",
    subtitle: "To wear memory, to mend the future.",
    description: "In these works, garments are not just fashion, they are intimate containers of stories, migration, survival, and care. I engage in upcycling as a ritual: mending not only fabric, but wounds; deconstructing fast-fashion logic and reimagining the body as an archive. Each intervention is an act of remembrance and resistance, stitched with the hope that what is broken can become whole in new, unexpected ways.",
    cover: "/assets/images/upcycled/shirt-done.jpeg",
    subprojects: [
      {
        parentId: "garments",
        id: "upcycled-jean-shirt",
        mainImage: "/assets/images/upcycled/blue-shirt.jpeg",
        images: [
          { src: "/assets/images/upcycled/blue-shirt.jpeg" },
          {
            src: "/assets/images/upcycled/shirt-done.jpeg",
            description: "A finished piece that has been transformed with the outmost care and love."
          },
          {
            src: "/assets/images/upcycled/pants-floor.jpeg",
            description: "A delicate approach to upcycling and functional design."
          },
          { src: "/assets/images/upcycled/shirt-mirror.jpeg" },
          { src: "/assets/images/upcycled/shirt-on.jpeg" },
        ],
      },
      {
        parentId: "garments",
        id: "fashion-clash-festival",
        mainImage: "/assets/images/upcycled/fashion-clash-dress.jpeg",
        images: [
          { src: "/assets/images/upcycled/fashion-clash-dress.jpeg"},
          { src: "/assets/images/upcycled/fc-side.jpg" },
          {
            src: "/assets/images/upcycled/fc-festival.jpg",
            alt: "Fashion clash event - upcycled clothes"
          },
          { src: "/assets/images/upcycled/mirror-fc-stand.jpeg" },
        ],
      },
      {
        parentId: "garments",
        id: "flower-blouse",
        mainImage: "/assets/images/upcycled/double-design-flower.jpeg" ,
        images: [
        
          { src: "/assets/images/upcycled/double-design-flower.jpeg"},
          { src: "/assets/images/upcycled/flower.png" },
          { src: "/assets/images/upcycled/flower-mirror.jpeg" },
          { src: "/assets/images/upcycled/flower-light.jpeg" },
          { src: "/assets/images/upcycled/flower-mirror-2.jpeg" },
          { src: "/assets/images/upcycled/flower-stairs.jpeg" },
          { src: "/assets/images/upcycled/flower-chest.jpeg" },
          { src: "/assets/images/upcycled/flower-stairs-side.jpeg" },
        ],
      },
      {
        parentId: "garments",
        id: "black-shirt-outfit",
        mainImage: "/assets/images/upcycled/double-design-black.jpeg" ,
        images: [
          { src: "/assets/images/upcycled/double-design-black.jpeg"},
          { src: "/assets/images/upcycled/QEXL5587.jpeg" },
          { src: "/assets/images/upcycled/OOLZ6624.jpeg" },

        ],
      },
    ],
  },
  {
    id: "paintings",
    title: "Drawing Silence, Assembling Memory",
    subtitle: "Drawing as listening, collaging as remembering.",
    description: "Drawing, for me, is a meditative act. I draw when I cannot speak, when words fall short. My lines emerge slowly, guided by breath and emotion. Collage, on the other hand, allows me to assemble fragments, images, textures, torn paper into quiet narratives. Both practices offer refuge, both are forms of visual journaling that allow me to inhabit time differently.",
    cover: "/assets/images/paintings/portrait.jpeg",
    subprojects: [
      {
        parentId:"paintings",
        id: "portrait",
        mainImage: "/assets/images/paintings/portrait.jpeg",
        images: [
          { src: "/assets/images/paintings/portrait.jpeg" },
          { src: "/assets/images/paintings/portrait-mirror.jpeg" },
          { src: "/assets/images/paintings/self-collage.jpeg" },
          { src: "/assets/images/paintings/IMG_0628.jpeg" },
        ],
      },
      {
        parentId:"paintings",
        id: "love-birds",
        mainImage: "/assets/images/paintings/partners.jpeg",
        images: [
          { src: "/assets/images/paintings/partners.jpeg" },    
          { src: "/assets/images/paintings/partners-collage.jpeg" },
          { src: "/assets/images/paintings/collage.jpeg", description: "Textured collage showing fragments of a constructed memory." },    
        ],
      },
      {
        parentId:"paintings",
        id: "sunset-trees",
        mainImage: "/assets/images/paintings/IMG_1423.jpeg",
        images: [
          { src: "/assets/images/paintings/IMG_1423.jpeg" },
          { src: "/assets/images/paintings/IMG_1422.jpeg" },
          { src: "/assets/images/paintings/drawing-sun-trees.jpeg" },
        ]
      },
      {
        parentId:"paintings",
        id: "abstract",
        mainImage: "/assets/images/paintings/colorful.jpeg",
        images: [
          { src: "/assets/images/paintings/colorful.jpeg" },
        ]
      },
      {
        parentId:"paintings",
        id: "watercolor-crystal",
        mainImage: "/assets/images/paintings/crystal-qr.jpeg",
        images: [
          { src: "/assets/images/paintings/crystal-qr.jpeg" },
        ]
      },
      {
        parentId:"paintings",
        id: "light-bulb-inspo",
        mainImage: "/assets/images/paintings/light-bulbs.jpeg" ,
        images: [
          { src: "/assets/images/paintings/light-bulbs.jpeg" },
        ]
      },
      {
        parentId:"paintings",
        id: "sunset-painting",
        mainImage: "/assets/images/paintings/sunset.jpeg" ,
        images: [
          { src: "/assets/images/paintings/sunset.jpeg" },
        ]
      },
      {
        parentId:"paintings",
        id: "buildings",
        mainImage: "/assets/images/paintings/IMG_9385.jpeg",
        images: [
          { src: "/assets/images/paintings/IMG_9385.jpeg" },
          { src: "/assets/images/paintings/IMG_9383.jpeg" },
        ],
      },
      {
        parentId:"paintings",
        id: "granada",
        mainImage: "/assets/images/paintings/IMG_E0259.jpeg",
        images: [
          { src: "/assets/images/paintings/IMG_E0259.jpeg" },
          { src: "/assets/images/paintings/IMG_E0263.jpeg" },
        ],
      },
    ],
  },
  {
    id: "crafts",
    title: "Hands that Shape, Matter that Speaks",
    subtitle: "The hand knows what the words forget.",
    description: "These pieces emerge from the intimacy between body and material. Clay resists and yields; linoleum scars with each cut. I let my hands remember things I’ve forgotten in my mind. The objects I shape are small altars, emotional textures, and sometimes abstract landscapes. This is the space where fragility meets persistence, and where form is a quiet testimony of touch.",
    cover: "/assets/images/crafts/IMG_3360.jpeg",
    subprojects: [
      {
        parentId: "crafts",
        id: "faces-and-whiskers",
        mainImage: "/assets/images/crafts/IMG_3360.jpeg",
        images: [
          { src: "/assets/images/crafts/IMG_3360.jpeg" },
          { src: "/assets/images/crafts/IMG_3359.jpeg" },
          { src: "/assets/images/crafts/faces-clay.jpeg" },
          { src: "/assets/images/crafts/IMG_3358.jpeg" },
          { src: "/assets/images/crafts/IMG_3353.jpeg" },
          { src: "/assets/images/crafts/IMG_3357.jpeg" },
          { src: "/assets/images/crafts/whiskers-jar.jpeg" },
        ]
      },
      {
        parentId: "crafts",
        id: "chalk-crafts",
        mainImage: "/assets/images/crafts/IMG_2235.jpeg",
        images: [
          { src: "/assets/images/crafts/IMG_2235.jpeg" },
          // { src: "/assets/images/crafts/abstract.jpeg" },
          { src: "/assets/images/crafts/crafting.jpeg" },
          { src: "/assets/images/crafts/IMG_2232.jpeg" },
          { src: "/assets/images/crafts/IMG_2233.jpeg" },
          { src: "/assets/images/crafts/IMG_2234.jpeg" },
        ]
      },
      {
        parentId:"paintings",
        id: "leaf-collage",
        mainImage: "/assets/images/crafts/leaf-bunch.jpeg",
        images: [
          { src: "/assets/images/crafts/leaf-bunch.jpeg" },
          { src: "/assets/images/crafts/trees.jpeg" },
          { src: "/assets/images/crafts/leaves.jpeg" },
        ]
      },
      {
        parentId: "crafts",
        id: "blue-portrait",
        mainImage: "/assets/images/crafts/blue-self-portrait-hold.jpeg",
        images: [
          { src: "/assets/images/crafts/blue-outline.jpeg" },
          { src: "/assets/images/crafts/blue-halfway.jpeg" },
          { src: "/assets/images/crafts/blue-self-port.jpeg" },
          { src: "/assets/images/crafts/blue-self-portrait-hold.jpeg" },
        ]
      }
    ],
  },
  {
    id: "performances",
    title: "Embodied Stories, Lived Gestures",
    subtitle: "The body as memory, the gesture as testimony.",
    description: "I began performing without calling it performance through gestures, through silence, through simply showing up with my body. In these pieces, I explore the body as a site of memory and resistance, especially in relation to migration and queerness. Performance allows me to inhabit stories that are not only mine, and to share them in ways that move beyond language. It is a way of being, of listening, of offering.",
    cover: "/assets/images/performances/selfie-models.jpeg",
    subprojects: [
      {
        parentId: "performances",
        id: "human-herd",
        description: "Fashion Clash 2024 - Paula Dischinger",
        mainImage: "/assets/images/performances/selfie-models.jpeg",
        images: [
          { src: "/assets/images/performances/selfie-models.jpeg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "/assets/images/performances/mirror-pic.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival`},
          { src: "/assets/images/performances/runway-cover.jpeg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "/assets/images/performances/martin-walk.jpeg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival`},
          { src: "/assets/images/performances/walk-dark.jpeg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "/assets/images/performances/walk-behind.jpeg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "/assets/images/performances/martin-all-red.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "/assets/images/performances/posing-martin.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "/assets/images/performances/all-red-again.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
        ],
      },
      {
        parentId: "performances",
        id: "Hartwerk-BOM-2024",
        description: "Buurt Opera Malperthuis by Opera Zuid",
        mainImage: "/assets/images/performances/martin-standalone.jpg",
        images: [
          { src: "/assets/images/performances/martin-standalone.jpg" },
          { src: "/assets/images/performances/all-reading.jpg" },
          { src: "/assets/images/performances/bricks.jpg" },
          { src: "/assets/images/performances/IMG_2046.jpeg" },
          { src: "/assets/images/performances/martin-sweater.jpg" },
          { src: "/assets/images/performances/all-bowing.jpeg" },
        ]
      },
      {
        parentId: "performances",
        id: "mensen-dragen-mensen",
        description: "Mensen Dragen Mensen - Heiligdomsvaart Maastricht 2025 - Fashion Clash",
        mainImage: "/assets/images/performances/m-d-m.jpg",
        images: [
          { src: "/assets/images/performances/m-d-m.jpg" },
          { src: "/assets/images/performances/flag.jpeg" },
          { src: "/assets/images/performances/carry-me.jpg" },

        ]
      }
    ]
  },
];

export default projects;