import { Controller, Get, HttpStatus } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
//biome-ignore lint/style/useImportType: Cannot useImportType in classes used in Dependency Injection
import { AppService } from "./app.service";

@Controller()
export class AppController {
	public constructor(private readonly appService: AppService) {}

	@Get()
	@ApiTags("Controllers")
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Should return "Hello World!"',
	})
	public getHello(): string {
		return this.appService.getHello();
	}
}
