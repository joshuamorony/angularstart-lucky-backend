import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

export class GuessLuckyNumberDto {
  guess: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLuckyNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  @Post()
  guessLuckyNumber(@Body() guessLuckyNumberDto: GuessLuckyNumberDto) {
    const luckyNumber = Math.floor(Math.random() * 100);
    const guess = guessLuckyNumberDto.guess;

    if (guess === luckyNumber) {
      return { result: `You guessed ${guess}... that is correct!` };
    } else {
      return {
        result: `You guessed ${guess}... but the correct answer was ${luckyNumber}`,
      };
    }
  }
}
