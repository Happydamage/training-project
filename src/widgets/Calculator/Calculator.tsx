import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Calculator.module.scss';

interface CalculatorProps {
    className?: string;
}

export const Calculator = (props: CalculatorProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Calculator, {}, [className])}>
            <div className={classNames(cls.controlPanel, {}, [className])}>
                <button type="button">_</button>
                <button type="button">X</button>
            </div>
            <div className={classNames(cls.history, {}, [className])} />
            <div className={classNames(cls.data, {}, [className])} />
            <div className={classNames(cls.btns, {}, [className])}>
                <div>
                    <button type="button">0</button>
                    <button type="button">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button">4</button>
                    <button type="button">5</button>
                    <button type="button">6</button>
                    <button type="button">7</button>
                    <button type="button">8</button>
                    <button type="button">9</button>
                </div>
                <div>
                    <button type="button">=</button>
                    <button type="button">+</button>
                    <button type="button">-</button>
                    <button type="button">/</button>
                    <button type="button">*</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
