import {Counter} from '../Counter';

export type SectionProps = {
    id: number;
};

export const Section = ({id}: SectionProps) => (
    <main>
        <h1>Section {id}</h1>
        <p>This is demo content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Counter/>
    </main>
);

export default Section;
