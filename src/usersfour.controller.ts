// DAY TWO - FIRST
// This Controller shows the use of passing the data
// NOTE
// @Header - Its used to set the response Header
// @Headers - Its used to extract the request headers
// For this as well u have to inject the Headers

import { Controller, Get, Req, Put, Post, Patch, HttpCode,Res, Headers, Param, Query, Body} from "@nestjs/common";
import { notEqual } from "assert";
import { Request, response, Response } from "express";




// Ye controller users wale route keliye chalega



// YAHA PAR HUM LOG ISTAMAL KARENGE BODY DECORATOR From nestjs/common
// Ye jo body decorator hai iske through hume request.body mil jati hai
// nest js internally parsing karta hai body parser ka





interface Blog{
    name:string,
    description:string,
    slug:string
}
@Controller("/usersfour")
export class UsersControllerFour{

   
    @Post('/videos')
    @HttpCode(200)
    addVideo(@Req() req: Request, @Body() requestData: Record<string,any>){

        console.log(requestData) //Shown below  { name: 'sanmil', surname: 'jadhav' }

        return {data:"Success video got added"}
        

    }

    // To access specific data from the JSON obj we can add it in the decorator what we can do
    // 


    @Post('/posts')
    @HttpCode(200)
    addPost(@Req() req: Request, @Body('name') requestData: string){

        console.log(requestData) //Shown below ---> sanmil

        return {data:"Success post got added"}
        

    }


    // We can  give the datatype

    @Post('/blogs')
    @HttpCode(200)
    addBlogs(@Req() req: Request, @Body() requestData: Blog){

        console.log(requestData.name)
        console.log(requestData.description)
        console.log(requestData.slug) 

        return {data:"Success blog got added"}

//         Blog one
// desciption of blog one
// slug one
        

    }


   

    
}


