import { ComponentHarness } from '@angular/cdk/testing';

export class AssistantChatComponentHarness extends ComponentHarness {
    public static readonly hostSelector = 'virtual-interviewer-assistant-chat';

    protected readonly welcomeMessage = this.locatorFor('.welcome-message');

    public async getWelcomeMessage(): Promise<string> {
        return (await this.welcomeMessage()).text();
    }
}