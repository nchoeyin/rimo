import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context?: BootstrapContext) =>
	// forward the incoming server BootstrapContext so the server platform is created
	// when the server renderer invokes this function
	bootstrapApplication(AppComponent, config, context);

export default bootstrap;
