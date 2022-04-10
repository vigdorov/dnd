import {Controller, Get} from '@nestjs/common';

@Controller('rooms')
export class RoomsController {
    @Get()
    findAll(): string {
        return 'Rooms is worked!';
    }
}
