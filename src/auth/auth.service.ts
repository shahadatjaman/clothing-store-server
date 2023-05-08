import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

import { UsersService } from 'src/user/user.service';
import { ResponseHelper } from 'src/utils/response.handler';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ResponseHelper) private readonly responseHelper: ResponseHelper,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  // User validate
  public async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (!user) null;

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return this.responseHelper.createResponse(
        401,
        'Your password or email is wrong',
      );
    } else {
      return user;
    }
  }

  // Generate user payload
  generateUserPayload(user: UserDto) {
    const { _id, firstname, lastname, email, roles } = user;
    return {
      _id,
      firstname,
      lastname,
      email,
      roles,
    };
  }

  async createToken(payload: any): Promise<string> {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async signUp(values: CreateUserDto) {
    const { email } = values;
    // when a user signs up:

    try {
      // 1. Query the user database
      const user = await this.userService.findOne(email);

      // 2. Check if email address exists in the user database.
      if (user) {
        // 3. Send a response indicating email address already exists if user exists.
        return this.responseHelper.createResponse(
          409,
          'This email address is already in use.',
        );
      } else {
        // 4. Hash the user's password with a secure algorithm if no matching email is found.

        const password = values.password;

        //generate a salt
        const salt = await bcrypt.genSalt();

        values.password = await bcrypt.hash(password, salt);

        // 5. Create new user account if email address doesn't exist.

        const newUser = await this.userService.createUser(values);

        // 6. Generate a JWT token for the new user.

        const payload = this.generateUserPayload(newUser);
        const token = await this.createToken(payload);

        // 7. Return the new user and the JWT token to the client.
        return this.responseHelper.createResponse(
          201,
          'User created successfully',
          token,
        );
      }
    } catch (error) {
      // Handle any errors that occur during the sign-up process.
      return this.responseHelper.createResponse(500, 'Internal server error.');
    }
  }

  async signIn(values: UserDto) {
    // 1. Create a user payload
    const payload = this.generateUserPayload(values);

    // 2. Create a user token
    const token = await this.createToken(payload);

    // 3. Return the new user and the JWT token to the client.
    return this.responseHelper.createResponse(
      201,
      'User login successfully',
      token,
    );
  }
}
