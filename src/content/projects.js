const projects = [
  {
    id: "garments",
    title: "Clothes as Memory, Repair as Resistance",
    subtitle: "To wear memory, to mend the future.",
    description: "In these works, garments are not just fashion, they are intimate containers of stories, migration, survival, and care. I engage in upcycling as a ritual: mending not only fabric, but wounds; deconstructing fast-fashion logic and reimagining the body as an archive. Each intervention is an act of remembrance and resistance, stitched with the hope that what is broken can become whole in new, unexpected ways.",
    cover: "https://i.pinimg.com/736x/af/b1/45/afb14596f0fc3f063e5ee790499dd47b.jpg",
    subprojects: [
      {
        parentId: "garments",
        id: "upcycled-jean-shirt",
        mainImage: "https://i.pinimg.com/736x/75/44/ca/7544ca03708d0f35d079b5b579f6c729.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/75/44/ca/7544ca03708d0f35d079b5b579f6c729.jpg" },
          {
            src: "https://i.pinimg.com/736x/af/b1/45/afb14596f0fc3f063e5ee790499dd47b.jpg",
            description: "A finished piece that has been transformed with the outmost care and love."
          },
          {
            src: "https://i.pinimg.com/736x/ad/c9/d8/adc9d8d8f17247b4f8a86b3d4eae53e6.jpg",
            description: "A delicate approach to upcycling and functional design."
          },
          { src: "https://i.pinimg.com/736x/77/4c/55/774c559964984c8247c7484e65c7f24a.jpg" },
          { src: "https://i.pinimg.com/736x/04/20/40/042040936c489f5b6c452e5a85b86995.jpg" },
        ],
      },
      {
        parentId: "garments",
        id: "fashion-clash-festival",
        mainImage: "https://i.pinimg.com/736x/0e/db/fa/0edbfa4e070244e04eeacc4d0de6d6f6.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/0e/db/fa/0edbfa4e070244e04eeacc4d0de6d6f6.jpg"},
          { src: "https://i.pinimg.com/736x/12/31/a1/1231a1930f20c48ff48a170685a1db92.jpg" },
          {
            src: "https://i.pinimg.com/736x/b6/bd/84/b6bd84bd8aa14d78d564a7b81f0b3bc4.jpg",
            alt: "Fashion clash event - upcycled clothes"
          },
          { src: "https://i.pinimg.com/736x/f4/8b/0a/f48b0a753a64cbbea30c653291086c7e.jpg" },
        ],
      },
      {
        parentId: "garments",
        id: "flower-blouse",
        mainImage: "https://i.pinimg.com/736x/99/5d/23/995d2310776fdc9d41e1e8245d7645ce.jpg" ,
        images: [
        
          { src: "https://i.pinimg.com/736x/99/5d/23/995d2310776fdc9d41e1e8245d7645ce.jpg"},
          { src: "https://i.pinimg.com/736x/3a/c8/5a/3ac85a8103ad2842c6941acecce04515.jpg" },
          { src: "https://i.pinimg.com/736x/55/a1/4e/55a14e3f3aa3f2206b411b78efe1335f.jpg" },
          { src: "https://i.pinimg.com/736x/b1/26/18/b126184efdbc50116e29cf35d789c8aa.jpg" },
          { src: "https://i.pinimg.com/736x/7b/34/48/7b3448598db7fc8c5f953d6e12165eab.jpg" },
          { src: "https://i.pinimg.com/736x/ac/00/ae/ac00ae48bb22265cea2e34b385161203.jpg" },
          { src: "https://i.pinimg.com/736x/86/01/1a/86011ac9908187476d578c697f7d6e2e.jpg" },
          { src: "https://i.pinimg.com/736x/2c/0f/66/2c0f66ca86416f7d971be8d2ad02b87a.jpg" },
        ],
      },
      {
        parentId: "garments",
        id: "black-shirt-outfit",
        mainImage: "https://i.pinimg.com/736x/fd/f3/b8/fdf3b87c015434f2db1be1232e6d2517.jpg" ,
        images: [
          { src: "https://i.pinimg.com/736x/fd/f3/b8/fdf3b87c015434f2db1be1232e6d2517.jpg"},
          { src: "https://i.pinimg.com/736x/85/46/79/854679fe5190929e4e5307a5a91eebf2.jpg" },
          { src: "https://i.pinimg.com/736x/a5/11/8f/a5118f797bace69654c72bdc72bd238f.jpg" },

        ],
      },
    ],
  },
  {
    id: "paintings",
    title: "Drawing Silence, Assembling Memory",
    subtitle: "Drawing as listening, collaging as remembering.",
    description: "Drawing, for me, is a meditative act. I draw when I cannot speak, when words fall short. My lines emerge slowly, guided by breath and emotion. Collage, on the other hand, allows me to assemble fragments, images, textures, torn paper into quiet narratives. Both practices offer refuge, both are forms of visual journaling that allow me to inhabit time differently.",
    cover: "https://i.pinimg.com/736x/6a/55/4f/6a554f46c56392ac981af659b3b749d7.jpg",
    subprojects: [
      {
        parentId:"paintings",
        id: "portrait",
        mainImage: "https://i.pinimg.com/736x/6a/55/4f/6a554f46c56392ac981af659b3b749d7.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/6a/55/4f/6a554f46c56392ac981af659b3b749d7.jpg" },
          { src: "https://i.pinimg.com/736x/fc/ae/7c/fcae7c0f07a5b7e209f13a35adcc58cd.jpg" },
          { src: "https://i.pinimg.com/736x/48/cb/60/48cb60ec6368e097b9400ea440c53b6d.jpg" },
          { src: "https://i.pinimg.com/736x/e8/43/33/e8433365ce3a0772fa539568851976ed.jpg" },
          // { src: "https://i.pinimg.com/736x/59/9a/19/599a19e76910edd77a1895ec85cd6636.jpg" },
          { src: "https://i.pinimg.com/736x/38/83/5e/38835e1613cd8fcf18f023bce337b137.jpg" },

        ],
      },
      {
        parentId:"paintings",
        id: "collages",
        mainImage: "https://i.pinimg.com/736x/60/ba/fc/60bafc79af87a8f7ffae1eaf1d29684a.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/60/ba/fc/60bafc79af87a8f7ffae1eaf1d29684a.jpg" },
          { src: "https://i.pinimg.com/736x/dc/97/5f/dc975fdff1054cf7d0328e020b3e3801.jpg" },
          { src: "https://i.pinimg.com/736x/f9/76/24/f976247194dba9eab84cf302344f5736.jpg" },
        ],
      },
      {
        parentId:"paintings",
        id: "buildings",
        mainImage: "https://i.pinimg.com/736x/ed/b6/71/edb671e7626cdc648db65a83c2e98d86.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/70/21/b7/7021b7c98ec090757821b4e9b84deb00.jpg" },
          { src: "https://i.pinimg.com/736x/ed/b6/71/edb671e7626cdc648db65a83c2e98d86.jpg" },
          { src: "https://i.pinimg.com/736x/11/66/55/11665553f8452bd5e51723bc6575a071.jpg" },
          { src: "https://i.pinimg.com/736x/71/cc/1c/71cc1c9142263f428ecc6461589d6d11.jpg" },
        ],
      },
      {
        parentId:"paintings",
        id: "watercolor-drawings",
        mainImage: "https://i.pinimg.com/736x/49/f6/0a/49f60a3b444d972e12e565fea70d5620.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/99/2b/39/992b39a907fb8122eee2737f415d3a1b.jpg" },
          { src: "https://i.pinimg.com/736x/94/28/58/942858c764c2ca2e5d40ee271ac452bb.jpg" },
          { src: "https://i.pinimg.com/736x/a9/94/5d/a9945d7a8a0aa2205e58352ed7d6f133.jpg" },
          { src: "https://i.pinimg.com/736x/49/f6/0a/49f60a3b444d972e12e565fea70d5620.jpg" },
          { src: "https://i.pinimg.com/736x/09/2a/63/092a6367a71b797463afc5271120b100.jpg" },
          { src: "https://i.pinimg.com/736x/6f/41/b0/6f41b08ef95700fe255d2d3fd1c56c96.jpg" },
          { src: "https://i.pinimg.com/736x/bb/07/f9/bb07f933d3d08d8a37e4c045fae12bd7.jpg" },          
          { src: "https://i.pinimg.com/736x/35/b0/d3/35b0d3ec846d34be94590d57985b492e.jpg" },
        ]
      },
      {
        parentId:"paintings",
        id: "abstract",
        mainImage: "https://i.pinimg.com/736x/ca/fa/a5/cafaa55c6d70039b227708257ae03441.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/ca/fa/a5/cafaa55c6d70039b227708257ae03441.jpg" },
          { src: "https://i.pinimg.com/736x/ab/fe/6b/abfe6ba29483dbc43246fb23b49b8f2f.jpg" },
          { src: "https://i.pinimg.com/736x/92/4f/2f/924f2f023339ead283d08d844ef35378.jpg" },
          { src: "https://i.pinimg.com/736x/f5/eb/e9/f5ebe98ab01cd3e698071db9abc15e2a.jpg" },
          { src: "https://i.pinimg.com/736x/42/bc/9c/42bc9c213a31caecfd770e9a3847b69f.jpg" },
          { src: "https://i.pinimg.com/736x/5e/28/eb/5e28ebd1369bdb826ddb7b255a9cc1d7.jpg" },
        ]
      },
    ],
  },
  {
    id: "crafts",
    title: "Hands that Shape, Matter that Speaks",
    subtitle: "The hand knows what the words forget.",
    description: "These pieces emerge from the intimacy between body and material. Clay resists and yields; linoleum scars with each cut. I let my hands remember things I’ve forgotten in my mind. The objects I shape are small altars, emotional textures, and sometimes abstract landscapes. This is the space where fragility meets persistence, and where form is a quiet testimony of touch.",
    cover: "https://i.pinimg.com/736x/9d/da/99/9dda9950d521e332edf92a24da70950f.jpg",
    subprojects: [
      {
        parentId: "crafts",
        id: "clay-figures",
        mainImage: "https://i.pinimg.com/736x/9d/da/99/9dda9950d521e332edf92a24da70950f.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/23/75/22/2375226c7036b14dda27602df4646587.jpg" },
          { src: "https://i.pinimg.com/736x/9d/da/99/9dda9950d521e332edf92a24da70950f.jpg" },
          { src: "https://i.pinimg.com/736x/16/a6/9a/16a69ad209944a4126f71d2cd76ddd2d.jpg" },
          { src: "https://i.pinimg.com/736x/6b/75/b1/6b75b11158a6b48e0caa6c0a67b0f96c.jpg" },
          { src: "https://i.pinimg.com/736x/9d/a2/13/9da21362d6475db9ed2a49cf8472d3c4.jpg" },
          { src: "https://i.pinimg.com/736x/9d/b0/fd/9db0fd630e506845a4db587ad6307ef9.jpg" },
          { src: "https://i.pinimg.com/736x/6d/c7/54/6dc7547d016084958142e0d603e5126c.jpg" },
          { src: "https://i.pinimg.com/736x/a2/b8/b4/a2b8b45c090fa884ca3ea6b9c3e7336b.jpg" },
          { src: "https://i.pinimg.com/736x/4f/1e/b5/4f1eb5c23ba990e22f470a9433300bd2.jpg" },
          { src: "https://i.pinimg.com/736x/e8/11/c5/e811c5767f1337aaa563071e745b6363.jpg" },
          { src: "https://i.pinimg.com/736x/03/07/3d/03073d12e7f52b761772f7f9dfdf012b.jpg" },
          { src: "https://i.pinimg.com/736x/f8/bf/3e/f8bf3e09c0be9b727496f60b7c8cf906.jpg" },
          { src: "https://i.pinimg.com/736x/fc/73/71/fc73718484a1b6861d99145400dc2b36.jpg" }, 
          { src: "https://i.pinimg.com/736x/13/85/67/13856753d0df3343395ee28e1475c7fe.jpg" }, 
          { src: "https://i.pinimg.com/736x/d5/68/b2/d568b27b2d3c9a1ae6cab449ca994b9e.jpg" },
          { src: "https://i.pinimg.com/736x/a7/b4/8e/a7b48e3677024daf115c7cf69433049f.jpg" },

        ]
      },
      {
        parentId: "crafts",
        id: "chalk-crafts",
        mainImage: "https://i.pinimg.com/736x/ff/68/61/ff6861872145278f5870d0ed782d6ac4.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/ff/68/61/ff6861872145278f5870d0ed782d6ac4.jpg" },
          { src: "https://i.pinimg.com/736x/e9/fd/08/e9fd08f791c3a1edcac82bd86bc48f57.jpg" },
          { src: "https://i.pinimg.com/736x/f4/62/aa/f462aab224fdec139cbe237bdfcbd65e.jpg" },
          { src: "https://i.pinimg.com/736x/47/43/aa/4743aaeddb2a540faaf11f01ac18d397.jpg" },
        ]
      },
      {
        parentId:"paintings",
        id: "leaf-collage",
        mainImage: "https://i.pinimg.com/736x/0f/b3/53/0fb35319b1dce6ae8465974998f604ec.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/0f/b3/53/0fb35319b1dce6ae8465974998f604ec.jpg" },
          { src: "https://i.pinimg.com/736x/b6/e4/00/b6e4000fbab60f593e1cf57c4b444a33.jpg" },
          { src: "https://i.pinimg.com/736x/48/66/b6/4866b6ed35112a6968d49dcd015ab3a3.jpg" },
          { src: "https://i.pinimg.com/736x/09/6f/7b/096f7b85750e7f875784d9ee0a18e9d6.jpg" },
        ]
      },
      {
        parentId: "crafts",
        id: "blue-portrait",
        mainImage: "https://i.pinimg.com/736x/c0/eb/b4/c0ebb4257f8c5e860a11eefd2fd37bf8.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/d9/8c/a2/d98ca250ac1566c0929606798c7f4ff1.jpg" },
          { src: "https://i.pinimg.com/736x/ee/e6/2b/eee62b8d7878f7aa3fe3fe44d52c316d.jpg" },
          { src: "https://i.pinimg.com/736x/87/65/58/8765587562583abc1a57c8362cc429ca.jpg" },
          { src: "https://i.pinimg.com/736x/c0/eb/b4/c0ebb4257f8c5e860a11eefd2fd37bf8.jpg" },
        ]
      },
      {
        parentId: "crafts",
        id: "embroidery",
        mainImage: "https://i.pinimg.com/736x/eb/0b/a9/eb0ba999d8ba60ca5b249d902fcd0228.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/eb/0b/a9/eb0ba999d8ba60ca5b249d902fcd0228.jpg" },
          { src: "https://i.pinimg.com/736x/98/75/c2/9875c275d75c21512c098672afaadd51.jpg" },
          { src: "https://i.pinimg.com/736x/ba/44/13/ba4413049675fe17ce5c72105f00ed1c.jpg" },
          { src: "https://i.pinimg.com/736x/b7/c3/3d/b7c33d261381edc553b5d56f1cb08fb1.jpg" },
          { src: "https://i.pinimg.com/736x/73/29/89/73298921b3dd9acbaa4f9b91718bc0c6.jpg" },
        ]
      }
    ],
  },
  {
    id: "performances",
    title: "Embodied Stories, Lived Gestures",
    subtitle: "The body as memory, the gesture as testimony.",
    description: "I began performing without calling it performance through gestures, through silence, through simply showing up with my body. In these pieces, I explore the body as a site of memory and resistance, especially in relation to migration and queerness. Performance allows me to inhabit stories that are not only mine, and to share them in ways that move beyond language. It is a way of being, of listening, of offering.",
    cover: "https://i.pinimg.com/736x/3c/7d/2b/3c7d2bb66f9f1719fc0d28ae69649dbf.jpg",
    subprojects: [
      {
        parentId: "performances",
        id: "human-herd",
        description: "Fashion Clash 2024 - Paula Dischinger",
        mainImage: "https://i.pinimg.com/736x/3c/7d/2b/3c7d2bb66f9f1719fc0d28ae69649dbf.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/3c/7d/2b/3c7d2bb66f9f1719fc0d28ae69649dbf.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "https://i.pinimg.com/736x/bc/0f/06/bc0f061a8bb4059aad02f6df4909cd58.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival`},
          { src: "https://i.pinimg.com/736x/b7/6b/4e/b76b4e0746ae170b177fce6378658c01.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "https://i.pinimg.com/736x/8b/d1/60/8bd1604600081e968ab5533399e3778c.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival`},
          { src: "https://i.pinimg.com/736x/58/bd/08/58bd08e6678b6e3285a8108eb8416c2a.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "https://i.pinimg.com/736x/27/e8/80/27e880662ce09a07139bc500478a5006.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "https://i.pinimg.com/736x/7e/af/da/7eafda90bc832d3a3227fc739d149414.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "https://i.pinimg.com/736x/65/a8/e0/65a8e0a88ad8ff17e7b99c9e779ac6a6.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          { src: "https://i.pinimg.com/736x/1f/76/fd/1f76fd6d22753664f5ce2881622ba400.jpg", description: `Photography: Laura Knipsael - @lauraknipsael, Mitch van Schijndel - @m_vanschijndel, Ruben Hilkens - @rhlkns
            FASHIONCLASH Festival 2024 - @fashionclash_festival` },
          
        ],
      },
      {
        parentId: "performances",
        id: "Hartwerk-BOM-2024",
        description: "Buurt Opera Malperthuis by Opera Zuid",
        mainImage: "https://i.pinimg.com/736x/33/6f/66/336f66dd680c2d0a274508f00900db82.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/33/6f/66/336f66dd680c2d0a274508f00900db82.jpg" },
          { src: "https://i.pinimg.com/736x/47/67/be/4767beca9e86889ea62bd6ecb3a2c643.jpg" },
          { src: "https://i.pinimg.com/736x/6b/6d/30/6b6d301ca1ec498efaecc5f69a4a717d.jpg" },
          { src: "https://i.pinimg.com/736x/88/64/6e/88646eae06356caebbb64f699b3f36fb.jpg" },
          { src: "https://i.pinimg.com/736x/5c/9f/63/5c9f6370b4edfdd2e2e79eee10faa1b4.jpg" },
          { src: "https://i.pinimg.com/736x/9b/63/4b/9b634b00e3e10e2f9da3e713dacf57b6.jpg" },
        ]
      },
      {
        parentId: "performances",
        id: "mensen-dragen-mensen",
        description: "Mensen Dragen Mensen - Heiligdomsvaart Maastricht 2025 - Fashion Clash",
        mainImage: "https://i.pinimg.com/736x/63/b9/02/63b9023caab86dfb96d2f4fec55dad5b.jpg",
        images: [
          { src: "https://i.pinimg.com/736x/fc/91/9c/fc919ccd0e7187907ced894234b0c079.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/f0/5f/0a/f05f0af5839cca81de6739c7626db029.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/63/b9/02/63b9023caab86dfb96d2f4fec55dad5b.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/6e/91/6d/6e916de61ef6827a7ed70ccafb3e71e7.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/a5/80/32/a580324e3a7722502ab3a51eb8a8e339.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/7b/8d/ae/7b8dae69cd9423f557ad947a4cf4bc43.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/b5/8d/8e/b58d8e34f12b1715f7ba6faea3572408.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/33/24/21/3324210901986b07903d13945c7fdf8e.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/75/94/7c/75947c09152a9a505bb73d3ed251cee4.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/24/81/33/24813309d71a65a8f441d7581fc34713.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/c4/a2/a7/c4a2a7d63fb45dc6d49eb257575cc9db.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
          { src: "https://i.pinimg.com/736x/7c/1b/40/7c1b40d97fcb0bfe92084c8442157d21.jpg", description: `Photography: Laurens Bouvrie, Jonathan Widdershoven, Robin Veugen, Branko Popovic, Fashion Clash.` },
        ]
      }
    ]
  },
];

export default projects;