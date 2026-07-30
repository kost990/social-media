import ProfileStatusHook from "./ProfileStatushook"


describe('Profile status component', () => {
  const TestRenderer = require('react-test-renderer');
    test('Status from props should be in state', () => {
        const testStatusStr = 'Test status';
        const component = TestRenderer.create(<ProfileStatus profileStatus={testStatusStr}/>);
        let statusInSpan = component.toJSON().children[0].children[1]
        expect(statusInSpan).toBe(testStatusStr)
    })
})
