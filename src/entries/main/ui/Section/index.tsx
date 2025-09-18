import {Counter} from '../Counter';

export type SectionProps = {
    id: number;
};

export const Section = ({id}: SectionProps) => (
    <main>
        <h2>Section {id}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Counter/>
    </main>
);

export default Section;
