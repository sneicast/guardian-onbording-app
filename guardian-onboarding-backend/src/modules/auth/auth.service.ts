import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from './dtos/login-response.dto';
import { v4 as uuid} from 'uuid';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}
    login(loginDto: LoginDto): LoginResponseDto {

        const payload = { sub: uuid() , username: loginDto.username }
        
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken: accessToken,
        }
    }
}
