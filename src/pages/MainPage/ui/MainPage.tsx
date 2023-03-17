import { classNames } from 'shared/lib/classNames/classNames';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import React from 'react';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <div>{t('Главная страница')}</div>
            <BugButton />
            <div>{navigator.userAgent}</div>
        </div>
    );
};

export default MainPage;
