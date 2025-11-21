import { Injectable } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}
    login(loginDto: LoginDto): LoginResponseDto {

        const payload = { sub: "122-demo", username: loginDto.username }
        
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken: accessToken,
        }
    }
}
