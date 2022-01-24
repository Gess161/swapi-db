import { BrowserRouter, useNavigate } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FilmComponent from '.';

const TestWrapper = (props: any) => {
    const { episode, title } = props;
    const navigate = useNavigate()
    return <FilmComponent navigate={navigate} episode={episode} title={title} />
}

it('renders film card with title "Test"', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <TestWrapper episode={1} title={'Test'} />
            </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});