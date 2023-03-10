export default {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      Token: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Email identification to create a JWT Token',
            example: 'coucou@test-back.fr',
          },
        },
      },
      Content: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Text property with some words who should be justify',
            example: "Longtemps, je me suis couchÃ© de bonne heure. Parfois, Ã peine ma bougie Ã©teinte, mes yeux se fermaient si vite que je nâ€™avais pas le temps de me dire: Â«Je mâ€™endors.Â» Et, une demi-heure aprÃs, la pensÃ©e quâ€™il Ã©tait temps de chercher le sommeil mâ€™Ã©veillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumiÃre; je nâ€™avais pas cessÃ© en dormant de faire des rÃ©flexions sur ce que je venais de lire, mais ces rÃ©flexions avaient pris un tour un peu particulier; il me semblait que jâ€™Ã©tais moi-mÃªme ce dont parlait lâ€™ouvrage: une Ã©glise, un quatuor, la rivalitÃ© de FranÃ§ois Ier et de Charles-Quint. Cette croyance survivait pendant quelques secondes Ã mon rÃ©veil; elle ne choquait pas ma raison, mais pesait comme des Ã©cailles sur mes yeux et les empÃªchait de se rendre compte que le bougeoir nâ€™Ã©tait plus allumÃ©. Puis elle commenÃ§ait Ã me devenir inintelligible, comme aprÃs la mÃ©tempsycose les pensÃ©es dâ€™une existence antÃ©rieure; le sujet du livre se dÃ©tachait de moi, jâ€™Ã©tais libre de mâ€™y appliquer ou non; aussitÃ´t je recouvrais la vue et jâ€™Ã©tais bien Ã©tonnÃ© de trouver autour de moi une obscuritÃ©, douce et reposante pour mes yeux, mais peut-Ãªtre plus encore pour mon esprit, Ã qui elle apparaissait comme une chose sans cause, incomprÃ©hensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait Ãªtre; jâ€™entendais le sifflement des trains qui, plus ou moins Ã©loignÃ©, comme le chant dâ€™un oiseau dans une forÃªt, relevant les distances, me dÃ©crivait lâ€™Ã©tendue de la campagne dÃ©serte oÃ¹ le voyageur se hÃ¢te vers la station prochaine; et le petit chemin quâ€™il suit va Ãªtre gravÃ© dans son souvenir par lâ€™excitation quâ€™il doit Ã des lieux nouveaux, Ã des actes inaccoutumÃ©s, Ã la causerie rÃ©cente et aux adieux sous la lampe Ã©trangÃre qui le suivent encore dans le silence de la nuit, Ã la douceur prochaine du retour."},
          length: {
            type: 'number',
            description: 'Length necessary to justify a line',
            example: 80,
          },
        },
      },
    },
  },
};
