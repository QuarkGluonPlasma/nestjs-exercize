import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreatePersonDto {
    @IsNotEmpty({
        message: 'name 不能为空'
    })
    @IsString()
    name: string;

    @IsPhoneNumber("CN", {
        message: 'phone 不是一个电话号码'
    })
    phone: string;

    @IsEmail({}, {
        message: 'email 不是一个合法邮箱'
    })
    email: string;
}
