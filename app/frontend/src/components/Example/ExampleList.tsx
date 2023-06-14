import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How many DIMM Slots does a Cisco UCS X210 M7 Server have?",
        value: "How many DIMM Slots does a Cisco UCS X210 M7 Server have?"
    },
    { text: "List all Available CPUs PID for X210c.", value: "List all Available CPUs PID for X210c." },
    { text: "Has there been an End of Life Announcement for UCS FI 6332?", value: "Has there been an End of Life Announcement for UCS FI 6332?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
