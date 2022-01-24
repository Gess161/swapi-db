import renderer from 'react-test-renderer';
import StarrySky from '.';

it('renders stars background with twinkling animation"', () => {
    const tree = renderer
        .create(<StarrySky />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});