
export default {
    post:{
        tags:['Justify content operations'],
        description: "Create token to authenticate the user in the API.",
        operationId: "createToken",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    name:"id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/Token"
                    },
                    required:true,
                    description: "A single token"
                }
            }
        },
        responses:{
            '200':{
                description: "Token created successfully"
            },
            '401':{
                description: "Email doens't exist in the request body"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}