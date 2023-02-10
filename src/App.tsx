import React from 'react';
import {Counter} from "./components/Counter";
import './index.scss';

const App = (): JSX.Element => {
    return (
        <div className={"app"}>
            <Counter />
        </div>
    );
};

export default App;