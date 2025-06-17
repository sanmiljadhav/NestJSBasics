// DAY ONE
// This Controller shows the use of Query params


import { Controller, Get, Req, Put, Post, Patch, HttpCode,Res, Header, Param, Query} from "@nestjs/common";
import { Request, Response } from "express";




// Ye controller users wale route keliye chalega
@Controller("/userstwo")
export class UsersControllerTwo{

    // DAY ONE

    // While passing from the POSTMAN/REACT u will pass http://localhost:3000/userstwo/videos?name=ajit&age=15
    
    @Get('/videos')
    @HttpCode(200)
    getVideos(@Req() req: Request, @Query() query: Record<string,any>){

        console.log(query) //{ name: 'ajit', age: '15' }

        return {data:"Success get Videos"}
        

    }

    // Similarly what we can do is access the particular value instead of whole object


    @Get('/posts')
    @HttpCode(200)
    getPosts(@Req() req: Request, @Query('name') query: string){

        console.log(query) //ajit

        return {data:"Success get Posts"}
        

    }

    // Similary we can define the types for Query params
    // interface QueryParams{
    //     age: number;
    //     name:string;
    // }

    // getPosts(@Req() req: Request, @Query() query: QueryParams){



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