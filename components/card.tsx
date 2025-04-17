    // components/Card.tsx
    import React from 'react';

    interface CardProps {
    children: React.ReactNode;
    className?: string;
    }

    export const Card: React.FC<CardProps> = ({ children, className }) => {
    return <div className={`card ${className}`}>{children}</div>;
    };

    interface CardHeaderProps {
    children: React.ReactNode;
    }

    export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return <div className="card-header">{children}</div>;
    };

    interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
    }

    export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
    return <h2 className={`card-title ${className}`}>{children}</h2>;
    };

    interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
    }

    export const CardDescription: React.FC<CardDescriptionProps> = ({
    children,
    className,
    }) => {
    return <p className={`card-description ${className}`}>{children}</p>;
    };

    interface CardContentProps {
    children: React.ReactNode;
    className?: string;
    }

    export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
    return <div className="card-content">{children}</div>;
    };
