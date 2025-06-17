


import { Body, Controller, Post, Get,Param, Put, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto";

let USERS: CreateUserDTO[] = [];


@Controller("/usersfive")
export class UserControllerFive{

    @Post()
    addUser(@Body() createUserDto: CreateUserDTO){

        USERS.push(createUserDto);
        return "User added"

    }

    @Get()
    getUser(){

        return USERS;
        

    }

    @Get(":id")
    getSpecificUser(@Param("id") id:string){

        // console.log(id)
        const numericId = parseInt(id, 10);

        return USERS.find(user => user.id == numericId);
        

    }


    @Put(":id")
    updateSpecificUser(@Param("id") id:string, @Body() updateUserDto: CreateUserDTO){

        // console.log(id)
        const numericId = parseInt(id, 10);

        const userIndex= USERS.findIndex(user => user.id == numericId);
        if(!userIndex) return;

        USERS[userIndex] = updateUserDto;
        return USERS
        

    }

    @Delete(':id')
    deleteUser(@Param("id") id:string){
        const numericId = parseInt(id, 10);
        USERS = USERS.filter((user) => user.id !== numericId)
        return USERS

    }

}



// But in the dto we have defined it as number
// You're absolutely right! In the CreateUserDTO, the id is correctly defined as a number. However, when receiving route parameters (@Param("id")), NestJS always treats them as strings by default, regardless of their intended type in the DTO. That’s why we need to explicitly convert it to a number using parseInt(id, 10) before comparing it with the stored user id.

// Why is @Param("id") still a string?
// The value comes from the URL (/usersfive/:id), where everything is inherently treated as a string.

// NestJS does not automatically convert route parameters to their expected DTO type. Instead, it treats them as strings unless manually converted.