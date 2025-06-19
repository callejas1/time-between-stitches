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
        id: "garment-1",
        mainImage: "/assets/images/upcycled/shirt-done.jpeg",
        images: [
          {
            src: "/assets/images/upcycled/shirt-done.jpeg",
            description: "A finished piece that has been transformed with the outmost care and love."
          },
          { src: "/assets/images/upcycled/blue-shirt.jpeg" },
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
        id: "garment-2",
        mainImage: "/assets/images/upcycled/fc-festival.jpg",
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
        id: "garment-3",
        mainImage: "/assets/images/upcycled/double-design.jpeg" ,
        images: [
        
          { src: "/assets/images/upcycled/flower.png" },
          // { src: "/assets/images/upcycled/double-design.jpeg"},
          { src: "/assets/images/upcycled/flower-mirror.jpeg" },
          { src: "/assets/images/upcycled/flower-light.jpeg" },
          { src: "/assets/images/upcycled/flower-mirror-2.jpeg" },
          { src: "/assets/images/upcycled/flower-stairs.jpeg" },
          { src: "/assets/images/upcycled/flower-chest.jpeg" },
          { src: "/assets/images/upcycled/flower-stairs-side.jpeg" },
        ],
      },
    ],
  },
  {
    id: "collages-and-paintings",
    title: "Drawing Silence, Assembling Memory",
    subtitle: "Drawing as listening, collaging as remembering.",
    description: "Drawing, for me, is a meditative act. I draw when I cannot speak, when words fall short. My lines emerge slowly, guided by breath and emotion. Collage, on the other hand, allows me to assemble fragments, images, textures, torn paper into quiet narratives. Both practices offer refuge, both are forms of visual journaling that allow me to inhabit time differently.",
    cover: "/assets/images/paintings/portrait.jpeg",
    subprojects: [
      {
        parentId:"collages-and-paintings",
        id: "drawing-1",
        mainImage: "/assets/images/paintings/portrait.jpeg",
        images: [
          { src: "/assets/images/paintings/portrait.jpeg" },
          { src: "/assets/images/paintings/portrait-mirror.jpeg" },
        ],
      },
      {
        parentId:"collages-and-paintings",
        id: "drawing-2",
        mainImage: "/assets/images/paintings/partners.jpeg",
        images: [
          { src: "/assets/images/paintings/partners-collage.jpeg" },
          { src: "/assets/images/paintings/partners.jpeg" },    
        ],
      },
      {
        parentId:"collages-and-paintings",
        id: "drawing-3",
        mainImage: "/assets/images/paintings/leaf-bunch.jpeg",
        images: [
          { src: "/assets/images/paintings/leaf-bunch.jpeg" },
          { src: "/assets/images/paintings/sunset.jpeg" },
          { src: "/assets/images/paintings/trees.jpeg" },
          { src: "/assets/images/paintings/collage.jpeg", description: "Textured collage showing fragments of memory." },    
        ]
      },
      {
        parentId:"collages-and-paintings",
        id: "drawing-4",
        mainImage: "/assets/images/paintings/colorful.jpeg",
        images: [
          { src: "/assets/images/paintings/colorful.jpeg" },
          { src: "/assets/images/paintings/crystal-qr.jpeg" },
          { src: "/assets/images/paintings/drawing-sun-trees.jpeg" },
          { src: "/assets/images/paintings/IMG_0628.jpeg" },
          { src: "/assets/images/paintings/IMG_1422.jpeg" },
          { src: "/assets/images/paintings/IMG_1423.jpeg" },
          // { src: "/assets/images/paintings/leaves.jpeg" },
          { src: "/assets/images/paintings/light-bulbs.jpeg" },
          { src: "/assets/images/paintings/self-collage.jpeg" },
        ]
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
        id: "craft-1",
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
        id: "craft-2",
        mainImage: "/assets/images/crafts/IMG_2235.jpeg",
        images: [
          { src: "/assets/images/crafts/IMG_2235.jpeg" },
          // { src: "/assets/images/crafts/abstract.jpeg" },
          { src: "/assets/images/crafts/crafting.jpeg" },
          { src: "/assets/images/crafts/IMG_2232.jpeg" },
          { src: "/assets/images/crafts/IMG_2233.jpeg" },
          { src: "/assets/images/crafts/IMG_2234.jpeg" },
          // { src: "/assets/images/crafts/IMG_9382.jpeg" },
          { src: "/assets/images/crafts/IMG_9383.jpeg" },
          { src: "/assets/images/crafts/IMG_9385.jpeg" },
          { src: "/assets/images/crafts/IMG_E0259.jpeg" },
          { src: "/assets/images/crafts/IMG_E0263.jpeg" },
          { src: "/assets/images/crafts/OOLZ6624.jpeg" },
          { src: "/assets/images/crafts/QEXL5587.jpeg" },
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
        id: "performance-1",
        mainImage: "/assets/images/performances/selfie-models.jpeg",
        images: [
          { src: "/assets/images/performances/selfie-models.jpeg" },
          { src: "/assets/images/performances/runway-cover.jpeg" },
          { src: "/assets/images/performances/martin-walk.jpeg" },
          { src: "/assets/images/performances/walk-dark.jpeg" },
          { src: "/assets/images/performances/walk-behind.jpeg" },
        ],
      },
      {
        parentId: "performances",
        id: "performance-2",
        mainImage: "/assets/images/performances/IMG_2046.jpeg",
        images: [
          { src: "/assets/images/performances/IMG_2046.jpeg" },
        ]
      }
    ]
  },
];

export default projects;