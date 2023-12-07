import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistantChatComponent } from './assistant-chat.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AssistantChatComponentHarness } from './assistant-chat-component.harness';

describe('AssistantChatComponent', () => {
  let component: AssistantChatComponent;
  let fixture: ComponentFixture<AssistantChatComponent>;
  let harness: AssistantChatComponentHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssistantChatComponent)
    harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, AssistantChatComponentHarness)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome attendees', async () => {
    const actual = await harness.getWelcomeMessage()
    const expected = 'Welcome to the virtual interview!';
    expect(actual).toBe(expected);
  })
});
