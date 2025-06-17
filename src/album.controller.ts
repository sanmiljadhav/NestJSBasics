

import { Controller, Get, Req, Put, Post, Patch } from "@nestjs/common";
import { Request } from "express";

// Ye controller users wale route keliye chalega
@Controller("/albums")
export class AlbumsController{
    
    @Get('/')
    getProfile(@Req() req: Request){

        console.log(req.params)

        return {data:"Hello Album Home"}

    }


}

//Now AB ye UserController humko nest JS ke application ke saath register karne padega


// getProfile() is a request handler