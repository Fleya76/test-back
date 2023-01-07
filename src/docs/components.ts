export default {
    components:{
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
              }
        },
        schemas:{
            Token: {
                type:'object',
                properties:{
                    email: {
                        type: 'string',
                        description:"Email identification to create a JWT Token",
                        example: 'coucou@tictactrip.fr'
                    }
                }
            },
            Content: {
                type:'object',
                properties:{
                    content:{
                        type:'string',
                        description:"Text property with some words who should be justify",
                        example:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    },
                    length:{
                        type:'number',
                        description:"Length necessary to justify a line",
                        example: 80
                    },
                }
            }
        }
    },
}