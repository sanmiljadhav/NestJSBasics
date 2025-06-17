// DAY ONE
// This Controller shows the use of using the REQUEST HEADERS
// NOTE
// @Header - Its used to set the response Header
// @Headers - Its used to extract the request headers
// For this as well u have to inject the Headers

import { Controller, Get, Req, Put, Post, Patch, HttpCode,Res, Headers, Param, Query} from "@nestjs/common";
import { notEqual } from "assert";
import { Request, response, Response } from "express";




// Ye controller users wale route keliye chalega
@Controller("/usersthree")
export class UsersControllerThree{

   
    @Get('/videos')
    @HttpCode(200)
    getVideos(@Req() req: Request, @Headers() headers: Record<string,any>){

        console.log(headers) //Shown below

        return {data:"Success get Videos"}
        

    }

    // To access specific header what we can do
    // getVideos(@Req() req: Request, @Headers('user-agent') headers:string){

   

    
}




// Diffrence between ROUTEPARAMS and QUERYPARAMS

// Route parameters are part of the URL path and are used to capture dynamic values. They help identify specific resources. For example, in /users/123, "123" is a route parameter representing a user ID.

// Query parameters are added after a ? in the URL and are used for filtering or modifying requests. They work like key-value pairs. For example, in /search?query=books&page=2, query=books and page=2 are query parameters.

// Simply put:

// Route params define which resource you're accessing.

// Query params refine how you access or filter that resource.

// Hope that clears it up!

// Of course! Here are some simple examples to illustrate the difference:

// Route Parameters Example:
// Imagine you have a website that shows user profiles.

// URL: /users/101

// Explanation: Here, 101 is a route parameter that identifies a specific user. If you change it to /users/102, it will show details for user 102.

// Query Parameters Example:
// Now, let's say you have a website that lists products, and you want to filter results.

// URL: /products?category=electronics&sort=price

// Explanation: category=electronics and sort=price are query parameters used to filter and sort product results.

// Think of route params as required identifiers and query params as optional filters that adjust the response.


// {
//   'user-agent': 'PostmanRuntime/7.44.0',
//   accept: '*/*',
//   'postman-token': 'd51254d2-df98-4ecb-a6b5-5f9feaf2e374',
//   host: 'localhost:3000',
// [Nest] 2852  - 12/06/2025, 6:25:11 pm     LOG [RouterExplorer] Mapped {/usersthree/videos, GET} route +1ms
// [Nest] 2852  - 12/06/2025, 6:25:11 pm     LOG [NestApplication] Nest application successfully started +4ms
// {
// [Nest] 2852  - 12/06/2025, 6:25:11 pm     LOG [RouterExplorer] Mapped {/usersthree/videos, GET} route +1ms
// [Nest] 2852  - 12/06/2025, 6:25:11 pm     LOG [NestApplication] Nest application successfully started +4ms
// {
//   'user-agent': 'PostmanRuntime/7.44.0',
//   accept: '*/*',
//   'postman-token': 'd51254d2-df98-4ecb-a6b5-5f9feaf2e374',
//   host: 'localhost:3000',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive'
// }