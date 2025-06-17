
// DAY ONE
import { Controller, Get, Req, Put, Post, Patch, HttpCode,Res, Header, Param, Query} from "@nestjs/common";
import { Request, Response } from "express";


interface VideoParams{
    id: number,
    surname: string,
    members:number
}

// Ye controller users wale route keliye chalega
@Controller("/users")
export class UsersController{

    // DAY ONE
    
    @Get('/profile')
    @HttpCode(200)
    getProfile(@Req() req: Request){

        console.log(req.params)

        return {data:"Hello Sanmil"}

    }


    @Get('/profileforadmin')
    @HttpCode(200)
    getProfileForAdmin(@Req() req: Request, @Res() res:Response){

        console.log(req.params)
        res.status(220)

        return res.json ({data:"Hello Sanmil"});


    }


    @Get('/credentials')
    @HttpCode(200)
    @Header('Cache-control','none')
    @Header('X-name','Sammy')

    getCredentialsForAdmin(@Req() req: Request, @Res({passthrough:true}) res:Response){

        console.log(req.params)
        res.status(240)

        return {data:"Hello Admin these are the credentials"};


    }


    // DAY TWO

    // Route paramaters
    // --> /videos/:id

    //This is the first way to useParams,dont provide anything in the Param 
    // controller and it will give u the params in the form of the object in
    // the key value pair

    @Get('/videos/:id')
    @HttpCode(200)
    
    getVideos(@Req() req: Request, @Param() params:Record<string,any>){

        console.log("PARAMS ARE",params) // { id: '34' }

        return {data:"Success getVideos"}

    }


    //This is the second way to useParams,provide the dynamic thing in the Param 
    // controller and it will give u the params in the form of the required value
    

    @Get('/posts/:id')
    @HttpCode(200)
    
    getPosts (@Req() req: Request, @Param('id') param: number){

        console.log("PARAMS ARE",param) // { id: '34' }

        return {data:"Success getPosts"}

    }

    // Handle Multiple params

    //This is the way to handle multiple Route Params,dont provide anything in the Param 
    // controller and it will give u the params in the form of the object in
    // the key value pair
    
    

    @Get('/posts/:id/:name')
    @HttpCode(200)
    
    getPostsPlusName (@Req() req: Request, @Param() params:Record<string,any>){

        console.log("PARAMS ARE",params) // { id: '34' }

        return {data:"Success getPosts plus name"}

    }

    // Setting types for params

    @Get('/posts/:id/:surname/:members')
    @HttpCode(200)
    
    getPostsPlusSurname(@Req() req: Request, @Param() params: VideoParams) {

        console.log("PARAMS ARE",params.surname, params.id, params.members) // PARAMS ARE jadhav 123 5

        return {data:"Success getPosts plus surname plus members"}

    }







}


// ----------------------------------DAY ONE---------------------

//Now AB ye UserController humko nest JS ke application ke saath register karne padega
// getProfile() is a request handler

// NOTE: Now once u Inject the Response, Now its ur responsibility to give the
//response nestjs will not take care of it

//NOTE: Now u can use the 'res' to send the response also the status code
// but one thing is that when u use res.status(200) it will overide the HttpCode(200)
// Usually we dont inject response

// NOTE: IMP 
// We have one more case here
// U want next js to send the response but u want to set status,headers,cookies or
// something else on the response but the response is sent by the Nestjs then
// U want to do is use {passthrough:true} on Res


//------------------------------xxxx-----------------------------


//---------------------------DAY TWO-------------------------

// Here to use the Route params we have to inject 
// @Param() params:Record<string,any> and here I am telling 
// Its datatype hai koi bhi hosakta hamare paas record string type ka
// and uski value koi bhi ho sakti hai


// GOOD PRACTISE 
// GOOD practise is that u provide the interface for params as shown in getPostsPlusSurname

// TOPIC: QUERY STRING
// FOR Query params what we have to do is import {Query} from @nestjs/common and inject it
// in the request handler

